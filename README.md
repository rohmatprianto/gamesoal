# Petualangan Bilangan 🦉

Aplikasi latihan soal untuk **Kelas 2 SD**, dikemas seperti Duolingo: nyawa, XP,
rentetan jawaban benar, umpan balik instan, dan konfeti.

| Pelajaran | Bank soal | Materi |
|---|---|---|
| 🔢 Matematika | 42 soal | Menghitung benda, nama bilangan, nilai tempat, bentuk panjang, membandingkan, mengurutkan, pola bilangan |
| 📚 Bahasa Indonesia | 54 soal | Perasaan, memahami cerita, huruf kapital, kata tanya, kalimat, grafik, hidup sehat |
| 🦅 Pancasila | 42 soal | Garuda, simbol & makna sila, menebak sila, pengamalan, kosakata |
| 🕌 Agama Islam | 44 soal | Asmaulhusna, bukti & teladannya, zikir, akhlak, Surah Al-'Asr |

Setiap sesi mengambil **20 soal acak** dari bank pelajaran yang dipilih.

## Cara menjalankan

Cukup buka `index.html` di browser (tanpa server, tanpa build).
Kalau ingin lewat server lokal:

```bash
npx serve .
# atau
python -m http.server 8080
```

## Struktur

```
index.html                 kerangka layar: beranda, tingkat, materi, kuis, nama, hasil
css/style.css              tema warna, komponen, animasi
js/questions.js            daftar pelajaran (buildSubjects) + bank Matematika
js/questions-bindo.js      bank Bahasa Indonesia
js/questions-pancasila.js  bank Pancasila
js/questions-pai.js        bank Agama Islam
js/app.js                  mesin permainan: render, penilaian, nyawa, XP, konfeti
```

**Menambah pelajaran baru:** buat berkas bank soalnya sendiri, muat lewat
`<script>` di `index.html`, lalu tambahkan satu objek di `buildSubjects()`
pada `js/questions.js`. Pelajaran yang banknya masih kosong otomatis tampil
sebagai "Segera" dan belum bisa diketuk.

## Aturan main

| Hal | Nilai |
|---|---|
| Jumlah soal per sesi | 20, diacak dari bank pelajaran |
| Tingkat Easy | 10 nyawa, 60 detik per soal |
| Tingkat Normal | 5 nyawa, 40 detik per soal |
| Tingkat Hard | 5 nyawa, 20 detik per soal |
| XP | 10 + bonus rentetan (maks +5) untuk jawaban benar pertama kali, 5 untuk soal ulangan |
| Soal salah | otomatis diulang di akhir sesi, satu kali |
| Pemilihan soal | satu soal per materi dijamin ikut, sisanya diundi |
| Tingkat soal | dari `level` pada soal; bank lama memakai perkiraan dari nama materi |
| Isi sesi | soal tingkat terpilih diambil sebanyak-banyaknya, kekurangannya ditambal dari tingkat terdekat |
| Peringkat | 10 skor XP tertinggi per mata pelajaran, disimpan di browser perangkat |
| Bintang | 3 ⭐ ≥ 90%, 2 ⭐ ≥ 70%, selain itu 1 ⭐ |

## Tipe soal yang didukung

- `fill` — isian dengan papan angka; satu kotak (`342`) atau banyak kotak
  (bentuk panjang `900 + 20 + 6`, melengkapi pola bilangan)
- `mcq` — pilihan ganda, tambahkan `grid: true` untuk tata letak 2 kolom
- `compare` — memilih tanda `>` atau `<`
- `order` — mengurutkan kartu; angka memakai `dir: "asc"/"desc"`, kata memakai
  `answer: [...]` yang menyebut urutan benarnya
- `match` — menjodohkan dua kolom; `{ num, name }` untuk angka, `{ a, b }` untuk teks
- `group` — mengelompokkan kartu ke dalam dua kotak (`bins` + `items[].bin`)

### Visual pendukung (opsional, kunci `visual`)

- `{ kind: "blocks", h, t, o }` — blok ratusan/puluhan/satuan
- `{ kind: "jars",   h, t, o }` — toples 100, kantong 10, butiran satuan
- `{ kind: "pvtable", digits: [3,1,7] }` atau `{ kind: "pvtable", rows: [[6,2,3],[6,3,2]] }`
- `{ kind: "chart", title, bars: [{ nm, v, ico }] }` — diagram batang
- `{ kind: "story", title, lines: [...] }` — kartu bacaan untuk soal pemahaman

### Contoh menambah soal

```js
{
  tag: "Nilai Tempat",
  type: "fill",
  text: "Lengkapi nilai tempat bilangan <b>748</b>.",
  visual: { kind: "blocks", h: 7, t: 4, o: 8 },
  layout: [
    { t: "text", v: "748 =" },
    { t: "slot", ans: 7, max: 1, label: "ratusan" },
    { t: "slot", ans: 4, max: 1, label: "puluhan" },
    { t: "slot", ans: 8, max: 1, label: "satuan" }
  ],
  hint: "Lihat gambar bloknya dulu.",
  explain: "748 terdiri dari 7 ratusan, 4 puluhan, dan 8 satuan."
}
```

Catatan: `max` harus sama dengan jumlah digit `ans` (`ans: 900` → `max: 3`).

## Efek berhasil & gagal

| Kejadian | Suara | Visual | Getar |
|---|---|---|---|
| Ketuk tombol | blip pendek | — | — |
| Jawaban **benar** | arpeggio lonceng naik C–E–G–C + kilau nada tinggi | letupan konfeti dari bawah layar, makin banyak bila rentetan makin panjang | 30 ms |
| Jawaban **salah** | dua nada turun "melempem" + hentakan bas | layar bergetar + kilat merah di tepi | 40-60-40 ms |
| **Waktu habis** | sumbu mendesis lalu dentuman rendah + gemuruh | 💣 bergetar, meledak jadi 💥, kilatan api, gelombang kejut, puing berterbangan | 70-50-180 ms |
| Nyawa berkurang | bunyi "pecah" pendek (0,3 s setelah salah) | hati ke-n pecah lalu memudar | — |
| Rentetan 3/5/7/10 | kilau nada naik, makin tinggi tiap tingkat | balon pesan + letupan ⭐🎉 | — |
| Pasangan cocok (menjodohkan) | lonceng yang naik tiap pasangan | letupan kecil di kartu | — |
| **Menang** | fanfare 5 nada + akor penutup + desis | hujan konfeti + 2 letupan sudut + letupan per bintang | pola panjang |
| **Kalah** | nada meluncur turun seperti trombon sedih | — | 80-80-160 ms |

Semua bunyi disintesis saat itu juga (osilator, derau putih, penapis biquad,
amplop volume) — **tidak ada satu pun berkas audio**. Konfeti memakai satu mesin
partikel di `<canvas>`: gravitasi, hambatan udara, putaran, goyangan, dan pudar di
akhir umur, dengan bentuk pita, bulatan, dan emoji.

Menyetel efek ada di `js/app.js`:

- `Sfx.correct()` / `Sfx.wrong()` / `Sfx.win()` / `Sfx.lose()` — ubah deret frekuensinya
- `Sfx.master.gain.value` — volume keseluruhan (sekarang `0.9`)
- `Sfx.on = false` — matikan semua suara
- `Confetti.colors` dan `Confetti.emojis` — warna dan emoji partikel
- `Confetti.burst(x, y, jumlah, { power, spread, emojiChance })` — letupan sesuai selera

## Catatan teknis

- Tanpa dependensi. Hanya font Google (Baloo 2 + Nunito) dari CDN; tanpa internet
  aplikasi tetap jalan memakai font sistem.
- Efek suara dibuat langsung dengan Web Audio API, jadi tidak ada satu pun
  berkas audio. Aplikasi berjalan tanpa musik latar.
- XP terbaik disimpan di `localStorage` (`pb_best`).
- Bisa dimainkan dengan sentuhan maupun papan ketik (angka, Backspace, Enter).
