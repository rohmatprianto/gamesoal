/* ============================================================
   DAFTAR PELAJARAN + BANK SOAL MATEMATIKA

   Bagian atas berisi daftar pelajaran yang tampil di halaman
   awal. Menambah pelajaran baru cukup menambah satu objek di
   buildSubjects(), lalu memuat berkas banknya di index.html.
   Pelajaran yang banknya masih kosong otomatis tampil sebagai
   "Segera" dan belum bisa diketuk.
   ============================================================ */
function buildSubjects() {
  return [
    {
      id: "matematika",
      ico: "🔢",
      nm: "Matematika",
      ds: "Bilangan Cacah sampai dengan 1.000",
      warna: "green",
      bank: QUESTIONS,
      materi: MATERI
    },
    {
      id: "bindo",
      ico: "📚",
      nm: "Bahasa Indonesia",
      ds: "Kalimat, kata tanya, perasaan, dan hidup sehat",
      warna: "blue",
      bank: SOAL_BINDO,
      materi: MATERI_BINDO
    },
    {
      id: "pancasila",
      ico: "🦅",
      nm: "Pancasila",
      ds: "Simbol, sila, aturan, dan hidup rukun",
      warna: "purple",
      bank: SOAL_PANCASILA,
      materi: MATERI_PANCASILA
    },
    {
      id: "pai",
      ico: "🕌",
      nm: "Agama Islam",
      ds: "Asmaulhusna, zikir, dan akhlak mulia",
      warna: "orange",
      bank: SOAL_PAI,
      materi: MATERI_PAI
    }
  ];
}

/* ============================================================
   BANK SOAL — MATEMATIKA, Kelas 2 SD
   Unit 1 "Bilangan Cacah sampai dengan 1.000". 42 soal,
   9 materi yang masing-masing berisi minimal 4 soal.

   Setiap soal menuliskan tingkatnya sendiri lewat "level":
   - easy   : membaca dan mengingat nilai satu bilangan
   - normal : dua langkah, atau melibatkan angka 0 di tengah
   - hard   : menyusun bilangan, menyeberang ratusan, teka-teki

   TIPE SOAL:
   - "fill"    : isian dengan papan angka (bisa banyak kotak)
   - "mcq"     : pilihan ganda
   - "compare" : memilih tanda  >  atau  <
   - "order"   : mengurutkan bilangan dengan cara diketuk
   - "match"   : menjodohkan bilangan dengan namanya

   VISUAL (opsional):
   - blocks  : blok ratusan / puluhan / satuan
   - jars    : toples 100, kantong 10, butiran satuan
   - pvtable : tabel nilai tempat
   ============================================================ */

const MATERI = [
  { ico: "🧮", nm: "Menghitung Benda", ds: "Membaca blok ratusan, puluhan, dan satuan" },
  { ico: "🔤", nm: "Nama Bilangan", ds: "Menulis nama bilangan dan sebaliknya" },
  { ico: "🏠", nm: "Nilai Tempat", ds: "Ratusan, puluhan, dan satuan" },
  { ico: "➕", nm: "Bentuk Panjang", ds: "Menguraikan bilangan menjadi penjumlahan" },
  { ico: "💯", nm: "Nilai Angka", ds: "Nilai setiap angka pada suatu bilangan" },
  { ico: "⚖️", nm: "Membandingkan", ds: "Lebih besar, lebih kecil, tanda > dan <" },
  { ico: "📊", nm: "Mengurutkan", ds: "Urut dari terbesar atau terkecil" },
  { ico: "🔢", nm: "Pola Bilangan", ds: "1, 10, dan 100 lebihnya atau kurangnya" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Menyusun bilangan dan menebak teka-teki" }
];

const QUESTIONS = [

  /* =========================================================
     1. MENGHITUNG BENDA — 4 soal
     ========================================================= */

  {
    tag: "Menghitung Benda",
    level: "easy",
    type: "fill",
    text: "Hitunglah blok di bawah ini. Berapa bilangannya?",
    visual: { kind: "blocks", h: 3, t: 4, o: 2 },
    layout: [{ t: "slot", ans: 342, max: 3 }],
    hint: "1 papan besar = 100, 1 batang = 10, 1 kubus kecil = 1.",
    explain: "3 ratusan + 4 puluhan + 2 satuan = 300 + 40 + 2 = 342."
  },

  {
    tag: "Menghitung Benda",
    level: "easy",
    type: "fill",
    text: "Hitunglah jumlah kelereng berikut.",
    visual: { kind: "jars", h: 4, t: 9, o: 2 },
    layout: [{ t: "slot", ans: 492, max: 3 }],
    hint: "Hitung toples dulu, lalu kantong, baru butirannya.",
    explain: "4 toples (400) + 9 kantong (90) + 2 butir (2) = 492."
  },

  {
    tag: "Menghitung Benda",
    level: "normal",
    type: "fill",
    text: "Hitunglah jumlah kelereng berikut.",
    visual: { kind: "jars", h: 7, t: 3, o: 6 },
    layout: [{ t: "slot", ans: 736, max: 3 }],
    hint: "Hitung toples dulu (ratusan), lalu kantong (puluhan), baru butirannya.",
    explain: "7 toples (700) + 3 kantong (30) + 6 butir (6) = 736."
  },

  {
    tag: "Menghitung Benda",
    level: "normal",
    type: "fill",
    text: "Hitunglah blok di bawah ini. Berapa bilangannya?",
    visual: { kind: "blocks", h: 5, t: 0, o: 8 },
    layout: [{ t: "slot", ans: 508, max: 3 }],
    hint: "Tidak ada batang puluhan sama sekali. Apa yang ditulis di tempat puluhan?",
    explain: "5 ratusan + 0 puluhan + 8 satuan = 508. Tempat puluhan yang kosong diisi angka 0."
  },

  /* =========================================================
     2. NAMA BILANGAN — 5 soal
     ========================================================= */

  {
    tag: "Nama Bilangan",
    level: "easy",
    type: "mcq",
    text: "Apa nama bilangan <b>513</b>?",
    options: ["Lima ratus tiga belas", "Lima ratus tiga puluh", "Lima puluh tiga belas", "Lima ratus tiga"],
    answer: 0,
    explain: "513 dibaca lima ratus tiga belas, karena 13 dibaca tiga belas."
  },

  {
    tag: "Nama Bilangan",
    level: "easy",
    type: "mcq",
    text: "Apa nama bilangan <b>640</b>?",
    options: ["Enam ratus empat puluh", "Enam ratus empat", "Enam puluh empat", "Empat ratus enam puluh"],
    answer: 0,
    hint: "Angka 4 di tempat puluhan dibaca empat puluh.",
    explain: "640 dibaca enam ratus empat puluh. Angka 0 di satuan tidak ikut dibaca."
  },

  {
    tag: "Nama Bilangan",
    level: "normal",
    type: "fill",
    text: "Tulislah bilangannya:<br><b>delapan ratus tujuh</b>",
    layout: [{ t: "slot", ans: 807, max: 3 }],
    hint: "Tidak ada puluhan, jadi tempat puluhan diisi angka 0.",
    explain: "Delapan ratus tujuh = 800 + 0 + 7 = 807. Jangan lupa angka 0 di puluhan!"
  },

  {
    tag: "Nama Bilangan",
    level: "normal",
    type: "fill",
    text: "Tulislah bilangannya:<br><b>tujuh ratus lima belas</b>",
    layout: [{ t: "slot", ans: 715, max: 3 }],
    hint: "Lima belas ditulis 15, bukan 50.",
    explain: "Tujuh ratus lima belas = 700 + 15 = 715."
  },

  {
    tag: "Nama Bilangan",
    level: "normal",
    type: "match",
    text: "Jodohkan bilangan dengan namanya.",
    pairs: [
      { num: 411, name: "Empat ratus sebelas" },
      { num: 950, name: "Sembilan ratus lima puluh" },
      { num: 502, name: "Lima ratus dua" },
      { num: 123, name: "Seratus dua puluh tiga" }
    ],
    explain: "Bagus! Perhatikan bilangan 502 yang puluhannya nol, dibaca lima ratus dua."
  },

  /* =========================================================
     3. NILAI TEMPAT — 5 soal
     ========================================================= */

  {
    tag: "Nilai Tempat",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>317</b>, angka <b>7</b> berada di tempat ...",
    visual: { kind: "pvtable", digits: [3, 1, 7] },
    options: ["Satuan", "Ratusan", "Puluhan", "Ribuan"],
    answer: 0,
    explain: "Angka paling kanan selalu menempati tempat satuan. Jadi 7 bernilai 7."
  },

  {
    tag: "Nilai Tempat",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>852</b>, angka <b>8</b> berada di tempat ...",
    options: ["Ratusan", "Puluhan", "Satuan", "Ribuan"],
    answer: 0,
    explain: "Angka paling kiri pada bilangan tiga angka menempati tempat ratusan. Jadi 8 bernilai 800."
  },

  {
    tag: "Nilai Tempat",
    level: "normal",
    type: "fill",
    text: "Lengkapi nilai tempat bilangan <b>635</b>.",
    visual: { kind: "blocks", h: 6, t: 3, o: 5 },
    layout: [
      { t: "text", v: "635 =" },
      { t: "slot", ans: 6, max: 1, label: "ratusan" },
      { t: "slot", ans: 3, max: 1, label: "puluhan" },
      { t: "slot", ans: 5, max: 1, label: "satuan" }
    ],
    explain: "635 terdiri dari 6 ratusan, 3 puluhan, dan 5 satuan."
  },

  {
    tag: "Nilai Tempat",
    level: "normal",
    type: "fill",
    text: "Lengkapi nilai tempat bilangan <b>480</b>.",
    layout: [
      { t: "text", v: "480 =" },
      { t: "slot", ans: 4, max: 1, label: "ratusan" },
      { t: "slot", ans: 8, max: 1, label: "puluhan" },
      { t: "slot", ans: 0, max: 1, label: "satuan" }
    ],
    hint: "Satuannya kosong, tetapi tetap harus ditulis.",
    explain: "480 terdiri dari 4 ratusan, 8 puluhan, dan 0 satuan."
  },

  {
    tag: "Nilai Tempat",
    level: "normal",
    type: "fill",
    text: "Berapakah bilangan pada tabel nilai tempat ini?",
    visual: { kind: "pvtable", digits: [7, 0, 4] },
    layout: [{ t: "slot", ans: 704, max: 3 }],
    hint: "Tulis angkanya berurutan dari ratusan ke satuan.",
    explain: "7 ratusan, 0 puluhan, dan 4 satuan membentuk bilangan 704."
  },

  /* =========================================================
     4. BENTUK PANJANG — 4 soal
     ========================================================= */

  {
    tag: "Bentuk Panjang",
    level: "normal",
    type: "fill",
    text: "Tulislah <b>926</b> dalam bentuk panjang.",
    visual: { kind: "blocks", h: 9, t: 2, o: 6 },
    layout: [
      { t: "text", v: "926 =" },
      { t: "slot", ans: 900, max: 3 },
      { t: "text", v: "+" },
      { t: "slot", ans: 20, max: 2 },
      { t: "text", v: "+" },
      { t: "slot", ans: 6, max: 1 }
    ],
    hint: "Tulis nilai setiap angka, bukan angkanya saja.",
    explain: "926 = 900 + 20 + 6. Angka 9 bernilai 900, angka 2 bernilai 20, angka 6 bernilai 6."
  },

  {
    tag: "Bentuk Panjang",
    level: "normal",
    type: "fill",
    text: "Tulislah <b>375</b> dalam bentuk panjang.",
    layout: [
      { t: "text", v: "375 =" },
      { t: "slot", ans: 300, max: 3 },
      { t: "text", v: "+" },
      { t: "slot", ans: 70, max: 2 },
      { t: "text", v: "+" },
      { t: "slot", ans: 5, max: 1 }
    ],
    explain: "375 = 300 + 70 + 5."
  },

  {
    tag: "Bentuk Panjang",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "<b>600 + 30 + 8</b> adalah bentuk panjang dari bilangan ...",
    options: ["638", "683", "6.308", "368"],
    answer: 0,
    explain: "600 + 30 + 8 = 638. Ratusannya 6, puluhannya 3, satuannya 8."
  },

  {
    tag: "Bentuk Panjang",
    level: "hard",
    type: "fill",
    text: "Lengkapi bentuk panjang bilangan <b>604</b>.",
    layout: [
      { t: "text", v: "604 = 600 +" },
      { t: "slot", ans: 0, max: 1 },
      { t: "text", v: "+" },
      { t: "slot", ans: 4, max: 1 }
    ],
    hint: "Berapa nilai angka 0 yang ada di tempat puluhan?",
    explain: "604 = 600 + 0 + 4. Angka 0 di tempat puluhan bernilai 0."
  },

  /* =========================================================
     5. NILAI ANGKA — 4 soal
     ========================================================= */

  {
    tag: "Nilai Angka",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>573</b>, angka <b>5</b> bernilai ...",
    options: ["500", "5", "50", "5.000"],
    answer: 0,
    explain: "Angka 5 berada di tempat ratusan, jadi nilainya 500."
  },

  {
    tag: "Nilai Angka",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>486</b>, angka <b>8</b> bernilai ...",
    options: ["80", "8", "800", "48"],
    answer: 0,
    explain: "Angka 8 berada di tempat puluhan, jadi nilainya 80."
  },

  {
    tag: "Nilai Angka",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>259</b>, angka <b>9</b> bernilai ...",
    options: ["9", "90", "900", "59"],
    answer: 0,
    explain: "Angka 9 berada di tempat satuan, jadi nilainya 9."
  },

  {
    tag: "Nilai Angka",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>743</b>, angka manakah yang bernilai <b>700</b>?",
    options: ["7", "4", "3", "743"],
    answer: 0,
    hint: "Angka yang bernilai ratusan letaknya paling kiri.",
    explain: "Angka 7 berada di tempat ratusan, jadi angka itulah yang bernilai 700."
  },

  /* =========================================================
     6. MEMBANDINGKAN — 5 soal
     ========================================================= */

  {
    tag: "Membandingkan",
    level: "easy",
    type: "compare",
    text: "Isilah dengan tanda yang tepat.",
    a: 357, b: 412,
    hint: "Bandingkan dulu angka ratusannya: 3 atau 4?",
    explain: "Ratusan 357 adalah 3, ratusan 412 adalah 4. Karena 3 kurang dari 4, maka 357 < 412."
  },

  {
    tag: "Membandingkan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Bilangan manakah yang <b>lebih besar</b>?",
    visual: { kind: "pvtable", rows: [[9, 4, 1], [7, 9, 0]] },
    options: ["941", "790"],
    answer: 0,
    explain: "941 punya 9 ratusan, 790 punya 7 ratusan. 9 lebih dari 7, jadi 941 lebih besar."
  },

  {
    tag: "Membandingkan",
    level: "normal",
    type: "compare",
    text: "Isilah dengan tanda yang tepat.",
    a: 623, b: 632,
    visual: { kind: "pvtable", rows: [[6, 2, 3], [6, 3, 2]] },
    hint: "Ratusannya sama-sama 6. Lanjut lihat puluhannya.",
    explain: "Ratusan sama (6). Puluhan 623 adalah 2, puluhan 632 adalah 3. Karena 2 < 3, maka 623 < 632."
  },

  {
    tag: "Membandingkan",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Bilangan manakah yang <b>lebih kecil</b>?",
    options: ["615", "651"],
    answer: 0,
    hint: "Ratusannya sama. Bandingkan puluhannya.",
    explain: "Ratusan sama (6). Puluhan 615 adalah 1, puluhan 651 adalah 5. Karena 1 < 5, maka 615 lebih kecil."
  },

  {
    tag: "Membandingkan",
    level: "hard",
    type: "compare",
    text: "Isilah dengan tanda yang tepat.",
    a: 780, b: 708,
    visual: { kind: "pvtable", rows: [[7, 8, 0], [7, 0, 8]] },
    hint: "Angkanya mirip, tetapi letaknya berbeda. Lihat tempat puluhannya.",
    explain: "Ratusan sama (7). Puluhan 780 adalah 8, puluhan 708 adalah 0. Karena 8 > 0, maka 780 > 708."
  },

  /* =========================================================
     7. MENGURUTKAN — 4 soal
     ========================================================= */

  {
    tag: "Mengurutkan",
    level: "normal",
    type: "order",
    text: "Urutkan dari yang <b>terbesar</b>.",
    items: [518, 357, 437],
    dir: "desc",
    explain: "Urutan dari terbesar: 518, 437, 357."
  },

  {
    tag: "Mengurutkan",
    level: "normal",
    type: "order",
    text: "Urutkan dari yang <b>terbesar</b>.",
    items: [728, 872, 782],
    dir: "desc",
    hint: "Ketiganya memakai angka yang sama. Lihat ratusannya dulu.",
    explain: "Urutan dari terbesar: 872, 782, 728."
  },

  {
    tag: "Mengurutkan",
    level: "hard",
    type: "order",
    text: "Urutkan dari yang <b>terkecil</b>.",
    items: [546, 544, 649],
    dir: "asc",
    hint: "546 dan 544 ratusannya sama. Lihat satuannya!",
    explain: "Urutan dari terkecil: 544, 546, 649."
  },

  {
    tag: "Mengurutkan",
    level: "hard",
    type: "order",
    text: "Urutkan dari yang <b>terkecil</b>.",
    items: [450, 405, 504],
    dir: "asc",
    hint: "Hati-hati dengan angka 0. Bandingkan ratusannya lebih dulu.",
    explain: "Urutan dari terkecil: 405, 450, 504."
  },

  /* =========================================================
     8. POLA BILANGAN — 6 soal
     ========================================================= */

  {
    tag: "Pola Bilangan",
    level: "easy",
    type: "fill",
    text: "<b>1 lebihnya</b> dari 629 adalah ...",
    layout: [{ t: "slot", ans: 630, max: 3 }],
    hint: "9 satuan ditambah 1 menjadi 1 puluhan penuh.",
    explain: "629 + 1 = 630. Satuan 9 penuh, jadi puluhan bertambah satu."
  },

  {
    tag: "Pola Bilangan",
    level: "easy",
    type: "fill",
    text: "<b>10 kurangnya</b> dari 250 adalah ...",
    layout: [{ t: "slot", ans: 240, max: 3 }],
    explain: "250 - 10 = 240. Hanya angka puluhannya yang berkurang satu."
  },

  {
    tag: "Pola Bilangan",
    level: "easy",
    type: "fill",
    text: "<b>100 lebihnya</b> dari 489 adalah ...",
    layout: [{ t: "slot", ans: 589, max: 3 }],
    explain: "489 + 100 = 589. Hanya angka ratusannya yang bertambah satu."
  },

  {
    tag: "Pola Bilangan",
    level: "easy",
    type: "fill",
    text: "<b>100 kurangnya</b> dari 317 adalah ...",
    layout: [{ t: "slot", ans: 217, max: 3 }],
    explain: "317 - 100 = 217. Hanya angka ratusannya yang berkurang satu."
  },

  {
    tag: "Pola Bilangan",
    level: "normal",
    type: "fill",
    text: "Lengkapilah pola bilangan berikut.",
    layout: [
      { t: "cell", v: "321" }, { t: "cell", v: "320" },
      { t: "slot", ans: 319, max: 3 }, { t: "slot", ans: 318, max: 3 },
      { t: "cell", v: "317" }, { t: "cell", v: "316" }, { t: "cell", v: "315" }
    ],
    hint: "Setiap langkah berkurang 1.",
    explain: "Polanya berkurang 1: 321, 320, 319, 318, 317, 316, 315."
  },

  {
    tag: "Pola Bilangan",
    level: "hard",
    type: "fill",
    text: "Lengkapilah pola bilangan berikut.",
    layout: [
      { t: "cell", v: "705" }, { t: "cell", v: "605" }, { t: "cell", v: "505" }, { t: "cell", v: "405" },
      { t: "slot", ans: 305, max: 3 }, { t: "slot", ans: 205, max: 3 }
    ],
    hint: "Perhatikan angka ratusannya: 7, 6, 5, 4, ...",
    explain: "Polanya berkurang 100 setiap langkah: 705, 605, 505, 405, 305, 205."
  },

  /* =========================================================
     9. SOAL HOTS — 5 soal
     ========================================================= */

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Gunakan angka <b>2, 6, 8</b> masing-masing satu kali. Susunlah bilangan 3 angka yang <b>lebih besar dari 850</b>.",
    options: ["862", "628", "682", "826"],
    answer: 0,
    hint: "Supaya lebih dari 850, ratusannya harus 8 dan puluhannya harus lebih dari 5.",
    explain: "862 lebih besar dari 850. Pilihan 826 juga berawalan 8, tetapi 826 < 850."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Gunakan angka <b>3, 7, 5</b> masing-masing satu kali.<br>Buatlah bilangan 3 angka yang <b>terkecil</b>.",
    layout: [{ t: "slot", ans: 357, max: 3 }],
    hint: "Letakkan angka terkecil di tempat ratusan.",
    explain: "Urutkan dari yang terkecil: 3, 5, 7. Jadi bilangan terkecilnya adalah 357."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Gunakan angka <b>4, 0, 9</b> masing-masing satu kali.<br>Buatlah bilangan 3 angka yang <b>terbesar</b>.",
    layout: [{ t: "slot", ans: 940, max: 3 }],
    hint: "Angka terbesar diletakkan di tempat ratusan. Angka 0 tidak boleh di depan.",
    explain: "Urutkan dari yang terbesar: 9, 4, 0. Jadi bilangan terbesarnya adalah 940."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Aku sebuah bilangan 3 angka.<br>Ratusanku <b>5</b>, puluhanku <b>0</b>, satuanku <b>2</b>.<br>Bilangan berapakah aku?",
    layout: [{ t: "slot", ans: 502, max: 3 }],
    explain: "5 ratusan, 0 puluhan, dan 2 satuan membentuk bilangan 502."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Aku adalah <b>10 lebihnya</b> dari 495.<br>Bilangan berapakah aku?",
    layout: [{ t: "slot", ans: 505, max: 3 }],
    hint: "9 puluhan ditambah 1 puluhan menjadi 1 ratusan penuh.",
    explain: "495 + 10 = 505. Puluhannya penuh, jadi ratusannya bertambah satu menjadi 5."
  }
];
