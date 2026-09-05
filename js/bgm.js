/* ============================================================
   BGM — backsound murotal anak
   ------------------------------------------------------------
   - Memutar berkas dari folder audio/ secara berulang (loop).
   - Volume diatur dari halaman awal; setelan disimpan di
     localStorage supaya tidak perlu diatur ulang tiap membuka.
   - Otomatis mengecil (ducking) sesaat ketika efek suara
     benar/salah berbunyi, lalu kembali ke volume semula.
   - Browser melarang audio berbunyi sebelum ada sentuhan
     pengguna, jadi pemutaran dimulai pada ketukan pertama.
   ============================================================ */

const BGM = {
  /* Daftar putar. Letakkan berkasnya di folder audio/.
     Berkas yang tidak ada akan dilewati secara otomatis.
     Sumber bawaan: archive.org, koleksi Syaikh Ali Bashfar
     (bertanda public domain). Lihat audio/BACA-DULU.txt. */
  tracks: [
    { src: "audio/murotal-1.mp3", nm: "Al-Muzzammil · 4:19" },
    { src: "audio/murotal-2.mp3", nm: "Nuh · 4:58" },
    { src: "audio/murotal-3.mp3", nm: "Al-Mulk · 7:26" }
  ],

  el: null,
  idx: 0,
  vol: 0.35,
  muted: false,
  playing: false,
  available: false,
  probing: false,
  ramp: null,

  /* ---------- penyiapan ---------- */
  init() {
    this.vol = clamp01(parseFloat(localStorage.getItem("pb_bgm_vol")) || 0.35);
    this.muted = localStorage.getItem("pb_bgm_muted") === "1";
    this.idx = Math.max(0, Math.min(+localStorage.getItem("pb_bgm_track") || 0, this.tracks.length - 1));

    this.el = new Audio();
    this.el.loop = true;
    this.el.preload = "auto";
    this.el.volume = this.muted ? 0 : this.vol;

    // berkas tidak ada / rusak -> coba berkas berikutnya
    this.el.addEventListener("error", () => this.probeNext());
    this.el.addEventListener("canplay", () => {
      this.available = true;
      this.probing = false;
      this.paint();
      if (this.wanted) this.play();
    });

    this.bindUI();
    this.loadTrack(this.idx);
    this.paint();

    // mulai memutar pada interaksi pertama (aturan autoplay browser)
    const kick = () => { this.wanted = true; this.play(); };
    ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
      document.addEventListener(ev, kick, { once: true }));

    // hemat baterai: jeda saat tab disembunyikan
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.el.pause();
      else if (this.playing && !this.muted) this.el.play().catch(() => {});
    });
  },

  /* ---------- daftar putar ---------- */
  loadTrack(i) {
    if (!this.tracks.length) return this.noTrack();
    this.idx = (i + this.tracks.length) % this.tracks.length;
    this.probing = true;
    this.available = false;
    this.el.src = this.tracks[this.idx].src;
    this.el.load();
    this.paint();
  },

  /* dipanggil kalau sebuah berkas gagal dimuat */
  probeNext() {
    if (!this.probing) return;
    this.tried = (this.tried || 0) + 1;
    if (this.tried >= this.tracks.length) { this.tried = 0; return this.noTrack(); }
    this.loadTrack(this.idx + 1);
  },

  noTrack() {
    this.probing = false;
    this.available = false;
    this.playing = false;
    this.paint();
  },

  next() {
    this.tried = 0;
    this.loadTrack(this.idx + 1);
    localStorage.setItem("pb_bgm_track", this.idx);
    this.wanted = true;
  },

  /* memakai berkas dari perangkat pengguna (untuk uji coba cepat) */
  useFile(file) {
    if (!file) return;
    this.tracks = [{ src: URL.createObjectURL(file), nm: file.name.replace(/\.[^.]+$/, "") }];
    this.tried = 0;
    this.idx = 0;
    this.loadTrack(0);
    this.wanted = true;
  },

  /* ---------- kendali putar ---------- */
  play() {
    if (!this.available || this.muted) return;
    this.el.play().then(() => { this.playing = true; this.paint(); }).catch(() => {});
  },

  pause() {
    this.el.pause();
    this.playing = false;
    this.paint();
  },

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem("pb_bgm_muted", this.muted ? "1" : "0");
    if (this.muted) { this.rampTo(0, 250); setTimeout(() => this.el.pause(), 260); this.playing = false; }
    else { this.wanted = true; this.el.volume = 0; this.play(); this.rampTo(this.vol, 400); }
    this.paint();
  },

  setVolume(v) {
    this.vol = clamp01(v);
    localStorage.setItem("pb_bgm_vol", this.vol);
    if (this.vol === 0 && !this.muted) { this.muted = true; localStorage.setItem("pb_bgm_muted", "1"); }
    if (this.vol > 0 && this.muted) { this.muted = false; localStorage.setItem("pb_bgm_muted", "0"); this.wanted = true; this.play(); }
    this.el.volume = this.muted ? 0 : this.vol;
    this.paint();
  },

  /* ---------- perubahan volume halus ---------- */
  rampTo(target, ms) {
    cancelAnimationFrame(this.ramp);
    const from = this.el.volume, t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / ms, 1);
      this.el.volume = clamp01(from + (target - from) * k);
      if (k < 1) this.ramp = requestAnimationFrame(step);
    };
    this.ramp = requestAnimationFrame(step);
  },

  /* mengecil sebentar supaya efek suara terdengar jelas */
  duck(level = 0.28, hold = 900) {
    if (this.muted || !this.playing) return;
    clearTimeout(this.duckTimer);
    this.rampTo(this.vol * level, 120);
    this.duckTimer = setTimeout(() => this.rampTo(this.vol, 600), hold);
  },

  /* ---------- antarmuka ---------- */
  bindUI() {
    const vol = document.getElementById("bgm-vol");
    const btn = document.getElementById("bgm-toggle");
    const nxt = document.getElementById("bgm-next");
    const pick = document.getElementById("bgm-pick");
    const file = document.getElementById("bgm-file");

    vol.value = Math.round(this.vol * 100);
    vol.addEventListener("input", () => this.setVolume(vol.value / 100));
    btn.addEventListener("click", () => this.toggleMute());
    nxt.addEventListener("click", () => this.next());
    pick.addEventListener("click", () => file.click());
    file.addEventListener("change", (e) => this.useFile(e.target.files[0]));
  },

  paint() {
    const vol = document.getElementById("bgm-vol");
    const btn = document.getElementById("bgm-toggle");
    const nm = document.getElementById("bgm-track");
    const note = document.getElementById("bgm-note");
    const nxt = document.getElementById("bgm-next");
    if (!vol) return;

    const pct = Math.round((this.muted ? 0 : this.vol) * 100);
    vol.value = Math.round(this.vol * 100);
    vol.style.setProperty("--pct", vol.value + "%");
    btn.textContent = this.muted || this.vol === 0 ? "🔇" : this.vol < 0.45 ? "🔉" : "🔊";
    btn.classList.toggle("off", this.muted);

    if (this.available) {
      nm.textContent = (this.playing && !this.muted ? "▶ " : "❚❚ ") + this.tracks[this.idx].nm + ` · ${pct}%`;
      note.hidden = true;
      nxt.hidden = this.tracks.length < 2;
    } else if (this.probing) {
      nm.textContent = "memuat…";
      note.hidden = true;
      nxt.hidden = true;
    } else {
      nm.textContent = "belum ada berkas murotal";
      note.hidden = false;
      nxt.hidden = true;
    }
  }
};

function clamp01(v) { return Math.max(0, Math.min(1, isFinite(v) ? v : 0)); }
