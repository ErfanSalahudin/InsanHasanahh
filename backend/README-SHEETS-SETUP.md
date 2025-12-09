# Setup Google Sheets API Alternative

Jika Google Forms terus mengalami error 400, gunakan Google Sheets API sebagai alternatif yang lebih reliable.

## Langkah Setup

### 1. Buat Google Sheet

1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Beri nama header pada Sheet1:
   - A1: Timestamp
   - B1: Email
   - C1: Nama Orang Tua
   - D1: Telepon
   - E1: Nama Anak
   - F1: Tanggal Lahir
   - G1: Kelas Dituju

### 2. Setup Google Cloud Project

1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Buat project baru atau pilih project existing
3. Enable Google Sheets API:
   - Cari "Google Sheets API" di search bar
   - Klik "Enable"

### 3. Buat Service Account

1. Di Google Cloud Console, buka "IAM & Admin" > "Service Accounts"
2. Klik "Create Service Account"
3. Isi nama dan deskripsi
4. Klik "Create and Continue"
5. Pada "Grant this service account access to project", pilih role "Editor"
6. Klik "Done"

### 4. Generate Private Key

1. Pada service account yang baru dibuat, klik menu (⋮) > "Manage keys"
2. Klik "Add Key" > "Create new key" > "JSON"
3. Download file JSON (simpan dengan aman!)

### 5. Share Google Sheet dengan Service Account

1. Buka Google Sheet Anda
2. Klik "Share" button
3. Paste service account email (dari file JSON yang didownload)
4. Beri akses "Editor"
5. Klik "Send"

### 6. Update server-sheets.js

1. Install dependencies:
   ```bash
   npm install googleapis
   ```

2. Update konfigurasi di `server-sheets.js`:
   ```javascript
   const SPREADSHEET_ID = 'your-google-sheet-id-here'; // Dari URL sheet
   const SERVICE_ACCOUNT_EMAIL = 'your-service-account@your-project.iam.gserviceaccount.com';
   const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n';
   ```

3. Jalankan server alternatif:
   ```bash
   node server-sheets.js
   ```

### 7. Update Frontend (Opsional)

Update file `Registration.tsx` untuk menggunakan port 3003:
```javascript
const response = await fetch('http://localhost:3003/api/submit-registration', {
  // ... existing code
});
```

## Keuntungan Google Sheets API

- ✅ Lebih reliable daripada Google Forms
- ✅ Tidak ada error 400 karena bot detection
- ✅ Data langsung masuk ke spreadsheet
- ✅ Kontrol penuh atas format data
- ✅ Tidak ada batasan submission

## Troubleshooting

- **Error: "The caller does not have permission"**: Pastikan service account email sudah di-share ke Google Sheet
- **Error: "Invalid credentials"**: Periksa private key dan service account email
- **Error: "Spreadsheet not found"**: Periksa SPREADSHEET_ID dari URL Google Sheet
