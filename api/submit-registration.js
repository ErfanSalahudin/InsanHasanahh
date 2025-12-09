const FORM_ENTRIES = {
  email: 'entry.1371773912',
  namaOrangTua: 'entry.1611457881',
  telepon: 'entry.1159950592',
  namaAnak: 'entry.72500181',
  tanggalLahir: 'entry.11540145',
  kelasDituju: 'entry.1558924016'
};

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const formData = req.body;

    console.log('Received form data:', formData);

    const googleFormData = new URLSearchParams();
    googleFormData.append(FORM_ENTRIES.email, formData.email || '');
    googleFormData.append(FORM_ENTRIES.namaOrangTua, formData.namaOrangTua || '');
    googleFormData.append(FORM_ENTRIES.telepon, formData.telepon || '');
    googleFormData.append(FORM_ENTRIES.namaAnak, formData.namaAnak || '');
    googleFormData.append(FORM_ENTRIES.tanggalLahir, formData.tanggalLahir || '');
    googleFormData.append(FORM_ENTRIES.kelasDituju, formData.kelasDituju || '');

    const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSecpCfwlJzuCI-3Ej3_c2gBtF5jYNaks4rY1be4weUjGNxyyA/formResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      body: googleFormData.toString(),
      redirect: 'follow'
    });

    if (response.status >= 300 && response.status < 400) {
      const redirectUrl = response.headers.get('location');
      console.log(`Redirecting to: ${redirectUrl}`);
      if (redirectUrl) {
        const redirectResponse = await fetch(redirectUrl, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://docs.google.com/forms/d/e/1FAIpQLSecpCfwlJzuCI-3Ej3_c2gBtF5jYNaks4rY1be4weUjGNxyyA/viewform'
          }
        });
        console.log(`Redirect response status: ${redirectResponse.status}`);
        if (redirectResponse.status === 200) {
          return res.status(200).json({ success: true, message: 'Form submitted successfully' });
        } else {
          return res.status(400).json({ success: false, message: 'Data tidak valid atau gagal diproses.' });
        }
      }
    }

    console.log(`Google Forms response status: ${response.status}`);
    console.log(`Google Forms response ok: ${response.ok}`);

    if (response.status === 200) {
      console.log('Form submitted successfully to Google Forms');
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } else {
      try {
        const responseText = await response.text();
        console.log(`Unexpected response status: ${response.status}`);
        console.log(`Response headers:`, Object.fromEntries(response.headers.entries()));
        console.log(`Response text (first 500 chars): ${responseText.substring(0, 500)}`);
      } catch (logError) {
        console.log(`Could not read response text: ${logError.message}`);
      }

      console.log('Form validation error - checking submitted data...');

      const errors = [];
      if (!formData.email || !formData.email.includes('@') || !formData.email.includes('.')) {
        errors.push('Email tidak valid (harus mengandung @ dan .)');
      }
      if (!formData.namaOrangTua || formData.namaOrangTua.trim().length < 2) {
        errors.push('Nama orang tua minimal 2 karakter');
      }
      if (!formData.telepon || formData.telepon.replace(/\D/g, '').length < 10) {
        errors.push('Nomor telepon minimal 10 digit');
      }
      if (!formData.namaAnak || formData.namaAnak.trim().length < 2) {
        errors.push('Nama anak minimal 2 karakter');
      }
      if (!formData.tanggalLahir) {
        errors.push('Tanggal lahir harus diisi');
      } else {
        const birthDate = new Date(formData.tanggalLahir);

        if (isNaN(birthDate.getTime())) {
          errors.push('Format tanggal lahir tidak valid');
        }
      }
      if (!formData.kelasDituju || formData.kelasDituju === '') {
        errors.push('Kelas dituju harus dipilih');
      }

      console.log('Validation result - errors found:', errors.length);

      res.status(400).json({
        success: false,
        message: errors.length > 0 ? 'Data tidak valid: ' + errors.join(', ') : 'Data tidak dapat diproses. Pastikan semua informasi benar dan lengkap.',
        errors: errors.length > 0 ? errors : ['Validasi server gagal - periksa kembali data yang dimasukkan']
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Failed to submit form' });
  }
}
