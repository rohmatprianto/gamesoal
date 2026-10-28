/* ============================================================
   BANK SOAL — BAHASA INDONESIA, Kelas 2 SD (bagian 2)
   Nama tempat, awalan di- dan kata depan di, serta tanda seru.
   52 soal, 9 materi (masing-masing minimal 4 soal).

   Cakupan:
   - Rangkuman "Ciri-Ciri Ruangan di Sekolah": ruang kelas,
     perpustakaan, ruang guru, ruang UKS, kantin, masjid, beserta
     fungsi, ciri, dan benda di dalamnya.
   - Rangkuman "Awalan di- & Kata Depan di": di- untuk tindakan
     ditulis serangkai, di untuk tempat ditulis terpisah.
   - Tanda seru pada kalimat larangan, perintah, dan ajakan.

   Label "tag" sama persis dengan nama materi di MATERI_BINDO2.

   Setiap soal menuliskan tingkatnya sendiri lewat "level":
   - easy   : mengingat fungsi, benda, dan bentuk penulisan
   - normal : menerapkan pada kalimat, menjodohkan, menyusun
   - hard   : membedakan dua bentuk dan menalar situasi

   TIPE SOAL: mcq / match / order / group
   ============================================================ */

const MATERI_BINDO2 = [
  { ico: "🏫", nm: "Fungsi Ruangan", ds: "Kegunaan ruang kelas, perpustakaan, UKS, kantin, masjid" },
  { ico: "🪑", nm: "Ciri dan Benda Ruangan", ds: "Benda yang ada dan suasana tiap ruangan" },
  { ico: "✍️", nm: "Awalan di-", ds: "Menunjukkan tindakan, ditulis serangkai" },
  { ico: "📍", nm: "Kata Depan di", ds: "Menunjukkan tempat, ditulis terpisah" },
  { ico: "⚖️", nm: "Membedakan di", ds: "Serangkai atau terpisah?" },
  { ico: "❗", nm: "Tanda Seru", ds: "Lambang ! di akhir kalimat larangan, perintah, ajakan" },
  { ico: "🚫", nm: "Kalimat Larangan", ds: "Biasanya diawali kata jangan" },
  { ico: "👉", nm: "Kalimat Perintah", ds: "Menyuruh orang lain, sering memakai -lah" },
  { ico: "🤝", nm: "Kalimat Ajakan", ds: "Biasanya diawali kata ayo atau mari" }
];

const SOAL_BINDO2 = [

  /* =========================================================
     1. FUNGSI RUANGAN — 6 soal
     ========================================================= */

  {
    tag: "Fungsi Ruangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Ruangan untuk membaca dan meminjam buku adalah ...",
    options: ["Perpustakaan", "Kantin", "Ruang UKS", "Ruang Guru"],
    answer: 0,
    explain: "Perpustakaan digunakan untuk membaca dan meminjam buku."
  },

  {
    tag: "Fungsi Ruangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Siswa yang sakit di sekolah dibawa ke ...",
    options: ["Ruang UKS", "Kantin", "Perpustakaan", "Masjid"],
    answer: 0,
    explain: "Ruang UKS digunakan untuk memberikan pertolongan pertama kepada siswa yang sakit."
  },

  {
    tag: "Fungsi Ruangan",
    level: "easy",
    type: "mcq",
    text: "Fungsi kantin adalah ...",
    options: [
      "Untuk membeli dan menikmati makanan",
      "Untuk beribadah",
      "Untuk meminjam buku",
      "Untuk berobat"
    ],
    answer: 0,
    explain: "Kantin adalah tempat untuk membeli dan menikmati makanan."
  },

  {
    tag: "Fungsi Ruangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Masjid sekolah digunakan untuk ...",
    options: ["Beribadah", "Bermain bola", "Membeli jajan", "Tidur siang"],
    answer: 0,
    explain: "Masjid digunakan untuk beribadah, misalnya salat berjamaah."
  },

  {
    tag: "Fungsi Ruangan",
    level: "normal",
    type: "match",
    text: "Jodohkan ruangan dengan fungsinya.",
    pairs: [
      { a: "Ruang Kelas", b: "Belajar bersama guru" },
      { a: "Ruang Guru", b: "Guru bekerja dan berdiskusi" },
      { a: "Kantin", b: "Membeli makanan" },
      { a: "Masjid", b: "Beribadah" }
    ],
    explain: "Setiap ruangan di sekolah digunakan untuk kegiatan tertentu."
  },

  {
    tag: "Fungsi Ruangan",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Pak Budi sedang memeriksa tugas siswa di depan komputer, sambil berdiskusi dengan guru lain.<br>Pak Budi berada di ...",
    options: ["Ruang Guru", "Ruang UKS", "Kantin", "Masjid"],
    answer: 0,
    hint: "Ruangan ini dipakai guru untuk bekerja, berdiskusi, dan beristirahat.",
    explain: "Ruang guru dipakai guru untuk bekerja, berdiskusi, dan beristirahat. Di sana ada komputer dan berkas."
  },

  /* =========================================================
     2. CIRI DAN BENDA RUANGAN — 8 soal
     ========================================================= */

  {
    tag: "Ciri dan Benda Ruangan",
    level: "easy",
    type: "mcq",
    text: "Benda yang ada di ruang UKS adalah ...",
    options: [
      "Tempat tidur dan kotak P3K",
      "Rak buku dan meja baca",
      "Etalase makanan",
      "Sajadah dan mukena"
    ],
    answer: 0,
    explain: "Ruang UKS memiliki tempat tidur, kotak P3K, obat-obatan, dan alat kesehatan."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Ruangan yang memiliki banyak <b>rak buku</b> adalah ...",
    options: ["Perpustakaan", "Kantin", "Ruang UKS", "Masjid"],
    answer: 0,
    explain: "Perpustakaan memiliki rak buku, meja baca, kursi, dan banyak buku."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Di ruangan ini ada papan tulis, jadwal pelajaran, dan hiasan kelas.<br>Ruangan apakah itu?",
    options: ["Ruang Kelas", "Ruang UKS", "Kantin", "Masjid"],
    answer: 0,
    explain: "Ruang kelas memiliki meja, kursi, papan tulis, lemari, jadwal pelajaran, dan hiasan kelas."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "normal",
    type: "group",
    text: "Kelompokkan benda berikut sesuai ruangannya.",
    bins: [
      { id: "pustaka", nm: "Perpustakaan", ico: "📚" },
      { id: "uks", nm: "Ruang UKS", ico: "🏥" }
    ],
    items: [
      { v: "Rak buku", bin: "pustaka" },
      { v: "Meja baca", bin: "pustaka" },
      { v: "Buku cerita", bin: "pustaka" },
      { v: "Tempat tidur", bin: "uks" },
      { v: "Kotak P3K", bin: "uks" },
      { v: "Obat-obatan", bin: "uks" }
    ],
    explain: "Rak buku, meja baca, dan buku ada di perpustakaan. Tempat tidur, kotak P3K, dan obat ada di ruang UKS."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "normal",
    type: "group",
    text: "Kelompokkan benda berikut sesuai ruangannya.",
    bins: [
      { id: "kantin", nm: "Kantin", ico: "🍱" },
      { id: "masjid", nm: "Masjid", ico: "🕌" }
    ],
    items: [
      { v: "Etalase makanan", bin: "kantin" },
      { v: "Piring dan gelas", bin: "kantin" },
      { v: "Meja makan", bin: "kantin" },
      { v: "Sajadah", bin: "masjid" },
      { v: "Mukena", bin: "masjid" },
      { v: "Al-Qur'an", bin: "masjid" }
    ],
    explain: "Etalase, peralatan makan, dan meja makan ada di kantin. Sajadah, mukena, dan Al-Qur'an ada di masjid."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "hard",
    type: "mcq",
    text: "Mengapa suasana perpustakaan harus <b>tenang</b>?",
    options: [
      "Agar siswa dapat membaca dengan nyaman",
      "Agar siswa boleh berlari-lari",
      "Agar makanan cepat habis",
      "Agar buku tidak dibaca"
    ],
    answer: 0,
    explain: "Perpustakaan harus tenang supaya siswa dapat membaca dengan nyaman."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "hard",
    type: "mcq",
    text: "Mengapa kantin harus selalu <b>bersih</b>?",
    options: [
      "Agar makanan tetap sehat",
      "Agar kantin cepat tutup",
      "Agar siswa tidak jajan",
      "Agar buku tidak rusak"
    ],
    answer: 0,
    explain: "Kantin yang bersih menjaga makanan tetap sehat untuk dimakan."
  },

  {
    tag: "Ciri dan Benda Ruangan",
    level: "hard",
    type: "mcq",
    text: "Dina ingin berwudu sebelum salat zuhur di sekolah.<br>Ke mana Dina harus pergi?",
    options: [
      "Tempat wudu di masjid sekolah",
      "Rak buku di perpustakaan",
      "Tempat tidur di ruang UKS",
      "Etalase di kantin"
    ],
    answer: 0,
    hint: "Ruangan mana yang menyediakan perlengkapan salat?",
    explain: "Masjid sekolah memiliki sajadah, perlengkapan salat, dan tempat wudu."
  },

  /* =========================================================
     3. AWALAN di- — 6 soal
     ========================================================= */

  {
    tag: "Awalan di-",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "di + tulis menjadi ...",
    options: ["ditulis", "di tulis", "di-tulis", "tulisdi"],
    answer: 0,
    explain: "Awalan di- ditulis serangkai dengan kata kerja: di + tulis = ditulis."
  },

  {
    tag: "Awalan di-",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Penulisan yang benar adalah ...",
    options: ["dibaca", "di baca", "di-baca", "di ba ca"],
    answer: 0,
    explain: "di + baca = dibaca. Awalan di- untuk tindakan ditulis digabung."
  },

  {
    tag: "Awalan di-",
    level: "easy",
    type: "mcq",
    text: "Awalan di- digunakan pada kata yang menunjukkan ...",
    options: ["Pekerjaan atau tindakan", "Tempat", "Nama orang", "Warna"],
    answer: 0,
    explain: "Awalan di- dipakai pada kata kerja, yaitu pekerjaan atau tindakan, seperti dimakan dan dicuci."
  },

  {
    tag: "Awalan di-",
    level: "normal",
    type: "mcq",
    text: "Kalimat yang penulisannya benar adalah ...",
    options: [
      "Baju itu dicuci ibu.",
      "Baju itu di cuci ibu.",
      "Baju itu di-cuci ibu.",
      "Baju itu dicu ci ibu."
    ],
    answer: 0,
    explain: "Dicuci adalah tindakan, jadi di- ditulis serangkai: dicuci."
  },

  {
    tag: "Awalan di-",
    level: "normal",
    type: "order",
    text: "Susunlah menjadi kalimat yang benar.",
    items: ["Lantai", "kelas", "disapu", "Rani."],
    answer: ["Lantai", "kelas", "disapu", "Rani."],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Lantai kelas disapu Rani. Kata disapu ditulis serangkai karena menunjukkan tindakan."
  },

  {
    tag: "Awalan di-",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Roti itu ... adik dengan lahap.",
    options: ["dimakan", "di makan", "di-makan", "makandi"],
    answer: 0,
    hint: "Makan adalah tindakan, bukan tempat.",
    explain: "Makan adalah tindakan, jadi di- ditulis serangkai: dimakan."
  },

  /* =========================================================
     4. KATA DEPAN di — 5 soal
     ========================================================= */

  {
    tag: "Kata Depan di",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Penulisan kata depan di yang benar adalah ...",
    options: ["di rumah", "dirumah", "di-rumah", "rumahdi"],
    answer: 0,
    explain: "Kata depan di menunjukkan tempat, jadi ditulis terpisah: di rumah."
  },

  {
    tag: "Kata Depan di",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Kata depan di digunakan untuk menunjukkan ...",
    options: ["Tempat", "Pekerjaan", "Perasaan", "Warna"],
    answer: 0,
    explain: "Kata depan di menunjukkan tempat, misalnya di sekolah, di kelas, di taman."
  },

  {
    tag: "Kata Depan di",
    level: "normal",
    type: "mcq",
    text: "Kalimat yang penulisannya benar adalah ...",
    options: [
      "Buku ada di meja.",
      "Buku ada dimeja.",
      "Buku ada di-meja.",
      "Buku adadi meja."
    ],
    answer: 0,
    explain: "Meja adalah tempat, jadi di ditulis terpisah: di meja."
  },

  {
    tag: "Kata Depan di",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Ayah sedang membaca koran ... kamar.",
    options: ["di", "di-", "dike", "dari di"],
    answer: 0,
    explain: "Kamar adalah tempat, jadi ditulis di kamar dengan spasi."
  },

  {
    tag: "Kata Depan di",
    level: "normal",
    type: "order",
    text: "Susunlah menjadi kalimat yang benar.",
    items: ["Kami", "bermain", "di", "taman."],
    answer: ["Kami", "bermain", "di", "taman."],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Kami bermain di taman. Kata di dan taman ditulis terpisah karena taman adalah tempat."
  },

  /* =========================================================
     5. MEMBEDAKAN di — 5 soal
     ========================================================= */

  {
    tag: "Membedakan di",
    level: "normal",
    type: "group",
    text: "Kelompokkan sesuai cara penulisannya.",
    bins: [
      { id: "rangkai", nm: "Serangkai", ico: "✍️" },
      { id: "pisah", nm: "Terpisah", ico: "📍" }
    ],
    items: [
      { v: "dibaca", bin: "rangkai" },
      { v: "ditulis", bin: "rangkai" },
      { v: "dilipat", bin: "rangkai" },
      { v: "di sekolah", bin: "pisah" },
      { v: "di kelas", bin: "pisah" },
      { v: "di kamar", bin: "pisah" }
    ],
    hint: "Tindakan ditulis serangkai, tempat ditulis terpisah.",
    explain: "Dibaca, ditulis, dilipat adalah tindakan (serangkai). Di sekolah, di kelas, di kamar adalah tempat (terpisah)."
  },

  {
    tag: "Membedakan di",
    level: "hard",
    type: "group",
    text: "Mana yang menunjukkan tindakan, mana yang menunjukkan tempat?",
    bins: [
      { id: "tindakan", nm: "Tindakan", ico: "🏃" },
      { id: "tempat", nm: "Tempat", ico: "🏠" }
    ],
    items: [
      { v: "dicuci", bin: "tindakan" },
      { v: "diminum", bin: "tindakan" },
      { v: "ditendang", bin: "tindakan" },
      { v: "di pasar", bin: "tempat" },
      { v: "di dapur", bin: "tempat" },
      { v: "di lapangan", bin: "tempat" }
    ],
    explain: "Dicuci, diminum, ditendang adalah tindakan. Di pasar, di dapur, di lapangan menunjukkan tempat."
  },

  {
    tag: "Membedakan di",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Kata yang <b>salah</b> penulisannya adalah ...",
    options: ["di makan", "disapu", "di kelas", "dibaca"],
    answer: 0,
    hint: "Makan itu tindakan atau tempat?",
    explain: "Makan adalah tindakan, jadi seharusnya ditulis serangkai: dimakan."
  },

  {
    tag: "Membedakan di",
    level: "hard",
    type: "mcq",
    text: "Kalimat yang penulisan di-nya benar semua adalah ...",
    options: [
      "Buku dibaca di perpustakaan.",
      "Buku di baca di perpustakaan.",
      "Buku dibaca diperpustakaan.",
      "Buku di baca diperpustakaan."
    ],
    answer: 0,
    explain: "Dibaca adalah tindakan (serangkai), sedangkan di perpustakaan adalah tempat (terpisah)."
  },

  {
    tag: "Membedakan di",
    level: "hard",
    type: "mcq",
    text: "Bola <b>ditendang</b> Andi <b>di lapangan</b>.<br>Mengapa \"di lapangan\" ditulis terpisah?",
    options: [
      "Karena lapangan adalah tempat",
      "Karena lapangan adalah tindakan",
      "Karena lapangan adalah nama orang",
      "Karena kalimatnya terlalu panjang"
    ],
    answer: 0,
    explain: "Kalau di menunjukkan tempat, tulis terpisah. Kalau di- menunjukkan tindakan, tulis serangkai."
  },

  /* =========================================================
     6. TANDA SERU — 7 soal
     ========================================================= */

  {
    tag: "Tanda Seru",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Lambang tanda seru adalah ...",
    options: ["!", "?", ".", ","],
    answer: 0,
    explain: "Tanda seru dilambangkan dengan ( ! )."
  },

  {
    tag: "Tanda Seru",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Tanda seru diletakkan di ... kalimat.",
    options: ["Akhir", "Awal", "Tengah", "Setiap kata"],
    answer: 0,
    explain: "Tanda seru ditulis di akhir kalimat, seperti tanda titik dan tanda tanya."
  },

  {
    tag: "Tanda Seru",
    level: "easy",
    type: "mcq",
    text: "Tanda seru digunakan pada kalimat ...",
    options: [
      "Larangan, perintah, dan ajakan",
      "Pertanyaan",
      "Berita atau cerita",
      "Nama orang dan kota"
    ],
    answer: 0,
    explain: "Kalimat larangan, kalimat perintah, dan kalimat ajakan diakhiri tanda seru."
  },

  {
    tag: "Tanda Seru",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Tutup pintunya pelan-pelan ...<br>Tanda baca yang tepat adalah ...",
    options: ["!", "?", ",", "-"],
    answer: 0,
    explain: "Kalimat itu menyuruh seseorang, jadi diakhiri tanda seru: Tutup pintunya pelan-pelan!"
  },

  {
    tag: "Tanda Seru",
    level: "normal",
    type: "mcq",
    text: "Kalimat yang <b>tepat</b> diakhiri tanda seru adalah ...",
    options: [
      "Ayo, kita membaca buku!",
      "Ani membaca buku!",
      "Apakah Ani membaca buku!",
      "Buku itu berwarna merah!"
    ],
    answer: 0,
    explain: "\"Ayo, kita membaca buku!\" adalah kalimat ajakan. Kalimat berita diakhiri titik, kalimat tanya diakhiri tanda tanya."
  },

  {
    tag: "Tanda Seru",
    level: "normal",
    type: "match",
    text: "Jodohkan kalimat dengan jenisnya.",
    pairs: [
      { a: "Jangan menyontek!", b: "Larangan" },
      { a: "Kerjakan tugasmu!", b: "Perintah" },
      { a: "Ayo, kita belajar!", b: "Ajakan" },
      { a: "Apakah kamu sudah belajar?", b: "Tanya" }
    ],
    hint: "Perhatikan kata pertamanya dan tanda baca di akhir.",
    explain: "Jangan menandai larangan, ayo menandai ajakan, kata kerja di depan menandai perintah. Kalimat tanya diakhiri tanda tanya."
  },

  {
    tag: "Tanda Seru",
    level: "hard",
    type: "mcq",
    text: "\"Mari kita jaga kebersihan kelas!\"<br>Kalimat di atas termasuk kalimat ...",
    options: ["Ajakan", "Larangan", "Perintah", "Tanya"],
    answer: 0,
    explain: "Kata mari dan kita menunjukkan mengajak orang lain melakukan sesuatu bersama, jadi itu kalimat ajakan."
  },

  /* =========================================================
     7. KALIMAT LARANGAN — 5 soal
     ========================================================= */

  {
    tag: "Kalimat Larangan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Kalimat larangan biasanya diawali kata ...",
    options: ["Jangan", "Ayo", "Mari", "Siapa"],
    answer: 0,
    explain: "Kalimat larangan melarang orang berbuat sesuatu, biasanya diawali kata jangan."
  },

  {
    tag: "Kalimat Larangan",
    level: "easy",
    type: "mcq",
    text: "Contoh kalimat larangan adalah ...",
    options: [
      "Jangan membuang sampah sembarangan!",
      "Ayo, kita buang sampah bersama!",
      "Buanglah sampah pada tempatnya!",
      "Di mana tempat sampahnya?"
    ],
    answer: 0,
    explain: "Kalimat yang diawali jangan dan diakhiri tanda seru adalah kalimat larangan."
  },

  {
    tag: "Kalimat Larangan",
    level: "normal",
    type: "mcq",
    text: "Tulisan larangan yang tepat dipasang di perpustakaan adalah ...",
    options: [
      "Jangan berisik di perpustakaan!",
      "Ayo, berisik di perpustakaan!",
      "Berisiklah di perpustakaan!",
      "Apakah perpustakaan berisik?"
    ],
    answer: 0,
    hint: "Ingat, suasana perpustakaan harus tenang.",
    explain: "Perpustakaan harus tenang, jadi larangannya: Jangan berisik di perpustakaan!"
  },

  {
    tag: "Kalimat Larangan",
    level: "normal",
    type: "order",
    text: "Susunlah menjadi kalimat larangan.",
    items: ["Jangan", "makan", "sambil", "berbicara!"],
    answer: ["Jangan", "makan", "sambil", "berbicara!"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Jangan makan sambil berbicara! Kalimat larangan diawali jangan dan diakhiri tanda seru."
  },

  {
    tag: "Kalimat Larangan",
    level: "hard",
    type: "mcq",
    text: "Doni berlari-lari di dalam kelas sampai menabrak meja.<br>Kalimat larangan yang tepat untuk Doni adalah ...",
    options: [
      "Jangan berlari di dalam kelas!",
      "Ayo, berlari di dalam kelas!",
      "Doni berlari di dalam kelas.",
      "Mengapa Doni berlari?"
    ],
    answer: 0,
    explain: "Untuk melarang, gunakan kata jangan dan akhiri dengan tanda seru."
  },

  /* =========================================================
     8. KALIMAT PERINTAH — 5 soal
     ========================================================= */

  {
    tag: "Kalimat Perintah",
    level: "easy",
    type: "mcq",
    text: "Contoh kalimat perintah adalah ...",
    options: [
      "Bukalah buku halaman lima!",
      "Jangan buka buku itu!",
      "Ayo, kita buka buku bersama!",
      "Buku itu berwarna merah."
    ],
    answer: 0,
    explain: "Kalimat perintah menyuruh orang lain melakukan sesuatu, misalnya: Bukalah buku halaman lima!"
  },

  {
    tag: "Kalimat Perintah",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Kalimat perintah sering memakai akhiran ...",
    options: ["-lah", "-kah", "-an", "-nya"],
    answer: 0,
    explain: "Akhiran -lah sering dipakai dalam kalimat perintah, seperti bacalah, tulislah, duduklah."
  },

  {
    tag: "Kalimat Perintah",
    level: "normal",
    type: "mcq",
    text: "Bu guru ingin Rina menghapus papan tulis.<br>Kalimat perintah yang tepat adalah ...",
    options: [
      "Hapuslah papan tulis itu, Rina!",
      "Jangan hapus papan tulis itu, Rina!",
      "Ayo, kita lihat papan tulis!",
      "Siapa yang menghapus papan tulis?"
    ],
    answer: 0,
    explain: "Bu guru menyuruh Rina, jadi kalimatnya kalimat perintah: Hapuslah papan tulis itu, Rina!"
  },

  {
    tag: "Kalimat Perintah",
    level: "normal",
    type: "order",
    text: "Susunlah menjadi kalimat perintah.",
    items: ["Tolong", "ambilkan", "kotak", "P3K!"],
    answer: ["Tolong", "ambilkan", "kotak", "P3K!"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Tolong ambilkan kotak P3K! Kata tolong membuat kalimat perintah terdengar sopan."
  },

  {
    tag: "Kalimat Perintah",
    level: "hard",
    type: "mcq",
    text: "Banyak siswa berdesakan saat membeli makanan di kantin.<br>Kalimat perintah yang tepat dari ibu kantin adalah ...",
    options: [
      "Antrelah dengan tertib, anak-anak!",
      "Jangan membeli makanan, anak-anak!",
      "Siapa yang mau membeli makanan?",
      "Anak-anak membeli makanan."
    ],
    answer: 0,
    explain: "Ibu kantin menyuruh siswa antre, jadi kalimatnya perintah: Antrelah dengan tertib, anak-anak!"
  },

  /* =========================================================
     9. KALIMAT AJAKAN — 5 soal
     ========================================================= */

  {
    tag: "Kalimat Ajakan",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Kalimat ajakan biasanya diawali kata ...",
    options: ["Ayo atau mari", "Jangan", "Mengapa", "Siapa"],
    answer: 0,
    explain: "Kalimat ajakan mengajak orang lain melakukan sesuatu bersama, biasanya diawali ayo atau mari."
  },

  {
    tag: "Kalimat Ajakan",
    level: "easy",
    type: "mcq",
    text: "Contoh kalimat ajakan adalah ...",
    options: [
      "Mari kita salat berjamaah di masjid!",
      "Jangan ribut di masjid!",
      "Pergilah ke masjid sekarang!",
      "Di mana masjid sekolah?"
    ],
    answer: 0,
    explain: "Mari kita ... adalah ajakan untuk melakukan sesuatu bersama-sama."
  },

  {
    tag: "Kalimat Ajakan",
    level: "normal",
    type: "order",
    text: "Susunlah menjadi kalimat ajakan.",
    items: ["Ayo,", "kita", "membaca", "di perpustakaan!"],
    answer: ["Ayo,", "kita", "membaca", "di perpustakaan!"],
    note: "Ketuk kartu satu per satu sampai menjadi kalimat",
    explain: "Ayo, kita membaca di perpustakaan! Kalimat ajakan diawali ayo dan diakhiri tanda seru."
  },

  {
    tag: "Kalimat Ajakan",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Teman-teman, ... kita rapikan meja kelas!",
    options: ["mari", "jangan", "siapa", "mengapa"],
    answer: 0,
    explain: "Kata mari dipakai untuk mengajak: Teman-teman, mari kita rapikan meja kelas!"
  },

  {
    tag: "Kalimat Ajakan",
    level: "hard",
    type: "mcq",
    text: "Kelas Rudi kotor setelah kegiatan menggambar. Rudi ingin teman-temannya ikut membersihkan.<br>Kalimat yang tepat diucapkan Rudi adalah ...",
    options: [
      "Ayo, kita bersihkan kelas bersama!",
      "Jangan bersihkan kelas!",
      "Bersihkan kelas itu sendiri!",
      "Kelas kita kotor sekali."
    ],
    answer: 0,
    hint: "Rudi ingin ikut bekerja bersama teman-temannya.",
    explain: "Rudi mengajak teman bekerja bersama, jadi memakai kalimat ajakan: Ayo, kita bersihkan kelas bersama!"
  }
];
