/* ============================================================
   BANK SOAL — Unit 1: Bilangan Cacah sampai dengan 1.000
   Kelas 2 SD. 20 soal, mencakup 7 kelompok materi.

   TIPE SOAL:
   - "fill"    : isian dengan papan angka (bisa banyak kotak)
   - "mcq"     : pilihan ganda
   - "compare" : memilih tanda  >  atau  <
   - "order"   : mengurutkan tiga bilangan dengan cara diketuk
   - "match"   : menjodohkan bilangan dengan namanya

   VISUAL (opsional):
   - blocks  : blok ratusan / puluhan / satuan
   - jars    : toples permen 100, kantong 10, permen satuan
   - pvtable : tabel nilai tempat
   ============================================================ */

/* ============================================================
   DAFTAR PELAJARAN yang tampil di halaman awal.
   Menambah pelajaran baru cukup menambah satu objek di sini:
     - bank   : larik soal (lihat QUESTIONS di bawah)
     - materi : daftar materi untuk layar "Lihat Materi"
   Pelajaran yang banknya masih kosong otomatis tampil
   sebagai "Segera" dan belum bisa diketuk.
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
      bank: SOAL_PANCASILA,    // masih kosong -> tombol tampil "Segera"
      materi: MATERI_PANCASILA
    }
  ];
}

const MATERI = [
  { ico: "🧮", nm: "Menghitung Benda sampai 1.000", ds: "Membaca blok ratusan, puluhan, dan satuan" },
  { ico: "🔤", nm: "Nama Bilangan", ds: "Menulis nama bilangan dan sebaliknya" },
  { ico: "🏠", nm: "Nilai Tempat", ds: "Ratusan, puluhan, satuan, dan bentuk panjang" },
  { ico: "⚖️", nm: "Membandingkan Bilangan", ds: "Lebih besar, lebih kecil, tanda > dan <" },
  { ico: "📊", nm: "Mengurutkan Bilangan", ds: "Urut dari terbesar atau terkecil" },
  { ico: "🔢", nm: "Pola Bilangan", ds: "1, 10, dan 100 lebihnya atau kurangnya" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Menyusun bilangan dan berpikir tingkat tinggi" }
];

const QUESTIONS = [

  /* ---------- 1. Menghitung benda dengan blok ---------- */
  {
    tag: "Menghitung Benda",
    type: "fill",
    text: "Hitunglah blok di bawah ini. Berapa bilangannya?",
    visual: { kind: "blocks", h: 3, t: 4, o: 2 },
    layout: [{ t: "slot", ans: 342, max: 3 }],
    hint: "1 papan besar = 100, 1 batang = 10, 1 kubus kecil = 1.",
    explain: "3 ratusan + 4 puluhan + 2 satuan = 300 + 40 + 2 = 342."
  },

  /* ---------- 2. Nama bilangan ---------- */
  {
    tag: "Nama Bilangan",
    type: "mcq",
    text: "Apa nama bilangan <b>513</b>?",
    options: ["Lima ratus tiga belas", "Lima ratus tiga puluh", "Lima puluh tiga belas", "Lima ratus tiga"],
    answer: 0,
    explain: "513 dibaca lima ratus tiga belas, karena 13 dibaca tiga belas."
  },

  /* ---------- 3. Menulis bilangan dari namanya ---------- */
  {
    tag: "Nama Bilangan",
    type: "fill",
    text: "Tulislah bilangannya:<br><b>delapan ratus tujuh</b>",
    layout: [{ t: "slot", ans: 807, max: 3 }],
    hint: "Tidak ada puluhan, jadi tempat puluhan diisi angka 0.",
    explain: "Delapan ratus tujuh = 800 + 0 + 7 = 807. Jangan lupa angka 0 di puluhan!"
  },

  /* ---------- 4. Nilai tempat dari gambar blok ---------- */
  {
    tag: "Nilai Tempat",
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

  /* ---------- 5. Bentuk panjang ---------- */
  {
    tag: "Bentuk Panjang",
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

  /* ---------- 6. Nilai angka ---------- */
  {
    tag: "Nilai Angka",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>573</b>, angka <b>5</b> bernilai ...",
    options: ["5", "50", "500", "5.000"],
    answer: 2,
    explain: "Angka 5 berada di tempat ratusan, jadi nilainya 500."
  },

  /* ---------- 7. Letak angka ---------- */
  {
    tag: "Nilai Tempat",
    type: "mcq",
    grid: true,
    text: "Pada bilangan <b>317</b>, angka <b>7</b> berada di tempat ...",
    visual: { kind: "pvtable", digits: [3, 1, 7] },
    options: ["Ratusan", "Puluhan", "Satuan", "Ribuan"],
    answer: 2,
    explain: "Angka paling kanan selalu menempati tempat satuan. Jadi 7 bernilai 7."
  },

  /* ---------- 8. Membandingkan (ratusan berbeda) ---------- */
  {
    tag: "Membandingkan",
    type: "compare",
    text: "Isilah dengan tanda yang tepat.",
    a: 357, b: 412,
    hint: "Bandingkan dulu angka ratusannya: 3 atau 4?",
    explain: "Ratusan 357 adalah 3, ratusan 412 adalah 4. Karena 3 kurang dari 4, maka 357 < 412."
  },

  /* ---------- 9. Membandingkan (ratusan sama) ---------- */
  {
    tag: "Membandingkan",
    type: "compare",
    text: "Isilah dengan tanda yang tepat.",
    a: 623, b: 632,
    visual: { kind: "pvtable", rows: [[6, 2, 3], [6, 3, 2]] },
    hint: "Ratusannya sama-sama 6. Lanjut lihat puluhannya.",
    explain: "Ratusan sama (6). Puluhan 623 adalah 2, puluhan 632 adalah 3. Karena 2 < 3, maka 623 < 632."
  },

  /* ---------- 10. Memilih yang lebih besar ---------- */
  {
    tag: "Membandingkan",
    type: "mcq",
    grid: true,
    text: "Bilangan manakah yang <b>lebih besar</b>?",
    visual: { kind: "pvtable", rows: [[9, 4, 1], [7, 9, 0]] },
    options: ["941", "790"],
    answer: 0,
    explain: "941 punya 9 ratusan, 790 punya 7 ratusan. 9 lebih dari 7, jadi 941 lebih besar."
  },

  /* ---------- 11. Mengurutkan dari terbesar ---------- */
  {
    tag: "Mengurutkan",
    type: "order",
    text: "Urutkan dari yang <b>terbesar</b>.",
    items: [518, 357, 437],
    dir: "desc",
    explain: "Urutan dari terbesar: 518, 437, 357."
  },

  /* ---------- 12. Mengurutkan dari terkecil ---------- */
  {
    tag: "Mengurutkan",
    type: "order",
    text: "Urutkan dari yang <b>terkecil</b>.",
    items: [546, 544, 649],
    dir: "asc",
    hint: "546 dan 544 ratusannya sama. Lihat satuannya!",
    explain: "Urutan dari terkecil: 544, 546, 649."
  },

  /* ---------- 13. Pola: 1 lebihnya ---------- */
  {
    tag: "Pola Bilangan",
    type: "fill",
    text: "<b>1 lebihnya</b> dari 629 adalah ...",
    layout: [{ t: "slot", ans: 630, max: 3 }],
    hint: "9 satuan ditambah 1 menjadi 1 puluhan penuh.",
    explain: "629 + 1 = 630. Satuan 9 penuh, jadi puluhan bertambah satu."
  },

  /* ---------- 14. Pola: 10 kurangnya ---------- */
  {
    tag: "Pola Bilangan",
    type: "fill",
    text: "<b>10 kurangnya</b> dari 250 adalah ...",
    layout: [{ t: "slot", ans: 240, max: 3 }],
    explain: "250 - 10 = 240. Hanya angka puluhannya yang berkurang satu."
  },

  /* ---------- 15. Pola: 100 lebihnya ---------- */
  {
    tag: "Pola Bilangan",
    type: "fill",
    text: "<b>100 lebihnya</b> dari 489 adalah ...",
    layout: [{ t: "slot", ans: 589, max: 3 }],
    explain: "489 + 100 = 589. Hanya angka ratusannya yang bertambah satu."
  },

  /* ---------- 16. Melengkapi pola menurun ---------- */
  {
    tag: "Pola Bilangan",
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

  /* ---------- 17. Melengkapi pola loncat 100 ---------- */
  {
    tag: "Pola Bilangan",
    type: "fill",
    text: "Lengkapilah pola bilangan berikut.",
    layout: [
      { t: "cell", v: "705" }, { t: "cell", v: "605" }, { t: "cell", v: "505" }, { t: "cell", v: "405" },
      { t: "slot", ans: 305, max: 3 }, { t: "slot", ans: 205, max: 3 }
    ],
    hint: "Perhatikan angka ratusannya: 7, 6, 5, 4, ...",
    explain: "Polanya berkurang 100 setiap langkah: 705, 605, 505, 405, 305, 205."
  },

  /* ---------- 18. Menjodohkan nama bilangan ---------- */
  {
    tag: "Nama Bilangan",
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

  /* ---------- 19. Menghitung toples permen ---------- */
  {
    tag: "Menghitung Benda",
    type: "fill",
    text: "Hitunglah jumlah kelereng berikut.",
    visual: { kind: "jars", h: 7, t: 3, o: 6 },
    layout: [{ t: "slot", ans: 736, max: 3 }],
    hint: "Hitung toples dulu (ratusan), lalu kantong (puluhan), baru butirannya.",
    explain: "7 toples (700) + 3 kantong (30) + 6 butir (6) = 736."
  },

  /* ---------- 20. HOTS: menyusun bilangan ---------- */
  {
    tag: "Soal HOTS",
    type: "mcq",
    grid: true,
    text: "Gunakan angka <b>2, 6, 8</b> masing-masing satu kali. Susunlah bilangan 3 angka yang <b>lebih besar dari 850</b>.",
    options: ["628", "862", "682", "826"],
    answer: 1,
    hint: "Supaya lebih dari 850, ratusannya harus 8 dan puluhannya harus lebih dari 5.",
    explain: "862 lebih besar dari 850. Pilihan 826 juga berawalan 8, tetapi 826 < 850."
  }
];
