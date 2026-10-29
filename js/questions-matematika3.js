/* ============================================================
   BANK SOAL — MATEMATIKA Kelas 2 SD, Unit 4 "Perkalian"
   48 soal dalam 7 materi, masing-masing minimal 5 soal.

   Bentuk soal mengikuti buku: gambar kelompok atau barisan,
   lalu isian bertingkat seperti
       Ada [ ] kantong.  Tiap kantong berisi [ ].
       [ ] + [ ] = [ ]   [ ] × [ ] = [ ]
   Perkalian ditulis "banyak kelompok × isi tiap kelompok",
   jadi 4 piring berisi 3 adalah 4 × 3 = 3 + 3 + 3 + 3.

   Tingkat ditulis langsung pada tiap soal lewat "level":
   - easy   : membaca satu gambar kelompok, perkalian kecil
   - normal : barisan, cerita perkalian, membuat kelompok
   - hard   : sifat pertukaran dan soal yang perlu penalaran

   VISUAL yang dipakai:
   - groups : wadah berisi benda (wadah: piring / kotak / kantong)
   - array  : barisan benda, rows baris × cols benda
   ============================================================ */

const MATERI_MTK3 = [
  { ico: "🍽️", nm: "Kelompok Sama Banyak", ds: "Tiap piring berisi sama banyak" },
  { ico: "➕", nm: "Penjumlahan Berulang", ds: "3 + 3 + 3 + 3 ditulis 4 × 3" },
  { ico: "🔢", nm: "Barisan Sama Banyak", ds: "Ada 3 baris, tiap baris berisi 4" },
  { ico: "📖", nm: "Cerita Perkalian", ds: "Kantong mangga, paket baterai, pot bunga" },
  { ico: "⭕", nm: "Membuat Kelompok", ds: "Melingkari benda menjadi kelompok sama banyak" },
  { ico: "🔄", nm: "Sifat Pertukaran", ds: "2 × 4 sama hasilnya dengan 4 × 2" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Ayam, kambing, dan teka-teki perkalian" }
];

/* penyingkat untuk menulis isian bertingkat */
const kata = (v) => ({ t: "word", v });       // kata biasa
const tanda = (v) => ({ t: "text", v });      // tanda + × =
const kotak = (ans) => ({ t: "slot", ans, max: String(ans).length });
const BARIS = { t: "br" };                    // pindah baris

const SOAL_MTK3 = [

  /* =========================================================
     1. KELOMPOK SAMA BANYAK — 7 soal
     ========================================================= */

  {
    tag: "Kelompok Sama Banyak",
    level: "easy",
    type: "fill",
    text: "Perhatikan piring berikut.",
    visual: { kind: "groups", wadah: "piring", ico: "🔴", isi: [3, 3, 3, 3] },
    layout: [kata("Ada"), kotak(4), kata("piring."), BARIS, kata("Tiap piring berisi"), kotak(3), kata("kancing.")],
    explain: "Ada 4 piring, dan tiap piring berisi 3 kancing. Ini disebut 4 kelompok isi 3."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "easy",
    type: "fill",
    text: "Ada 4 piring. Tiap piring berisi 3 kancing.<br>Berapa kancing seluruhnya?",
    visual: { kind: "groups", wadah: "piring", ico: "🔴", isi: [3, 3, 3, 3] },
    layout: [tanda("3 + 3 + 3 + 3 ="), kotak(12), BARIS, tanda("4 ×"), kotak(3), tanda("="), kotak(12)],
    explain: "3 + 3 + 3 + 3 = 12. Ditulis sebagai kalimat perkalian 4 × 3 = 12."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "easy",
    type: "fill",
    text: "Ada 2 kantong. Tiap kantong berisi 3 mangga.",
    visual: { kind: "groups", wadah: "kantong", ico: "🥭", isi: [3, 3] },
    layout: [kotak(3), tanda("+"), kotak(3), tanda("="), kotak(6), BARIS, kotak(2), tanda("×"), kotak(3), tanda("="), kotak(6)],
    explain: "3 + 3 = 6, sama dengan 2 × 3 = 6. Ada 6 mangga seluruhnya."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>4 × 3 = 12</b> dibaca ...",
    options: [
      "Empat dikali tiga sama dengan dua belas",
      "Empat ditambah tiga sama dengan dua belas",
      "Tiga dikali empat sama dengan tujuh",
      "Empat dikurang tiga sama dengan dua belas"
    ],
    answer: 0,
    explain: "Tanda × dibaca dikali. Jadi 4 × 3 = 12 dibaca empat dikali tiga sama dengan dua belas."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "easy",
    type: "fill",
    text: "Ada 3 piring. Tiap piring berisi 2 kue.",
    visual: { kind: "groups", wadah: "piring", ico: "🍪", isi: [2, 2, 2] },
    layout: [kotak(3), tanda("×"), kotak(2), tanda("="), kotak(6), BARIS, kata("Ada"), kotak(6), kata("kue seluruhnya.")],
    explain: "3 piring isi 2: 2 + 2 + 2 = 6. Jadi 3 × 2 = 6."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "normal",
    type: "mcq",
    text: "Mengapa gambar ini <b>tidak bisa</b> ditulis sebagai perkalian?",
    visual: { kind: "groups", wadah: "piring", ico: "🔴", isi: [3, 2, 4] },
    options: [
      "Karena isi tiap piring tidak sama banyak",
      "Karena piringnya ada 3",
      "Karena kancingnya berwarna merah",
      "Karena kancingnya terlalu sedikit"
    ],
    answer: 0,
    explain: "Perkalian hanya untuk kelompok yang isinya sama banyak. Di sini isinya 3, 2, dan 4."
  },

  {
    tag: "Kelompok Sama Banyak",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Kalimat perkalian yang tepat untuk gambar ini adalah ...",
    visual: { kind: "groups", wadah: "kotak", ico: "🍩", isi: [4, 4, 4] },
    options: ["3 × 4 = 12", "4 × 3 = 7", "3 + 4 = 7", "4 × 4 = 16"],
    answer: 0,
    explain: "Ada 3 kotak, tiap kotak berisi 4 donat. 3 × 4 = 12."
  },

  /* =========================================================
     2. PENJUMLAHAN BERULANG — 7 soal
     ========================================================= */

  {
    tag: "Penjumlahan Berulang",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>5 + 5 + 5</b> sama dengan ...",
    options: ["3 × 5", "5 × 5", "3 + 5", "5 × 1"],
    answer: 0,
    explain: "Angka 5 dijumlahkan 3 kali, jadi ditulis 3 × 5."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "easy",
    type: "fill",
    text: "Ubahlah menjadi perkalian.",
    layout: [tanda("2 + 2 + 2 + 2 ="), kotak(4), tanda("×"), kotak(2)],
    explain: "Angka 2 dijumlahkan 4 kali, jadi 2 + 2 + 2 + 2 = 4 × 2."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "easy",
    type: "fill",
    text: "Ubahlah menjadi perkalian, lalu hitung hasilnya.",
    layout: [tanda("4 + 4 + 4 ="), kotak(3), tanda("×"), kotak(4), BARIS, tanda("="), kotak(12)],
    explain: "4 dijumlahkan 3 kali: 3 × 4 = 12."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "normal",
    type: "fill",
    text: "Tuliskan penjumlahan berulangnya.",
    layout: [tanda("3 × 5 ="), kotak(5), tanda("+"), kotak(5), tanda("+"), kotak(5), BARIS, tanda("="), kotak(15)],
    hint: "3 × 5 artinya 5 dijumlahkan sebanyak 3 kali.",
    explain: "3 × 5 = 5 + 5 + 5 = 15."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "<b>4 × 2</b> sama dengan ...",
    options: ["2 + 2 + 2 + 2", "4 + 4 + 4 + 4", "4 + 2", "2 + 2"],
    answer: 0,
    explain: "4 × 2 artinya 4 kelompok isi 2: 2 + 2 + 2 + 2 = 8."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "normal",
    type: "fill",
    text: "Hitunglah.",
    layout: [tanda("6 + 6 + 6 ="), kotak(3), tanda("×"), kotak(6), tanda("="), kotak(18)],
    explain: "6 dijumlahkan 3 kali: 3 × 6 = 6 + 6 + 6 = 18."
  },

  {
    tag: "Penjumlahan Berulang",
    level: "hard",
    type: "fill",
    text: "Lanjutkan hitungan loncat 5, lalu tulis perkaliannya.",
    layout: [tanda("5, 10, 15,"), kotak(20), BARIS, kata("Jadi"), kotak(4), tanda("× 5 ="), kotak(20)],
    explain: "5, 10, 15, 20. Empat kali loncat 5 sampai 20, jadi 4 × 5 = 20."
  },

  /* =========================================================
     3. BARISAN SAMA BANYAK — 7 soal
     ========================================================= */

  {
    tag: "Barisan Sama Banyak",
    level: "easy",
    type: "fill",
    text: "Perhatikan barisan kancing berikut.",
    visual: { kind: "array", ico: "🔴", rows: 3, cols: 4 },
    layout: [kata("Ada"), kotak(3), kata("baris."), BARIS, kata("Tiap baris berisi"), kotak(4), kata("kancing.")],
    explain: "Ada 3 baris, tiap baris berisi 4 kancing."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "normal",
    type: "fill",
    text: "Ada 3 baris. Tiap baris berisi 4 kancing.<br>Berapa kancing seluruhnya?",
    visual: { kind: "array", ico: "🔴", rows: 3, cols: 4 },
    layout: [tanda("4 + 4 + 4 ="), kotak(12), BARIS, kotak(3), tanda("×"), kotak(4), tanda("="), kotak(12)],
    explain: "4 + 4 + 4 = 12, sama dengan 3 × 4 = 12."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "normal",
    type: "fill",
    text: "Ada 4 baris. Tiap baris berisi 3 kancing.",
    visual: { kind: "array", ico: "🔵", rows: 4, cols: 3 },
    layout: [tanda("3 + 3 + 3 + 3 ="), kotak(12), BARIS, kotak(4), tanda("×"), kotak(3), tanda("="), kotak(12)],
    explain: "4 baris isi 3: 3 + 3 + 3 + 3 = 12. Jadi 4 × 3 = 12."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "normal",
    type: "fill",
    text: "Berapa roti seluruhnya?",
    visual: { kind: "array", ico: "🥖", rows: 2, cols: 4 },
    layout: [kata("Ada"), kotak(2), kata("baris."), BARIS, kata("Tiap baris berisi"), kotak(4), kata("roti."), BARIS, kotak(2), tanda("×"), kotak(4), tanda("="), kotak(8)],
    explain: "Ada 2 baris, tiap baris berisi 4 roti. 2 × 4 = 8 roti."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "normal",
    type: "fill",
    text: "Berapa mainan seluruhnya?",
    visual: { kind: "array", ico: "💂", rows: 3, cols: 5 },
    layout: [kotak(3), tanda("×"), kotak(5), tanda("="), kotak(15), BARIS, kata("Ada"), kotak(15), kata("mainan seluruhnya.")],
    explain: "Ada 3 baris, tiap baris berisi 5 mainan. 3 × 5 = 15."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "normal",
    type: "fill",
    text: "Berapa kue seluruhnya?",
    visual: { kind: "array", ico: "🧁", rows: 3, cols: 4 },
    layout: [tanda("4 + 4 + 4 ="), kotak(12), BARIS, kotak(3), tanda("×"), kotak(4), tanda("="), kotak(12)],
    explain: "Ada 3 baris, tiap baris berisi 4 kue. 4 + 4 + 4 = 12, jadi 3 × 4 = 12."
  },

  {
    tag: "Barisan Sama Banyak",
    level: "hard",
    type: "fill",
    text: "Kue disusun 5 baris. Tiap baris berisi 6 kue.<br>Berapa kue seluruhnya?",
    visual: { kind: "array", ico: "🧁", rows: 5, cols: 6 },
    layout: [kotak(5), tanda("×"), kotak(6), tanda("="), kotak(30)],
    hint: "Hitung loncat 6: 6, 12, 18, ...",
    explain: "5 × 6 = 6 + 6 + 6 + 6 + 6 = 30 kue."
  },

  /* =========================================================
     4. CERITA PERKALIAN — 8 soal
     ========================================================= */

  {
    tag: "Cerita Perkalian",
    level: "easy",
    type: "fill",
    text: "Ada 2 bunga. Tiap bunga mempunyai 5 kelopak.",
    visual: { kind: "groups", ico: "🌸", isi: [5, 5] },
    layout: [kotak(2), tanda("×"), kotak(5), tanda("="), kotak(10), BARIS, kata("Ada"), kotak(10), kata("kelopak seluruhnya.")],
    explain: "2 bunga, masing-masing 5 kelopak: 2 × 5 = 10 kelopak."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "fill",
    text: "Ada 3 paket. Tiap paket berisi 4 baterai.",
    visual: { kind: "groups", wadah: "kotak", ico: "🔋", isi: [4, 4, 4] },
    layout: [tanda("4 + 4 + 4 ="), kotak(12), BARIS, kotak(3), tanda("×"), kotak(4), tanda("="), kotak(12)],
    explain: "4 + 4 + 4 = 12, jadi 3 × 4 = 12 baterai."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "fill",
    text: "Ada 4 pot. Tiap pot berisi 5 bunga.",
    visual: { kind: "groups", ico: "🌻", isi: [5, 5, 5, 5] },
    layout: [kata("Ada"), kotak(4), kata("pot."), BARIS, kata("Tiap pot berisi"), kotak(5), kata("bunga."), BARIS, kotak(4), tanda("×"), kotak(5), tanda("="), kotak(20)],
    explain: "4 pot isi 5 bunga: 5 + 5 + 5 + 5 = 20. Jadi 4 × 5 = 20 bunga."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "fill",
    text: "Ada 2 kotak donat. Setiap kotak berisi 6 donat.",
    visual: { kind: "groups", wadah: "kotak", ico: "🍩", isi: [6, 6] },
    layout: [kotak(2), tanda("×"), kotak(6), tanda("="), kotak(12), BARIS, kata("Ada"), kotak(12), kata("donat seluruhnya.")],
    explain: "2 kotak isi 6: 6 + 6 = 12. Jadi 2 × 6 = 12 donat."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "fill",
    text: "Ada 3 kotak pensil. Setiap kotak berisi 2 pensil.",
    visual: { kind: "groups", wadah: "kotak", ico: "✏️", isi: [2, 2, 2] },
    layout: [kotak(3), tanda("×"), kotak(2), tanda("="), kotak(6), BARIS, kata("Ada"), kotak(6), kata("pensil seluruhnya.")],
    explain: "3 kotak isi 2: 2 + 2 + 2 = 6. Jadi 3 × 2 = 6 pensil."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "fill",
    text: "Ada 4 kelompok tomat. Tiap kelompok berisi 5 tomat.",
    visual: { kind: "groups", ico: "🍅", isi: [5, 5, 5, 5] },
    layout: [kotak(4), tanda("×"), kotak(5), tanda("="), kotak(20)],
    explain: "4 kelompok isi 5: 4 × 5 = 20 tomat."
  },

  {
    tag: "Cerita Perkalian",
    level: "normal",
    type: "mcq",
    text: "Ibu membeli 5 bungkus roti. Tiap bungkus berisi 2 roti.<br>Kalimat perkalian yang tepat adalah ...",
    options: ["5 × 2 = 10", "5 + 2 = 7", "2 × 2 = 4", "5 × 5 = 25"],
    answer: 0,
    explain: "5 bungkus isi 2: 5 × 2 = 10 roti."
  },

  {
    tag: "Cerita Perkalian",
    level: "hard",
    type: "fill",
    text: "Seekor kucing memiliki 4 kaki.<br>Berapa kaki 3 ekor kucing?",
    layout: [kotak(3), tanda("×"), kotak(4), tanda("="), kotak(12), BARIS, kata("Ada"), kotak(12), kata("kaki seluruhnya.")],
    hint: "Ada 3 kelompok, tiap kelompok berisi 4 kaki.",
    explain: "3 kucing, tiap kucing 4 kaki: 3 × 4 = 12 kaki."
  },

  /* =========================================================
     5. MEMBUAT KELOMPOK — 6 soal
     ========================================================= */

  {
    tag: "Membuat Kelompok",
    level: "normal",
    type: "fill",
    text: "Buatlah kelompok isi 5 dari stroberi berikut.",
    visual: { kind: "array", ico: "🍓", rows: 2, cols: 5 },
    layout: [kotak(2), kata("kelompok isi 5."), BARIS, kotak(2), tanda("×"), kotak(5), tanda("="), kotak(10)],
    explain: "10 stroberi menjadi 2 kelompok isi 5. 2 × 5 = 10."
  },

  {
    tag: "Membuat Kelompok",
    level: "normal",
    type: "fill",
    text: "Buatlah kelompok isi 2 dari stroberi berikut.",
    visual: { kind: "array", ico: "🍓", rows: 2, cols: 5 },
    layout: [kotak(5), kata("kelompok isi 2."), BARIS, kotak(5), tanda("×"), kotak(2), tanda("="), kotak(10)],
    hint: "Lingkari 2 stroberi sekaligus, lalu hitung berapa lingkaran.",
    explain: "10 stroberi menjadi 5 kelompok isi 2. 5 × 2 = 10."
  },

  {
    tag: "Membuat Kelompok",
    level: "normal",
    type: "fill",
    text: "Buatlah kelompok isi 4 dari wajah senyum berikut.",
    visual: { kind: "array", ico: "😊", rows: 3, cols: 4 },
    layout: [kotak(3), kata("kelompok isi 4."), BARIS, kotak(3), tanda("×"), kotak(4), tanda("="), kotak(12)],
    explain: "12 wajah senyum menjadi 3 kelompok isi 4. 3 × 4 = 12."
  },

  {
    tag: "Membuat Kelompok",
    level: "normal",
    type: "fill",
    text: "Buatlah kelompok isi 3 dari wajah senyum berikut.",
    visual: { kind: "array", ico: "😊", rows: 3, cols: 4 },
    layout: [kotak(4), kata("kelompok isi 3."), BARIS, kotak(4), tanda("×"), kotak(3), tanda("="), kotak(12)],
    explain: "12 wajah senyum menjadi 4 kelompok isi 3. 4 × 3 = 12."
  },

  {
    tag: "Membuat Kelompok",
    level: "hard",
    type: "fill",
    text: "Ada 12 wajah senyum.<br>Kelompok isi 4 dan kelompok isi 3 hasilnya sama.",
    visual: { kind: "array", ico: "😊", rows: 3, cols: 4 },
    layout: [tanda("3 ×"), kotak(4), tanda("= 4 ×"), kotak(3)],
    explain: "3 kelompok isi 4 dan 4 kelompok isi 3 sama-sama 12. Jadi 3 × 4 = 4 × 3."
  },

  {
    tag: "Membuat Kelompok",
    level: "hard",
    type: "fill",
    text: "Bu Ani punya 15 kue. Kue ditaruh di piring, tiap piring isi 5.<br>Berapa piring yang diperlukan?",
    visual: { kind: "array", ico: "🧁", rows: 3, cols: 5 },
    layout: [kotak(3), kata("piring."), BARIS, kotak(3), tanda("× 5 ="), kotak(15)],
    hint: "Hitung loncat 5 sampai 15. Berapa kali loncat?",
    explain: "5, 10, 15: tiga kali loncat 5. Jadi perlu 3 piring, karena 3 × 5 = 15."
  },

  /* =========================================================
     6. SIFAT PERTUKARAN — 7 soal
     ========================================================= */

  {
    tag: "Sifat Pertukaran",
    level: "normal",
    type: "fill",
    text: "Ada 2 kelompok, tiap kelompok berisi 4 biskuit.",
    visual: { kind: "groups", ico: "🍪", isi: [4, 4] },
    layout: [kotak(2), tanda("×"), kotak(4), tanda("="), kotak(8)],
    explain: "2 kelompok isi 4: 2 × 4 = 8 biskuit."
  },

  {
    tag: "Sifat Pertukaran",
    level: "normal",
    type: "fill",
    text: "Biskuit yang sama dikelompokkan lagi: 4 kelompok, tiap kelompok berisi 2.",
    visual: { kind: "groups", ico: "🍪", isi: [2, 2, 2, 2] },
    layout: [kotak(4), tanda("×"), kotak(2), tanda("="), kotak(8)],
    explain: "4 kelompok isi 2: 4 × 2 = 8. Hasilnya sama dengan 2 × 4."
  },

  {
    tag: "Sifat Pertukaran",
    level: "hard",
    type: "fill",
    text: "Lengkapilah.",
    layout: [tanda("2 × 4 = 4 ×"), kotak(2), tanda("="), kotak(8)],
    explain: "Bilangan yang dikalikan boleh ditukar, hasilnya tetap sama. 2 × 4 = 4 × 2 = 8."
  },

  {
    tag: "Sifat Pertukaran",
    level: "hard",
    type: "fill",
    text: "Lengkapilah.",
    layout: [tanda("3 × 5 ="), kotak(5), tanda("× 3 ="), kotak(15)],
    explain: "3 × 5 = 5 × 3 = 15."
  },

  {
    tag: "Sifat Pertukaran",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "<b>5 × 3</b> sama hasilnya dengan ...",
    options: ["3 × 5", "5 + 3", "5 × 5", "3 × 3"],
    answer: 0,
    explain: "Pada perkalian, urutan bilangan boleh ditukar. 5 × 3 = 3 × 5 = 15."
  },

  {
    tag: "Sifat Pertukaran",
    level: "hard",
    type: "mcq",
    text: "Kotak A: 5 kelompok berisi 3 jagung.<br>Kotak B: 3 kelompok berisi 5 jagung.<br>Manakah yang benar?",
    options: [
      "Jagung di kedua kotak sama banyak, yaitu 15",
      "Kotak A lebih banyak",
      "Kotak B lebih banyak",
      "Kotak A berisi 8 jagung"
    ],
    answer: 0,
    explain: "5 × 3 = 15 dan 3 × 5 = 15. Jumlahnya sama walaupun kelompoknya berbeda."
  },

  {
    tag: "Sifat Pertukaran",
    level: "hard",
    type: "fill",
    text: "Lengkapilah.",
    layout: [kotak(6), tanda("× 2 = 2 × 6 ="), kotak(12)],
    explain: "6 × 2 = 2 × 6 = 12."
  },

  /* =========================================================
     7. SOAL HOTS — 6 soal
     ========================================================= */

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    text: "Di peternakan ada ayam dan kambing.<br>Seekor ayam berkaki 2, seekor kambing berkaki 4.<br>Ada <b>14 kaki</b> seluruhnya. Manakah yang mungkin?",
    options: [
      "3 ayam dan 2 kambing",
      "2 ayam dan 2 kambing",
      "4 ayam dan 2 kambing",
      "1 ayam dan 2 kambing"
    ],
    answer: 0,
    hint: "Hitung kaki ayam dengan × 2 dan kaki kambing dengan × 4, lalu jumlahkan.",
    explain: "3 × 2 = 6 kaki ayam, 2 × 4 = 8 kaki kambing. 6 + 8 = 14. Jawaban lain yang juga benar: 1 ayam dan 3 kambing, atau 5 ayam dan 1 kambing."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Ada 5 ayam dan 1 kambing.<br>Berapa kaki seluruhnya?",
    layout: [tanda("5 × 2 ="), kotak(10), BARIS, tanda("1 × 4 ="), kotak(4), BARIS, tanda("10 + 4 ="), kotak(14)],
    explain: "Kaki ayam 5 × 2 = 10, kaki kambing 1 × 4 = 4. Seluruhnya 10 + 4 = 14 kaki."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Ada 1 ayam dan beberapa kambing. Kakinya 14 seluruhnya.<br>Berapa kambingnya?",
    layout: [tanda("1 × 2 = 2"), BARIS, tanda("14 − 2 ="), kotak(12), BARIS, kotak(3), tanda("× 4 = 12")],
    hint: "Kurangi dulu dengan kaki ayam. Sisanya kaki kambing.",
    explain: "Kaki ayam 2, sisa 14 − 2 = 12 kaki kambing. 3 × 4 = 12, jadi ada 3 kambing."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Aku perkalian dua bilangan yang <b>sama</b>.<br>Hasilku 16. Siapakah aku?",
    layout: [kotak(4), tanda("×"), kotak(4), tanda("= 16")],
    explain: "4 × 4 = 4 + 4 + 4 + 4 = 16."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    text: "Rina menyusun 12 kancing menjadi barisan sama banyak.<br>Susunan mana yang <b>tidak mungkin</b>?",
    options: [
      "5 baris, tiap baris 2 kancing",
      "3 baris, tiap baris 4 kancing",
      "2 baris, tiap baris 6 kancing",
      "4 baris, tiap baris 3 kancing"
    ],
    answer: 0,
    explain: "5 × 2 = 10, bukan 12. Susunan lain hasilnya 12: 3 × 4, 2 × 6, dan 4 × 3."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "fill",
    text: "Dodi punya 3 kantong berisi 5 kelereng, dan 2 kantong berisi 4 kelereng.<br>Berapa kelereng seluruhnya?",
    layout: [tanda("3 × 5 ="), kotak(15), BARIS, tanda("2 × 4 ="), kotak(8), BARIS, tanda("15 + 8 ="), kotak(23)],
    explain: "3 × 5 = 15 dan 2 × 4 = 8. Seluruhnya 15 + 8 = 23 kelereng."
  }
];
