# Kabut Vape Store — Website responsif

Website statis HTML, CSS, dan JavaScript berdasarkan referensi desain yang diberikan. Sudah memiliki layout desktop, tablet, dan mobile.

## Menjalankan
1. Ekstrak folder ZIP.
2. Buka `index.html` di browser, atau jalankan server lokal:
   - Python: `python -m http.server 8000`
   - Buka `http://localhost:8000`

Tidak membutuhkan framework atau proses build.

## Kustomisasi wajib sebelum publikasi
Buka `script.js`, lalu ubah objek `STORE`:
- `whatsapp`: nomor WhatsApp toko format internasional tanpa `+` (contoh `6281234567890`).
- `instagram`: URL akun Instagram resmi.
- `maps`: URL Google Maps menuju alamat toko.

Di `index.html`, ganti `[ALAMAT TOKO]` dan `[PATOKAN / AREA LOKASI]`, lalu sesuaikan jam operasional dan nama toko jika diperlukan.

## Fitur
- Age gate 18+ dengan konfirmasi per sesi browser.
- Navigasi desktop dan bottom navigation mobile.
- Kartu kategori produk dengan filter dan pencarian.
- Modal informasi kategori.
- Area alamat, jam operasional, WhatsApp, Instagram, dan peta.
- Tidak memakai gambar stok; ilustrasi perangkat dibuat dengan CSS.
- Responsive layout dan reduced dependency (Google Fonts membutuhkan internet).

## Catatan
Konten dan placeholder perlu diverifikasi sebelum tayang. Halaman ini merupakan template informasi, bukan sistem transaksi atau checkout. Pastikan publikasi dan operasional mematuhi hukum serta ketentuan setempat. Produk tembakau/nikotin memiliki risiko kesehatan dan dapat menyebabkan ketergantungan.
