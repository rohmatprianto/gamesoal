/* ============================================================
   BANK SOAL — MATEMATIKA Kelas 2 SD, Unit 2 & Unit 3
   Unit 2 : Penjumlahan dan Pengurangan Bilangan sampai 1.000
   Unit 3 : Soal Cerita Penjumlahan dan Pengurangan

   54 soal dalam 12 materi, masing-masing minimal 4 soal.

   Tingkat ditulis langsung pada tiap soal lewat "level":
   - easy   : satu langkah, tanpa me-regrup
   - normal : satu kali me-regrup, atau soal cerita satu langkah
   - hard   : me-regrup dua kali, mengurang dari ratusan bulat,
              dan soal yang perlu penalaran mundur

   VISUAL yang dipakai:
   - pvtable : tabel nilai tempat R | P | S
   - bar     : model batang untuk soal cerita
   ============================================================ */

const MATERI_MTK2 = [
  { ico: "➕", nm: "Menjumlah tanpa Regrup", ds: "Menghitung maju satuan, puluhan, ratusan" },
  { ico: "🔟", nm: "Regrup Satuan", ds: "10 satuan ditukar menjadi 1 puluhan" },
  { ico: "💯", nm: "Regrup Puluhan", ds: "10 puluhan ditukar menjadi 1 ratusan" },
  { ico: "🔁", nm: "Regrup Dua Kali", ds: "Satuan dan puluhan sama-sama menyimpan" },
  { ico: "➖", nm: "Mengurang tanpa Regrup", ds: "Menghitung mundur satuan, puluhan, ratusan" },
  { ico: "🔻", nm: "Meminjam dari Puluhan", ds: "1 puluhan dibuka menjadi 10 satuan" },
  { ico: "🔺", nm: "Meminjam dari Ratusan", ds: "1 ratusan dibuka menjadi 10 puluhan" },
  { ico: "⚙️", nm: "Meminjam Dua Kali", ds: "Meminjam dari puluhan sekaligus ratusan" },
  { ico: "0️⃣", nm: "Mengurang dari Ratusan Bulat", ds: "200, 300, 500, dan seterusnya" },
  { ico: "📦", nm: "Cerita: Jumlah dan Sisa", ds: "Menggabungkan dan mengambil sebagian" },
  { ico: "⚖️", nm: "Cerita: Perbandingan", ds: "Lebih banyak dan lebih sedikit" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Menebak angka hilang dan menalar mundur" }
];

const SOAL_MTK2 = [

  /* =========================================================
     1. MENJUMLAH TANPA REGRUP — 5 soal
     ========================================================= */

  {
    tag: "Menjumlah tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "Hitung maju <b>3 langkah satuan</b> dari 154.<br>154 + 3 = ...",
    layout: [{ t: "slot", ans: 157, max: 3 }],
    hint: "155, 156, lalu berapa?",
    explain: "Menghitung maju 3 langkah dari 154: 155, 156, 157. Jadi 154 + 3 = 157."
  },

  {
    tag: "Menjumlah tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "235 + 30 = ...",
    layout: [{ t: "slot", ans: 265, max: 3 }],
    hint: "30 sama dengan 3 puluhan. Maju 3 langkah puluhan: 245, 255, ...",
    explain: "30 adalah 3 puluhan. Dari 235 maju 3 langkah puluhan: 245, 255, 265."
  },

  {
    tag: "Menjumlah tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "235 + 200 = ...",
    layout: [{ t: "slot", ans: 435, max: 3 }],
    hint: "200 sama dengan 2 ratusan. Hanya angka ratusannya yang berubah.",
    explain: "200 adalah 2 ratusan. Dari 235 maju 2 langkah ratusan: 335, 435."
  },

  {
    tag: "Menjumlah tanpa Regrup",
    level: "normal",
    type: "fill",
    text: "208 + 491 = ...",
    visual: { kind: "pvtable", rows: [[2, 0, 8], [4, 9, 1]] },
    layout: [{ t: "slot", ans: 699, max: 3 }],
    hint: "Jumlahkan satuannya dulu, lalu puluhan, terakhir ratusan.",
    explain: "8 + 1 = 9 satuan, 0 + 9 = 9 puluhan, 2 + 4 = 6 ratusan. Jadi 699. Tidak ada yang perlu ditukar."
  },

  {
    tag: "Menjumlah tanpa Regrup",
    level: "normal",
    type: "match",
    text: "Jodohkan penjumlahan dengan hasilnya.",
    pairs: [
      { a: "516 + 352", b: "868" },
      { a: "440 + 305", b: "745" },
      { a: "53 + 235", b: "288" },
      { a: "427 + 62", b: "489" }
    ],
    explain: "Semua penjumlahan ini tidak perlu me-regrup, karena tiap tempat jumlahnya kurang dari 10."
  },

  /* =========================================================
     2. REGRUP SATUAN — 5 soal
     ========================================================= */

  {
    tag: "Regrup Satuan",
    level: "easy",
    type: "fill",
    text: "Hitung dengan <b>membuat puluhan</b>.<br>254 + 7 = ...",
    layout: [{ t: "slot", ans: 261, max: 3 }],
    hint: "Pinjam 3 dari 254: 251 + 3. Lalu 3 + 7 = 10.",
    explain: "254 dipecah menjadi 251 dan 3. Karena 3 + 7 = 10, maka 251 + 10 = 261."
  },

  {
    tag: "Regrup Satuan",
    level: "easy",
    type: "fill",
    text: "643 + 9 = ...",
    layout: [{ t: "slot", ans: 652, max: 3 }],
    hint: "642 + 1 + 9, dan 1 + 9 = 10.",
    explain: "643 dipecah menjadi 642 dan 1. Karena 1 + 9 = 10, maka 642 + 10 = 652."
  },

  {
    tag: "Regrup Satuan",
    level: "normal",
    type: "fill",
    text: "8 + 526 = ...",
    layout: [{ t: "slot", ans: 534, max: 3 }],
    hint: "Ambil 2 dari 526 untuk melengkapi 8 menjadi 10.",
    explain: "8 + 2 = 10, sisa 524. Jadi 10 + 524 = 534."
  },

  {
    tag: "Regrup Satuan",
    level: "normal",
    type: "fill",
    text: "254 + 127 = ...",
    visual: { kind: "pvtable", rows: [[2, 5, 4], [1, 2, 7]] },
    layout: [{ t: "slot", ans: 381, max: 3 }],
    hint: "4 + 7 = 11 satuan. Tukar 10 satuan menjadi 1 puluhan.",
    explain: "4 + 7 = 11 satuan, ditukar menjadi 1 puluhan 1 satuan. Puluhan: 5 + 2 + 1 = 8. Ratusan: 2 + 1 = 3. Hasilnya 381."
  },

  {
    tag: "Regrup Satuan",
    level: "hard",
    type: "fill",
    text: "465 + 16 = ...",
    layout: [{ t: "slot", ans: 481, max: 3 }],
    hint: "5 + 6 = 11 satuan, ada simpanan 1 puluhan.",
    explain: "5 + 6 = 11 satuan, ditulis 1 simpan 1. Puluhan: 6 + 1 + 1 = 8. Ratusan tetap 4. Hasilnya 481."
  },

  /* =========================================================
     3. REGRUP PULUHAN — 4 soal
     ========================================================= */

  {
    tag: "Regrup Puluhan",
    level: "easy",
    type: "fill",
    text: "Hitung dengan <b>membuat 100</b>.<br>238 + 90 = ...",
    layout: [{ t: "slot", ans: 328, max: 3 }],
    hint: "Pinjam 10 dari 238: 228 + 10, lalu 10 + 90 = 100.",
    explain: "238 dipecah menjadi 228 dan 10. Karena 10 + 90 = 100, maka 228 + 100 = 328."
  },

  {
    tag: "Regrup Puluhan",
    level: "easy",
    type: "fill",
    text: "141 + 60 = ...",
    layout: [{ t: "slot", ans: 201, max: 3 }],
    hint: "Ambil 40 dari 141 untuk melengkapi 60 menjadi 100.",
    explain: "40 + 60 = 100, sisa 101. Jadi 101 + 100 = 201."
  },

  {
    tag: "Regrup Puluhan",
    level: "normal",
    type: "fill",
    text: "70 + 364 = ...",
    layout: [{ t: "slot", ans: 434, max: 3 }],
    hint: "70 + 30 = 100, ambil 30 dari 364.",
    explain: "70 + 30 = 100, sisa 334. Jadi 100 + 334 = 434."
  },

  {
    tag: "Regrup Puluhan",
    level: "hard",
    type: "fill",
    text: "291 + 238 = ...",
    visual: { kind: "pvtable", rows: [[2, 9, 1], [2, 3, 8]] },
    layout: [{ t: "slot", ans: 529, max: 3 }],
    hint: "Puluhannya 9 + 3 = 12 puluhan. Tukar 10 puluhan menjadi 1 ratusan.",
    explain: "Satuan: 1 + 8 = 9. Puluhan: 9 + 3 = 12, ditukar menjadi 1 ratusan 2 puluhan. Ratusan: 2 + 2 + 1 = 5. Hasilnya 529."
  },

  /* =========================================================
     4. REGRUP DUA KALI — 4 soal
     ========================================================= */

  {
    tag: "Regrup Dua Kali",
    level: "normal",
    type: "fill",
    text: "96 + 7 = ...",
    layout: [{ t: "slot", ans: 103, max: 3 }],
    hint: "96 + 4 = 100, sisa 3 lagi.",
    explain: "7 dipecah menjadi 4 dan 3. Karena 96 + 4 = 100, maka 100 + 3 = 103."
  },

  {
    tag: "Regrup Dua Kali",
    level: "normal",
    type: "fill",
    text: "36 + 99 = ...",
    layout: [{ t: "slot", ans: 135, max: 3 }],
    hint: "99 hampir 100. Pinjam 1 dari 36.",
    explain: "99 + 1 = 100, sisa 35. Jadi 100 + 35 = 135."
  },

  {
    tag: "Regrup Dua Kali",
    level: "hard",
    type: "fill",
    text: "386 + 237 = ...",
    visual: { kind: "pvtable", rows: [[3, 8, 6], [2, 3, 7]] },
    layout: [{ t: "slot", ans: 623, max: 3 }],
    hint: "Satuan dan puluhan sama-sama lebih dari 10.",
    explain: "Satuan: 6 + 7 = 13, tulis 3 simpan 1. Puluhan: 8 + 3 + 1 = 12, tulis 2 simpan 1. Ratusan: 3 + 2 + 1 = 6. Hasilnya 623."
  },

  {
    tag: "Regrup Dua Kali",
    level: "hard",
    type: "fill",
    text: "365 + 176 = ...",
    visual: { kind: "pvtable", rows: [[3, 6, 5], [1, 7, 6]] },
    layout: [{ t: "slot", ans: 541, max: 3 }],
    explain: "Satuan: 5 + 6 = 11, tulis 1 simpan 1. Puluhan: 6 + 7 + 1 = 14, tulis 4 simpan 1. Ratusan: 3 + 1 + 1 = 5. Hasilnya 541."
  },

  /* =========================================================
     5. MENGURANG TANPA REGRUP — 5 soal
     ========================================================= */

  {
    tag: "Mengurang tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "Hitung mundur <b>4 langkah satuan</b> dari 217.<br>217 − 4 = ...",
    layout: [{ t: "slot", ans: 213, max: 3 }],
    hint: "216, 215, 214, lalu berapa?",
    explain: "Mundur 4 langkah dari 217: 216, 215, 214, 213. Jadi 217 − 4 = 213."
  },

  {
    tag: "Mengurang tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "385 − 30 = ...",
    layout: [{ t: "slot", ans: 355, max: 3 }],
    hint: "30 sama dengan 3 puluhan. Mundur 3 langkah puluhan.",
    explain: "30 adalah 3 puluhan. Mundur 3 langkah puluhan dari 385: 375, 365, 355."
  },

  {
    tag: "Mengurang tanpa Regrup",
    level: "easy",
    type: "fill",
    text: "642 − 400 = ...",
    layout: [{ t: "slot", ans: 242, max: 3 }],
    hint: "400 sama dengan 4 ratusan. Hanya ratusannya yang berkurang.",
    explain: "400 adalah 4 ratusan. Mundur 4 langkah ratusan dari 642: 542, 442, 342, 242."
  },

  {
    tag: "Mengurang tanpa Regrup",
    level: "normal",
    type: "fill",
    text: "357 − 42 = ...",
    visual: { kind: "pvtable", rows: [[3, 5, 7], [0, 4, 2]] },
    layout: [{ t: "slot", ans: 315, max: 3 }],
    explain: "Satuan: 7 − 2 = 5. Puluhan: 5 − 4 = 1. Ratusan: 3 − 0 = 3. Hasilnya 315."
  },

  {
    tag: "Mengurang tanpa Regrup",
    level: "normal",
    type: "fill",
    text: "935 − 24 = ...",
    layout: [{ t: "slot", ans: 911, max: 3 }],
    explain: "Satuan: 5 − 4 = 1. Puluhan: 3 − 2 = 1. Ratusan tetap 9. Hasilnya 911."
  },

  /* =========================================================
     6. MEMINJAM DARI PULUHAN — 4 soal
     ========================================================= */

  {
    tag: "Meminjam dari Puluhan",
    level: "easy",
    type: "fill",
    text: "Kurangkan dengan <b>mengambil dari 10</b>.<br>273 − 8 = ...",
    layout: [{ t: "slot", ans: 265, max: 3 }],
    hint: "273 dipecah menjadi 263 dan 10. Lalu 10 − 8 = 2.",
    explain: "273 dipecah menjadi 263 dan 10. Karena 10 − 8 = 2, maka 263 + 2 = 265."
  },

  {
    tag: "Meminjam dari Puluhan",
    level: "easy",
    type: "fill",
    text: "145 − 9 = ...",
    layout: [{ t: "slot", ans: 136, max: 3 }],
    hint: "135 + 10, lalu 10 − 9 = 1.",
    explain: "145 dipecah menjadi 135 dan 10. Karena 10 − 9 = 1, maka 135 + 1 = 136."
  },

  {
    tag: "Meminjam dari Puluhan",
    level: "normal",
    type: "fill",
    text: "242 − 27 = ...",
    visual: { kind: "pvtable", rows: [[2, 4, 2], [0, 2, 7]] },
    layout: [{ t: "slot", ans: 215, max: 3 }],
    hint: "2 satuan tidak cukup dikurangi 7. Pinjam 1 puluhan.",
    explain: "Pinjam 1 puluhan: 4 puluhan menjadi 3 puluhan, satuan menjadi 12. Satuan: 12 − 7 = 5. Puluhan: 3 − 2 = 1. Ratusan: 2. Hasilnya 215."
  },

  {
    tag: "Meminjam dari Puluhan",
    level: "hard",
    type: "fill",
    text: "543 − 108 = ...",
    visual: { kind: "pvtable", rows: [[5, 4, 3], [1, 0, 8]] },
    layout: [{ t: "slot", ans: 435, max: 3 }],
    hint: "3 satuan tidak cukup dikurangi 8.",
    explain: "Pinjam 1 puluhan: satuan menjadi 13, puluhan tinggal 3. Satuan: 13 − 8 = 5. Puluhan: 3 − 0 = 3. Ratusan: 5 − 1 = 4. Hasilnya 435."
  },

  /* =========================================================
     7. MEMINJAM DARI RATUSAN — 4 soal
     ========================================================= */

  {
    tag: "Meminjam dari Ratusan",
    level: "normal",
    type: "fill",
    text: "Kurangkan dengan <b>mengambil dari 100</b>.<br>118 − 70 = ...",
    layout: [{ t: "slot", ans: 48, max: 2 }],
    hint: "118 dipecah menjadi 18 dan 100. Lalu 100 − 70 = 30.",
    explain: "118 dipecah menjadi 18 dan 100. Karena 100 − 70 = 30, maka 18 + 30 = 48."
  },

  {
    tag: "Meminjam dari Ratusan",
    level: "normal",
    type: "fill",
    text: "172 − 80 = ...",
    layout: [{ t: "slot", ans: 92, max: 2 }],
    hint: "72 + 100, lalu 100 − 80 = 20.",
    explain: "172 dipecah menjadi 72 dan 100. Karena 100 − 80 = 20, maka 72 + 20 = 92."
  },

  {
    tag: "Meminjam dari Ratusan",
    level: "hard",
    type: "fill",
    text: "518 − 273 = ...",
    visual: { kind: "pvtable", rows: [[5, 1, 8], [2, 7, 3]] },
    layout: [{ t: "slot", ans: 245, max: 3 }],
    hint: "1 puluhan tidak cukup dikurangi 7 puluhan. Pinjam 1 ratusan.",
    explain: "Satuan: 8 − 3 = 5. Puluhan 1 tidak cukup, pinjam 1 ratusan menjadi 11 puluhan: 11 − 7 = 4. Ratusan: 4 − 2 = 2. Hasilnya 245."
  },

  {
    tag: "Meminjam dari Ratusan",
    level: "hard",
    type: "fill",
    text: "359 − 162 = ...",
    layout: [{ t: "slot", ans: 197, max: 3 }],
    hint: "Satuannya cukup, tetapi puluhannya tidak.",
    explain: "Satuan: 9 − 2 = 7. Puluhan 5 tidak cukup dikurangi 6, pinjam 1 ratusan menjadi 15: 15 − 6 = 9. Ratusan: 2 − 1 = 1. Hasilnya 197."
  },

  /* =========================================================
     8. MEMINJAM DUA KALI — 4 soal
     ========================================================= */

  {
    tag: "Meminjam Dua Kali",
    level: "hard",
    type: "fill",
    text: "327 − 159 = ...",
    visual: { kind: "pvtable", rows: [[3, 2, 7], [1, 5, 9]] },
    layout: [{ t: "slot", ans: 168, max: 3 }],
    hint: "Satuan dan puluhan sama-sama perlu meminjam.",
    explain: "Satuan 7 tidak cukup dikurangi 9, pinjam 1 puluhan menjadi 17: 17 − 9 = 8. Puluhan tinggal 1, pinjam 1 ratusan menjadi 11: 11 − 5 = 6. Ratusan: 2 − 1 = 1. Hasilnya 168."
  },

  {
    tag: "Meminjam Dua Kali",
    level: "hard",
    type: "fill",
    text: "443 − 386 = ...",
    visual: { kind: "pvtable", rows: [[4, 4, 3], [3, 8, 6]] },
    layout: [{ t: "slot", ans: 57, max: 2 }],
    hint: "Hasilnya hanya dua angka.",
    explain: "Satuan: pinjam 1 puluhan, 13 − 6 = 7. Puluhan tinggal 3, pinjam 1 ratusan menjadi 13: 13 − 8 = 5. Ratusan: 3 − 3 = 0. Hasilnya 57."
  },

  {
    tag: "Meminjam Dua Kali",
    level: "hard",
    type: "fill",
    text: "924 − 496 = ...",
    layout: [{ t: "slot", ans: 428, max: 3 }],
    explain: "Satuan: pinjam 1 puluhan, 14 − 6 = 8. Puluhan tinggal 1, pinjam 1 ratusan menjadi 11: 11 − 9 = 2. Ratusan: 8 − 4 = 4. Hasilnya 428."
  },

  {
    tag: "Meminjam Dua Kali",
    level: "hard",
    type: "fill",
    text: "751 − 274 = ...",
    layout: [{ t: "slot", ans: 477, max: 3 }],
    explain: "Satuan: pinjam 1 puluhan, 11 − 4 = 7. Puluhan tinggal 4, pinjam 1 ratusan menjadi 14: 14 − 7 = 7. Ratusan: 6 − 2 = 4. Hasilnya 477."
  },

  /* =========================================================
     9. MENGURANG DARI RATUSAN BULAT — 4 soal
     ========================================================= */

  {
    tag: "Mengurang dari Ratusan Bulat",
    level: "normal",
    type: "fill",
    text: "200 − 23 = ...",
    visual: { kind: "pvtable", rows: [[2, 0, 0], [0, 2, 3]] },
    layout: [{ t: "slot", ans: 177, max: 3 }],
    hint: "Tidak ada puluhan untuk dipinjam. Buka dari ratusan dulu.",
    explain: "2 ratusan dibuka menjadi 1 ratusan 10 puluhan, lalu 10 puluhan dibuka menjadi 9 puluhan 10 satuan. Satuan: 10 − 3 = 7. Puluhan: 9 − 2 = 7. Ratusan: 1. Hasilnya 177."
  },

  {
    tag: "Mengurang dari Ratusan Bulat",
    level: "hard",
    type: "fill",
    text: "300 − 187 = ...",
    visual: { kind: "pvtable", rows: [[3, 0, 0], [1, 8, 7]] },
    layout: [{ t: "slot", ans: 113, max: 3 }],
    hint: "Buka dari ratusan lebih dulu, baru dari puluhan.",
    explain: "3 ratusan menjadi 2 ratusan 10 puluhan, lalu 10 puluhan menjadi 9 puluhan 10 satuan. Satuan: 10 − 7 = 3. Puluhan: 9 − 8 = 1. Ratusan: 2 − 1 = 1. Hasilnya 113."
  },

  {
    tag: "Mengurang dari Ratusan Bulat",
    level: "hard",
    type: "fill",
    text: "500 − 278 = ...",
    layout: [{ t: "slot", ans: 222, max: 3 }],
    explain: "Satuan: 10 − 8 = 2. Puluhan: 9 − 7 = 2. Ratusan: 4 − 2 = 2. Hasilnya 222."
  },

  {
    tag: "Mengurang dari Ratusan Bulat",
    level: "hard",
    type: "fill",
    text: "600 − 384 = ...",
    layout: [{ t: "slot", ans: 216, max: 3 }],
    explain: "Satuan: 10 − 4 = 6. Puluhan: 9 − 8 = 1. Ratusan: 5 − 3 = 2. Hasilnya 216."
  },

  /* =========================================================
     10. CERITA: JUMLAH DAN SISA — 5 soal
     ========================================================= */

  {
    tag: "Cerita: Jumlah dan Sisa",
    level: "easy",
    type: "fill",
    text: "Bu Anita punya 23 syal.<br>Ia membeli lagi 7 syal.<br>Berapa syal Bu Anita seluruhnya?",
    visual: {
      kind: "bar",
      total: "?",
      rows: [{ parts: [{ v: 23, label: "23", c: "purple" }, { v: 7, label: "7", c: "orange" }] }]
    },
    layout: [{ t: "slot", ans: 30, max: 2 }],
    hint: "Dua bagian digabung, berarti dijumlahkan.",
    explain: "23 + 7 = 30. Bu Anita punya 30 syal seluruhnya."
  },

  {
    tag: "Cerita: Jumlah dan Sisa",
    level: "easy",
    type: "fill",
    text: "Mira membuat 28 bunga kertas.<br>Susi membuat 37 bunga kertas.<br>Berapa bunga kertas mereka seluruhnya?",
    visual: {
      kind: "bar",
      total: "?",
      rows: [{ parts: [{ v: 28, label: "28", c: "red" }, { v: 37, label: "37" }] }]
    },
    layout: [{ t: "slot", ans: 65, max: 2 }],
    explain: "28 + 37 = 65. Mereka membuat 65 bunga kertas seluruhnya."
  },

  {
    tag: "Cerita: Jumlah dan Sisa",
    level: "normal",
    type: "fill",
    text: "Tuti punya 120 buku.<br>24 di antaranya buku fiksi, sisanya nonfiksi.<br>Berapa buku nonfiksi milik Tuti?",
    visual: {
      kind: "bar",
      total: "120",
      rows: [{ parts: [{ v: 24, label: "24", c: "green" }, { v: 96, label: "?", ghost: true }] }]
    },
    layout: [{ t: "slot", ans: 96, max: 2 }],
    hint: "Seluruhnya dikurangi bagian yang sudah diketahui.",
    explain: "120 − 24 = 96. Tuti punya 96 buku nonfiksi."
  },

  {
    tag: "Cerita: Jumlah dan Sisa",
    level: "normal",
    type: "fill",
    text: "Ada 669 susu kotak di gudang.<br>45 kotak dibuang karena kedaluwarsa.<br>Berapa sisa susu kotak di gudang?",
    visual: {
      kind: "bar",
      total: "669",
      rows: [{ parts: [{ v: 45, label: "45", c: "red" }, { v: 624, label: "?", ghost: true }] }]
    },
    layout: [{ t: "slot", ans: 624, max: 3 }],
    explain: "669 − 45 = 624. Sisa susu kotak di gudang ada 624."
  },

  {
    tag: "Cerita: Jumlah dan Sisa",
    level: "hard",
    type: "fill",
    text: "Setelah menjual 504 salak, Pak Jono masih punya sisa 256 salak.<br>Berapa salak Pak Jono <b>mula-mula</b>?",
    visual: {
      kind: "bar",
      total: "?",
      rows: [{ parts: [{ v: 504, label: "504 terjual", c: "red" }, { v: 256, label: "256 sisa", c: "orange" }] }]
    },
    layout: [{ t: "slot", ans: 760, max: 3 }],
    hint: "Yang terjual dan yang tersisa digabung kembali.",
    explain: "Yang terjual ditambah yang tersisa: 504 + 256 = 760. Mula-mula Pak Jono punya 760 salak."
  },

  /* =========================================================
     11. CERITA: PERBANDINGAN — 5 soal
     ========================================================= */

  {
    tag: "Cerita: Perbandingan",
    level: "easy",
    type: "fill",
    text: "Dewi punya 5 boneka panda.<br>Klara punya 2 boneka <b>lebih banyak</b> daripada Dewi.<br>Berapa boneka panda Klara?",
    visual: {
      kind: "bar",
      max: 7,
      rows: [
        { nm: "Dewi", parts: [{ v: 5, label: "5", c: "green" }] },
        { nm: "Klara", parts: [{ v: 5, label: "5", c: "red" }, { v: 2, label: "2", ghost: true }] }
      ]
    },
    layout: [{ t: "slot", ans: 7, max: 1 }],
    hint: "Lebih banyak berarti ditambah.",
    explain: "5 + 2 = 7. Klara punya 7 boneka panda."
  },

  {
    tag: "Cerita: Perbandingan",
    level: "normal",
    type: "fill",
    text: "Susi mengoleksi 68 kartu.<br>Yanto mengoleksi 54 kartu.<br>Berapa <b>lebih banyak</b> kartu Susi daripada Yanto?",
    visual: {
      kind: "bar",
      max: 68,
      rows: [
        { nm: "Susi", parts: [{ v: 68, label: "68" }] },
        { nm: "Yanto", parts: [{ v: 54, label: "54", c: "purple" }, { v: 14, label: "?", ghost: true }] }
      ]
    },
    layout: [{ t: "slot", ans: 14, max: 2 }],
    hint: "Mencari selisih berarti dikurangkan.",
    explain: "68 − 54 = 14. Susi mengoleksi 14 kartu lebih banyak daripada Yanto."
  },

  {
    tag: "Cerita: Perbandingan",
    level: "normal",
    type: "fill",
    text: "Ada 184 mangga di kios buah.<br>Durian ada 21 <b>lebih banyak</b> daripada mangga.<br>Berapa banyak durian di kios itu?",
    visual: {
      kind: "bar",
      max: 205,
      rows: [
        { nm: "mangga", parts: [{ v: 184, label: "184", c: "orange" }] },
        { nm: "durian", parts: [{ v: 184, label: "184", c: "green" }, { v: 21, label: "21", ghost: true }] }
      ]
    },
    layout: [{ t: "slot", ans: 205, max: 3 }],
    explain: "184 + 21 = 205. Ada 205 durian di kios buah."
  },

  {
    tag: "Cerita: Perbandingan",
    level: "hard",
    type: "fill",
    text: "Ada 258 wanita dan 217 pria dalam sebuah konser amal.<br>Berapa <b>lebih sedikit</b> pria daripada wanita?",
    visual: {
      kind: "bar",
      max: 258,
      rows: [
        { nm: "wanita", parts: [{ v: 258, label: "258", c: "purple" }] },
        { nm: "pria", parts: [{ v: 217, label: "217" }, { v: 41, label: "?", ghost: true }] }
      ]
    },
    hint: "Lebih sedikit juga dicari dengan pengurangan.",
    layout: [{ t: "slot", ans: 41, max: 2 }],
    explain: "258 − 217 = 41. Pria 41 orang lebih sedikit daripada wanita."
  },

  {
    tag: "Cerita: Perbandingan",
    level: "hard",
    type: "fill",
    text: "Udin membuat 49 pesawat kertas.<br>Pesawat Udin 4 buah <b>lebih sedikit</b> daripada Ucok.<br>Berapa pesawat kertas yang Ucok buat?",
    visual: {
      kind: "bar",
      max: 53,
      rows: [
        { nm: "Udin", parts: [{ v: 49, label: "49", c: "red" }] },
        { nm: "Ucok", parts: [{ v: 49, label: "49", c: "orange" }, { v: 4, label: "4", ghost: true }] }
      ]
    },
    layout: [{ t: "slot", ans: 53, max: 2 }],
    hint: "Udin lebih sedikit, berarti Ucok lebih banyak.",
    explain: "Karena Udin 4 lebih sedikit, maka Ucok lebih banyak: 49 + 4 = 53 pesawat kertas."
  },

  /* =========================================================
     12. SOAL HOTS — 5 soal
     ========================================================= */

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Beni punya 12 perangko, Roni punya 8 perangko.<br>Beni memberi beberapa perangko kepada Roni sampai <b>sama banyak</b>.<br>Berapa perangko yang Beni berikan?",
    layout: [{ t: "slot", ans: 2, max: 1 }],
    hint: "Hitung dulu berapa perangko mereka kalau digabung, lalu bagi rata.",
    explain: "12 + 8 = 20 perangko, dibagi rata menjadi 10 dan 10. Beni harus memberi 12 − 10 = 2 perangko."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Isilah angka yang hilang.<br><b>210 − 1?7 = 43</b>",
    layout: [{ t: "slot", ans: 6, max: 1 }],
    hint: "Coba hitung mundur: 43 + 1?7 harus sama dengan 210.",
    explain: "210 − 43 = 167. Jadi angka yang hilang adalah 6."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Isilah angka yang hilang.<br><b>3?0 − 172 = 128</b>",
    layout: [{ t: "slot", ans: 0, max: 1 }],
    hint: "128 + 172 berapa?",
    explain: "128 + 172 = 300. Jadi angka yang hilang adalah 0."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "group",
    text: "Kelompokkan penjumlahan berikut.",
    bins: [
      { id: "perlu", nm: "Perlu Me-regrup", ico: "🔁" },
      { id: "tanpa", nm: "Tanpa Me-regrup", ico: "✅" }
    ],
    items: [
      { v: "48 + 7", bin: "perlu" },
      { v: "256 + 39", bin: "perlu" },
      { v: "175 + 90", bin: "perlu" },
      { v: "42 + 36", bin: "tanpa" },
      { v: "314 + 25", bin: "tanpa" },
      { v: "503 + 261", bin: "tanpa" }
    ],
    hint: "Perlu me-regrup kalau ada tempat yang jumlahnya 10 atau lebih.",
    explain: "48 + 7 satuannya 15, 256 + 39 satuannya 15, 175 + 90 puluhannya 16 — ketiganya perlu ditukar. Tiga sisanya tiap tempat kurang dari 10."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "order",
    text: "Urutkan hasil pengurangan berikut dari yang <b>terkecil</b>.",
    items: ["500 − 260", "500 − 180", "500 − 355"],
    answer: ["500 − 355", "500 − 260", "500 − 180"],
    note: "Ketuk mulai dari hasil yang paling kecil",
    hint: "Makin besar yang dikurangkan, makin kecil hasilnya.",
    explain: "Hasilnya 145, 240, dan 320. Urutan terkecil: 500 − 355, lalu 500 − 260, lalu 500 − 180."
  }
];
