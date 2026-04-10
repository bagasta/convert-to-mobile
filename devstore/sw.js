/* ============================================
   DevStore — Service Worker (sw.js)
   Fungsi: Menyimpan file ke cache agar bisa offline
   ============================================ */
const CACHE_NAME = 'devstore-v2';
// Daftar semua file yang perlu disimpan ke cache
const FILES = ['./', './index.html', './style.css', './script.js',
    './manifest.json', './icons/icon-192.png', './icons/icon-512.png',
    './icons/screenshot-mobile.png', './icons/screenshot-desktop.png'];

// INSTALL — simpan semua file ke cache saat pertama kali
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(FILES)));
});

// FETCH — saat browser minta file, cari di cache dulu, lalu network
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});

// ACTIVATE — hapus cache lama saat ada versi baru
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((names) =>
            Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
        )
    );
});
