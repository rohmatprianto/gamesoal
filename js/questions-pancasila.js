/* ============================================================
   BANK SOAL — PENDIDIKAN PANCASILA, Kelas 2 SD/MI
   Bab 2 "Garuda di Dadaku". 42 soal.

   Disusun dari buku pelajaran Bilal. Setiap materi diisi
   minimal 4 soal, dan "Menebak Sila" diberi porsi paling
   banyak (10 soal) karena paling sering keluar di ulangan.

   Label "tag" pada setiap soal sengaja dibuat sama persis
   dengan nama materi di MATERI_PANCASILA, supaya chip yang
   muncul di layar kuis nyambung dengan layar "Lihat Materi".

   TIPE SOAL: mcq / match / order / group / fill
   ============================================================ */

const MATERI_PANCASILA = [
  { ico: "🦅", nm: "Garuda Pancasila", ds: "Lambang negara, semboyan, dan jumlah bulunya" },
  { ico: "⭐", nm: "Simbol Sila", ds: "Bintang, rantai, beringin, banteng, padi kapas" },
  { ico: "💡", nm: "Makna Sila", ds: "Arti kebaikan di balik tiap simbol" },
  { ico: "5️⃣", nm: "Bunyi Sila", ds: "Bunyi dan urutan sila kesatu sampai kelima" },
  { ico: "🔎", nm: "Menebak Sila", ds: "Menentukan sila dari sebuah perbuatan" },
  { ico: "🏠", nm: "Pengamalan di Rumah", ds: "Berdoa, membantu, rukun dengan saudara" },
  { ico: "🏫", nm: "Pengamalan di Sekolah", ds: "Musyawarah, berbagi, menolong teman" },
  { ico: "📖", nm: "Kosakata", ds: "Adil, rukun, musyawarah, gotong royong" },
  { ico: "🧠", nm: "Soal HOTS", ds: "Menerapkan nilai Pancasila pada kejadian nyata" }
];

const SOAL_PANCASILA = [

  /* =========================================================
     1. GARUDA PANCASILA — 4 soal
     ========================================================= */

  {
    tag: "Garuda Pancasila",
    type: "mcq",
    grid: true,
    text: "Lambang negara Indonesia adalah ...",
    options: ["Garuda Pancasila", "Bendera Merah Putih", "Bunga Melati", "Komodo"],
    answer: 0,
    explain: "Garuda Pancasila adalah lambang negara Indonesia. Di dadanya ada perisai berisi lima simbol sila."
  },

  {
    tag: "Garuda Pancasila",
    type: "mcq",
    grid: true,
    text: "Tulisan pada pita yang dicengkeram Garuda berbunyi ...",
    options: ["Bhinneka Tunggal Ika", "Pancasila", "Merdeka", "Garuda Sakti"],
    answer: 0,
    hint: "Artinya berbeda-beda tetapi tetap satu.",
    explain: "Pita yang dicengkeram Garuda bertuliskan Bhinneka Tunggal Ika, artinya berbeda-beda tetapi tetap satu."
  },

  {
    tag: "Garuda Pancasila",
    type: "fill",
    text: "Berapa helai bulu pada <b>sayap kanan</b> burung Garuda?",
    layout: [{ t: "slot", ans: 17, max: 2 }],
    hint: "Sama banyaknya dengan sayap kiri, dan sama dengan tanggal kemerdekaan.",
    explain: "Sayap kanan 17 helai dan sayap kiri juga 17 helai, melambangkan tanggal 17."
  },

  {
    tag: "Garuda Pancasila",
    type: "fill",
    text: "Jumlah bulu Garuda melambangkan Hari Kemerdekaan Indonesia,<br>yaitu 17 Agustus tahun ...",
    layout: [{ t: "slot", ans: 1945, max: 4 }],
    hint: "Bulu pangkal ekor ada 19 helai, bulu leher ada 45 helai.",
    explain: "Bulu pangkal ekor 19 dan bulu leher 45, digabung menjadi tahun 1945. Jadi 17 Agustus 1945."
  },

  /* =========================================================
     2. SIMBOL SILA — 4 soal
     ========================================================= */

  {
    tag: "Simbol Sila",
    type: "mcq",
    text: "Simbol <b>padi dan kapas</b> berarti ...",
    options: [
      "Kesejahteraan dan keadilan sosial",
      "Persatuan Indonesia",
      "Kemanusiaan yang adil dan beradab",
      "Musyawarah bersama"
    ],
    answer: 0,
    hint: "Padi itu makanan, kapas itu pakaian. Keduanya kebutuhan semua orang.",
    explain: "Padi dan kapas adalah lambang sila kelima. Maknanya semua orang harus hidup adil dan saling membantu."
  },

  {
    tag: "Simbol Sila",
    type: "mcq",
    grid: true,
    text: "<b>Kepala banteng</b> melambangkan ...",
    options: ["Musyawarah", "Ketuhanan", "Keberanian", "Keadilan"],
    answer: 0,
    explain: "Kepala banteng adalah lambang sila keempat. Artinya jika memutuskan sesuatu kita harus musyawarah dan mau mendengar pendapat teman."
  },

  {
    tag: "Simbol Sila",
    type: "mcq",
    grid: true,
    text: "Simbol <b>pohon beringin</b> melambangkan sila ke ...",
    options: ["3", "1", "2", "5"],
    answer: 0,
    hint: "Pohon beringin besar dan rindang, tempat berteduh semua orang.",
    explain: "Pohon beringin adalah lambang sila ketiga, Persatuan Indonesia. Kita berbeda-beda tetapi tetap satu bangsa."
  },

  {
    tag: "Simbol Sila",
    type: "order",
    text: "Urutkan simbol sesuai <b>sila kesatu sampai kelima</b>.",
    items: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng", "Padi dan Kapas"],
    answer: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng", "Padi dan Kapas"],
    note: "Ketuk mulai dari simbol sila pertama",
    explain: "Urutannya: bintang, rantai, pohon beringin, kepala banteng, lalu padi dan kapas."
  },

  /* =========================================================
     3. MAKNA SILA — 4 soal
     ========================================================= */

  {
    tag: "Makna Sila",
    type: "match",
    text: "Jodohkan simbol dengan maknanya.",
    pairs: [
      { a: "⭐ Bintang", b: "Percaya kepada Tuhan" },
      { a: "⛓️ Rantai", b: "Saling menyayangi" },
      { a: "🌳 Pohon Beringin", b: "Hidup rukun walau berbeda" },
      { a: "🐂 Kepala Banteng", b: "Musyawarah bersama" }
    ],
    explain: "Setiap simbol di dada Garuda punya makna kebaikan. Padi dan kapas maknanya hidup adil dan saling membantu."
  },

  {
    tag: "Makna Sila",
    type: "mcq",
    grid: true,
    text: "Benar atau salah?<br><b>Rantai menggambarkan semangat bekerja keras sendirian.</b>",
    options: ["Salah ✘", "Benar ✔"],
    answer: 0,
    hint: "Mata rantai itu saling menyambung, tidak berdiri sendiri.",
    explain: "Salah. Rantai berarti persaudaraan. Setiap orang saling terhubung seperti mata rantai yang kuat karena bersama."
  },

  {
    tag: "Makna Sila",
    type: "mcq",
    grid: true,
    text: "Benar atau salah?<br><b>Padi dan kapas melambangkan keadilan sosial.</b>",
    options: ["Benar ✔", "Salah ✘"],
    answer: 0,
    explain: "Benar. Padi dan kapas adalah lambang sila kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia."
  },

  {
    tag: "Makna Sila",
    type: "mcq",
    text: "Makna gambar <b>bintang</b> adalah ...",
    options: [
      "Kita harus percaya kepada Tuhan dan rajin berdoa",
      "Kita harus berani seperti bintang",
      "Kita harus pandai di sekolah",
      "Kita harus bekerja sendiri"
    ],
    answer: 0,
    explain: "Bintang melambangkan Ketuhanan Yang Maha Esa. Artinya kita harus percaya kepada Tuhan dan rajin beribadah."
  },

  /* =========================================================
     4. BUNYI SILA — 4 soal
     ========================================================= */

  {
    tag: "Bunyi Sila",
    type: "mcq",
    text: "Sila <b>pertama</b> Pancasila berbunyi ...",
    options: [
      "Ketuhanan Yang Maha Esa",
      "Persatuan Indonesia",
      "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
      "Kemanusiaan yang Adil dan Beradab"
    ],
    answer: 0,
    explain: "Sila pertama berbunyi Ketuhanan Yang Maha Esa, dilambangkan dengan gambar bintang."
  },

  {
    tag: "Bunyi Sila",
    type: "mcq",
    grid: true,
    text: "Sila <b>ketiga</b> Pancasila berbunyi ...",
    options: ["Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Keadilan Sosial", "Kemanusiaan"],
    answer: 0,
    explain: "Sila ketiga berbunyi Persatuan Indonesia, dilambangkan dengan pohon beringin."
  },

  {
    tag: "Bunyi Sila",
    type: "mcq",
    grid: true,
    text: "Bunyi sila <b>keempat</b> diawali dengan kata ...",
    options: ["Kerakyatan", "Keadilan", "Kemanusiaan", "Ketuhanan"],
    answer: 0,
    hint: "Sila keempat berbicara tentang rakyat dan musyawarah.",
    explain: "Sila keempat diawali kata Kerakyatan, yaitu Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan."
  },

  {
    tag: "Bunyi Sila",
    type: "order",
    text: "Urutkan bunyi sila berikut dari <b>sila kesatu</b>.",
    items: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang Adil dan Beradab", "Persatuan Indonesia"],
    answer: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang Adil dan Beradab", "Persatuan Indonesia"],
    note: "Ketuk mulai dari sila pertama",
    hint: "Ketuhanan dulu, baru kemanusiaan, lalu persatuan.",
    explain: "Sila 1 Ketuhanan Yang Maha Esa, sila 2 Kemanusiaan yang Adil dan Beradab, sila 3 Persatuan Indonesia."
  },

  /* =========================================================
     5. MENEBAK SILA — 10 soal (porsi terbanyak)
     ========================================================= */

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Berdoa sebelum belajar</b> adalah contoh pengamalan sila ke ...",
    options: ["Sila 1", "Sila 2", "Sila 3", "Sila 5"],
    answer: 0,
    explain: "Berdoa termasuk sila pertama, Ketuhanan Yang Maha Esa."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Menolong teman yang jatuh</b> adalah pengamalan sila ke ...",
    options: ["Sila 2", "Sila 1", "Sila 4", "Sila 5"],
    answer: 0,
    hint: "Menolong berarti menyayangi sesama manusia.",
    explain: "Menolong teman termasuk sila kedua, Kemanusiaan yang Adil dan Beradab."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Bermain bersama teman tanpa membeda-bedakan</b> termasuk sila ke ...",
    options: ["Sila 3", "Sila 5", "Sila 1", "Sila 4"],
    answer: 0,
    hint: "Berbeda-beda tetapi tetap satu.",
    explain: "Bermain rukun walau berbeda suku dan agama termasuk sila ketiga, Persatuan Indonesia."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Memilih ketua kelas dengan musyawarah</b> adalah pengamalan sila ke ...",
    options: ["Sila 4", "Sila 2", "Sila 3", "Sila 1"],
    answer: 0,
    explain: "Musyawarah termasuk sila keempat, yang dilambangkan kepala banteng."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Berbagi makanan dengan teman</b> adalah perilaku sila ke ...",
    options: ["Sila 5", "Sila 1", "Sila 3", "Sila 4"],
    answer: 0,
    hint: "Berbagi supaya semua kebagian dengan adil.",
    explain: "Berbagi termasuk sila kelima, Keadilan Sosial bagi Seluruh Rakyat Indonesia."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Membantu ibu mencuci piring</b> termasuk pengamalan sila ke ...",
    options: ["Sila 2", "Sila 3", "Sila 4", "Sila 5"],
    answer: 0,
    hint: "Membantu keluarga berarti menyayangi sesama.",
    explain: "Membantu ibu termasuk sila kedua, Kemanusiaan yang Adil dan Beradab."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Mendengarkan pendapat teman saat berdiskusi</b> termasuk sila ke ...",
    options: ["Sila 4", "Sila 1", "Sila 2", "Sila 5"],
    answer: 0,
    explain: "Mau mendengar pendapat teman adalah inti musyawarah, yaitu sila keempat."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Menjenguk teman yang sedang sakit</b> termasuk sila ke ...",
    options: ["Sila 2", "Sila 3", "Sila 4", "Sila 1"],
    answer: 0,
    explain: "Menjenguk teman yang sakit menunjukkan rasa sayang kepada sesama, yaitu sila kedua."
  },

  {
    tag: "Menebak Sila",
    type: "mcq",
    grid: true,
    text: "<b>Mengikuti upacara bendera dengan tertib</b> termasuk sila ke ...",
    options: ["Sila 3", "Sila 1", "Sila 2", "Sila 5"],
    answer: 0,
    hint: "Upacara bendera menumbuhkan rasa cinta tanah air.",
    explain: "Upacara bendera menunjukkan cinta tanah air dan persatuan, yaitu sila ketiga."
  },

  {
    tag: "Menebak Sila",
    type: "group",
    text: "Kelompokkan perbuatan berikut sesuai silanya.",
    bins: [
      { id: "s2", nm: "Sila 2 · Menyayangi", ico: "⛓️" },
      { id: "s4", nm: "Sila 4 · Musyawarah", ico: "🐂" }
    ],
    items: [
      { v: "Menghibur teman yang menangis", bin: "s2" },
      { v: "Menjenguk teman sakit", bin: "s2" },
      { v: "Membantu adik mengerjakan PR", bin: "s2" },
      { v: "Memilih ketua kelas bersama", bin: "s4" },
      { v: "Berdiskusi menentukan jadwal piket", bin: "s4" },
      { v: "Mengambil keputusan bersama keluarga", bin: "s4" }
    ],
    hint: "Sila 2 tentang menyayangi sesama, sila 4 tentang memutuskan bersama.",
    explain: "Perbuatan yang menolong dan menyayangi masuk sila kedua. Perbuatan yang memutuskan sesuatu bersama-sama masuk sila keempat."
  },

  /* =========================================================
     6. PENGAMALAN DI RUMAH — 4 soal
     ========================================================= */

  {
    tag: "Pengamalan di Rumah",
    type: "mcq",
    text: "Manakah contoh pengamalan Pancasila <b>di rumah</b>?",
    options: [
      "Membantu ibu mencuci piring",
      "Piket membersihkan kelas",
      "Mengikuti upacara bendera",
      "Memilih ketua kelas"
    ],
    answer: 0,
    explain: "Membantu ibu dilakukan di rumah. Tiga pilihan lainnya dilakukan di sekolah."
  },

  {
    tag: "Pengamalan di Rumah",
    type: "mcq",
    text: "Adikmu tidak sengaja <b>menjatuhkan gelas</b>.<br>Sikap yang tepat adalah ...",
    options: [
      "Membantu membersihkan sambil berkata hati-hati",
      "Memarahi adik sampai menangis",
      "Pura-pura tidak melihat",
      "Mengadukan adik supaya dihukum"
    ],
    answer: 0,
    hint: "Ingat makna rantai pada sila kedua.",
    explain: "Sesuai sila kedua, kita saling menyayangi. Membantu membersihkan lebih baik daripada memarahi."
  },

  {
    tag: "Pengamalan di Rumah",
    type: "match",
    text: "Jodohkan kegiatan di rumah dengan silanya.",
    pairs: [
      { a: "Berdoa sebelum makan", b: "Sila 1" },
      { a: "Membantu ibu memasak", b: "Sila 2" },
      { a: "Bermain rukun dengan adik", b: "Sila 3" },
      { a: "Mengantar makanan ke tetangga", b: "Sila 5" }
    ],
    explain: "Nilai Pancasila bisa diamalkan setiap hari di rumah, mulai dari berdoa sampai berbagi dengan tetangga."
  },

  {
    tag: "Pengamalan di Rumah",
    type: "group",
    text: "Kelompokkan kegiatan berikut sesuai tempatnya.",
    bins: [
      { id: "rumah", nm: "Di Rumah", ico: "🏠" },
      { id: "sekolah", nm: "Di Sekolah", ico: "🏫" }
    ],
    items: [
      { v: "Membantu ibu mencuci piring", bin: "rumah" },
      { v: "Berdoa bersama keluarga", bin: "rumah" },
      { v: "Bermain rukun dengan adik", bin: "rumah" },
      { v: "Piket membersihkan kelas", bin: "sekolah" },
      { v: "Memilih ketua kelas", bin: "sekolah" },
      { v: "Berbagi alat tulis dengan teman", bin: "sekolah" }
    ],
    explain: "Nilai Pancasila diamalkan di mana saja. Di rumah bersama keluarga, di sekolah bersama guru dan teman."
  },

  /* =========================================================
     7. PENGAMALAN DI SEKOLAH — 4 soal
     ========================================================= */

  {
    tag: "Pengamalan di Sekolah",
    type: "mcq",
    text: "Manakah contoh pengamalan Pancasila <b>di sekolah</b>?",
    options: [
      "Piket membersihkan kelas bersama",
      "Membantu ibu menyapu halaman",
      "Bermain dengan adik di kamar",
      "Menonton televisi bersama ayah"
    ],
    answer: 0,
    hint: "Cari kegiatan yang dilakukan bersama teman sekelas.",
    explain: "Piket kelas bersama adalah wujud gotong royong di sekolah. Pilihan lainnya dilakukan di rumah."
  },

  {
    tag: "Pengamalan di Sekolah",
    type: "mcq",
    text: "Temanmu <b>kehilangan alat tulis</b> saat ulangan.<br>Apa yang sebaiknya kamu lakukan?",
    options: [
      "Meminjamkan alat tulis cadanganmu",
      "Menertawakannya",
      "Diam saja karena bukan urusanmu",
      "Menyuruhnya pulang mengambil"
    ],
    answer: 0,
    explain: "Berbagi alat tulis dengan teman yang membutuhkan adalah pengamalan sila kelima, hidup adil dan saling membantu."
  },

  {
    tag: "Pengamalan di Sekolah",
    type: "mcq",
    grid: true,
    text: "Saat <b>upacara bendera</b>, sikap yang tepat adalah ...",
    options: ["Berdiri tegak dengan khidmat", "Mengobrol dengan teman", "Bermain-main di barisan", "Duduk di lapangan"],
    answer: 0,
    explain: "Upacara bendera diikuti dengan tertib dan khidmat sebagai wujud cinta tanah air, yaitu sila ketiga."
  },

  {
    tag: "Pengamalan di Sekolah",
    type: "group",
    text: "Kelompokkan sikap di sekolah berikut ini.",
    bins: [
      { id: "sesuai", nm: "Sesuai Pancasila", ico: "👍" },
      { id: "belum", nm: "Belum Sesuai", ico: "👎" }
    ],
    items: [
      { v: "Menolong teman jatuh", bin: "sesuai" },
      { v: "Berbagi bekal", bin: "sesuai" },
      { v: "Mau mendengar pendapat teman", bin: "sesuai" },
      { v: "Mengejek teman berbeda suku", bin: "belum" },
      { v: "Bertengkar saat bermain", bin: "belum" },
      { v: "Memaksakan pendapat sendiri", bin: "belum" }
    ],
    hint: "Pancasila mengajarkan hidup rukun, adil, dan menghargai sesama.",
    explain: "Mengejek, bertengkar, dan memaksakan kehendak bertentangan dengan sila kedua, ketiga, dan keempat."
  },

  /* =========================================================
     8. KOSAKATA — 4 soal
     ========================================================= */

  {
    tag: "Kosakata",
    type: "mcq",
    text: "Apa arti kata <b>musyawarah</b>?",
    options: [
      "Berdiskusi bersama untuk mengambil keputusan",
      "Bekerja sendiri tanpa dibantu",
      "Memilih yang paling kuat",
      "Diam saja saat berbeda pendapat"
    ],
    answer: 0,
    explain: "Musyawarah adalah berdiskusi bersama untuk mengambil keputusan, sesuai sila keempat."
  },

  {
    tag: "Kosakata",
    type: "mcq",
    grid: true,
    text: "Hidup bersama dengan damai tanpa bertengkar disebut ...",
    options: ["Rukun", "Adil", "Mandiri", "Berani"],
    answer: 0,
    explain: "Rukun berarti hidup bersama dengan damai tanpa bertengkar."
  },

  {
    tag: "Kosakata",
    type: "mcq",
    grid: true,
    text: "Bekerja sama membantu sesama disebut ...",
    options: ["Gotong royong", "Musyawarah", "Simbol", "Perisai"],
    answer: 0,
    explain: "Gotong royong berarti bekerja sama membantu sesama, misalnya kerja bakti membersihkan kelas."
  },

  {
    tag: "Kosakata",
    type: "match",
    text: "Jodohkan kata dengan artinya.",
    pairs: [
      { a: "Garuda", b: "Lambang negara Indonesia" },
      { a: "Pancasila", b: "Dasar negara yang berisi lima sila" },
      { a: "Simbol", b: "Gambar yang punya makna" },
      { a: "Adil", b: "Memperlakukan semua orang setara" }
    ],
    explain: "Mengenal arti katanya membuat kita lebih mudah memahami makna setiap sila."
  },

  /* =========================================================
     9. SOAL HOTS — 4 soal
     ========================================================= */

  {
    tag: "Soal HOTS",
    type: "mcq",
    text: "Kamu melihat teman <b>tidak mau ikut kerja kelompok</b>.<br>Apa yang sebaiknya kamu lakukan?",
    options: [
      "Mengajaknya dengan baik agar mau bekerja sama",
      "Membiarkannya dan mengerjakan sendiri",
      "Melaporkannya supaya dihukum guru",
      "Ikut tidak mengerjakan juga"
    ],
    answer: 0,
    hint: "Ingat nilai gotong royong.",
    explain: "Sesuai nilai gotong royong, kita mengajak teman dengan baik supaya semua ikut bekerja sama."
  },

  {
    tag: "Soal HOTS",
    type: "mcq",
    text: "Di keluargamu terjadi <b>perbedaan pendapat</b> saat menentukan tempat berlibur.<br>Apa yang sebaiknya dilakukan?",
    options: [
      "Bermusyawarah sampai sepakat bersama",
      "Menuruti yang paling keras suaranya",
      "Membatalkan liburan saja",
      "Pergi sendiri-sendiri"
    ],
    answer: 0,
    explain: "Sesuai sila keempat, perbedaan pendapat diselesaikan dengan musyawarah sampai tercapai kesepakatan bersama."
  },

  {
    tag: "Soal HOTS",
    type: "mcq",
    text: "Ada teman <b>berbeda agama</b> yang ingin berteman denganmu.<br>Bagaimana sikapmu?",
    options: [
      "Menerimanya dengan baik dan tetap rukun",
      "Menolak karena berbeda",
      "Mengajaknya pindah agama dulu",
      "Berteman tetapi tidak mau bermain bersama"
    ],
    answer: 0,
    hint: "Ingat makna pohon beringin.",
    explain: "Sesuai sila ketiga, kita memang berbeda-beda tetapi tetap satu bangsa yang saling menjaga dan hidup rukun."
  },

  {
    tag: "Soal HOTS",
    type: "mcq",
    text: "Mengapa nilai Pancasila penting <b>diamalkan sejak kecil</b>?",
    options: [
      "Agar tumbuh menjadi anak yang beriman, jujur, dan penuh kasih sayang",
      "Agar mendapat hadiah dari guru",
      "Agar bisa menang saat berlomba",
      "Agar tidak perlu belajar pelajaran lain"
    ],
    answer: 0,
    explain: "Dengan mengamalkan Pancasila di rumah, sekolah, dan lingkungan, kita tumbuh menjadi anak Indonesia yang beriman dan berakhlak mulia."
  }
];
