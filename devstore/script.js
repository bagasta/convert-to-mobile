/* ============================================
   DevStore — Toko Online Karya Digital Siswa
   File: script.js
   Fungsi: Logika interaksi & fitur PWA
   ============================================ */

// === BAGIAN 1: FUNGSI TOMBOL BELI ===
// Dipanggil saat tombol "Beli" diklik, menampilkan popup konfirmasi
const handleBeli = (namaProduk) => {
    alert(`🎉 Terima kasih!\nKamu membeli: ${namaProduk}\n\n(Ini demo — belum ada pembayaran sungguhan)`);
};

// === BAGIAN 2: REGISTRASI SERVICE WORKER ===
// Service Worker = program di belakang layar untuk cache & offline
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('✅ Service Worker terdaftar!'))
        .catch((err) => console.log('❌ SW gagal:', err));
}

// === BAGIAN 3: INSTALL PWA ===
// Simpan event install supaya bisa dipanggil nanti lewat tombol
let deferredPrompt;
const btnInstall = document.getElementById('btn-install');

// Event ini muncul otomatis saat browser mendeteksi PWA valid
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();               // Cegah popup otomatis
    deferredPrompt = e;               // Simpan event-nya
    btnInstall.hidden = false;         // Tampilkan tombol install kita
});

// Saat tombol install diklik → tampilkan dialog install native browser
btnInstall.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome === 'accepted' ? '✅ Di-install!' : '❌ Dibatalkan');
    deferredPrompt = null;
    btnInstall.hidden = true;
});
