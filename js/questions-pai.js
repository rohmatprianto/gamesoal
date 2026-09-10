/* ============================================================
   BANK SOAL — PENDIDIKAN AGAMA ISLAM, Kelas 2 SD/MI
   Bab II "Mengenal Asmaulhusna". 44 soal, 10 materi.

   Cakupan: pengertian asmaulhusna, empat asmaulhusna
   (Al-Hafiz, Al-Wali, Al-'Alim, Al-Kabir), bukti-buktinya,
   sikap meneladaninya, zikir dan akhlak mulia, Surah Al-'Asr,
   serta soal HOTS dari kisah Nabi Musa a.s.

   Setiap soal menuliskan tingkatnya sendiri lewat "level":
   - easy   : mengingat arti dan fakta dasar
   - normal : menerapkan pada situasi, menjodohkan, mengelompokkan
   - hard   : memahami bacaan dan menalar situasi sehari-hari

   TIPE SOAL: mcq / match / order / group / fill
   ============================================================ */

const MATERI_PAI = [
  { ico: "📿", nm: "Pengertian Asmaulhusna", ds: "Arti dan jumlah nama-nama indah Allah" },
  { ico: "🛡️", nm: "Al-Hafiz", ds: "Allah Maha Memelihara" },
  { ico: "🤲", nm: "Al-Wali", ds: "Allah Maha Melindungi" },
  { ico: "💡", nm: "Al-'Alim", ds: "Allah Maha Mengetahui" },
  { ico: "🔍", nm: "Al-Kabir", ds: "Allah Mahateliti" },
  { ico: "✨", nm: "Bukti Asmaulhusna", ds: "Pertolongan Allah kepada para nabi" },
  { ico: "🌱", nm: "Meneladani Asmaulhusna", ds: "Sikap sehari-hari di rumah dan sekolah" },
  { ico: "🕌", nm: "Zikir dan Akhlak", ds: "Mengingat Allah dan menjadi anak saleh" },
  { ico: "📗", nm: "Surah Al-'Asr", ds: "Bacaan dan arti surah ke-103" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Menalar kisah dan kejadian sehari-hari" }
];

/* kisah yang dipakai bersama beberapa soal HOTS,
   ditulis ulang secara ringkas dengan kalimat sendiri */
const KISAH_MUSA = {
  kind: "story",
  title: "Kisah Nabi Musa a.s.",
  lines: [
    "Raja Firaun berlaku zalim dan mengaku sebagai tuhan.",
    "Ia menyuruh pasukannya membunuh setiap bayi laki-laki.",
    "Nabi Musa kecil dihanyutkan di Sungai Nil, lalu Allah menyelamatkannya.",
    "Setelah dewasa, Nabi Musa diperintah Allah untuk berdakwah.",
    "Ketika dikejar Firaun, tongkat Nabi Musa membelah lautan.",
    "Firaun dan pasukannya pun ditenggelamkan di laut."
  ]
};

const SOAL_PAI = [

  /* =========================================================
     1. PENGERTIAN ASMAULHUSNA — 4 soal
     ========================================================= */

  {
    tag: "Pengertian Asmaulhusna",
    level: "easy",
    type: "mcq",
    text: "Asmaulhusna artinya ...",
    options: [
      "Nama-nama Allah yang indah",
      "Nama-nama yang merdu",
      "Doa yang sangat panjang",
      "Kitab suci orang Islam"
    ],
    answer: 0,
    explain: "Asmaulhusna artinya nama-nama Allah yang indah. Allah memiliki nama-nama indah yang menunjukkan keagungan-Nya."
  },

  {
    tag: "Pengertian Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Asmaulhusna berjumlah ...",
    options: ["99 nama", "77 nama", "88 nama", "25 nama"],
    answer: 0,
    hint: "Jumlahnya seratus kurang satu.",
    explain: "Asmaulhusna berjumlah 99 nama, yaitu seratus kurang satu."
  },

  {
    tag: "Pengertian Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Asmaulhusna sebaiknya dibaca ketika ...",
    options: ["Berdoa", "Berlari", "Berlomba", "Bermain"],
    answer: 0,
    explain: "Asmaulhusna dibaca saat berdoa, karena kita memanggil Allah dengan nama-nama-Nya yang indah."
  },

  {
    tag: "Pengertian Asmaulhusna",
    level: "normal",
    type: "mcq",
    text: "Cara beriman kepada Allah salah satunya adalah dengan ...",
    options: [
      "Memahami asmaulhusna",
      "Menghafal nama teman sekelas",
      "Membaca buku cerita saja",
      "Bermain sepanjang hari"
    ],
    answer: 0,
    explain: "Beriman berarti meyakini segalanya tentang Allah. Salah satu caranya adalah memahami asmaulhusna."
  },

  /* =========================================================
     2. AL-HAFIZ — 4 soal
     ========================================================= */

  {
    tag: "Al-Hafiz",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>Al-Ḥafiẓ</b> artinya ...",
    options: ["Maha Memelihara", "Maha Melindungi", "Mahateliti", "Maha Mengetahui"],
    answer: 0,
    explain: "Al-Ḥafiẓ artinya Maha Memelihara. Allah memelihara seisi langit dan bumi."
  },

  {
    tag: "Al-Hafiz",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Kata <b>memelihara</b> berarti ...",
    options: ["Menjaga dan merawat", "Membuang dan merusak", "Membeli dan menjual", "Melihat dan mendengar"],
    answer: 0,
    explain: "Memelihara berarti menjaga dan merawat, seperti Allah menjaga langit dan bumi agar tidak rusak."
  },

  {
    tag: "Al-Hafiz",
    level: "normal",
    type: "mcq",
    text: "Selain memelihara langit dan bumi, Allah juga memelihara ...",
    options: [
      "Amal perbuatan manusia",
      "Mainan yang hilang",
      "Uang di dalam dompet",
      "Sepeda milik tetangga"
    ],
    answer: 0,
    hint: "Tidak ada satu pun perbuatan kita yang terlewat.",
    explain: "Allah memelihara amal manusia. Tidak ada satu pun amal yang terlewat dari penjagaan Allah."
  },

  {
    tag: "Al-Hafiz",
    level: "normal",
    type: "mcq",
    text: "Salah satu cara meneladani <b>Al-Ḥafiẓ</b> adalah ...",
    options: [
      "Menyiram tanaman pagi dan sore hari",
      "Memilih-milih teman bermain",
      "Membuang sampah sembarangan",
      "Tidak mau menyayangi tetangga"
    ],
    answer: 0,
    explain: "Meneladani Al-Ḥafiẓ berarti ikut menjaga dan merawat, misalnya merawat tanaman, menjaga salat, dan menjaga kesehatan tubuh."
  },

  /* =========================================================
     3. AL-WALI — 4 soal
     ========================================================= */

  {
    tag: "Al-Wali",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>Al-Walī</b> artinya ...",
    options: ["Maha Melindungi", "Maha Memelihara", "Mahateliti", "Maha Pencipta"],
    answer: 0,
    explain: "Al-Walī artinya Maha Melindungi. Allah melindungi hamba-Nya yang beriman dan bertakwa."
  },

  {
    tag: "Al-Wali",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Sebaik-baiknya pelindung adalah ...",
    options: ["Allah", "Polisi", "Tentara", "Pagar rumah"],
    answer: 0,
    hint: "Tiada tempat berlindung selain Dia.",
    explain: "Tiada tempat berlindung selain Allah. Karena itu kita memohon perlindungan hanya kepada Allah."
  },

  {
    tag: "Al-Wali",
    level: "normal",
    type: "mcq",
    text: "Salah satu cara Allah melindungi makhluk-Nya adalah dengan ...",
    options: [
      "Memberi petunjuk dan hidayah",
      "Memberi uang yang banyak",
      "Menghilangkan semua ujian",
      "Menjadikan manusia kuat sendiri"
    ],
    answer: 0,
    explain: "Allah melindungi makhluk-Nya dengan memberi petunjuk dan hidayah agar selamat di jalan yang benar."
  },

  {
    tag: "Al-Wali",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Kak Amar memberi makan anak yatim.<br>Kak Amar meneladani asmaulhusna ...",
    options: ["Al-Walī", "Al-Kabīr", "Al-Ḥafiẓ", "Al-'Alīm"],
    answer: 0,
    hint: "Melindungi anak yatim dan fakir miskin.",
    explain: "Melindungi anak yatim dan fakir miskin adalah wujud meneladani Al-Walī, Yang Maha Melindungi."
  },

  /* =========================================================
     4. AL-'ALIM — 4 soal
     ========================================================= */

  {
    tag: "Al-'Alim",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>Al-'Alīm</b> artinya ...",
    options: ["Maha Mengetahui", "Maha Memelihara", "Maha Melindungi", "Mahateliti"],
    answer: 0,
    explain: "Al-'Alīm artinya Maha Mengetahui. Allah mengetahui segala yang terjadi di langit dan bumi."
  },

  {
    tag: "Al-'Alim",
    level: "normal",
    type: "mcq",
    text: "Allah menjadikan <b>siang</b> untuk manusia ...",
    options: [
      "Beraktivitas",
      "Beristirahat dan tidur",
      "Bersembunyi di rumah",
      "Berhenti bekerja"
    ],
    answer: 0,
    explain: "Allah menjadikan siang untuk beraktivitas dan malam untuk beristirahat. Ini tanda kesempurnaan ilmu Allah."
  },

  {
    tag: "Al-'Alim",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Reno beraktivitas di siang hari dan beristirahat di malam hari.<br>Adanya siang dan malam adalah tanda Allah bersifat ...",
    options: ["Al-'Alīm", "Al-Walī", "Al-Kabīr", "Al-Ḥafiẓ"],
    answer: 0,
    explain: "Allah menentukan siang dan malam dengan ilmu-Nya yang sempurna. Ini tanda Allah bersifat Al-'Alīm."
  },

  {
    tag: "Al-'Alim",
    level: "normal",
    type: "mcq",
    text: "Sikap meneladani <b>Al-'Alīm</b> adalah ...",
    options: [
      "Rajin belajar di mana pun dan kapan pun",
      "Malas mengerjakan tugas",
      "Menyembunyikan ilmu dari teman",
      "Sombong karena merasa pandai"
    ],
    answer: 0,
    explain: "Meneladani Al-'Alīm berarti rajin mencari ilmu, mengamalkannya karena Allah, berbagi ilmu, dan tetap rendah hati."
  },

  /* =========================================================
     5. AL-KABIR — 4 soal
     ========================================================= */

  {
    tag: "Al-Kabir",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>Al-Kabīr</b> artinya ...",
    options: ["Mahateliti", "Maha Memelihara", "Maha Melindungi", "Maha Mengetahui"],
    answer: 0,
    explain: "Al-Kabīr artinya Mahateliti. Tidak ada satu pun yang terlewat dari ketelitian Allah."
  },

  {
    tag: "Al-Kabir",
    level: "normal",
    type: "mcq",
    text: "Allah Mahateliti terhadap ...",
    options: [
      "Segala yang terlihat dan tidak terlihat",
      "Hanya yang terlihat mata",
      "Hanya yang ada di langit",
      "Hanya perbuatan orang dewasa"
    ],
    answer: 0,
    hint: "Baik yang tampak maupun yang tersembunyi.",
    explain: "Allah Mahateliti terhadap segala yang tampak dan yang tersembunyi. Tiada perbuatan manusia yang terlepas dari penglihatan Allah."
  },

  {
    tag: "Al-Kabir",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Reno mengerjakan tugas, lalu memeriksanya kembali.<br>Reno meneladani asmaulhusna ...",
    options: ["Al-Kabīr", "Al-Walī", "Al-Ḥafiẓ", "Al-'Alīm"],
    answer: 0,
    explain: "Teliti dalam belajar dan bekerja adalah wujud meneladani Al-Kabīr, Yang Mahateliti."
  },

  {
    tag: "Al-Kabir",
    level: "hard",
    type: "mcq",
    text: "Berikut ini sikap meneladani <b>Al-Kabīr</b>, kecuali ...",
    options: [
      "Suka menyalahkan orang lain",
      "Teliti dalam belajar",
      "Teliti dalam bekerja",
      "Berbaik sangka kepada Allah"
    ],
    answer: 0,
    hint: "Cari sikap yang justru bertentangan.",
    explain: "Meneladani Al-Kabīr berarti teliti dan berbaik sangka kepada Allah, bukan suka menyalahkan orang lain."
  },

  /* =========================================================
     6. BUKTI ASMAULHUSNA — 5 soal
     ========================================================= */

  {
    tag: "Bukti Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Nabi yang diselamatkan ketika hanyut di Sungai Nil adalah ...",
    options: ["Nabi Musa", "Nabi Yusuf", "Nabi Ibrahim", "Nabi Nuh"],
    answer: 0,
    explain: "Nabi Musa a.s. dihanyutkan di Sungai Nil dan Allah menyelamatkannya."
  },

  {
    tag: "Bukti Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Nabi yang diselamatkan dari dalam sumur adalah ...",
    options: ["Nabi Yusuf", "Nabi Musa", "Nabi Ismail", "Nabi Ibrahim"],
    answer: 0,
    explain: "Nabi Yusuf a.s. diselamatkan Allah dari dalam sumur."
  },

  {
    tag: "Bukti Asmaulhusna",
    level: "normal",
    type: "mcq",
    grid: true,
    text: "Nabi Ibrahim diselamatkan dari api yang panas.<br>Ini bukti Allah bersifat ...",
    options: ["Al-Walī", "Al-'Alīm", "Al-Kabīr", "Al-Ḥafiẓ"],
    answer: 0,
    explain: "Selamatnya para nabi dari bahaya adalah bukti Allah bersifat Al-Walī, Yang Maha Melindungi."
  },

  {
    tag: "Bukti Asmaulhusna",
    level: "normal",
    type: "match",
    text: "Jodohkan nabi dengan pertolongan Allah kepadanya.",
    pairs: [
      { a: "Nabi Musa", b: "Selamat dari Sungai Nil" },
      { a: "Nabi Yusuf", b: "Selamat dari dalam sumur" },
      { a: "Nabi Ibrahim", b: "Selamat dari api yang panas" },
      { a: "Nabi Ismail", b: "Selamat dari kehausan" }
    ],
    explain: "Keempat kisah ini adalah bukti Allah bersifat Al-Walī, Yang Maha Melindungi hamba-Nya."
  },

  {
    tag: "Bukti Asmaulhusna",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Diturunkannya Al-Qur'an adalah bukti Allah bersifat ...",
    options: ["Al-'Alīm", "Al-Kabīr", "Al-Walī", "Al-Ḥafiẓ"],
    answer: 0,
    hint: "Al-Qur'an adalah sumber ilmu pengetahuan.",
    explain: "Al-Qur'an berisi ilmu dari Allah. Diturunkannya Al-Qur'an membuktikan Allah bersifat Al-'Alīm, Maha Mengetahui."
  },

  /* =========================================================
     7. MENELADANI ASMAULHUSNA — 6 soal
     ========================================================= */

  {
    tag: "Meneladani Asmaulhusna",
    level: "normal",
    type: "match",
    text: "Jodohkan asmaulhusna dengan artinya.",
    pairs: [
      { a: "Al-Ḥafiẓ", b: "Maha Memelihara" },
      { a: "Al-Walī", b: "Maha Melindungi" },
      { a: "Al-'Alīm", b: "Maha Mengetahui" },
      { a: "Al-Kabīr", b: "Mahateliti" }
    ],
    explain: "Empat asmaulhusna ini yang dipelajari di Bab II: Maha Memelihara, Maha Melindungi, Maha Mengetahui, dan Mahateliti."
  },

  {
    tag: "Meneladani Asmaulhusna",
    level: "hard",
    type: "group",
    text: "Kelompokkan sikap berikut sesuai teladannya.",
    bins: [
      { id: "hafiz", nm: "Al-Ḥafiẓ · Menjaga", ico: "🛡️" },
      { id: "wali", nm: "Al-Walī · Melindungi", ico: "🤲" }
    ],
    items: [
      { v: "Menjaga salat lima waktu", bin: "hafiz" },
      { v: "Makan makanan bergizi", bin: "hafiz" },
      { v: "Membuang sampah di tempatnya", bin: "hafiz" },
      { v: "Melindungi anak yatim", bin: "wali" },
      { v: "Menolong teman yang jatuh", bin: "wali" },
      { v: "Memohon perlindungan kepada Allah", bin: "wali" }
    ],
    hint: "Al-Ḥafiẓ tentang menjaga dan merawat, Al-Walī tentang melindungi sesama.",
    explain: "Meneladani Al-Ḥafiẓ berarti menjaga diri, ibadah, dan lingkungan. Meneladani Al-Walī berarti melindungi sesama dan memohon perlindungan Allah."
  },

  {
    tag: "Meneladani Asmaulhusna",
    level: "hard",
    type: "group",
    text: "Kelompokkan sikap berikut sesuai teladannya.",
    bins: [
      { id: "alim", nm: "Al-'Alīm · Berilmu", ico: "💡" },
      { id: "kabir", nm: "Al-Kabīr · Teliti", ico: "🔍" }
    ],
    items: [
      { v: "Rajin belajar setiap hari", bin: "alim" },
      { v: "Berbagi ilmu kepada teman", bin: "alim" },
      { v: "Bersungguh-sungguh mencari ilmu", bin: "alim" },
      { v: "Teliti saat mengerjakan tugas", bin: "kabir" },
      { v: "Memeriksa kembali pekerjaan", bin: "kabir" },
      { v: "Tidak menyalahkan orang lain", bin: "kabir" }
    ],
    explain: "Al-'Alīm diteladani dengan rajin menuntut dan membagi ilmu. Al-Kabīr diteladani dengan sikap teliti dan tidak gegabah menyalahkan orang."
  },

  {
    tag: "Meneladani Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Setiap muslim dapat menjaga hatinya dengan cara ...",
    options: ["Berzikir", "Bermain", "Tidur", "Melamun"],
    answer: 0,
    explain: "Menjaga hati dengan berzikir adalah salah satu cara meneladani Al-Ḥafiẓ."
  },

  {
    tag: "Meneladani Asmaulhusna",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Salat adalah salah satu cara memelihara hubungan baik dengan ...",
    options: ["Allah", "Teman", "Tetangga", "Guru"],
    answer: 0,
    explain: "Salat memelihara hubungan kita dengan Allah, sedangkan tolong-menolong memelihara hubungan dengan sesama manusia."
  },

  {
    tag: "Meneladani Asmaulhusna",
    level: "hard",
    type: "mcq",
    text: "Bagaimana sikap seorang muslim ketika melihat fakir miskin?",
    options: [
      "Membantu dan bersedekah kepadanya",
      "Menjauh dan pura-pura tidak melihat",
      "Mengejek keadaannya",
      "Membiarkannya karena bukan saudara"
    ],
    answer: 0,
    hint: "Bersedekah berarti meneladani sifat Allah Yang Maha Melindungi.",
    explain: "Muslim membantu fakir miskin dan bersedekah. Sedekah dapat melindungi sesama, dan itu meneladani sifat Allah."
  },

  /* =========================================================
     8. ZIKIR DAN AKHLAK — 4 soal
     ========================================================= */

  {
    tag: "Zikir dan Akhlak",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "<b>Zikir</b> artinya ...",
    options: ["Mengingat Allah", "Menentang Allah", "Melupakan Allah", "Menyembah berhala"],
    answer: 0,
    explain: "Zikir artinya mengingat Allah. Zikir berupa pujian yang diucapkan berulang-ulang."
  },

  {
    tag: "Zikir dan Akhlak",
    level: "normal",
    type: "match",
    text: "Jodohkan kalimat zikir dengan artinya.",
    pairs: [
      { a: "Subḥānallāh", b: "Mahasuci Allah" },
      { a: "Allāhu Akbar", b: "Allah Mahabesar" },
      { a: "Astagfirullāh", b: "Aku memohon ampun kepada Allah" },
      { a: "Lā ḥaula wa lā quwwata illā billāh", b: "Tiada daya kecuali dengan Allah" }
    ],
    explain: "Kalimat zikir diucapkan berulang untuk mengingat dan memuji Allah."
  },

  {
    tag: "Zikir dan Akhlak",
    level: "easy",
    type: "mcq",
    text: "Anak saleh senantiasa ...",
    options: [
      "Meneladani asmaulhusna dalam kehidupan sehari-hari",
      "Bermain sampai lupa waktu salat",
      "Membiarkan teman yang kesusahan",
      "Menyimpan ilmu untuk diri sendiri"
    ],
    answer: 0,
    explain: "Anak saleh beriman kepada Allah, meyakini asmaulhusna, meneladaninya, dan melindungi sesama teman."
  },

  {
    tag: "Zikir dan Akhlak",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Habib Munzir dikenal sebagai seorang ...",
    options: ["Pendakwah", "Pelukis", "Pedagang", "Pelaut"],
    answer: 0,
    explain: "Habib Munzir adalah seorang pendakwah yang lahir di Cianjur, Jawa Barat."
  },

  /* =========================================================
     9. SURAH AL-'ASR — 4 soal
     ========================================================= */

  {
    tag: "Surah Al-'Asr",
    level: "easy",
    type: "mcq",
    grid: true,
    text: "Surah Al-'Aṣr terdiri atas ... ayat",
    options: ["3 ayat", "5 ayat", "7 ayat", "9 ayat"],
    answer: 0,
    explain: "Surah Al-'Aṣr adalah surah ke-103 dan terdiri atas 3 ayat."
  },

  {
    tag: "Surah Al-'Asr",
    level: "easy",
    type: "fill",
    text: "Surah Al-'Aṣr adalah surah nomor ... dalam Al-Qur'an",
    layout: [{ t: "slot", ans: 103, max: 3 }],
    hint: "Tertulis di dalam kurung setelah nama surahnya.",
    explain: "Surah Al-'Aṣr adalah surah ke-103."
  },

  {
    tag: "Surah Al-'Asr",
    level: "normal",
    type: "mcq",
    text: "Menurut Surah Al-'Aṣr, manusia berada dalam kerugian, <b>kecuali</b> orang yang ...",
    options: [
      "Beriman dan beramal saleh",
      "Memiliki banyak harta",
      "Pandai berbicara",
      "Kuat dan berani"
    ],
    answer: 0,
    hint: "Selain beriman, mereka juga saling menasihati.",
    explain: "Orang yang beruntung adalah yang beriman, beramal saleh, serta saling menasihati untuk kebenaran dan kesabaran."
  },

  {
    tag: "Surah Al-'Asr",
    level: "hard",
    type: "order",
    text: "Urutkan arti Surah Al-'Aṣr dari ayat pertama.",
    items: [
      "Demi masa",
      "Sesungguhnya manusia berada dalam kerugian",
      "Kecuali orang yang beriman dan beramal saleh"
    ],
    answer: [
      "Demi masa",
      "Sesungguhnya manusia berada dalam kerugian",
      "Kecuali orang yang beriman dan beramal saleh"
    ],
    note: "Ketuk mulai dari arti ayat pertama",
    explain: "Ayat 1 tentang masa, ayat 2 tentang kerugian manusia, dan ayat 3 tentang pengecualiannya."
  },

  /* =========================================================
     10. SOAL HOTS — 5 soal
     ========================================================= */

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Nabi yang diselamatkan Allah di Sungai Nil adalah ...",
    visual: KISAH_MUSA,
    options: ["Nabi Musa", "Nabi Ibrahim", "Nabi Nuh", "Nabi Yusuf"],
    answer: 0,
    explain: "Pada kisah tersebut, Nabi Musa kecil dihanyutkan di Sungai Nil dan Allah menyelamatkannya."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    text: "Manakah yang termasuk <b>mukjizat</b> Nabi Musa a.s.?",
    visual: KISAH_MUSA,
    options: [
      "Tongkatnya dapat membelah lautan",
      "Dikejar Raja Firaun dan pasukannya",
      "Lahir sebagai anak laki-laki",
      "Tinggal di istana Firaun"
    ],
    answer: 0,
    hint: "Mukjizat adalah kejadian luar biasa yang Allah berikan kepada nabi.",
    explain: "Tongkat yang membelah lautan adalah mukjizat Nabi Musa. Dikejar Firaun bukan mukjizat, melainkan ujian."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    grid: true,
    text: "Selamatnya Nabi Musa dari kejaran Raja Firaun membuktikan Allah bersifat ...",
    visual: KISAH_MUSA,
    options: ["Al-Walī", "Al-Kabīr", "Al-'Alīm", "Al-Ḥafiẓ"],
    answer: 0,
    explain: "Allah melindungi Nabi Musa dan pengikutnya. Ini bukti Allah bersifat Al-Walī, Yang Maha Melindungi."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    text: "Rani mengerjakan ulangan sendiri walaupun gurunya sedang keluar kelas.<br>Rani bersikap begitu karena yakin bahwa Allah ...",
    options: [
      "Maha Mengetahui semua perbuatannya",
      "Sedang sibuk mengurus yang lain",
      "Hanya melihat orang dewasa",
      "Tidak memperhatikan anak kecil"
    ],
    answer: 0,
    hint: "Ingat arti Al-'Alīm dan Al-Kabīr.",
    explain: "Allah Maha Mengetahui dan Mahateliti. Tidak ada satu pun perbuatan yang terlewat, walau tidak ada manusia yang melihat."
  },

  {
    tag: "Soal HOTS",
    level: "hard",
    type: "mcq",
    text: "Kamu melihat teman terjatuh dari sepeda di depan rumahmu.<br>Sikap yang meneladani <b>Al-Walī</b> adalah ...",
    options: [
      "Menolongnya dan menjaganya sampai aman",
      "Menertawakan lalu pergi",
      "Membiarkannya karena bukan urusanmu",
      "Memarahi karena ia kurang hati-hati"
    ],
    answer: 0,
    explain: "Meneladani Al-Walī berarti memberi perlindungan kepada sesama, termasuk menolong teman yang sedang kesusahan."
  }
];
