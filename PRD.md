# 📱 PRD: Convert Web to Mobile PWA
## "DevStore — Toko Online Karya Digital Siswa"

---

## 1. Ringkasan Proyek

| Item | Detail |
|------|--------|
| **Nama Proyek** | DevStore — Toko Online Karya Digital |
| **Tujuan** | Mengajarkan siswa SMA cara mengubah website statis menjadi Progressive Web App (PWA) yang bisa di-install di HP dan dikonversi ke APK |
| **Target Audiens** | Siswa SMA, minim pengalaman coding |
| **Teknologi** | HTML, CSS, JavaScript (Vanilla — tanpa framework) |
| **Batasan Kode** | Maksimal **300 baris** total (HTML + CSS + JS) |
| **Bahasa UI** | Indonesia |
| **Bahasa Komentar** | Indonesia |
| **Estimasi Waktu** | 2–3 pertemuan (@ 90 menit) |

---

## 2. Latar Belakang & Motivasi

### Mengapa PWA?
- **Relevan**: Siswa SMA akrab dengan smartphone, PWA membuat web terasa seperti app native
- **Sederhana**: Tidak perlu Android Studio, Java/Kotlin, atau React Native
- **Murah**: Tidak perlu biaya developer account Google Play ($25)
- **Cepat**: Dari website → app di HP dalam hitungan menit
- **Edukatif**: Memperkenalkan konsep modern web (Service Worker, Manifest, Cache)

### Mengapa Toko Online?
- Siswa menjual **karya digital mereka sendiri** (website, game, desain)
- Memberikan rasa kepemilikan dan motivasi
- Konteks yang familiar dan menarik bagi remaja
- Cukup sederhana untuk 300 baris kode

---

## 3. Tujuan Pembelajaran (Learning Objectives)

### Setelah menyelesaikan project ini, siswa mampu:

| # | Tujuan | Kategori |
|---|--------|----------|
| 1 | Memahami struktur dasar HTML, CSS, JavaScript | Fundamental |
| 2 | Membuat layout responsive untuk mobile | CSS |
| 3 | Memahami apa itu PWA dan komponennya | Konsep |
| 4 | Membuat file `manifest.json` untuk PWA | PWA |
| 5 | Membuat Service Worker sederhana untuk caching | PWA |
| 6 | Menginstall website sebagai app di smartphone | Praktik |
| 7 | Mengkonversi PWA menjadi file APK menggunakan PWABuilder/Bubblewrap | Praktik |

---

## 4. Fitur Produk

### 4.1 Halaman Toko Online (Web Statis)

```
┌─────────────────────────────┐
│  🛒 DevStore                │  ← Header + Nama Toko
│  Karya Digital Siswa Kelas X│  ← Tagline
├─────────────────────────────┤
│                             │
│  ┌─────┐  ┌─────┐          │
│  │ 🎮  │  │ 🌐  │          │  ← Grid Produk (2 kolom)
│  │Game │  │ Web │          │
│  │Rp50k│  │Rp75k│          │
│  │[Beli]│  │[Beli]│         │
│  └─────┘  └─────┘          │
│                             │
│  ┌─────┐  ┌─────┐          │
│  │ 🎨  │  │ 📱  │          │
│  │Dsign│  │ App │          │
│  │Rp30k│  │Rp100k│         │
│  │[Beli]│  │[Beli]│         │
│  └─────┘  └─────┘          │
│                             │
├─────────────────────────────┤
│  © 2026 DevStore            │  ← Footer
└─────────────────────────────┘
```

### 4.2 Fitur Web
| Fitur | Deskripsi | Prioritas |
|-------|-----------|-----------|
| Header dengan logo/emoji | Identitas toko | Wajib |
| Grid produk responsif | 2 kolom di mobile, 3 di desktop | Wajib |
| Kartu produk | Emoji icon, nama, harga, deskripsi singkat, tombol | Wajib |
| Tombol "Beli" | Alert sederhana (konfirmasi pembelian) | Wajib |
| Responsive design | Mobile-first layout | Wajib |
| Animasi hover | Efek saat cursor di atas kartu | Opsional |
| Dark mode | Tema gelap modern | Opsional |

### 4.3 Fitur PWA
| Fitur | File | Deskripsi |
|-------|------|-----------|
| Web App Manifest | `manifest.json` | Nama app, icon, tema warna, display mode |
| Service Worker | `sw.js` | Cache offline sederhana |
| Install Prompt | `script.js` | Banner "Install App" |
| Offline Support | `sw.js` | Tampilkan halaman dari cache saat offline |
| App Icons | `icons/` | Icon 192x192 dan 512x512 |

---

## 5. Arsitektur & Struktur File

```
devstore/
├── index.html          # Halaman utama toko (struktur)
├── style.css           # Styling & responsive design
├── script.js           # Logika interaksi + PWA install
├── manifest.json       # Konfigurasi PWA
├── sw.js               # Service Worker (caching)
├── icons/
│   ├── icon-192.png    # Icon kecil (home screen)
│   └── icon-512.png    # Icon besar (splash screen)
└── README.md           # Panduan langkah demi langkah
```

### Batasan Line Count

| File | Maksimal Baris | Fungsi |
|------|---------------|--------|
| `index.html` | ~70 baris | Struktur & produk |
| `style.css` | ~120 baris | Styling & responsive |
| `script.js` | ~60 baris | Interaksi & PWA |
| `manifest.json` | ~20 baris | Konfigurasi PWA |
| `sw.js` | ~30 baris | Service Worker |
| **TOTAL** | **~300 baris** | — |

---

## 6. Spesifikasi Teknis

### 6.1 HTML (`index.html`)
```
Komponen:
- DOCTYPE & meta tags (viewport, theme-color, manifest link)
- Header: h1 + tagline
- Main: grid container dengan 4-6 kartu produk
- Setiap kartu: emoji/icon, nama, harga, deskripsi, tombol beli
- Footer: copyright
- Script tags: script.js
- Link: manifest.json, style.css
```

### 6.2 CSS (`style.css`)
```
Pendekatan: Mobile-First
- CSS Variables untuk warna & spacing
- Flexbox/Grid untuk layout
- Media query untuk responsive (min-width: 768px)
- Card styling dengan shadow & border-radius
- Hover effects & transitions
- Tombol styling dengan gradient
- Typography menggunakan Google Fonts (Inter/Poppins)
```

### 6.3 JavaScript (`script.js`)
```
Fungsi:
1. handleBeli(namaProduk) → Alert konfirmasi pembelian
2. PWA Install:
   - Listen 'beforeinstallprompt'
   - Tampilkan tombol install
   - Handle install flow
3. Register Service Worker
```

### 6.4 Manifest (`manifest.json`)
```json
{
  "name": "DevStore - Toko Karya Digital",
  "short_name": "DevStore",
  "description": "Toko online karya digital siswa",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#1a1a2e",
  "theme_color": "#e94560",
  "icons": [...]
}
```

### 6.5 Service Worker (`sw.js`)
```
Strategi: Cache First
1. Event 'install': Cache semua file statis
2. Event 'fetch': Serve dari cache, fallback ke network
3. Event 'activate': Bersihkan cache lama
```

---

## 7. Desain Visual

### Palet Warna
| Penggunaan | Warna | Hex |
|------------|-------|-----|
| Background | Navy Gelap | `#0f0f23` |
| Card Background | Navy Sedang | `#1a1a3e` |
| Accent Primary | Coral/Merah Muda | `#e94560` |
| Accent Secondary | Ungu | `#7c3aed` |
| Text Primary | Putih | `#f8f8f2` |
| Text Secondary | Abu Terang | `#a0a0b8` |
| Harga | Hijau | `#10b981` |

### Typography
- **Font**: `'Inter'` atau `'Poppins'` dari Google Fonts
- **Heading**: Bold, 1.5rem–2rem
- **Body**: Regular, 0.9rem–1rem
- **Harga**: Bold, hijau, 1.1rem

### Gaya Desain
- **Dark mode default** (modern & populer di kalangan remaja)
- **Card-based layout** dengan glass/frosted effect
- **Subtle gradient** pada tombol
- **Smooth transitions** (0.3s ease)
- **Border-radius**: 12–16px (rounded modern)
- **Box-shadow** halus untuk depth

---

## 8. Alur Pembelajaran (Lesson Plan)

### Pertemuan 1: Web Statis (90 menit)

| Waktu | Aktivitas | Detail |
|-------|-----------|--------|
| 0–10 | Pembukaan | Demo produk akhir, jelaskan tujuan |
| 10–30 | HTML | Buat `index.html` — struktur toko |
| 30–55 | CSS | Buat `style.css` — styling & responsive |
| 55–75 | JavaScript | Buat `script.js` — tombol beli |
| 75–85 | Testing | Buka di browser & mobile emulator |
| 85–90 | Penutup | Review & Q/A |

**Hasil Pertemuan 1**: Website toko online statis yang responsive ✅

### Pertemuan 2: Konversi ke PWA (90 menit)

| Waktu | Aktivitas | Detail |
|-------|-----------|--------|
| 0–10 | Review | Recap pertemuan 1, jelaskan PWA |
| 10–25 | Manifest | Buat `manifest.json`, tambah link di HTML |
| 25–45 | Service Worker | Buat `sw.js`, register di `script.js` |
| 45–55 | Icons | Buat/download icon untuk PWA |
| 55–70 | Deploy | Upload ke GitHub Pages / Netlify / Vercel |
| 70–85 | Install | Test install di HP masing-masing |
| 85–90 | Penutup | Celebrasi & review |

**Hasil Pertemuan 2**: PWA yang bisa di-install di smartphone ✅

### Pertemuan 3 (Opsional): Konversi ke APK (60 menit)

| Waktu | Aktivitas | Detail |
|-------|-----------|--------|
| 0–10 | Penjelasan | Apa itu APK dari PWA |
| 10–40 | PWABuilder | Gunakan pwabuilder.com untuk generate APK |
| 40–55 | Install APK | Transfer & install di HP Android |
| 55–60 | Showcase | Siswa pamer app mereka |

**Hasil Pertemuan 3**: File APK yang bisa di-install ✅

---

## 9. Prasyarat & Tools

### Untuk Guru
- [ ] Text editor (VS Code recommended)
- [ ] Browser modern (Chrome/Edge)
- [ ] Akun GitHub (untuk deploy via GitHub Pages)
- [ ] Hosting gratis (GitHub Pages / Netlify / Vercel)
- [ ] Chrome DevTools → Application tab (untuk test PWA)

### Untuk Siswa
- [ ] Laptop/komputer dengan browser modern
- [ ] Smartphone Android (untuk test install)
- [ ] Text editor (VS Code / Notepad++ / bahkan Notepad)
- [ ] Koneksi internet (untuk deploy)

### Tidak Diperlukan
- ❌ Node.js / npm
- ❌ Framework (React, Vue, Angular)
- ❌ Android Studio
- ❌ Google Play Console
- ❌ Pengalaman coding sebelumnya

---

## 10. Deployment & Testing

### Opsi Hosting Gratis
1. **GitHub Pages** (Recommended) — Paling mudah, gratis, HTTPS otomatis
2. **Netlify** — Drag & drop folder
3. **Vercel** — Git-based deployment

### Cara Test PWA
1. Buka Chrome DevTools → Tab "Application"
2. Cek Manifest terdeteksi
3. Cek Service Worker terdaftar
4. Test offline: matikan internet → reload halaman
5. Test install: klik banner "Install" atau menu Chrome → "Install App"

### Cara Konversi ke APK
1. Buka [PWABuilder.com](https://pwabuilder.com)
2. Masukkan URL website yang sudah di-deploy
3. Klik "Package for stores" → pilih Android
4. Download file APK
5. Transfer ke HP → Install (aktifkan "Unknown Sources")

---

## 11. Kriteria Sukses

### MVP (Minimum Viable Product)
- [x] Website toko online dengan minimal 4 produk
- [x] Responsive di mobile dan desktop
- [x] Manifest.json valid
- [x] Service Worker terdaftar
- [x] Bisa di-install sebagai PWA di Chrome
- [x] Total kode ≤ 300 baris
- [x] Komentar bahasa Indonesia di setiap bagian kode

### Nice to Have
- [ ] Offline support berfungsi
- [ ] Konversi ke APK berhasil
- [ ] Animasi & hover effects
- [ ] Dark mode
- [ ] Custom icon

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Siswa belum pernah coding | Tinggi | Kode copy-paste ready, komentar detail |
| HTTPS diperlukan untuk PWA | Sedang | Gunakan GitHub Pages (HTTPS gratis) |
| Service Worker gagal register | Sedang | Sediakan troubleshooting guide |
| HP siswa tidak support PWA | Rendah | Kebanyakan Android modern support |
| Internet lambat saat deploy | Sedang | Sediakan file offline & hotspot backup |

---

## 13. Referensi

- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [web.dev: Learn PWA](https://web.dev/learn/pwa/)
- [PWABuilder](https://pwabuilder.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Google: Service Worker Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)

---

## 14. Timeline Pengembangan

| Fase | Durasi | Output |
|------|--------|--------|
| PRD & Perencanaan | ✅ Selesai | Dokumen ini |
| Pembuatan Kode | 1 hari | HTML, CSS, JS, Manifest, SW |
| Testing & QA | 0.5 hari | Test di Chrome & mobile |
| Dokumentasi (README) | 0.5 hari | Panduan langkah demi langkah |
| Review & Polish | 0.5 hari | Final check |

---

*Dokumen ini dibuat pada 10 April 2026*
*Versi: 1.0*
