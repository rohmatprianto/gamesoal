/* ============================================================
   BANK SOAL — BAHASA INDONESIA, Kelas 2 Fase A
   25 soal, disusun dari lembar tugas Bilal.

   Cakupan: huruf kapital, tanda titik, kata tanya, menyusun
   kalimat tanya, kalimat berpola SPO, menyusun cerita,
   membaca grafik, mengenal perasaan, makanan sehat.

   TIPE SOAL yang dipakai di sini:
   - "mcq"   : pilihan ganda (grid:true untuk 2 kolom)
   - "match" : menjodohkan dua kolom  { a, b }
   - "order" : mengurutkan kartu; "answer" menentukan urutan benar
   - "group" : mengelompokkan kartu ke dalam dua kotak
   - "fill"  : isian angka dengan papan angka
   ============================================================ */

const MATERI_BINDO = [
  { ico: "🔠", nm: "Huruf Kapital", ds: "Awal kalimat, nama orang, hari, bulan, kota" },
  { ico: "⏺️", nm: "Tanda Titik", ds: "Mengakhiri kalimat berita" },
  { ico: "❓", nm: "Kata Tanya", ds: "Apa, siapa, di mana, kapan, mengapa, berapa" },
  { ico: "🧩", nm: "Menyusun Kalimat Tanya", ds: "Merangkai kata acak menjadi pertanyaan" },
  { ico: "📐", nm: "Kalimat Berpola SPO", ds: "Subjek - Predikat - Objek" },
  { ico: "📖", nm: "Menyusun Cerita", ds: "Mengurutkan kejadian agar runtut" },
  { ico: "📊", nm: "Membaca Grafik", ds: "Membaca diagram batang dan menghitungnya" },
  { ico: "😊", nm: "Mengenal Perasaan", ds: "Senang, sedih, takut, marah, malu" },
  { ico: "🥦", nm: "Makanan Sehat", ds: "Membedakan makanan sehat dan kurang sehat" }
];

/* grafik yang dipakai bersama oleh soal 18-20 */
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

const SOAL_BINDO = [

  /* ================= HURUF KAPITAL (4 soal) ================= */

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

  /* ================= TANDA TITIK (2 soal) ================= */

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

  /* ================= KATA TANYA (4 soal) ================= */

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

  /* ============ MENYUSUN KALIMAT TANYA (2 soal) ============ */

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

  /* ============ KALIMAT BERPOLA SPO (3 soal) ============ */

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

  /* ============ MENYUSUN CERITA (2 soal) ============ */

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

  /* ============ MEMBACA GRAFIK (3 soal) ============ */

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

  /* ============ MENGENAL PERASAAN (3 soal) ============ */

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
    type: "match",
    text: "Jodohkan kejadian dengan perasaan yang tepat.",
    pairs: [
      { a: "Mainan dirusak teman", b: "Marah" },
      { a: "Juara 1 olimpiade", b: "Senang" },
      { a: "Lupa lirik di depan kelas", b: "Malu" },
      { a: "Lampu tiba-tiba mati", b: "Takut" }
    ],
    hint: "Ingat sebab setiap perasaan: kehilangan, bahaya, tidak adil, atau disorot orang.",
    explain: "Marah muncul saat merasa diperlakukan tidak adil, senang saat merasa puas dan bahagia, malu saat merasa disorot orang, dan takut saat merasa terancam."
  },

  /* ============ MAKANAN SEHAT (2 soal) ============ */

  {
    tag: "Makanan Sehat",
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
    tag: "Makanan Sehat",
    type: "mcq",
    grid: true,
    text: "Bekal sekolah manakah yang paling <b>sehat</b>?",
    options: ["Buah potong 🍎", "Permen 🍬", "Minuman bersoda 🥤", "Keripik asin 🍟"],
    answer: 0,
    explain: "Buah potong mengandung vitamin dan serat yang dibutuhkan tubuh, sedangkan pilihan lain banyak gula, garam, atau minyak."
  }
];
