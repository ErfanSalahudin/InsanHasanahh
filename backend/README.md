# TK Insan Hasanah Backend

Backend server untuk menangani pengiriman formulir pendaftaran ke Google Forms.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Jalankan server:
```bash
npm start
```

Untuk development dengan auto-reload:
```bash
npm run dev
```

Server akan berjalan di `http://localhost:3001`

## API Endpoints

### POST /api/submit-registration
Mengirim data pendaftaran ke Google Forms.

**Request Body:**
```json
{
  "email": "example@email.com",
  "namaOrangTua": "Nama Orang Tua",
  "telepon": "08123456789",
  "namaAnak": "Nama Anak",
  "tanggalLahir": "2000-01-01",
  "kelasDituju": "Kelas A (4-5 tahun)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

### GET /api/health
Health check endpoint.

## Konfigurasi

Pastikan entry IDs di `server.js` sesuai dengan Google Form Anda. Untuk mendapatkan entry IDs:

1. Buka Google Form
2. Klik kanan pada field form → Inspect
3. Cari atribut `name` yang berbentuk `entry.XXXXXXX`

Update entry IDs di fungsi `app.post('/api/submit-registration')`.
