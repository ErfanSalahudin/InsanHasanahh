# Cara Memperbaiki Error 400 pada Google Forms Submission

## Masalah
Backend server mengalami error 400 saat mengirim data ke Google Forms karena entry IDs yang tidak sesuai dengan form yang sebenarnya.

## Solusi

### Langkah 1: Dapatkan Entry IDs yang Benar

1. Buka Google Form Anda di browser: `https://docs.google.com/forms/d/e/1FAIpQLSecpCfwlJzuCI-3Ej3_c2gBtF5jYNaks4rY1be4weUjGNxyyA/viewform`

2. Klik kanan pada field pertama (Email) dan pilih **"Inspect"** atau tekan **F12**

3. Cari elemen `<input>` dan lihat atribut `name`:
   ```html
   <input name="entry.1234567890" ...>
   ```
   Angka setelah `entry.` adalah entry ID yang benar.

4. Lakukan hal yang sama untuk semua field:
   - Email
   - Nama Orang Tua/Wali
   - No Telepon
   - Nama Lengkap Anak
   - Tanggal Lahir Anak
   - Kelas yang Dituju

### Langkah 2: Update Entry IDs di server.js

Buka file `server.js` dan update bagian `FORM_ENTRIES`:

```javascript
const FORM_ENTRIES = {
  email: 'entry.1234567890',        // Ganti dengan entry ID yang benar
  namaOrangTua: 'entry.0987654321', // Ganti dengan entry ID yang benar
  telepon: 'entry.1111111111',      // Ganti dengan entry ID yang benar
  namaAnak: 'entry.2222222222',     // Ganti dengan entry ID yang benar
  tanggalLahir: 'entry.3333333333', // Ganti dengan entry ID yang benar
  kelasDituju: 'entry.4444444444'   // Ganti dengan entry ID yang benar
};
```

### Langkah 3: Restart Server

```bash
# Hentikan server (Ctrl+C) lalu jalankan lagi
node server.js
```

## Alternative: Gunakan Google Sheets API

Jika Google Forms submission tetap bermasalah, gunakan Google Sheets API sebagai alternatif:

1. Buat Google Sheet baru
2. Bagikan sheet tersebut dengan service account
3. Update kode untuk menggunakan Google Sheets API

## Testing

Setelah update entry IDs, test dengan mengirim form dari frontend. Jika masih error, periksa:
- Apakah form masih aktif/terbuka
- Apakah ada validasi khusus di form
- Apakah entry IDs sudah benar

## Contoh Entry IDs yang Valid

Entry IDs biasanya terlihat seperti:
- `entry.1234567890`
- `entry.9876543210`
- `entry.5556667778`

Pastikan tidak ada spasi atau karakter lain.
