# 📱 DevStore — Toko Online Karya Digital

> **Project PWA untuk Kelas Coding** — Belajar mengubah website statis menjadi aplikasi mobile!

## 📋 Tentang Project

DevStore adalah toko online sederhana untuk menjual karya digital (game, website, desain) yang dibuat oleh siswa. Project ini mengajarkan cara mengubah website biasa menjadi **Progressive Web App (PWA)** yang bisa di-install di HP dan dikonversi menjadi file APK.

**Apa itu PWA?**
PWA = Progressive Web App. Website biasa yang punya kemampuan seperti aplikasi native:
- Bisa di-install di home screen HP 📲
- Bisa jalan offline (tanpa internet) 🌐
- Tampil fullscreen tanpa address bar 📱

## 🎯 Yang Akan Kamu Pelajari

1. **HTML** — Membuat struktur halaman web
2. **CSS** — Mendesain tampilan yang menarik & responsive
3. **JavaScript** — Menambahkan interaksi (tombol beli, install app)
4. **PWA Manifest** — Mengatur identitas aplikasi
5. **Service Worker** — Menyimpan file untuk mode offline
6. **Deploy** — Mengupload website ke internet
7. **APK** — Mengkonversi PWA menjadi file APK Android

## 📁 Struktur File

```
devstore/
├── index.html       ← Halaman utama (struktur toko)
├── style.css        ← Desain & tampilan visual
├── script.js        ← Logika tombol beli & install PWA
├── manifest.json    ← Konfigurasi PWA (nama, icon, warna)
├── sw.js            ← Service Worker (penyimpanan offline)
├── icons/
│   ├── icon-192.png ← Icon kecil (home screen)
│   └── icon-512.png ← Icon besar (splash screen)
└── README.md        ← Panduan ini
```

## 🧠 Konsep Dasar: HTML + CSS + JS

Bayangkan membangun rumah:
- **HTML** = **Kerangka rumah** (dinding, pintu, jendela)
- **CSS** = **Cat & dekorasi** (warna, ukuran, tata letak)
- **JavaScript** = **Listrik & mesin** (lampu nyala saat disentuh, pintu bisa dibuka)

---

## 🚀 Langkah-Langkah

### Pertemuan 1: Membuat Website Toko Online

#### Langkah 1: Buat Folder Project
Buat folder bernama `devstore`, lalu buat file-file ini di dalamnya:
- `index.html`
- `style.css`
- `script.js`

#### Langkah 2: Tulis HTML (`index.html`)
Buka `index.html` dan tulis struktur toko:

```html
<!-- Contoh satu kartu produk -->
<article class="card">
  <span class="card-icon">🎮</span>
  <h3>Game Petualangan</h3>
  <p class="card-desc">Game platformer 2D seru</p>
  <p class="card-price">Rp 50.000</p>
  <button onclick="handleBeli('Game Petualangan')">🛍️ Beli</button>
</article>
```

**Penjelasan:**
- `<article>` = wadah untuk satu kartu produk
- `<span>` = emoji sebagai icon produk
- `<h3>` = judul/nama produk
- `<p>` = paragraf (deskripsi & harga)
- `<button onclick="...">` = tombol yang memanggil fungsi JavaScript

#### Langkah 3: Tulis CSS (`style.css`)
Poin penting di CSS:

```css
/* CSS Variables — warna yang bisa dipakai ulang */
:root {
  --bg: #0f0f23;      /* Warna background gelap */
  --accent: #e94560;   /* Warna aksen merah-pink */
  --text: #f8f8f2;     /* Warna teks putih */
}

/* Grid — layout otomatis untuk kartu produk */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
```

**Penjelasan:**
- `CSS Variables` (--bg, --accent) = seperti "kotak cat" yang bisa dipakai berkali-kali
- `Grid` = layout yang otomatis menyesuaikan jumlah kolom dengan lebar layar
- `auto-fill` = browser yang menentukan berapa kolom yang muat

#### Langkah 4: Tulis JavaScript (`script.js`)

```javascript
// Fungsi yang dipanggil saat tombol "Beli" diklik
const handleBeli = (namaProduk) => {
  alert(`🎉 Terima kasih! Kamu membeli: ${namaProduk}`);
};
```

#### Langkah 5: Test di Browser
1. Klik kanan `index.html` → **Open with** → Chrome/Edge
2. Tekan `F12` → klik icon 📱 (Toggle Device) untuk lihat tampilan mobile
3. Coba klik tombol "Beli" — harusnya muncul popup

---

### Pertemuan 2: Konversi ke PWA

#### Langkah 1: Buat `manifest.json`
File ini memberitahu browser bahwa website kita adalah aplikasi:

```json
{
  "name": "DevStore — Toko Karya Digital Siswa",
  "short_name": "DevStore",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#0f0f23",
  "theme_color": "#e94560",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

**Penjelasan:**
- `display: "standalone"` = tampil tanpa address bar (seperti app native)
- `theme_color` = warna bar atas di HP
- `icons` = gambar untuk home screen & splash screen

#### Langkah 2: Hubungkan Manifest ke HTML
Tambahkan di `<head>` pada `index.html`:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#e94560">
```

#### Langkah 3: Buat Service Worker (`sw.js`)
Service Worker = program kecil yang jalan di belakang layar, tugasnya menyimpan file ke **cache** (penyimpanan lokal) supaya website bisa diakses tanpa internet.

```javascript
const CACHE_NAME = 'devstore-v1';
const FILES = ['./', './index.html', './style.css', './script.js'];

// Saat install: simpan semua file ke cache
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(FILES)));
});

// Saat browser minta file: cek cache dulu, baru internet
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
```

#### Langkah 4: Register Service Worker di `script.js`
Tambahkan di `script.js`:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('✅ Service Worker terdaftar!'))
    .catch((err) => console.log('❌ Gagal:', err));
}
```

#### Langkah 5: Buat Icon
- Buat gambar PNG ukuran **192x192** dan **512x512** pixel
- Simpan di folder `icons/`
- Bisa pakai [Canva](https://canva.com) atau langsung pakai icon yang sudah disediakan

#### Langkah 6: Deploy ke Internet
PWA **wajib** pakai HTTPS. Cara paling mudah:

**Pakai GitHub Pages (Gratis):**
1. Buat repository baru di [github.com](https://github.com)
2. Upload semua file `devstore/`
3. Pergi ke **Settings** → **Pages** → Source: `main` → Save
4. Tunggu 1–2 menit, website live di `https://username.github.io/nama-repo`

#### Langkah 7: Test Install PWA
1. Buka website dari HP (pakai Chrome)
2. Akan muncul tombol **"📲 Install App"** di bawah layar
3. Klik tombol tersebut → klik **Install**
4. App muncul di home screen! 🎉

---

### Pertemuan 3 (Opsional): Konversi ke APK

1. Buka [PWABuilder.com](https://pwabuilder.com)
2. Masukkan URL website kamu yang sudah di-deploy
3. Klik **"Package for stores"** → pilih **Android**
4. Download file APK
5. Transfer ke HP → Install (aktifkan **"Sumber Tidak Dikenal"** di Settings)

---

## 🧪 Cara Testing PWA

1. Buka Chrome → tekan `F12` (DevTools)
2. Klik tab **"Application"**
3. Di sidebar kiri, cek:
   - ✅ **Manifest** — harus terdeteksi, tidak ada error
   - ✅ **Service Workers** — status "activated and running"
   - ✅ **Cache Storage** — ada `devstore-v1` dengan file-file kamu
4. Test offline: di tab **Network** → centang **"Offline"** → refresh halaman

## 🏆 Tantangan Tambahan

Setelah selesai, coba tantangan ini:

| Level | Tantangan |
|-------|-----------|
| ⭐ | Ganti emoji dan nama produk sesuai karya kamu |
| ⭐ | Ubah warna tema di CSS Variables |
| ⭐⭐ | Tambahkan produk baru (copy-paste kartu) |
| ⭐⭐ | Buat halaman detail produk terpisah |
| ⭐⭐⭐ | Simpan data produk di `localStorage` |
| ⭐⭐⭐ | Tambahkan fitur keranjang belanja |

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Service Worker tidak terdaftar | Pastikan pakai HTTPS (localhost atau GitHub Pages) |
| Tombol install tidak muncul | Cek manifest.json valid di DevTools → Application |
| Halaman tidak tampil offline | Cek sw.js sudah memasukkan semua file ke cache |
| CSS tidak berubah | Hard refresh: `Ctrl + Shift + R` |
| Error di console | Buka DevTools → Console, baca pesan error-nya |

---

**Selamat belajar! 🚀 Kalau ada pertanyaan, jangan ragu bertanya ke guru atau teman.**
