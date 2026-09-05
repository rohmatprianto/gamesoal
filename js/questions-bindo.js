/* ============================================================
   BANK SOAL — BAHASA INDONESIA, Kelas 2 Fase A
   54 soal, 12 materi (masing-masing minimal 4 soal).

   Cakupan digabung dari dua sumber:
   - Buku Bab 1 "Aku Paham Perasaanku": mengenal perasaan,
     kosakata perasaan, memahami cerita, sikap menghadapi
     perasaan, huruf kapital, tanda titik.
   - Lembar tugas: kata tanya, kalimat SPO, menyusun cerita,
     membaca grafik, hidup sehat.

   Teks cerita pada soal pemahaman ditulis ulang dengan kalimat
   sendiri, hanya tokoh dan kejadiannya yang mengikuti buku.

   TIPE SOAL: mcq / match / order / group / fill
   ============================================================ */

const MATERI_BINDO = [
  { ico: "😊", nm: "Mengenal Perasaan", ds: "Senang, sedih, marah, takut, dan cirinya" },
  { ico: "💬", nm: "Kosakata Perasaan", ds: "Bangga, lega, kaget, gugup, murung, jahil" },
  { ico: "📕", nm: "Memahami Cerita", ds: "Menemukan perasaan tokoh dalam bacaan" },
  { ico: "🤝", nm: "Sikap Menghadapi Perasaan", ds: "Cara menenangkan diri dan menolong teman" },
  { ico: "🔠", nm: "Huruf Kapital", ds: "Awal kalimat, nama orang, hari, bulan, kota" },
  { ico: "⏺️", nm: "Tanda Titik", ds: "Mengakhiri kalimat berita" },
  { ico: "❓", nm: "Kata Tanya", ds: "Apa, siapa, di mana, kapan, mengapa, berapa" },
  { ico: "🧩", nm: "Menyusun Kalimat Tanya", ds: "Merangkai kata acak menjadi pertanyaan" },
  { ico: "📐", nm: "Kalimat SPO", ds: "Subjek - Predikat - Objek" },
  { ico: "📖", nm: "Menyusun Cerita", ds: "Mengurutkan kejadian agar runtut" },
  { ico: "📊", nm: "Membaca Grafik", ds: "Membaca diagram batang dan menghitungnya" },
  { ico: "🥦", nm: "Hidup Sehat", ds: "Makanan sehat dan kebiasaan menjaga tubuh" }
];

/* ---------- bahan yang dipakai bersama beberapa soal ---------- */

const GRAFIK_BUAH = {
  kind: "chart",
  title: "Buah Favorit Siswa",
  bars: [
    { nm: "Jeruk", v: 6, ico: "🍊" },
    { nm: "Semangka", v: 9, ico: "🍉" },
    { nm: "Melon", v: 5, ico: "🍈" },
    { nm: "Naga", v: 4, ico: "🐉" }
  ]
};

const GRAFIK_SAYUR = {
  kind: "chart",
  title: "Sayur Kesukaan Kelas 2C",
  bars: [
    { nm: "Bayam", v: 4, ico: "🥬" },
    { nm: "Wortel", v: 12, ico: "🥕" },
    { nm: "Brokoli", v: 2, ico: "🥦" },
    { nm: "Tomat", v: 3, ico: "🍅" },
    { nm: "Kangkung", v: 3, ico: "🌿" }
  ]
};

const CERITA_LOMBA = {
  kind: "story",
  title: "Hari Perlombaan",
  lines: [
    "Sekolah mengadakan lomba kemerdekaan.",
    "Sari ikut lomba makan kerupuk dengan gembira.",
    "Budi khawatir terjatuh saat balap karung.",
    "Andi kalah tarik tambang, lalu teman-teman menghiburnya.",
    "Saat pengumuman, Sari menang lomba makan kerupuk."
  ]
};

const CERITA_TAS = {
  kind: "story",
  title: "Tas Dita",
  lines: [
    "Dita menaruh tasnya di atas meja kelas.",
    "Ia lalu bermain bersama teman di halaman.",
    "Setelah bel berbunyi, Dita kembali ke kelas.",
    "Tasnya sudah tidak ada di meja.",
    "Teman-teman ikut mencari, ternyata Udin menaruhnya di loker saat piket."
  ]
};

const SOAL_BINDO = [

  /* =========================================================
     1. MENGENAL PERASAAN — 5 soal
     ========================================================= */

  {
    tag: "Mengenal Perasaan",
    type: "mcq",
    grid: true,
    text: "Ketika kamu mendapatkan hadiah, perasaanmu menjadi ...",
    options: ["Senang", "Sedih", "Takut", "Marah"],
    answer: 0,
    explain: "Mendapat hadiah membuat kita senang, yaitu perasaan puas dan bahagia."
  },

  {
    tag: "Mengenal Perasaan",
    type: "mcq",
    grid: true,
    text: "Kucing kesayangan Roni hilang.<br>Apa yang Roni rasakan?",
    options: ["Sedih", "Senang", "Malu", "Bangga"],
    answer: 0,
    explain: "Sedih adalah perasaan yang muncul karena kehilangan, kecewa, atau gagal."
  },

  {
    tag: "Mengenal Perasaan",
    type: "mcq",
    grid: true,
    text: "Perasaan yang muncul saat kita merasa <b>terancam atau dalam bahaya</b> disebut ...",
    options: ["Takut", "Marah", "Senang", "Malu"],
    answer: 0,
    explain: "Takut muncul saat kita merasa terancam atau dalam bahaya, misalnya saat lampu tiba-tiba mati."
  },

  {
    tag: "Mengenal Perasaan",
    type: "mcq",
    grid: true,
    text: "Tanda seseorang sedang merasa <b>takut</b> adalah ...",
    options: ["Badan gemetar", "Tersenyum lebar", "Wajah memerah dan tertawa", "Melompat kegirangan"],
    answer: 0,
    hint: "Perhatikan apa yang terjadi pada tubuh saat kita ketakutan.",
    explain: "Saat takut, badan bisa gemetar dan jantung berdebar. Tersenyum dan tertawa justru tanda senang."
  },

  {
    tag: "Mengenal Perasaan",
    type: "match",
    text: "Jodohkan kejadian dengan perasaan yang tepat.",
    pairs: [
      { a: "Mainan dirusak teman", b: "Marah" },
      { a: "Juara 1 olimpiade", b: "Senang" },
      { a: "Lupa lirik di depan kelas", b: "Malu" },
      { a: "Lampu tiba-tiba mati", b: "Takut" }
    ],
    hint: "Ingat sebab setiap perasaan: kehilangan, bahaya, tidak adil, atau disorot orang.",
    explain: "Marah muncul saat merasa diperlakukan tidak adil, senang saat merasa puas, malu saat disorot orang, dan takut saat merasa terancam."
  },

  /* =========================================================
     2. KOSAKATA PERASAAN — 5 soal
     ========================================================= */

  {
    tag: "Kosakata Perasaan",
    type: "mcq",
    grid: true,
    text: "Budi merasa ___ saat dipanggil guru untuk maju ke depan kelas.",
    options: ["Gugup", "Bangga", "Lega", "Jahil"],
    answer: 0,
    hint: "Perasaan berdebar karena merasa belum siap.",
    explain: "Gugup adalah perasaan berdebar dan kurang percaya diri, misalnya saat harus maju ke depan kelas."
  },

  {
    tag: "Kosakata Perasaan",
    type: "mcq",
    grid: true,
    text: "Dina terlihat ___ saat mainan kesayangannya hilang.",
    options: ["Murung", "Bangga", "Lega", "Gembira"],
    answer: 0,
    explain: "Murung berarti wajah tampak sedih dan tidak bersemangat."
  },

  {
    tag: "Kosakata Perasaan",
    type: "mcq",
    grid: true,
    text: "Ahmad suka menyembunyikan pensil teman-temannya.<br>Ahmad sangat ___",
    options: ["Jahil", "Rajin", "Sopan", "Pemalu"],
    answer: 0,
    explain: "Jahil berarti suka mengganggu atau menjahili teman. Perbuatan ini membuat teman kesal."
  },

  {
    tag: "Kosakata Perasaan",
    type: "match",
    text: "Jodohkan kata perasaan dengan artinya.",
    pairs: [
      { a: "Bangga", b: "Senang karena berhasil" },
      { a: "Lega", b: "Tenang setelah masalah selesai" },
      { a: "Kaget", b: "Terkejut oleh hal tak terduga" },
      { a: "Gugup", b: "Berdebar karena belum siap" }
    ],
    explain: "Kata perasaan membantu kita menceritakan isi hati dengan lebih tepat."
  },

  {
    tag: "Kosakata Perasaan",
    type: "order",
    text: "Susunlah huruf berikut menjadi kata perasaan.",
    items: ["b", "a", "n", "g", "g", "a"],
    answer: ["b", "a", "n", "g", "g", "a"],
    note: "Ketuk hurufnya satu per satu",
    hint: "Perasaan Sari setelah memenangkan lomba.",
    explain: "Hurufnya menjadi kata BANGGA, yaitu senang karena berhasil melakukan sesuatu."
  },

  /* =========================================================
     3. MEMAHAMI CERITA — 5 soal
     ========================================================= */

  {
    tag: "Memahami Cerita",
    type: "mcq",
    grid: true,
    text: "Bagaimana perasaan <b>Sari</b> saat ikut lomba makan kerupuk?",
    visual: CERITA_LOMBA,
    options: ["Senang", "Takut", "Sedih", "Marah"],
    answer: 0,
    explain: "Pada cerita disebutkan Sari mengikuti lomba dengan gembira, artinya ia merasa senang."
  },

  {
    tag: "Memahami Cerita",
    type: "mcq",
    text: "Mengapa <b>Budi</b> merasa takut saat balap karung?",
    visual: CERITA_LOMBA,
    options: [
      "Karena khawatir terjatuh",
      "Karena tidak punya karung",
      "Karena kalah lomba",
      "Karena dimarahi guru"
    ],
    answer: 0,
    explain: "Budi takut karena khawatir terjatuh saat balap karung."
  },

  {
    tag: "Memahami Cerita",
    type: "mcq",
    text: "Apa yang membuat <b>Andi</b> merasa sedih?",
    visual: CERITA_LOMBA,
    options: [
      "Kalah lomba tarik tambang",
      "Tidak boleh ikut lomba",
      "Kehilangan tasnya",
      "Terlambat datang ke sekolah"
    ],
    answer: 0,
    hint: "Cari kalimat tentang Andi di dalam cerita.",
    explain: "Andi sedih karena kalah tarik tambang. Untunglah teman-teman segera menghiburnya."
  },

  {
    tag: "Memahami Cerita",
    type: "mcq",
    grid: true,
    text: "Bagaimana perasaan <b>Dita</b> saat melihat tasnya tidak ada di meja?",
    visual: CERITA_TAS,
    options: ["Kaget", "Bangga", "Senang", "Mengantuk"],
    answer: 0,
    explain: "Dita kaget karena tasnya hilang tiba-tiba, padahal tadi ia menaruhnya di atas meja."
  },

  {
    tag: "Memahami Cerita",
    type: "mcq",
    text: "Siapa yang ternyata memindahkan tas Dita?",
    visual: CERITA_TAS,
    options: [
      "Udin, saat sedang piket",
      "Guru kelas",
      "Penjaga sekolah",
      "Tidak ada yang tahu"
    ],
    answer: 0,
    explain: "Udin memindahkan tas itu ke loker saat piket. Setelah tahu, Dita merasa lega dan bahagia."
  },

  /* =========================================================
     4. SIKAP MENGHADAPI PERASAAN — 4 soal
     ========================================================= */

  {
    tag: "Sikap Menghadapi Perasaan",
    type: "mcq",
    text: "Jika temanmu terjatuh dan menangis, sikapmu sebaiknya ...",
    options: [
      "Menolong dan menghiburnya",
      "Mengejeknya",
      "Diam saja",
      "Menjauh supaya tidak repot"
    ],
    answer: 0,
    explain: "Menolong dan menghibur teman yang sedih adalah sikap yang baik dan membuat hatinya tenang kembali."
  },

  {
    tag: "Sikap Menghadapi Perasaan",
    type: "mcq",
    text: "Ketika merasa <b>marah</b>, kita sebaiknya ...",
    options: [
      "Berwudu dan beristigfar",
      "Berteriak pada teman",
      "Memukul benda di sekitar",
      "Merusak barang sendiri"
    ],
    answer: 0,
    hint: "Cari cara yang menenangkan hati, bukan yang melampiaskan.",
    explain: "Saat marah, berwudu dan beristigfar membuat hati lebih tenang. Berteriak dan memukul justru merugikan diri sendiri dan orang lain."
  },

  {
    tag: "Sikap Menghadapi Perasaan",
    type: "mcq",
    text: "Rani takut karena besok harus tampil di depan kelas.<br>Apa yang sebaiknya ia lakukan?",
    options: [
      "Berlatih dan meminta dukungan teman",
      "Bersembunyi di rumah",
      "Tidak mau tampil",
      "Pura-pura sakit"
    ],
    answer: 0,
    explain: "Rasa takut berkurang kalau kita bersiap. Berlatih dan meminta dukungan teman membuat kita lebih percaya diri."
  },

  {
    tag: "Sikap Menghadapi Perasaan",
    type: "mcq",
    text: "Jika temanmu berhasil <b>memenangkan lomba</b>, kamu sebaiknya ...",
    options: [
      "Mengucapkan selamat dan ikut bahagia",
      "Iri dan menjauhinya",
      "Tidak peduli",
      "Mengatakan lombanya tidak adil"
    ],
    answer: 0,
    explain: "Ikut senang atas keberhasilan teman adalah tanda hati yang baik, sama seperti teman-teman yang menghibur Andi saat kalah."
  },

  /* =========================================================
     5. HURUF KAPITAL — 6 soal
     ========================================================= */

  {
    tag: "Huruf Kapital",
    type: "mcq",
    text: "Penulisan kalimat manakah yang <b>benar</b>?",
    options: [
      "Aku tinggal di Kota Semarang.",
      "aku tinggal di kota semarang.",
      "Aku Tinggal Di Kota Semarang.",
      "Aku tinggal di kota Semarang."
    ],
    answer: 0,
    hint: "Perhatikan awal kalimat dan nama kotanya.",
    explain: "Huruf kapital dipakai di awal kalimat (Aku) dan pada nama kota (Kota Semarang). Kata lain tetap huruf kecil."
  },

  {
    tag: "Huruf Kapital",
    type: "mcq",
    text: "Perbaikan yang tepat untuk kalimat:<br><i>hari minggu kami bermain di rumah nenek.</i>",
    options: [
      "Hari Minggu kami bermain di rumah nenek.",
      "hari Minggu kami bermain di rumah Nenek.",
      "Hari minggu kami bermain di rumah nenek.",
      "Hari Minggu Kami Bermain di Rumah Nenek."
    ],
    answer: 0,
    hint: "Minggu itu nama hari. Kalau nenek?",
    explain: "Awal kalimat memakai huruf kapital, dan Minggu adalah nama hari. Kata nenek bukan nama orang, jadi tetap huruf kecil."
  },

  {
    tag: "Huruf Kapital",
    type: "mcq",
    grid: true,
    text: "Sudah benarkah penulisan huruf kapital pada kalimat ini?<br><b>Ibu membeli sayur di pasar.</b>",
    options: ["Sudah benar ✔", "Masih salah ✘"],
    answer: 0,
    hint: "Apakah kata pasar menunjuk nama pasar tertentu?",
    explain: "Sudah benar. Ibu ada di awal kalimat, sedangkan pasar bukan nama tempat tertentu jadi huruf kecil. Kalau ditulis Pasar Malioboro, barulah memakai huruf kapital."
  },

  {
    tag: "Huruf Kapital",
    type: "mcq",
    text: "Kalimat manakah yang huruf kapitalnya <b>benar</b>?",
    options: [
      "Aku merasa sedih karena Dina sakit.",
      "aku merasa sedih karena dina sakit.",
      "Aku merasa Sedih karena dina sakit.",
      "Aku Merasa Sedih Karena Dina Sakit."
    ],
    answer: 0,
    hint: "Dina itu nama orang. Sedih hanya kata biasa.",
    explain: "Huruf kapital dipakai di awal kalimat (Aku) dan pada nama orang (Dina). Kata sedih bukan nama, jadi huruf kecil."
  },

  {
    tag: "Huruf Kapital",
    type: "mcq",
    text: "Perbaikan yang tepat untuk:<br><i>ayah membeli hadiah untuk nita.</i>",
    options: [
      "Ayah membeli hadiah untuk Nita.",
      "Ayah membeli hadiah untuk nita.",
      "ayah membeli hadiah untuk Nita.",
      "Ayah Membeli Hadiah untuk Nita."
    ],
    answer: 0,
    explain: "Ayah ada di awal kalimat dan Nita adalah nama orang, jadi keduanya memakai huruf kapital."
  },

  {
    tag: "Huruf Kapital",
    type: "group",
    text: "Kelompokkan kata berikut sesuai cara penulisannya.",
    bins: [
      { id: "besar", nm: "Huruf Kapital", ico: "🔠" },
      { id: "kecil", nm: "Huruf Kecil", ico: "🔡" }
    ],
    items: [
      { v: "Jakarta", bin: "besar" },
      { v: "Senin", bin: "besar" },
      { v: "Bilal", bin: "besar" },
      { v: "Agustus", bin: "besar" },
      { v: "meja", bin: "kecil" },
      { v: "sepeda", bin: "kecil" },
      { v: "buku", bin: "kecil" },
      { v: "kucing", bin: "kecil" }
    ],
    hint: "Nama kota, nama hari, nama orang, dan nama bulan selalu diawali huruf kapital.",
    explain: "Jakarta (kota), Senin (hari), Bilal (orang), dan Agustus (bulan) memakai huruf kapital. Meja, sepeda, buku, dan kucing adalah benda biasa, jadi huruf kecil."
  },

  /* =========================================================
     6. TANDA TITIK — 4 soal
     ========================================================= */

  {
    tag: "Tanda Titik",
    type: "mcq",
    text: "Kalimat manakah yang <b>huruf kapital dan tanda titiknya</b> sudah tepat?",
    options: [
      "Andi bermain bola di lapangan.",
      "Andi bermain bola di lapangan",
      "andi bermain bola di lapangan.",
      "Andi Bermain Bola di Lapangan"
    ],
    answer: 0,
    explain: "Kalimat berita diawali huruf kapital dan diakhiri tanda titik."
  },

  {
    tag: "Tanda Titik",
    type: "mcq",
    text: "Perbaikan yang tepat untuk:<br><i>nina membeli buku pada hari rabu</i>",
    options: [
      "Nina membeli buku pada hari Rabu.",
      "Nina membeli buku pada hari rabu.",
      "nina membeli buku pada hari Rabu.",
      "Nina Membeli Buku pada Hari Rabu"
    ],
    answer: 0,
    hint: "Ada tiga hal: awal kalimat, nama hari, dan penutup kalimat.",
    explain: "Nina adalah nama orang sekaligus awal kalimat, Rabu adalah nama hari, dan kalimatnya ditutup tanda titik."
  },

  {
    tag: "Tanda Titik",
    type: "mcq",
    grid: true,
    text: "Kalimat <i>Aku merasa bahagia hari ini</i><br>harus diakhiri dengan tanda ...",
    options: ["Titik ( . )", "Tanya ( ? )", "Seru ( ! )", "Koma ( , )"],
    answer: 0,
    explain: "Kalimat pernyataan atau kalimat berita selalu diakhiri dengan tanda titik."
  },

  {
    tag: "Tanda Titik",
    type: "mcq",
    text: "Kalimat manakah yang <b>tanda bacanya</b> sudah tepat?",
    options: [
      "Aku sedih karena buku gambarku hilang.",
      "Kapan kamu merasa marah.",
      "Ayo, membaca buku.",
      "Dina bahagia mendapat hadiah?"
    ],
    answer: 0,
    hint: "Kalimat tanya memakai ?, kalimat ajakan memakai !, kalimat berita memakai titik.",
    explain: "Hanya pilihan pertama yang cocok: kalimat berita ditutup tanda titik. Kalimat tanya seharusnya memakai tanda tanya, dan ajakan memakai tanda seru."
  },

  /* =========================================================
     7. KATA TANYA — 4 soal
     ========================================================= */

  {
    tag: "Kata Tanya",
    type: "mcq",
    grid: true,
    text: "Lengkapi dengan kata tanya yang tepat:<br><b>___ nama kucing peliharaan Nanda?</b>",
    options: ["Siapa", "Apa", "Kapan", "Berapa"],
    answer: 0,
    explain: "Kata tanya siapa dipakai untuk menanyakan nama."
  },

  {
    tag: "Kata Tanya",
    type: "mcq",
    grid: true,
    text: "<b>___ Ibu akan berangkat ke Jakarta?</b>",
    options: ["Kapan", "Di mana", "Mengapa", "Apa"],
    answer: 0,
    explain: "Kata tanya kapan dipakai untuk menanyakan waktu."
  },

  {
    tag: "Kata Tanya",
    type: "mcq",
    grid: true,
    text: "<b>___ saat hujan terasa sangat dingin?</b>",
    options: ["Mengapa", "Siapa", "Berapa", "Di mana"],
    answer: 0,
    hint: "Pertanyaan ini mencari sebabnya.",
    explain: "Kata tanya mengapa dipakai untuk menanyakan alasan atau sebab."
  },

  {
    tag: "Kata Tanya",
    type: "match",
    text: "Jodohkan kata tanya dengan kegunaannya.",
    pairs: [
      { a: "Apa", b: "Menanyakan benda" },
      { a: "Siapa", b: "Menanyakan nama orang" },
      { a: "Di mana", b: "Menanyakan tempat" },
      { a: "Berapa", b: "Menanyakan jumlah" }
    ],
    explain: "Setiap kata tanya punya tugasnya sendiri. Kapan untuk waktu, mengapa untuk alasan, dan bagaimana untuk keadaan."
  },

  /* =========================================================
     8. MENYUSUN KALIMAT TANYA — 4 soal
     ========================================================= */

  {
    tag: "Menyusun Kalimat Tanya",
    type: "order",
    text: "Susunlah menjadi kalimat tanya yang benar.",
    items: ["Kapan", "kita", "pergi", "ke pantai?"],
    answer: ["Kapan", "kita", "pergi", "ke pantai?"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    hint: "Kalimat tanya biasanya dimulai dengan kata tanya.",
    explain: "Kapan kita pergi ke pantai? Kata tanya diletakkan di depan, dan kalimatnya ditutup tanda tanya."
  },

  {
    tag: "Menyusun Kalimat Tanya",
    type: "order",
    text: "Susunlah menjadi kalimat tanya yang benar.",
    items: ["Apa", "warna", "yang", "kamu suka?"],
    answer: ["Apa", "warna", "yang", "kamu suka?"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Apa warna yang kamu suka? Kata tanya apa dipakai karena yang ditanyakan adalah sebuah hal, yaitu warna."
  },

  {
    tag: "Menyusun Kalimat Tanya",
    type: "order",
    text: "Susunlah menjadi kalimat tanya yang benar.",
    items: ["Mengapa", "kamu", "tidak masuk", "sekolah?"],
    answer: ["Mengapa", "kamu", "tidak masuk", "sekolah?"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Mengapa kamu tidak masuk sekolah? Kata tanya mengapa dipakai untuk menanyakan alasan."
  },

  {
    tag: "Menyusun Kalimat Tanya",
    type: "order",
    text: "Susunlah menjadi kalimat tanya yang benar.",
    items: ["Di mana", "adik", "membeli", "mainan baru?"],
    answer: ["Di mana", "adik", "membeli", "mainan baru?"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Di mana adik membeli mainan baru? Kata tanya di mana dipakai untuk menanyakan tempat."
  },

  /* =========================================================
     9. KALIMAT SPO — 4 soal
     ========================================================= */

  {
    tag: "Kalimat SPO",
    type: "order",
    text: "Susunlah menjadi kalimat berpola <b>S - P - O</b>.",
    items: ["Ibu", "memasak", "sayur"],
    answer: ["Ibu", "memasak", "sayur"],
    note: "Urutannya: siapa ➜ melakukan apa ➜ apa yang dikenai",
    hint: "Siapa yang melakukan? Apa yang dilakukan? Apa yang dimasak?",
    explain: "Ibu (subjek) memasak (predikat) sayur (objek)."
  },

  {
    tag: "Kalimat SPO",
    type: "order",
    text: "Susunlah menjadi kalimat berpola <b>S - P - O</b>.",
    items: ["Fahri", "makan", "sayur"],
    answer: ["Fahri", "makan", "sayur"],
    note: "Urutannya: siapa ➜ melakukan apa ➜ apa yang dikenai",
    explain: "Fahri (subjek) makan (predikat) sayur (objek)."
  },

  {
    tag: "Kalimat SPO",
    type: "mcq",
    grid: true,
    text: "Pada kalimat <b>Nelayan menangkap ikan.</b><br>Manakah <b>objeknya</b>?",
    options: ["ikan", "Nelayan", "menangkap", "laut"],
    answer: 0,
    hint: "Objek adalah yang dikenai pekerjaan.",
    explain: "Nelayan adalah subjek, menangkap adalah predikat, dan ikan adalah objek karena ikanlah yang ditangkap."
  },

  {
    tag: "Kalimat SPO",
    type: "mcq",
    grid: true,
    text: "Pada kalimat <b>Ayah menanam padi.</b><br>Manakah <b>predikatnya</b>?",
    options: ["menanam", "Ayah", "padi", "sawah"],
    answer: 0,
    explain: "Predikat adalah kata kerja yang menyatakan pekerjaan, yaitu menanam."
  },

  /* =========================================================
     10. MENYUSUN CERITA — 4 soal
     ========================================================= */

  {
    tag: "Menyusun Cerita",
    type: "order",
    text: "Urutkan kegiatan pagi hari berikut.",
    items: ["Bangun tidur", "Mandi", "Memakai baju", "Sarapan"],
    answer: ["Bangun tidur", "Mandi", "Memakai baju", "Sarapan"],
    note: "Ketuk mulai dari kegiatan yang paling awal",
    explain: "Cerita yang runtut mengikuti urutan waktu: bangun tidur, mandi, memakai baju, lalu sarapan."
  },

  {
    tag: "Menyusun Cerita",
    type: "order",
    text: "Urutkan cerita tumbuhnya sebuah pohon.",
    items: ["Menanam biji", "Muncul tunas", "Tumbuh daun", "Menjadi pohon"],
    answer: ["Menanam biji", "Muncul tunas", "Tumbuh daun", "Menjadi pohon"],
    note: "Ketuk mulai dari kejadian yang paling awal",
    explain: "Urutan yang benar: menanam biji, muncul tunas, tumbuh daun, lalu menjadi pohon."
  },

  {
    tag: "Menyusun Cerita",
    type: "order",
    text: "Urutkan kejadian pada cerita <b>Tas Dita</b>.",
    visual: CERITA_TAS,
    items: ["Dita menaruh tas di meja", "Dita bermain di halaman", "Tas Dita tidak ada", "Tas ditemukan di loker"],
    answer: ["Dita menaruh tas di meja", "Dita bermain di halaman", "Tas Dita tidak ada", "Tas ditemukan di loker"],
    note: "Ketuk mulai dari kejadian yang paling awal",
    explain: "Ceritanya berurutan: menaruh tas, bermain di halaman, tas hilang, lalu ditemukan di loker."
  },

  {
    tag: "Menyusun Cerita",
    type: "order",
    text: "Urutkan kejadian pada <b>Hari Perlombaan</b>.",
    visual: CERITA_LOMBA,
    items: ["Sekolah mengadakan lomba", "Murid mengikuti lomba", "Pengumuman pemenang", "Sari menang lomba"],
    answer: ["Sekolah mengadakan lomba", "Murid mengikuti lomba", "Pengumuman pemenang", "Sari menang lomba"],
    note: "Ketuk mulai dari kejadian yang paling awal",
    explain: "Lomba diadakan lebih dulu, murid mengikutinya, barulah pengumuman pemenang dan Sari dinyatakan menang."
  },

  /* =========================================================
     11. MEMBACA GRAFIK — 5 soal
     ========================================================= */

  {
    tag: "Membaca Grafik",
    type: "mcq",
    grid: true,
    text: "Buah apa yang <b>paling banyak</b> disukai siswa?",
    visual: GRAFIK_BUAH,
    options: ["Semangka", "Jeruk", "Melon", "Naga"],
    answer: 0,
    hint: "Cari batang yang paling tinggi.",
    explain: "Batang semangka paling tinggi, yaitu 9 siswa."
  },

  {
    tag: "Membaca Grafik",
    type: "fill",
    text: "Berapa <b>jumlah</b> siswa yang suka melon dan jeruk?",
    visual: GRAFIK_BUAH,
    layout: [{ t: "slot", ans: 11, max: 2 }],
    hint: "Jumlah berarti ditambahkan.",
    explain: "Melon 5 siswa, jeruk 6 siswa. 5 + 6 = 11 siswa."
  },

  {
    tag: "Membaca Grafik",
    type: "fill",
    text: "Berapa <b>selisih</b> siswa yang suka semangka dan buah naga?",
    visual: GRAFIK_BUAH,
    layout: [{ t: "slot", ans: 5, max: 1 }],
    hint: "Selisih berarti dikurangkan.",
    explain: "Semangka 9 siswa, buah naga 4 siswa. 9 − 4 = 5 siswa."
  },

  {
    tag: "Membaca Grafik",
    type: "mcq",
    grid: true,
    text: "Sayur apa yang <b>paling sedikit</b> disukai murid kelas 2C?",
    visual: GRAFIK_SAYUR,
    options: ["Brokoli", "Wortel", "Bayam", "Tomat"],
    answer: 0,
    hint: "Cari batang yang paling pendek.",
    explain: "Brokoli hanya disukai 2 murid, paling sedikit dibanding sayur lainnya."
  },

  {
    tag: "Membaca Grafik",
    type: "fill",
    text: "Jika dihitung semua, berapa <b>jumlah murid</b> kelas 2C?",
    visual: GRAFIK_SAYUR,
    layout: [{ t: "slot", ans: 24, max: 2 }],
    hint: "Jumlahkan semua batangnya.",
    explain: "4 + 12 + 2 + 3 + 3 = 24 murid."
  },

  /* =========================================================
     12. HIDUP SEHAT — 4 soal
     ========================================================= */

  {
    tag: "Hidup Sehat",
    type: "group",
    text: "Kelompokkan makanan berikut.",
    bins: [
      { id: "sehat", nm: "Makanan Sehat", ico: "🥦" },
      { id: "kurang", nm: "Kurang Sehat", ico: "🍩" }
    ],
    items: [
      { v: "Brokoli", ico: "🥦", bin: "sehat" },
      { v: "Wortel", ico: "🥕", bin: "sehat" },
      { v: "Semangka", ico: "🍉", bin: "sehat" },
      { v: "Susu", ico: "🥛", bin: "sehat" },
      { v: "Permen", ico: "🍬", bin: "kurang" },
      { v: "Donat", ico: "🍩", bin: "kurang" },
      { v: "Soda", ico: "🥤", bin: "kurang" },
      { v: "Cokelat", ico: "🍫", bin: "kurang" }
    ],
    hint: "Makanan sehat membuat badan kuat. Yang manis dan berminyak sebaiknya jarang dimakan.",
    explain: "Sayur, buah, dan susu termasuk makanan sehat. Permen, donat, soda, dan cokelat banyak mengandung gula sehingga sebaiknya jarang dimakan."
  },

  {
    tag: "Hidup Sehat",
    type: "mcq",
    grid: true,
    text: "Bekal sekolah manakah yang paling <b>sehat</b>?",
    options: ["Buah potong 🍎", "Permen 🍬", "Minuman bersoda 🥤", "Keripik asin 🍟"],
    answer: 0,
    explain: "Buah potong mengandung vitamin dan serat yang dibutuhkan tubuh, sedangkan pilihan lain banyak gula, garam, atau minyak."
  },

  {
    tag: "Hidup Sehat",
    type: "mcq",
    text: "Kapan kita sebaiknya <b>mencuci tangan</b>?",
    options: [
      "Sebelum dan sesudah makan",
      "Hanya kalau tangan terlihat kotor",
      "Hanya sebelum tidur",
      "Sesudah makan saja"
    ],
    answer: 0,
    explain: "Mencuci tangan sebelum dan sesudah makan membuat kuman tidak ikut masuk ke tubuh."
  },

  {
    tag: "Hidup Sehat",
    type: "mcq",
    grid: true,
    text: "Agar tubuh kuat dan tidak mudah sakit, kita sebaiknya ...",
    options: ["Rajin berolahraga", "Sering jajan", "Tidur larut malam", "Jarang minum air"],
    answer: 0,
    hint: "Kesehatan dijaga dengan makan sehat, cuci tangan, olahraga, dan kebersihan.",
    explain: "Rajin berolahraga membuat tubuh kuat. Selain itu jaga kebersihan lingkungan dan makan sayur serta buah."
  }
];
