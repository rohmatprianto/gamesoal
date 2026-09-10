/* ============================================================
   Petualangan Bilangan — mesin permainan
   Alur: beranda -> pilih tingkat -> kuis (20 soal) -> nama -> layar hasil.
   Soal yang salah dimasukkan kembali ke antrean satu kali,
   supaya anak berlatih ulang seperti di aplikasi bahasa.
   ============================================================ */

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

/* ------------------------------------------------------------
   SUARA — seluruhnya disintesis dengan Web Audio API,
   jadi tidak ada satu pun berkas audio yang perlu diunduh.

   Rangkaian: sumber -> penapis -> amplop volume -> master -> speaker
   ------------------------------------------------------------ */
const Sfx = {
  ctx: null,
  master: null,
  noise: null,
  on: true,

  init() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      const comp = this.ctx.createDynamicsCompressor();
      this.master.connect(comp).connect(this.ctx.destination);
      this.buildNoise();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  },

  /* derau putih untuk bunyi "desis" dan hentakan */
  buildNoise() {
    const len = this.ctx.sampleRate * 1.2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
  },

  /* satu nada dengan amplop lembut; bisa meluncur (glide) ke nada lain */
  note(freq, start, dur, { type = "sine", vol = 0.18, glide = null, attack = 0.012 } = {}) {
    if (!this.on || !this.ctx) return;
    const t = this.ctx.currentTime + start;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (glide) osc.frequency.exponentialRampToValueAtTime(Math.max(glide, 1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  },

  /* nada mirip lonceng: dasar + harmonik tinggi yang cepat meredup */
  bell(freq, start, dur = 0.5, vol = 0.16) {
    this.note(freq, start, dur, { type: "triangle", vol });
    this.note(freq * 2, start, dur * 0.55, { type: "sine", vol: vol * 0.45 });
    this.note(freq * 3.01, start, dur * 0.3, { type: "sine", vol: vol * 0.18 });
  },

  /* semburan derau, dipakai untuk hentakan dan desis */
  hiss(start, dur, { freq = 1200, q = 1, vol = 0.12, type = "bandpass", sweepTo = null } = {}) {
    if (!this.on || !this.ctx) return;
    const t = this.ctx.currentTime + start;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(Math.max(sweepTo, 20), t + dur);
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.05);
  },

  /* ---------- bunyi-bunyi permainan ---------- */

  tap() { this.note(720, 0, 0.06, { type: "triangle", vol: 0.08 }); },

  /* BERHASIL: arpeggio mayor naik + kilau bintang di atasnya */
  correct() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.bell(f, i * 0.075, 0.5 - i * 0.05, 0.17));
    [1568, 2093, 2637].forEach((f, i) =>
      this.note(f, 0.26 + i * 0.05, 0.22, { type: "sine", vol: 0.055 }));
    this.hiss(0.24, 0.3, { freq: 5200, q: 0.8, vol: 0.045, sweepTo: 9000 });
  },

  /* GAGAL: dua nada turun yang "melempem" + hentakan rendah */
  wrong() {
    this.note(320, 0, 0.16, { type: "sawtooth", vol: 0.13, glide: 240 });
    this.note(240, 0.14, 0.34, { type: "sawtooth", vol: 0.13, glide: 130 });
    this.note(120, 0.14, 0.36, { type: "sine", vol: 0.16, glide: 70 });
    this.hiss(0, 0.16, { type: "lowpass", freq: 900, vol: 0.10, sweepTo: 200 });
  },

  /* nyawa berkurang: bunyi "pecah" pendek setelah jawaban salah */
  heartLoss() {
    this.note(880, 0.3, 0.1, { type: "square", vol: 0.07, glide: 300 });
    this.hiss(0.3, 0.2, { freq: 2600, q: 1.6, vol: 0.07, sweepTo: 500 });
  },

  /* rentetan jawaban benar */
  combo(n) {
    const base = 660 + Math.min(n, 8) * 40;
    [0, 1, 2].forEach((i) => this.note(base * Math.pow(1.26, i), i * 0.06, 0.2,
      { type: "triangle", vol: 0.09 }));
  },

  /* detak halus pada lima detik terakhir */
  tick() { this.note(1200, 0, 0.05, { type: "sine", vol: 0.06 }); },

  /* sumbu bom mendesis sebelum meledak */
  fuse() {
    this.hiss(0, 0.42, { freq: 5000, q: 1.2, vol: 0.07, sweepTo: 8000 });
    this.note(1400, 0, 0.4, { type: "sawtooth", vol: 0.02, glide: 2100 });
  },

  /* LEDAKAN: dentuman rendah + gemuruh derau + retakan */
  explosion() {
    // badan dentuman: derau lebar yang tapisnya meluncur turun
    this.hiss(0, 0.75, { type: "lowpass", freq: 2200, q: 0.5, vol: 0.30, sweepTo: 70 });
    // sub-bass yang membuatnya terasa berat
    this.note(110, 0, 0.65, { type: "sine", vol: 0.32, glide: 24, attack: 0.004 });
    this.note(70, 0.02, 0.85, { type: "triangle", vol: 0.18, glide: 20, attack: 0.004 });
    // retakan puing sesudah dentuman
    [0.10, 0.20, 0.33].forEach((t, i) =>
      this.hiss(t, 0.16, { freq: 2600 - i * 600, q: 2, vol: 0.09 - i * 0.02 }));
  },

  /* pasangan cocok pada soal menjodohkan */
  match(n) { this.bell(600 + n * 90, 0, 0.28, 0.13); },

  /* MENANG: fanfare + akor penutup + desis konfeti */
  win() {
    const mel = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    mel.forEach((f, i) => this.bell(f, i * 0.11, 0.55, 0.18));
    [523.25, 659.25, 783.99, 1046.5].forEach((f) => this.bell(f, 0.62, 1.1, 0.12));
    this.hiss(0.6, 0.55, { freq: 3000, q: 0.6, vol: 0.07, sweepTo: 8000 });
  },

  /* KALAH: nada meluncur turun seperti trombon sedih */
  lose() {
    [392, 349.23, 311.13, 261.63].forEach((f, i) =>
      this.note(f, i * 0.17, 0.42, { type: "triangle", vol: 0.15, glide: f * 0.94 }));
    this.note(196, 0.68, 0.9, { type: "sine", vol: 0.16, glide: 130 });
  }
};

/* ------------------------------------------------------------
   MASKOT
   ------------------------------------------------------------ */
function mascotSVG(mood = "happy") {
  const mouth = mood === "happy"
    ? '<path d="M78 122 q22 20 44 0" stroke="#3c3c3c" stroke-width="5" fill="none" stroke-linecap="round"/>'
    : '<path d="M82 128 q18 -14 36 0" stroke="#3c3c3c" stroke-width="5" fill="none" stroke-linecap="round"/>';
  return `
  <svg class="mascot" viewBox="0 0 200 200" role="img" aria-label="Maskot burung hantu">
    <ellipse cx="100" cy="182" rx="52" ry="10" fill="rgba(0,0,0,.08)"/>
    <path d="M100 22 C52 22 32 62 32 106 C32 152 62 178 100 178 C138 178 168 152 168 106 C168 62 148 22 100 22Z" fill="#58cc02"/>
    <path d="M100 60 C74 60 62 84 62 110 C62 142 80 162 100 162 C120 162 138 142 138 110 C138 84 126 60 100 60Z" fill="#8ee63f"/>
    <circle cx="76" cy="92" r="26" fill="#fff"/>
    <circle cx="124" cy="92" r="26" fill="#fff"/>
    <circle class="eye" cx="79" cy="94" r="12" fill="#3c3c3c"/>
    <circle class="eye" cx="121" cy="94" r="12" fill="#3c3c3c"/>
    <circle cx="83" cy="89" r="4" fill="#fff"/>
    <circle cx="125" cy="89" r="4" fill="#fff"/>
    <path d="M100 104 l-13 12 l13 12 l13 -12 Z" fill="#ff9600"/>
    ${mouth}
    <path d="M30 100 q-16 12 -6 30 q12 6 20 -8Z" fill="#46a302"/>
    <path d="M170 100 q16 12 6 30 q-12 6 -20 -8Z" fill="#46a302"/>
    <path d="M72 30 q10 -18 20 -4" stroke="#46a302" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M110 26 q10 -16 20 0" stroke="#46a302" stroke-width="7" fill="none" stroke-linecap="round"/>
  </svg>`;
}

/* ------------------------------------------------------------
   STATE
   ------------------------------------------------------------ */
let BANK = QUESTIONS;            // bank soal pelajaran yang sedang dimainkan
let TOTAL = BANK.length;         // jumlah soal pada sesi yang sedang berjalan
let SUBJECTS = [];               // daftar pelajaran di halaman awal
const PER_SESSION = 20;          // soal per sesi; bank yang lebih besar diacak
const DIFFICULTIES = {
  easy:   { label: "Easy", hearts: 10, time: 60 },
  normal: { label: "Normal", hearts: 5, time: 40 },
  hard:   { label: "Hard", hearts: 5, time: 20 }
};

/* Klasifikasi awal bank soal. Soal pada tingkat terpilih selalu diutamakan;
   bila jumlahnya belum 20, soal tingkat terdekat dipakai sebagai pelengkap. */
function questionDifficulty(q) {
  const hardTags = ["Soal HOTS", "Menyusun Cerita", "Membaca Grafik", "Menebak Sila", "Pengamalan di Sekolah"];
  const normalTags = ["Membandingkan", "Mengurutkan", "Pola Bilangan", "Menyusun Kalimat Tanya", "Kalimat SPO", "Bunyi Sila", "Kosakata", "Pengamalan di Rumah"];
  if (hardTags.includes(q.tag)) return "hard";
  if (normalTags.includes(q.tag) || ["match", "order", "group"].includes(q.type)) return "normal";
  return "easy";
}

/* mengacak salinan larik (Fisher-Yates) */
function shuffle(a) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

/* Memilih soal untuk satu sesi dan mengembalikan indeksnya.
   Satu soal dari setiap materi dijamin ikut, sisanya diundi
   dari seluruh soal yang tersisa. Dengan begitu tidak ada
   materi yang terlewat, tetapi materi yang soalnya banyak
   tetap lebih sering muncul. */
function pickSession(bank, n) {
  if (bank.length <= n) return shuffle(bank.map((_, i) => i));

  const perMateri = {};
  bank.forEach((q, i) => {
    (perMateri[q.tag] = perMateri[q.tag] || []).push(i);
  });

  const dipilih = [];
  let sisa = [];
  Object.values(perMateri).forEach((idx) => {
    const acak = shuffle(idx);
    dipilih.push(acak[0]);
    sisa = sisa.concat(acak.slice(1));
  });

  shuffle(sisa).slice(0, Math.max(0, n - dipilih.length))
    .forEach((i) => dipilih.push(i));

  return shuffle(dipilih).slice(0, n);
}

function pickSessionForDifficulty(bank, difficulty) {
  const order = difficulty === "easy" ? ["easy", "normal", "hard"]
    : difficulty === "hard" ? ["hard", "normal", "easy"]
    : ["normal", "easy", "hard"];
  const candidates = [];
  for (const level of order) {
    candidates.push(...bank.filter((q) => questionDifficulty(q) === level));
    if (candidates.length >= PER_SESSION) break;
  }
  return pickSession(candidates, PER_SESSION).map((i) => bank.indexOf(candidates[i]));
}

const S = {
  subject: null,    // pelajaran yang sedang dimainkan
  difficulty: "easy",
  queue: [],        // indeks soal yang belum tuntas
  q: null,          // soal aktif
  qIndex: 0,        // indeks soal aktif di QUESTIONS
  solved: 0,        // soal yang sudah benar
  hearts: DIFFICULTIES.easy.hearts,
  xp: 0,
  combo: 0,
  maxCombo: 0,
  attempts: 0,      // jumlah percobaan menjawab
  firstTryOk: 0,    // benar pada percobaan pertama
  retried: {},      // soal yang pernah salah
  salah: [],        // catatan soal yang pernah salah, untuk ulasan
  answer: null,     // jawaban terpilih (bergantung tipe soal)
  locked: false
};

/* ------------------------------------------------------------
   NAVIGASI LAYAR
   ------------------------------------------------------------ */
function show(id) {
  $$(".screen").forEach((s) => s.classList.remove("active"));
  $("#" + id).classList.add("active");
}

/* ------------------------------------------------------------
   KOMPONEN VISUAL
   ------------------------------------------------------------ */
function renderVisual(v) {
  if (!v) return "";

  if (v.kind === "blocks") {
    const h = Array.from({ length: v.h }, (_, i) =>
      `<div class="b-h" style="animation-delay:${i * 0.04}s"></div>`).join("");
    const t = Array.from({ length: v.t }, (_, i) =>
      `<div class="b-t" style="animation-delay:${0.2 + i * 0.04}s"></div>`).join("");
    const o = Array.from({ length: v.o }, (_, i) =>
      `<div class="b-o" style="animation-delay:${0.4 + i * 0.04}s"></div>`).join("");
    return `<div class="blocks">
      <div class="bgroup"><div class="brow">${h}</div><div class="blabel">Ratusan</div></div>
      <div class="bgroup"><div class="brow">${t}</div><div class="blabel">Puluhan</div></div>
      <div class="bgroup"><div class="brow">${o}</div><div class="blabel">Satuan</div></div>
    </div>`;
  }

  if (v.kind === "jars") {
    const h = Array.from({ length: v.h }, (_, i) =>
      `<div class="jar" style="animation-delay:${i * 0.05}s">🍯<span>100</span></div>`).join("");
    const t = Array.from({ length: v.t }, (_, i) =>
      `<div class="jar" style="animation-delay:${0.25 + i * 0.05}s">👝<span>10</span></div>`).join("");
    const o = Array.from({ length: v.o }, (_, i) =>
      `<div class="b-o" style="animation-delay:${0.45 + i * 0.04}s"></div>`).join("");
    return `<div class="blocks">
      <div class="bgroup"><div class="brow">${h}</div><div class="blabel">Toples</div></div>
      <div class="bgroup"><div class="brow">${t}</div><div class="blabel">Kantong</div></div>
      <div class="bgroup"><div class="brow">${o}</div><div class="blabel">Butiran</div></div>
    </div>`;
  }

  if (v.kind === "story") {
    return `<div class="story">
      ${v.title ? `<div class="story-title">${v.title}</div>` : ""}
      ${v.lines.map((l) => `<p>${l}</p>`).join("")}
    </div>`;
  }

  if (v.kind === "chart") {
    const max = Math.max(...v.bars.map((b) => b.v));
    const warna = ["#1cb0f6", "#58cc02", "#ffc800", "#ce82ff", "#ff9600", "#ff4b4b"];
    return `<div class="chart">
      <div class="chart-title">${v.title}</div>
      <div class="chart-body">
        ${v.bars.map((b, i) => `
          <div class="cbar">
            <div class="cbar-val">${b.v}</div>
            <div class="cbar-fill" style="height:${Math.round((b.v / max) * 100)}%;
                 background:${warna[i % warna.length]};animation-delay:${i * 0.09}s"></div>
            <div class="cbar-nm">${b.ico || ""}<span>${b.nm}</span></div>
          </div>`).join("")}
      </div>
    </div>`;
  }

  if (v.kind === "pvtable") {
    const rows = v.rows || [v.digits];
    const body = rows.map((r) => `<tr>${r.map((d) => `<td>${d}</td>`).join("")}</tr>`).join("");
    return `<table class="pv-table">
      <tr><th>Ratusan</th><th>Puluhan</th><th>Satuan</th></tr>${body}
    </table>`;
  }
  return "";
}

function renderHint(q) {
  return q.hint ? `<div class="hint"><span>💡</span><span>${q.hint}</span></div>` : "";
}

/* ------------------------------------------------------------
   PAPAN ANGKA (dipakai tipe "fill")
   ------------------------------------------------------------ */
function keypadHTML() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let html = '<div class="keypad">';
  keys.slice(0, 9).forEach((k) => (html += `<button class="key" data-key="${k}">${k}</button>`));
  html += '<button class="key del" data-key="del">⌫</button>';
  html += '<button class="key" data-key="0">0</button>';
  html += '<button class="key del" data-key="clr">C</button>';
  html += "</div>";
  return html;
}

/* ------------------------------------------------------------
   MERENDER SOAL
   ------------------------------------------------------------ */
function renderQuestion() {
  const q = S.q;
  S.answer = null;
  S.locked = false;

  $("#q-tag").textContent = q.tag;
  $("#q-count").textContent = `${S.solved + 1}/${TOTAL}`;
  $("#q-text").innerHTML = q.text;
  $("#progress-fill").style.width = (S.solved / TOTAL) * 100 + "%";
  $("#btn-check").disabled = true;
  $("#btn-check").textContent = "PERIKSA";
  $("#feedback").className = "feedback";

  const stage = $("#q-stage");
  stage.className = "q-stage";

  if (q.type === "fill") renderFill(stage, q);
  else if (q.type === "mcq") renderMcq(stage, q);
  else if (q.type === "compare") renderCompare(stage, q);
  else if (q.type === "order") renderOrder(stage, q);
  else if (q.type === "match") renderMatch(stage, q);
  else if (q.type === "group") renderGroup(stage, q);

  startTimer();
}

/* ------------------------------------------------------------
   TIMER — durasi mengikuti tingkat yang dipilih.
   Sisa waktu dihitung dari tenggat, bukan dari penambahan tiap
   denyut, supaya tetap tepat walau browser menunda pencacahnya.
   ------------------------------------------------------------ */
const Timer = { id: null, deadline: 0, beep: 0 };
const questionTime = () => DIFFICULTIES[S.difficulty].time;

function startTimer() {
  stopTimer();
  Timer.deadline = performance.now() + questionTime() * 1000;
  Timer.beep = questionTime();
  paintTimer(questionTime() * 1000);
  Timer.id = setInterval(tickTimer, 100);
}

function stopTimer() {
  if (Timer.id) clearInterval(Timer.id);
  Timer.id = null;
}

function tickTimer() {
  const sisa = Timer.deadline - performance.now();
  paintTimer(sisa);

  // detak halus pada lima detik terakhir
  const detik = Math.ceil(sisa / 1000);
  if (detik <= 5 && detik > 0 && detik < Timer.beep) {
    Timer.beep = detik;
    Sfx.tick();
  }

  if (sisa <= 0) { stopTimer(); onTimeout(); }
}

function paintTimer(sisa) {
  const detik = Math.max(0, Math.ceil(sisa / 1000));
  const persen = Math.max(0, Math.min(100, (sisa / (questionTime() * 1000)) * 100));
  const bar = $("#timer-fill");
  const chip = $("#q-timer");

  bar.style.width = persen + "%";
  chip.textContent = detik;

  const tingkat = detik <= 10 ? "danger" : detik <= 20 ? "warn" : "";
  bar.className = "timer-fill " + tingkat;
  chip.className = "q-timer " + tingkat;
}

/* waktu habis: dihitung sebagai jawaban salah, jawaban benar
   ditampilkan, lalu anak menekan LANJUT untuk soal berikutnya */
function onTimeout() {
  if (S.locked) return;
  S.locked = true;
  S.attempts++;

  revealAnswer(S.q);
  boom();

  S.combo = 0;
  S.hearts--;
  setTimeout(() => { paintHearts(true); Sfx.heartLoss(); }, 900);

  if (!S.retried[S.qIndex]) {
    S.retried[S.qIndex] = true;
    S.salah.push(S.q);
    S.queue.push(S.qIndex);
  }

  // panel ditahan sebentar supaya ledakannya sempat terlihat
  setTimeout(() => showFeedback(false, "Waktu habis! 💥", S.q.explain), 780);
}

/* ------------------------------------------------------------
   LEDAKAN BOM — dipakai saat waktu soal habis.
   Urutannya: sumbu mendesis (0,42 detik) lalu meledak dengan
   kilatan, gelombang kejut, puing berterbangan, dan getaran.
   ------------------------------------------------------------ */
function boom() {
  const el = $("#boom");
  el.className = "boom fuse";
  Sfx.fuse();

  setTimeout(() => {
    el.className = "boom blast";
    Sfx.explosion();
    failShake();
    Confetti.explode(innerWidth / 2, innerHeight * 0.42);
    if (navigator.vibrate) navigator.vibrate([70, 50, 180]);
  }, 420);

  setTimeout(() => { el.className = "boom"; }, 1600);
}

/* menampilkan jawaban yang benar tanpa menilai jawaban anak */
function revealAnswer(q) {
  if (q.type === "fill") {
    $$("#q-stage .slot").forEach((s) => {
      s.classList.remove("active");
      s.textContent = s.dataset.ans;
      s.classList.add("ok");
    });
  }

  if (q.type === "mcq") {
    $$("#q-stage .opt").forEach((b, i) => {
      b.classList.remove("sel");
      b.classList.add(i === q.answer ? "ok" : "dim");
    });
  }

  if (q.type === "compare") {
    const slot = $("#cslot");
    slot.textContent = q.a > q.b ? ">" : "<";
    slot.classList.add("ok");
  }

  if (q.type === "order") {
    const benar = q.answer || [...q.items].sort((x, y) => (q.dir === "desc" ? y - x : x - y));
    $("#tray").innerHTML = benar.map((v, i) =>
      `<button class="ocard ok ${typeof v === "string" ? "word" : ""}">
         <span class="rank">${i + 1}</span>${v}</button>`).join("");
    $$("#q-stage #pool .ocard").forEach((c) => c.classList.add("used"));
  }

  if (q.type === "group") {
    $$("#q-stage .bin-body .gchip").forEach((c) => {
      const i = +c.dataset.i;
      const bin = c.closest(".bin-body").dataset.bin;
      c.classList.add(bin === q.items[i].bin ? "ok" : "no");
    });
  }
}

/* ---------- tipe: fill ---------- */
function renderFill(stage, q) {
  const parts = q.layout.map((p, i) => {
    if (p.t === "text") return `<span class="plain">${p.v}</span>`;
    if (p.t === "cell") return `<span class="pcell">${p.v}</span>`;
    const box = `<div class="slot" data-slot="${i}" data-ans="${p.ans}" data-max="${p.max}"></div>`;
    return p.label
      ? `<div class="slot-lbl">${box}<small>${p.label}</small></div>`
      : box;
  }).join("");

  const wrapClass = q.layout.some((p) => p.t === "cell") ? "pattern" : "slots";
  stage.innerHTML = `
    ${renderVisual(q.visual)}
    <div class="${wrapClass}">${parts}</div>
    ${renderHint(q)}
    ${keypadHTML()}`;

  const slots = $$("#q-stage .slot");
  slots[0].classList.add("active");

  slots.forEach((s) => s.addEventListener("click", () => {
    if (S.locked) return;
    Sfx.tap();
    slots.forEach((x) => x.classList.remove("active"));
    s.classList.add("active");
  }));

  $$("#q-stage .key").forEach((k) => k.addEventListener("click", () => {
    if (S.locked) return;
    pressKey(k.dataset.key);
  }));

  refreshFillState();
}

function pressKey(key) {
  const slots = $$("#q-stage .slot");
  if (!slots.length) return;
  let active = slots.find((s) => s.classList.contains("active")) || slots[0];

  if (key === "del") {
    Sfx.tap();
    if (!active.textContent && slots.indexOf(active) > 0) {
      // kotak kosong: mundur ke kotak sebelumnya
      active.classList.remove("active");
      active = slots[slots.indexOf(active) - 1];
      active.classList.add("active");
    }
    active.textContent = active.textContent.slice(0, -1);
  } else if (key === "clr") {
    Sfx.tap();
    slots.forEach((s) => { s.textContent = ""; s.classList.remove("active", "filled"); });
    slots[0].classList.add("active");
  } else {
    const max = +active.dataset.max;
    if (active.textContent.length >= max) return;
    Sfx.tap();
    active.textContent += key;
    if (active.textContent.length >= max) {
      const next = slots[slots.indexOf(active) + 1];
      if (next && !next.textContent) {
        active.classList.remove("active");
        next.classList.add("active");
      }
    }
  }
  refreshFillState();
}

function refreshFillState() {
  const slots = $$("#q-stage .slot");
  slots.forEach((s) => s.classList.toggle("filled", !!s.textContent));
  const done = slots.every((s) => s.textContent.length > 0);
  $("#btn-check").disabled = !done;
  S.answer = done ? slots.map((s) => s.textContent) : null;
}

/* ---------- tipe: mcq ---------- */
function renderMcq(stage, q) {
  const opts = q.options.map((o, i) =>
    `<button class="opt" data-i="${i}">${o}</button>`).join("");
  stage.innerHTML = `
    ${renderVisual(q.visual)}
    <div class="opts ${q.grid ? "grid2" : ""}">${opts}</div>
    ${renderHint(q)}`;

  $$("#q-stage .opt").forEach((b) => b.addEventListener("click", () => {
    if (S.locked) return;
    Sfx.tap();
    $$("#q-stage .opt").forEach((x) => x.classList.remove("sel"));
    b.classList.add("sel");
    S.answer = +b.dataset.i;
    $("#btn-check").disabled = false;
  }));
}

/* ---------- tipe: compare ---------- */
function renderCompare(stage, q) {
  stage.innerHTML = `
    ${renderVisual(q.visual)}
    <div class="compare-row">
      <div class="cnum">${q.a}</div>
      <div class="cslot" id="cslot"></div>
      <div class="cnum">${q.b}</div>
    </div>
    <div class="sym-row">
      <button class="sym" data-sym="&gt;">&gt;<small>lebih besar</small></button>
      <button class="sym" data-sym="&lt;">&lt;<small>lebih kecil</small></button>
    </div>
    ${renderHint(q)}`;

  $$("#q-stage .sym").forEach((b) => b.addEventListener("click", () => {
    if (S.locked) return;
    Sfx.tap();
    $$("#q-stage .sym").forEach((x) => x.classList.remove("sel"));
    b.classList.add("sel");
    S.answer = b.dataset.sym;
    const slot = $("#cslot");
    slot.textContent = b.dataset.sym;
    slot.classList.add("filled");
    $("#btn-check").disabled = false;
  }));
}

/* ---------- tipe: order ----------
   Dipakai dua cara:
   - angka  : urutan benar dihitung dari q.dir ("asc" / "desc")
   - kata   : urutan benar ditulis langsung di q.answer
   Kartu disimpan sebagai indeks supaya kata yang sama tidak
   saling tertukar.                                            */
function renderOrder(stage, q) {
  const isWord = typeof q.items[0] === "string";
  const shuffled = q.items.map((_, i) => i).sort(() => Math.random() - 0.5);
  const note = q.note || (q.dir === "desc"
    ? "Ketuk berurutan: terbesar ➜ terkecil"
    : "Ketuk berurutan: terkecil ➜ terbesar");

  stage.innerHTML = `
    ${renderVisual(q.visual)}
    <div class="order-tray" id="tray"></div>
    <div class="arrow-note">${note}</div>
    <div class="order-pool" id="pool">
      ${shuffled.map((i) =>
        `<button class="ocard ${isWord ? "word" : ""}" data-i="${i}">${q.items[i]}</button>`).join("")}
    </div>
    ${renderHint(q)}`;

  const picked = [];                       // berisi indeks kartu
  const tray = $("#tray");

  function repaint() {
    tray.innerHTML = picked.map((idx, n) =>
      `<button class="ocard ${isWord ? "word" : ""}" data-pick="${idx}" data-val="${q.items[idx]}">
         <span class="rank">${n + 1}</span>${q.items[idx]}</button>`).join("");

    tray.querySelectorAll(".ocard").forEach((c) => c.addEventListener("click", () => {
      if (S.locked) return;
      Sfx.tap();
      const idx = +c.dataset.pick;
      picked.splice(picked.indexOf(idx), 1);
      $$("#pool .ocard").forEach((p) => { if (+p.dataset.i === idx) p.classList.remove("used"); });
      repaint();
    }));

    const done = picked.length === q.items.length;
    $("#btn-check").disabled = !done;
    S.answer = done ? picked.map((i) => q.items[i]) : null;
  }

  $$("#pool .ocard").forEach((c) => c.addEventListener("click", () => {
    if (S.locked) return;
    Sfx.tap();
    c.classList.add("used");
    picked.push(+c.dataset.i);
    repaint();
  }));
  repaint();
}

/* ---------- tipe: group ----------
   Ketuk kartu, lalu ketuk kotak tujuannya. Kartu di dalam
   kotak bisa diketuk lagi untuk dikembalikan.                 */
function renderGroup(stage, q) {
  const shuffled = q.items.map((_, i) => i).sort(() => Math.random() - 0.5);
  const taruh = {};                        // indeks kartu -> id kotak
  let pilih = null;

  const kartu = (i) =>
    `<button class="gchip" data-i="${i}">
       ${q.items[i].ico ? `<span class="gchip-ico">${q.items[i].ico}</span>` : ""}${q.items[i].v}
     </button>`;

  stage.innerHTML = `
    <div class="bins">
      ${q.bins.map((b) => `
        <div class="bin" data-bin="${b.id}">
          <div class="bin-head">${b.ico || ""} ${b.nm}</div>
          <div class="bin-body" data-bin="${b.id}"></div>
        </div>`).join("")}
    </div>
    <div class="arrow-note">Ketuk kartunya dulu, lalu ketuk kotak tujuan</div>
    <div class="gpool" id="gpool">${shuffled.map((i) => kartu(i)).join("")}</div>
    ${renderHint(q)}`;

  function repaint() {
    // kartu yang belum ditaruh
    $("#gpool").innerHTML = shuffled.filter((i) => taruh[i] == null).map((i) => kartu(i)).join("");
    // isi tiap kotak
    q.bins.forEach((b) => {
      const body = stage.querySelector(`.bin-body[data-bin="${b.id}"]`);
      body.innerHTML = shuffled.filter((i) => taruh[i] === b.id).map((i) => kartu(i)).join("");
    });

    stage.querySelectorAll(".gchip").forEach((c) => c.addEventListener("click", () => {
      if (S.locked) return;
      Sfx.tap();
      const i = +c.dataset.i;
      if (taruh[i] != null) { delete taruh[i]; pilih = null; return repaint(); }
      pilih = pilih === i ? null : i;
      stage.querySelectorAll(".gchip").forEach((x) =>
        x.classList.toggle("sel", +x.dataset.i === pilih));
    }));

    const done = q.items.every((_, i) => taruh[i] != null);
    $("#btn-check").disabled = !done;
    S.answer = done ? { ...taruh } : null;
  }

  // kotak tidak pernah dibuat ulang, jadi pendengarnya cukup dipasang sekali
  stage.querySelectorAll(".bin").forEach((bin) => bin.addEventListener("click", () => {
    if (S.locked || pilih === null) return;
    Sfx.tap();
    taruh[pilih] = bin.dataset.bin;
    pilih = null;
    repaint();
  }));

  repaint();
}

/* ---------- tipe: match ----------
   Menerima pasangan angka  { num, name }  maupun teks  { a, b }.
   Setiap pasangan dikenali lewat indeksnya, bukan isinya.      */
function renderMatch(stage, q) {
  const P = q.pairs.map((p, i) => ({
    i,
    kiri: p.a !== undefined ? p.a : p.num,
    kanan: p.b !== undefined ? p.b : p.name,
    angka: p.num !== undefined
  }));
  const kiri = [...P].sort(() => Math.random() - 0.5);
  const kanan = [...P].sort(() => Math.random() - 0.5);

  stage.innerHTML = `
    <div class="match-grid">
      <div class="mcol">${kiri.map((p) =>
        `<div class="mcard ${p.angka ? "num" : ""}" data-side="kiri" data-v="${p.i}"
              style="margin-bottom:10px">${p.kiri}</div>`).join("")}</div>
      <div class="mcol">${kanan.map((p) =>
        `<div class="mcard" data-side="kanan" data-v="${p.i}"
              style="margin-bottom:10px">${p.kanan}</div>`).join("")}</div>
    </div>
    ${renderHint(q)}`;

  let sel = null, done = 0, errors = 0;
  S.answer = { errors: 0, done: false };

  $$("#q-stage .mcard").forEach((card) => card.addEventListener("click", () => {
    if (S.locked || card.classList.contains("done")) return;
    Sfx.tap();

    if (!sel) {
      sel = card;
      card.classList.add("sel");
      return;
    }
    if (sel === card) { card.classList.remove("sel"); sel = null; return; }
    if (sel.dataset.side === card.dataset.side) {
      sel.classList.remove("sel");
      sel = card;
      card.classList.add("sel");
      return;
    }

    if (sel.dataset.v === card.dataset.v) {
      sel.classList.remove("sel");
      sel.classList.add("done");
      card.classList.add("done");
      done++;
      Sfx.match(done);
      burstAt(card, 14, { power: 6, emojiChance: 0 });
      sel = null;
      if (done === q.pairs.length) {
        S.answer = { errors, done: true };
        $("#btn-check").disabled = false;
        setTimeout(() => $("#btn-check").click(), 350);
      }
    } else {
      errors++;
      const a = sel, b = card;
      a.classList.remove("sel");
      [a, b].forEach((x) => x.classList.add("err"));
      Sfx.wrong();
      setTimeout(() => [a, b].forEach((x) => x.classList.remove("err")), 400);
      sel = null;
    }
  }));
}

/* ------------------------------------------------------------
   PERIKSA JAWABAN
   ------------------------------------------------------------ */
function checkAnswer() {
  if (S.locked || S.answer === null) return;
  stopTimer();
  S.locked = true;
  S.attempts++;

  const q = S.q;
  let ok = false;

  if (q.type === "fill") {
    const slots = $$("#q-stage .slot");
    ok = slots.every((s) => +s.textContent === +s.dataset.ans);
    slots.forEach((s) => s.classList.remove("active"));
    slots.forEach((s) => s.classList.add(+s.textContent === +s.dataset.ans ? "ok" : "no"));
    if (!ok) {
      slots.forEach((s) => {
        if (+s.textContent !== +s.dataset.ans) s.textContent = s.dataset.ans;
      });
    }
  }

  if (q.type === "mcq") {
    ok = S.answer === q.answer;
    $$("#q-stage .opt").forEach((b, i) => {
      b.classList.remove("sel");
      if (i === q.answer) b.classList.add("ok");
      else if (i === S.answer) b.classList.add("no");
      else b.classList.add("dim");
    });
  }

  if (q.type === "compare") {
    const truth = q.a > q.b ? ">" : "<";
    ok = S.answer === truth;
    const slot = $("#cslot");
    slot.classList.add(ok ? "ok" : "no");
    if (!ok) slot.textContent = truth;
  }

  if (q.type === "order") {
    // urutan benar: ditulis langsung di q.answer, atau diurutkan sebagai angka
    const benar = q.answer || [...q.items].sort((x, y) => (q.dir === "desc" ? y - x : x - y));
    ok = S.answer.length === benar.length && S.answer.every((v, i) => v === benar[i]);
    $("#tray").querySelectorAll(".ocard").forEach((c, i) => {
      c.classList.add(c.dataset.val === String(benar[i]) ? "ok" : "no");
    });
  }

  if (q.type === "group") {
    ok = q.items.every((it, i) => S.answer[i] === it.bin);
    $$("#q-stage .gchip").forEach((c) => {
      const i = +c.dataset.i;
      c.classList.add(S.answer[i] === q.items[i].bin ? "ok" : "no");
    });
  }

  if (q.type === "match") {
    ok = S.answer.done && S.answer.errors <= 1;
  }

  ok ? onCorrect() : onWrong();
}

/* letupan konfeti tepat di atas sebuah elemen */
function burstAt(el, n = 30, opts = {}) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  Confetti.burst(r.left + r.width / 2, r.top + r.height / 2, n, opts);
}

/* getaran layar + kilat merah ketika jawaban salah */
function failShake() {
  const body = $(".quiz-body");
  body.classList.remove("shake");
  void body.offsetWidth;          // paksa ulang animasi
  body.classList.add("shake");

  const flash = $("#flash");
  flash.classList.remove("on");
  void flash.offsetWidth;
  flash.classList.add("on");

  if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
}

function onCorrect() {
  Sfx.correct();
  S.combo++;
  S.maxCombo = Math.max(S.maxCombo, S.combo);
  const firstTry = !S.retried[S.qIndex];
  if (firstTry) S.firstTryOk++;
  S.xp += firstTry ? 10 + Math.min(S.combo, 5) : 5;
  S.solved++;
  $("#progress-fill").style.width = (S.solved / TOTAL) * 100 + "%";

  // letupan makin meriah bila rentetan makin panjang
  const power = 9 + Math.min(S.combo, 6);
  Confetti.burst(innerWidth / 2, innerHeight * 0.72, 28 + Math.min(S.combo, 6) * 5,
    { power, spread: 2.2, emojiChance: 0.12 + Math.min(S.combo, 6) * 0.03 });

  if (navigator.vibrate) navigator.vibrate(30);
  if (S.combo >= 3) showCombo(S.combo);

  const praise = ["Hebat!", "Mantap!", "Keren sekali!", "Betul!", "Luar biasa!", "Pintar!"];
  showFeedback(true, praise[Math.floor(Math.random() * praise.length)], S.q.explain);
}

function onWrong() {
  Sfx.wrong();
  failShake();
  S.combo = 0;
  S.hearts--;
  setTimeout(() => { paintHearts(true); Sfx.heartLoss(); }, 260);

  if (!S.retried[S.qIndex]) {
    S.retried[S.qIndex] = true;
    S.salah.push(S.q);
    S.queue.push(S.qIndex);          // diulang lagi nanti
  }

  showFeedback(false, "Belum tepat", S.q.explain);
}

function showCombo(n) {
  const msg = n >= 10 ? `🔥 ${n} beruntun! Juara!`
            : n >= 7 ? `⚡ ${n} beruntun!`
            : n >= 5 ? `🌟 ${n} beruntun!`
            : `✨ ${n} beruntun!`;
  const el = $("#combo-toast");
  el.textContent = msg;
  el.classList.add("show");
  Sfx.combo(n);
  setTimeout(() => burstAt(el, 16, { power: 7, emojiChance: 0.5 }), 120);
  setTimeout(() => el.classList.remove("show"), 1400);
}

function showFeedback(ok, title, desc) {
  const fb = $("#feedback");
  $("#fb-icon").textContent = ok ? "✅" : "💡";
  $("#fb-title").textContent = title;
  $("#fb-desc").textContent = desc || "";
  fb.className = "feedback show " + (ok ? "ok" : "no");
  $("#btn-next").textContent = S.hearts <= 0 ? "LIHAT HASIL" : "LANJUT";
  $("#btn-next").focus();
}

/* ------------------------------------------------------------
   NYAWA
   ------------------------------------------------------------ */
function paintHearts(animate) {
  const box = $("#hearts");
  const maxHearts = DIFFICULTIES[S.difficulty].hearts;
  box.innerHTML = Array.from({ length: maxHearts }, (_, i) =>
    `<span class="heart ${i < S.hearts ? "" : "lost"}">❤️</span>`).join("");
  if (animate && S.hearts >= 0) {
    const lost = box.children[S.hearts];
    if (lost) lost.classList.add("shake");
  }
}

/* ------------------------------------------------------------
   ALUR PERMAINAN
   ------------------------------------------------------------ */
function startGame(subj, difficulty = S.difficulty) {
  stopTimer();
  Sfx.init();
  Confetti.clear();
  S.subject = subj || S.subject || SUBJECTS[0];
  S.difficulty = difficulty;
  BANK = S.subject.bank;
  S.queue = pickSessionForDifficulty(BANK, S.difficulty);
  TOTAL = S.queue.length;
  S.solved = 0;
  S.hearts = DIFFICULTIES[S.difficulty].hearts;
  S.xp = 0;
  S.combo = 0;
  S.maxCombo = 0;
  S.attempts = 0;
  S.firstTryOk = 0;
  S.retried = {};
  S.salah = [];
  paintHearts(false);
  show("screen-quiz");
  nextQuestion();
}

function nextQuestion() {
  stopTimer();
  $("#feedback").className = "feedback";
  if (S.hearts <= 0) return finish(false);
  if (!S.queue.length) return finish(true);
  S.qIndex = S.queue.shift();
  S.q = BANK[S.qIndex];
  renderQuestion();
}

function finish(won) {
  stopTimer();
  const acc = S.attempts ? Math.round((S.firstTryOk / TOTAL) * 100) : 0;
  const stars = !won ? 1 : acc >= 90 ? 3 : acc >= 70 ? 2 : 1;

  S.result = { won, acc, stars, xp: S.xp, combo: S.maxCombo };
  $("#mascot-name").innerHTML = mascotSVG(won ? "happy" : "sad");
  $("#name-subject").textContent = S.subject.nm;
  $("#player-name").value = "";
  renderLeaderboard();
  show("screen-name");
}

function completeSession(name) {
  const { won, acc, stars, xp, combo } = S.result;
  const scores = getLeaderboard();
  scores.push({ name, xp, acc, difficulty: S.difficulty, at: Date.now() });
  scores.sort((a, b) => b.xp - a.xp || b.acc - a.acc || a.at - b.at);
  localStorage.setItem(leaderboardKey(), JSON.stringify(scores.slice(0, 10)));

  $("#mascot-done").innerHTML = mascotSVG(won ? "happy" : "sad");
  $("#done-title").textContent = won
    ? (stars === 3 ? "Sempurna! 🏆" : "Kerja Bagus! 🎉")
    : "Nyawa Habis 😢";
  $("#stars").innerHTML = [0, 1, 2].map((i) =>
    `<span class="${i < stars ? "on" : ""}" style="animation-delay:${i * 0.15}s">⭐</span>`).join("");
  $("#stat-xp").textContent = xp;
  $("#stat-acc").textContent = acc + "%";
  $("#stat-combo").textContent = combo;

  const box = $("#review-box");
  if (S.salah.length) {
    const list = [...new Set(S.salah.map((q) => q.tag))].join(", ");
    box.innerHTML = `Materi yang perlu diulang: <b>${list}</b><br>Jumlah soal yang sempat keliru: <b>${S.salah.length}</b>. Ayo coba lagi supaya makin mahir!`;
  } else {
    box.innerHTML = "Luar biasa! Semua soal dijawab benar pada percobaan pertama. Kamu sudah menguasai bilangan sampai 1.000! 🌟";
  }

  const best = +(localStorage.getItem("pb_best") || 0);
  if (xp > best) localStorage.setItem("pb_best", xp);

  show("screen-done");
  renderLeaderboard("#leaderboard-done");
  if (won) {
    Sfx.win();
    Confetti.celebrate();
    // ledakan tambahan mengikuti bintang yang muncul satu per satu
    for (let i = 0; i < stars; i++) {
      setTimeout(() => burstAt($("#stars").children[i], 18, { power: 8, emojiChance: 0.45 }), 500 + i * 260);
    }
    if (navigator.vibrate) navigator.vibrate([40, 60, 40, 60, 90]);
  } else {
    Sfx.lose();
    if (navigator.vibrate) navigator.vibrate([80, 80, 160]);
  }
}

function leaderboardKey() {
  return `pb_leaderboard_${S.subject.id}`;
}

function getLeaderboard() {
  try {
    const scores = JSON.parse(localStorage.getItem(leaderboardKey()) || "[]");
    return Array.isArray(scores) ? scores : [];
  } catch (_) {
    return [];
  }
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function renderLeaderboard(target = "#leaderboard") {
  const scores = getLeaderboard();
  const box = $(target);
  if (!scores.length) {
    box.innerHTML = '<h2>🏆 Peringkat 10 Besar</h2><p class="rank-empty">Jadilah pemain pertama di daftar ini!</p>';
    return;
  }
  box.innerHTML = `<h2>🏆 Peringkat 10 Besar ${escapeHtml(S.subject.nm)}</h2>${scores.map((score, i) =>
    `<div class="rank-row"><span>${i + 1}.</span><strong>${escapeHtml(score.name)}</strong><small>${score.xp} XP · ${score.acc}% · ${DIFFICULTIES[score.difficulty]?.label || "Normal"}</small></div>`
  ).join("")}`;
}

function openDifficulty(subj) {
  S.subject = subj || S.subject || SUBJECTS[0];
  $("#mascot-level").innerHTML = mascotSVG("happy");
  $("#level-subject").textContent = `${S.subject.ico} ${S.subject.nm}: pilih tantanganmu`;
  show("screen-level");
}

/* ------------------------------------------------------------
   KONFETI
   Satu mesin partikel untuk dua kegunaan:
   - burst() : letupan kecil dari satu titik, tiap jawaban benar
   - rain()  : hujan konfeti panjang di layar hasil
   Partikel jatuh dengan gravitasi, berputar, lalu memudar.
   ------------------------------------------------------------ */
const Confetti = {
  cv: null, ctx: null, parts: [], running: false,
  colors: ["#58cc02", "#1cb0f6", "#ffc800", "#ff4b4b", "#ce82ff", "#ff9600", "#00cd9c"],
  emojis: ["⭐", "🎉", "✨", "🏅"],

  ensure() {
    if (!this.cv) {
      this.cv = $("#confetti");
      this.ctx = this.cv.getContext("2d");
      addEventListener("resize", () => this.resize());
    }
    this.resize();
    this.cv.style.display = "block";
  },

  resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = Math.round(innerWidth * dpr), h = Math.round(innerHeight * dpr);
    if (this.cv.width === w && this.cv.height === h) return;   // hindari kedip
    this.cv.width = w;
    this.cv.height = h;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  },

  make(o) {
    const useEmoji = Math.random() < (o.emojiChance || 0);
    const warna = o.colors || this.colors;
    const ikon = o.emojis || this.emojis;
    return {
      x: o.x, y: o.y,
      vx: o.vx, vy: o.vy,
      w: 6 + Math.random() * 7,
      h: 9 + Math.random() * 9,
      rot: Math.random() * Math.PI * 2,
      vr: -0.22 + Math.random() * 0.44,
      wob: Math.random() * Math.PI * 2,
      color: warna[(Math.random() * warna.length) | 0],
      shape: useEmoji ? "emoji" : (Math.random() < 0.28 ? "circle" : "rect"),
      emoji: ikon[(Math.random() * ikon.length) | 0],
      size: 14 + Math.random() * 12,
      life: 0,
      max: o.max || 150,
      grav: o.grav || 0.16,
      drag: o.drag || 0.988
    };
  },

  /* letupan dari titik (x, y) — dipakai saat jawaban benar */
  burst(x, y, n = 34, opts = {}) {
    this.ensure();
    for (let i = 0; i < n; i++) {
      const a = (-Math.PI / 2) + (Math.random() - 0.5) * (opts.spread || 2.1);
      const sp = (opts.power || 9) * (0.45 + Math.random() * 0.75);
      this.parts.push(this.make({
        x: x + (Math.random() - 0.5) * 26,
        y: y + (Math.random() - 0.5) * 14,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        max: 110 + Math.random() * 50,
        grav: 0.22,
        emojiChance: opts.emojiChance != null ? opts.emojiChance : 0.12
      }));
    }
    this.start();
  },

  /* puing ledakan: menyebur ke segala arah dengan warna api */
  explode(x, y, n = 80) {
    this.ensure();
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;          // 360 derajat
      const sp = 4 + Math.random() * 15;
      this.parts.push(this.make({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 2,
        max: 85 + Math.random() * 65,
        grav: 0.32,
        drag: 0.975,
        emojiChance: 0.18,
        colors: ["#ff4b4b", "#ff9600", "#ffc800", "#ff6b00", "#9a9a9a", "#5a5a5a"],
        emojis: ["💥", "🔥", "💨"]
      }));
    }
    this.start();
  },

  /* hujan konfeti dari atas layar — dipakai di layar hasil */
  rain(n = 150) {
    this.ensure();
    for (let i = 0; i < n; i++) {
      this.parts.push(this.make({
        x: Math.random() * innerWidth,
        y: -30 - Math.random() * innerHeight * 0.9,
        vx: -1.4 + Math.random() * 2.8,
        vy: 2 + Math.random() * 3.5,
        max: 320,
        grav: 0.05,
        drag: 0.997,
        emojiChance: 0.14
      }));
    }
    this.start();
  },

  /* perayaan besar: hujan + dua letupan dari sudut bawah */
  celebrate() {
    this.rain(160);
    setTimeout(() => this.burst(innerWidth * 0.18, innerHeight * 0.82, 40, { power: 13, spread: 1.5, emojiChance: 0.2 }), 120);
    setTimeout(() => this.burst(innerWidth * 0.82, innerHeight * 0.82, 40, { power: 13, spread: 1.5, emojiChance: 0.2 }), 320);
  },

  start() {
    if (this.running) return;
    this.running = true;
    requestAnimationFrame(() => this.loop());
  },

  loop() {
    const c = this.ctx;
    c.clearRect(0, 0, innerWidth, innerHeight);

    this.parts = this.parts.filter((p) => {
      p.life++;
      p.vy += p.grav;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.wob += 0.14;
      p.x += p.vx + Math.sin(p.wob) * 0.7;
      p.y += p.vy;
      p.rot += p.vr;

      const fade = p.life > p.max * 0.7
        ? 1 - (p.life - p.max * 0.7) / (p.max * 0.3)
        : 1;

      c.save();
      c.globalAlpha = Math.max(fade, 0);
      c.translate(p.x, p.y);
      c.rotate(p.rot);
      if (p.shape === "emoji") {
        c.font = p.size + "px serif";
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(p.emoji, 0, 0);
      } else if (p.shape === "circle") {
        c.fillStyle = p.color;
        c.beginPath();
        c.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        c.fill();
      } else {
        c.fillStyle = p.color;
        // pita: lebar berdenyut supaya terlihat berputar di ruang 3D
        c.fillRect(-p.w / 2, -p.h / 2, p.w * Math.abs(Math.cos(p.wob * 0.5)) + 1.5, p.h);
      }
      c.restore();

      return p.life < p.max && p.y < innerHeight + 60;
    });

    if (this.parts.length) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.running = false;
      c.clearRect(0, 0, innerWidth, innerHeight);
      this.cv.style.display = "none";
    }
  },

  clear() {
    this.parts = [];
    if (this.ctx) this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (this.cv) this.cv.style.display = "none";
  }
};

/* ------------------------------------------------------------
   PEMILIH PELAJARAN DI HALAMAN AWAL
   Pelajaran yang bank soalnya masih kosong tampil sebagai
   "Segera" dan belum bisa diketuk.
   ------------------------------------------------------------ */
function renderSubjects() {
  const box = $("#subject-list");

  box.innerHTML = SUBJECTS.map((s, i) => {
    const n = s.bank ? s.bank.length : 0;
    const siap = n > 0;
    const kelas = !siap ? "Sedang disiapkan"
      : n > PER_SESSION ? `${PER_SESSION} soal acak dari ${n} soal`
      : `${n} soal · Kelas 2 SD`;
    return `
      <button class="subject ${s.warna || "green"} ${siap ? "" : "soon"}" data-i="${i}"
              ${siap ? "" : "disabled"}>
        <span class="subject-ico">${s.ico}</span>
        <span class="subject-txt">
          <span class="subject-nm">${s.nm}</span>
          <span class="subject-ds">${s.ds}</span>
          <span class="subject-meta">${kelas}</span>
        </span>
        <span class="subject-go">${siap ? "➜" : "Segera"}</span>
      </button>`;
  }).join("");

  $$("#subject-list .subject").forEach((b) => b.addEventListener("click", () => {
    const s = SUBJECTS[+b.dataset.i];
    if (!s.bank || !s.bank.length) return;
    Sfx.init();
    Sfx.tap();
    openDifficulty(s);
  }));
}

/* ------------------------------------------------------------
   MATERI
   ------------------------------------------------------------ */
function renderMateri() {
  const subj = S.subject || SUBJECTS[0];
  $("#materi-title").textContent = "Materi " + subj.nm;
  $("#materi-list").innerHTML = subj.materi.map((m) =>
    `<div class="materi-item">
       <div class="materi-ico">${m.ico}</div>
       <div><p class="materi-nm">${m.nm}</p><p class="materi-ds">${m.ds}</p></div>
     </div>`).join("");
}

/* ------------------------------------------------------------
   PEMASANGAN AWAL
   ------------------------------------------------------------ */
function init() {
  SUBJECTS = buildSubjects();
  S.subject = SUBJECTS.find((s) => s.bank && s.bank.length) || SUBJECTS[0];
  $("#mascot-home").innerHTML = mascotSVG("happy");
  renderSubjects();
  renderMateri();

  const best = +(localStorage.getItem("pb_best") || 0);
  if (best > 0) {
    const el = $("#best-score");
    el.hidden = false;
    el.textContent = `🏅 XP terbaikmu: ${best}`;
  }

  $("#btn-materi").addEventListener("click", () => { Sfx.init(); renderMateri(); show("screen-materi"); });
  $("#btn-materi-back").addEventListener("click", () => show("screen-home"));
  $("#btn-materi-start").addEventListener("click", () => openDifficulty(S.subject));
  $("#btn-level-back").addEventListener("click", () => show("screen-home"));
  $$(".level-card").forEach((button) => button.addEventListener("click", () => {
    Sfx.init();
    Sfx.tap();
    startGame(S.subject, button.dataset.level);
  }));
  $("#btn-check").addEventListener("click", checkAnswer);
  $("#btn-next").addEventListener("click", nextQuestion);
  $("#name-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#player-name").value.trim();
    if (name) completeSession(name);
  });
  $("#btn-again").addEventListener("click", () => openDifficulty(S.subject));
  $("#btn-home").addEventListener("click", () => show("screen-home"));
  $("#btn-quit").addEventListener("click", () => {
    stopTimer();
    if (confirm("Keluar dari latihan? Kemajuanmu akan hilang.")) show("screen-home");
    else if (!S.locked) startTimer();
  });

  // dukungan papan ketik untuk yang bermain di laptop
  document.addEventListener("keydown", (e) => {
    if (!$("#screen-quiz").classList.contains("active")) return;
    if (e.key === "Enter") {
      if ($("#feedback").classList.contains("show")) $("#btn-next").click();
      else if (!$("#btn-check").disabled) $("#btn-check").click();
      return;
    }
    if (S.locked) return;
    if (/^[0-9]$/.test(e.key)) pressKey(e.key);
    if (e.key === "Backspace") pressKey("del");
  });
}

document.addEventListener("DOMContentLoaded", init);
