# Panduan Edit — Prabu Ata Esawina Portfolio

Dokumen ini menjelaskan **di file mana** kamu harus edit untuk mengubah hal tertentu. Buka folder `prabu-ata-portfolio/` di VSCode, lalu pakai `Cmd/Ctrl + P` untuk lompat cepat ke nama file.

Tidak perlu build tool apa pun. Edit file → save → refresh browser (double-click `index.html`, atau pakai extension **Live Server** di VSCode biar auto-refresh).

---

## 1. Peta folder

```
prabu-ata-portfolio/
├── index.html              ← SEMUA konten teks & struktur section ada di sini
└── assets/
    ├── css/
    │   ├── 01-tokens.css       ← warna, font, ukuran, spacing (SUMBER UTAMA)
    │   ├── 02-base.css         ← reset dasar, jarang perlu disentuh
    │   ├── 03-layout.css       ← grid, container, section wrapper
    │   ├── 04-components.css   ← nav, tombol, tag, lightbox, marquee (dipakai berkali-kali)
    │   └── 05-sections.css     ← styling KHUSUS tiap section (hero, case study, dll)
    ├── js/
    │   ├── nav.js               ← perilaku menu & header
    │   ├── reveal.js             ← animasi muncul saat scroll
    │   ├── lightbox.js           ← klik gambar → zoom
    │   ├── tabs.js                ← tombol filter galeri
    │   └── main.js                ← tombol back-to-top, tahun footer
    └── img/gallery/              ← semua file gambar
```

**Prinsip filenya:** angka di depan nama CSS (01, 02, 03...) menandakan urutan loading. `01-tokens.css` di-load duluan karena file lain bergantung pada variabelnya.

---

## 2. "Saya mau ubah ini, di mana?"

### Ganti/tambah logo di "More Marks" (Logo Wall)
📄 `index.html` — cari komentar `LOGO WALL` di dalam section `#case-logo`.
Setiap logo adalah satu blok `<div class="logo-wall__item"><img ...></div>`. Untuk nambah logo baru:
1. Taruh file gambar di `assets/img/logos/`
2. Copy salah satu blok `logo-wall__item` yang ada, ganti `src` dan `alt`
Ada 2 slot placeholder kosong (`logo-07.png`, `logo-08.png`) yang sudah disiapkan — begitu kamu taruh file dengan nama itu di folder `assets/img/logos/`, otomatis muncul menggantikan kotak putus-putus, tanpa edit HTML lagi. Mau nambah lebih dari itu, tinggal copy blok baru dengan pola yang sama.

### Ganti link Google Drive di video placeholder
📄 `index.html` — cari `REPLACE-WITH-DRIVE-LINK` (ada di 3 tempat: TRAC road-test video, TRAC Mobile launch video, mobil88/IBID launch video). Ganti bagian `href="https://drive.google.com/REPLACE-WITH-DRIVE-LINK"` dengan link asli punyamu. Kotak ini otomatis clickable, buka tab baru.

### Ganti logogram besar di hero
📄 Taruh file di `assets/img/logogram.png` — otomatis muncul di sisi kanan hero menggantikan kotak placeholder putus-putus. Tidak perlu edit `index.html` sama sekali, selama nama filenya persis `logogram.png`. Ukurannya otomatis responsif (mengecil di layar sempit, hilang total di mobile karena hero sudah padat teks).

### Ganti header image tiap case study (SERA, TRAC, TSMP, dll)
📄 `assets/img/headers/` — file `trac_header.jpg`, `sera_ar_header.jpg`, `sera_bulletin_header.jpg`, `tsmp_header.jpg`. Ganti isi filenya (nama file harus sama) atau cari `src="assets/img/headers/..."` di `index.html` untuk ganti ke nama file baru.

### Ganti warna (misal neon-lime jadi warna lain)
📄 `assets/css/01-tokens.css`
Cari baris `--c-lime: #ccff00;` — ganti hex-nya. Semua elemen yang pakai `var(--c-lime)` di seluruh file otomatis ikut berubah. Tidak perlu cari-ganti manual di file lain.

Variabel warna lain yang tersedia di file yang sama:
- `--c-black` — background utama
- `--c-offwhite` — teks di atas background gelap
- `--c-paper` — background section terang (skills section)
- `--c-gray-400` / `--c-gray-600` — teks abu-abu (caption, label)

### Ganti font
📄 `assets/css/01-tokens.css` (baris `--f-display`, `--f-body`, `--f-label`)
Font di-load dari Google Fonts lewat `<link>` di bagian `<head>` file `index.html` (baris paling atas, cari `fonts.googleapis.com`). Kalau ganti font, dua tempat ini harus sinkron: link import di `index.html` + nama font di token CSS.

### Ganti teks / copy (about, journey, case study, dll)
📄 `index.html`
Semua teks ada langsung di HTML, dibungkus komentar section seperti:
```html
<!-- ==========================================================
     02 — MANIFESTO / ABOUT
     ========================================================== -->
```
Cari komentar section yang mau diedit (`Cmd/Ctrl+F` di VSCode), teksnya ada persis di bawahnya. Tidak ada file terpisah per section — semua konten sengaja ditaruh satu tempat biar gampang dicari, meski stylingnya modular.

### Ganti / tambah gambar
1. Taruh file gambar baru ke `assets/img/gallery/`
2. Di `index.html`, cari tag `<img src="assets/img/gallery/NAMA_LAMA.jpg" ...>` pada section terkait, ganti `NAMA_LAMA.jpg` jadi nama file barumu
3. Gambar otomatis bisa di-klik untuk zoom **kalau** tag-nya punya atribut `data-lightbox` — pastikan atribut ini ikut ada di `<img>` yang baru

Ukuran gambar yang saat ini dipakai sudah dioptimasi (~1200–1600px lebar). Kalau upload gambar baru berukuran besar, sebaiknya di-resize dulu supaya halaman tetap cepat.

### Isi placeholder (TRAC×RANS, XTIGMATE, LPWS)
📄 `index.html` — cari class `placeholder` (ada 5 titik: TRAC case study, 2 video motion graphics, XTIGMATE, LPWS)
Contoh strukturnya:
```html
<div class="placeholder reveal">
  <div class="placeholder__inner">
    <strong>Image / video needed</strong>
    Teks penjelasan...
  </div>
</div>
```
Ganti seluruh blok `<div class="placeholder">...</div>` ini dengan `<img>` atau `<video>` biasa begitu asetnya sudah ada, mengikuti pola gambar lain di section yang sama.

### Ganti email / LinkedIn
📄 `index.html` — cari teks `REPLACE-WITH-EMAIL` dan `REPLACE-WITH-URL` (ada di 3 tempat: hero, dan closing section). Ganti juga `href="mailto:..."` dan `href="#"` di sekitarnya.

### Ubah urutan section
📄 `index.html`
Setiap section dibungkus `<section class="section" id="...">...</section>` dan dipisahkan komentar besar. Potong-tempel (cut-paste) blok section lengkap (dari `<section>` sampai `</section>` penutupnya) ke posisi baru. Section saling independen, aman dipindah asal tidak memutus tag di tengah.

⚠️ Kalau memindah section, cek juga menu navigasi di bagian `<nav class="main-nav">` (dekat atas file) — urutan link di situ idealnya disesuaikan juga, walau tidak wajib secara teknis.

### Tambah section case study baru
Cara termudah: duplikat salah satu blok `<section class="case-study" id="case-...">` yang sudah ada (misal punya SERA Annual Report), ganti `id`, judul, isi teks, dan path gambar. Class CSS-nya (`case-study__head`, `case-study__gallery`, dst) sudah otomatis reusable — jangan bikin nama class baru kecuali memang perlu tampilan berbeda.

### Ubah spacing / jarak antar elemen
📄 `assets/css/01-tokens.css` (baris `--sp-1` sampai `--sp-7`)
Ini skala spacing global. Section pakai `--sp-7` untuk padding atas-bawah besar. Ubah di sini kalau mau semua section jadi lebih rapat/renggang sekaligus.

### Ubah perilaku animasi scroll-reveal
📄 `assets/js/reveal.js` — logic JS-nya di sini.
📄 `assets/css/04-components.css` — cari `.reveal` untuk ubah efeknya (jarak geser, durasi, dll via variabel `--dur-slow` di tokens).

Untuk menonaktifkan animasi di elemen tertentu, cukup hapus class `reveal` dari elemen itu di `index.html`.

### Ubah menu navigasi (tambah/kurangi item)
📄 `index.html` — cari `<nav class="main-nav">` di bagian atas file (sekitar baris 40-an). Tambah/hapus `<li><a href="#id-section">Nama</a></li>`. Pastikan `href="#id-section"` cocok dengan `id="..."` pada section tujuan.

---

## 3. Struktur `id` section (untuk referensi anchor link)

| ID | Section |
|---|---|
| `#top` | Hero |
| `#about` | Manifesto / About |
| `#journey` | Beyond Design |
| `#experience` | Selected Experience |
| `#work` | Index case study |
| `#case-trac` | TRAC × RANS |
| `#case-sera-ar` | SERA Annual Report |
| `#case-sera-bulletin` | SERA Internal Bulletin |
| `#case-tsmp` | TSMP × COIVNECT |
| `#case-lul` | Light Upon Light |
| `#case-motion` | Motion Graphics |
| `#case-logo` | Logo & Brand Identity |
| `#case-social` | Social & Campaign Gallery |
| `#lessons` | Entrepreneurial Lessons |
| `#skills` | Skills |
| `#contact` | Closing / Contact |

---

## 4. Hal yang sebaiknya TIDAK diubah kecuali paham dampaknya

- Urutan `<link rel="stylesheet">` di `<head>` — file `01` harus dimuat sebelum `05`, karena file belakangan bergantung pada variabel dari file pertama.
- Nama class seperti `.reveal`, `.case-study__gallery`, `.tag` — dipakai berulang di banyak tempat; ganti nama class di satu tempat tapi lupa di tempat lain akan merusak style.
- Struktur `<div class="lightbox">` yang di-generate otomatis oleh `lightbox.js` — jangan bikin manual di HTML, itu sudah dibuat otomatis lewat JavaScript.

---

## 5. Tips workflow VSCode

- Install extension **Live Server** (ritwickdey.LiveServer) → klik kanan `index.html` → "Open with Live Server" → auto-refresh tiap save.
- `Cmd/Ctrl + Shift + F` untuk cari teks di semua file sekaligus (misal cari semua pemakaian warna lime).
- Gunakan folding (klik panah kecil di margin kiri editor) untuk melipat section HTML yang panjang biar navigasi file lebih mudah.
