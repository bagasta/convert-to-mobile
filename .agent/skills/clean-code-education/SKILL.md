---
name: clean-code-education
description: Skill untuk menulis kode bersih, terdokumentasi, dan ringkas untuk project edukasi. Menjaga line count ≤300, komentar bahasa Indonesia, dan kualitas production-ready.
---

# 🧹 Skill: Clean Code for Education Projects

## Tujuan
Skill ini memastikan setiap kode yang ditulis memenuhi standar:
1. **Bersih** — Mudah dibaca oleh pemula
2. **Terdokumentasi** — Komentar jelas dalam Bahasa Indonesia
3. **Ringkas** — Tidak lebih dari 300 baris total
4. **Edukatif** — Bisa dipahami siswa SMA tanpa pengalaman coding

---

## 📏 Aturan Line Count (WAJIB)

### Batasan Keras
- **Total semua file kode: MAKSIMAL 300 baris**
- Hitung semua file: HTML + CSS + JS + JSON + Service Worker
- **TIDAK** termasuk: README.md, gambar, folder icons

### Distribusi Line yang Disarankan
| File | Baris Maks | Catatan |
|------|-----------|---------|
| `index.html` | 70 baris | Struktur semantic, minimal nesting |
| `style.css` | 120 baris | CSS Variables, mobile-first |
| `script.js` | 60 baris | Satu fungsi = satu tugas |
| `manifest.json` | 20 baris | Konfigurasi PWA |
| `sw.js` | 30 baris | Service Worker sederhana |

### Tips Menghemat Baris
1. **Gabungkan CSS property** yang singkat ke satu baris jika logis:
   ```css
   /* ✅ OK — property pendek digabung */
   .card { padding: 1rem; border-radius: 12px; }

   /* ❌ Jangan gabung property panjang */
   .card { background: linear-gradient(...); box-shadow: 0 4px 6px ...; }
   ```

2. **Gunakan CSS shorthand**:
   ```css
   /* ✅ Ringkas */
   margin: 1rem 0;
   /* ❌ Panjang */
   margin-top: 1rem;
   margin-bottom: 1rem;
   margin-left: 0;
   margin-right: 0;
   ```

3. **Hindari kode berulang** — gunakan class yang bisa di-reuse
4. **Hindari baris kosong berlebihan** — maksimal 1 baris kosong antar section

---

## 💬 Aturan Komentar (WAJIB)

### Bahasa
- **Semua komentar dalam Bahasa Indonesia**
- **Istilah teknis tetap dalam Bahasa Inggris** (HTML, CSS, flexbox, PWA, cache, dll.)
- Tulis komentar seolah sedang menjelaskan ke teman

### Format Komentar — Pemisah Section
Gunakan format ini untuk memisahkan bagian-bagian kode:

#### HTML
```html
<!-- ================================ -->
<!-- BAGIAN 1: HEADER TOKO            -->
<!-- ================================ -->
```

#### CSS
```css
/* ================================ */
/* BAGIAN 1: VARIABEL & RESET       */
/* ================================ */
```

#### JavaScript
```javascript
// ================================
// BAGIAN 1: REGISTRASI SERVICE WORKER
// ================================
```

### Komentar Inline
- Jelaskan **MENGAPA**, bukan **APA**
- Tulis pada baris di atas kode, atau di samping jika pendek

```javascript
// ✅ BAIK — menjelaskan MENGAPA
// Simpan event install supaya bisa dipanggil nanti via tombol
let deferredPrompt;

// ❌ BURUK — hanya menjelaskan APA
// Buat variabel deferredPrompt
let deferredPrompt;
```

### Komentar Wajib Per File
Setiap file HARUS dimulai dengan header comment:

```
/* ============================================
   DevStore — Toko Online Karya Digital Siswa
   File: [nama file]
   Fungsi: [deskripsi singkat]
   ============================================ */
```

---

## 🏗️ Aturan Struktur Kode

### HTML
1. **Semantic tags** — gunakan `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`
2. **Indentasi**: 2 spasi (BUKAN tab)
3. **Satu atribut per baris** jika elemen punya >3 atribut
4. **Meta tags** wajib: viewport, theme-color, description
5. **Link manifest.json** di `<head>`
6. **Script** di akhir `<body>` (sebelum `</body>`)

```html
<!-- ✅ BAIK -->
<article class="product-card">
  <span class="product-icon">🎮</span>
  <h3>Game Petualangan</h3>
  <p class="price">Rp 50.000</p>
  <button onclick="handleBeli('Game Petualangan')">Beli</button>
</article>
```

### CSS
1. **Mobile-first** — default styling untuk mobile, lalu `@media (min-width: 768px)` untuk desktop
2. **CSS Variables** untuk warna dan spacing — definisikan di `:root`
3. **Urutan property** (rekomendasi):
   - Layout (display, position, grid/flex)
   - Box model (margin, padding, border)
   - Visual (background, color, shadow)
   - Typography (font, text)
   - Lainnya (transition, animation)
4. **Selector sederhana** — hindari nesting lebih dari 2 level
5. **Naming convention**: kebab-case (`product-card`, bukan `productCard`)

```css
/* ✅ BAIK — terorganisir, mobile-first */
:root {
  --bg-primary: #0f0f23;
  --accent: #e94560;
  --text: #f8f8f2;
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  background: var(--bg-primary);
  color: var(--text);
  border-radius: 12px;
  transition: transform 0.3s ease;
}
```

### JavaScript
1. **Fungsi pendek** — setiap fungsi maksimal 10–15 baris
2. **Nama fungsi deskriptif** dalam Bahasa Indonesia atau campuran:
   - `handleBeli()`, `tampilkanKonfirmasi()`, `registerSW()`
3. **`const` dan `let`** — JANGAN gunakan `var`
4. **Arrow function** untuk callback sederhana
5. **Event listener** — gunakan `addEventListener`, atau `onclick` di HTML untuk fungsi sederhana
6. **Error handling** sederhana dengan `try-catch` atau fallback

```javascript
// ✅ BAIK — fungsi pendek, nama jelas
const handleBeli = (namaProduk) => {
  // Tampilkan konfirmasi pembelian ke pengguna
  alert(`Terima kasih! Kamu membeli: ${namaProduk}`);
};
```

### JSON (manifest.json)
1. **Indentasi 2 spasi**
2. **Nilai yang tepat** untuk setiap field
3. **Komentar**: JSON tidak support komentar, jadi jelaskan di README

### Service Worker (sw.js)
1. **Strategi cache sederhana**: Cache First
2. **Nama cache** deskriptif: `devstore-v1`
3. **List file** yang di-cache harus lengkap
4. **3 event listener saja**: `install`, `fetch`, `activate`

---

## 🎨 Aturan Desain Visual

### Wajib
1. **Dark mode** sebagai default
2. **CSS Variables** untuk semua warna
3. **Mobile responsive** dengan media query
4. **Hover effects** pada elemen interaktif
5. **Transition smooth** (0.2–0.3s)
6. **Border-radius** 8–16px (modern rounded look)
7. **Google Fonts** via CDN (Inter atau Poppins)

### Dilarang
1. ❌ Warna default browser (biru link, abu button)
2. ❌ Font default (Times New Roman, serif)
3. ❌ Layout tanpa flexbox/grid
4. ❌ Elemen tanpa padding/margin yang proper
5. ❌ Teks sulit dibaca (kontras rendah)

---

## 📝 Aturan Dokumentasi (README.md)

### Struktur README Wajib
```markdown
# 📱 DevStore — Toko Online Karya Digital

## 📋 Tentang Project
[Penjelasan singkat]

## 🎯 Yang Akan Kamu Pelajari
[List learning objectives]

## 📁 Struktur File
[Tree diagram]

## 🚀 Langkah-Langkah

### Pertemuan 1: Membuat Website
#### Langkah 1: ...
#### Langkah 2: ...

### Pertemuan 2: Konversi ke PWA
#### Langkah 1: ...
#### Langkah 2: ...

## 🧪 Cara Testing
[Instruksi test di browser & mobile]

## 📦 Deploy ke Internet
[Instruksi GitHub Pages]

## 📱 Konversi ke APK
[Instruksi PWABuilder]

## 🏆 Tantangan Tambahan
[Extension activities]

## 🆘 Troubleshooting
[Common errors & solusi]
```

### Aturan Penulisan README
1. **Langkah bernomor** — bukan paragraf panjang
2. **Code snippet** di setiap langkah — copy-paste ready
3. **Emoji** untuk visual marker (tapi jangan berlebihan)
4. **Screenshot/diagram** jika memungkinkan
5. **Bahasa sederhana** — hindari jargon tanpa penjelasan
6. **Setiap istilah teknis** diberi penjelasan singkat
   - Contoh: "Service Worker (program kecil yang berjalan di belakang layar)"

---

## ✅ Checklist Sebelum Selesai

### Kode
- [ ] Total baris ≤ 300 (HTML + CSS + JS + JSON + SW)
- [ ] Semua file punya header comment
- [ ] Setiap section punya pemisah comment
- [ ] Komentar dalam Bahasa Indonesia
- [ ] Tidak ada `var`, gunakan `const`/`let`
- [ ] CSS menggunakan variables
- [ ] Layout responsive mobile-first
- [ ] Tidak ada kode yang di-copy-paste tanpa modifikasi
- [ ] Semua fungsi ≤ 15 baris

### PWA
- [ ] `manifest.json` valid (test di DevTools → Application)
- [ ] Service Worker terdaftar
- [ ] Icons tersedia (192x192, 512x512)
- [ ] `meta` tags lengkap di HTML
- [ ] Bisa di-install di Chrome mobile

### Dokumentasi
- [ ] README.md lengkap dengan semua section
- [ ] Setiap langkah punya code snippet
- [ ] Troubleshooting section ada
- [ ] Bahasa mudah dipahami siswa SMA

### Testing
- [ ] Website tampil benar di mobile
- [ ] Website tampil benar di desktop
- [ ] Tombol "Beli" berfungsi
- [ ] PWA bisa di-install
- [ ] Offline mode berfungsi (dari cache)

---

## 🔄 Validasi Line Count

Sebelum finalisasi, WAJIB hitung ulang total baris:

```bash
# Hitung baris setiap file
wc -l index.html style.css script.js manifest.json sw.js

# Hitung total
wc -l index.html style.css script.js manifest.json sw.js | tail -1
```

Jika melebihi 300 baris:
1. Hapus baris kosong yang tidak perlu
2. Gabung CSS property pendek
3. Gunakan shorthand CSS
4. Sederhanakan HTML (kurangi nesting)
5. Refactor JS (gabung fungsi yang mirip)

---

*Skill ini dibuat untuk memastikan kualitas kode edukasi yang konsisten dan mudah dipelajari oleh siswa SMA pemula.*
