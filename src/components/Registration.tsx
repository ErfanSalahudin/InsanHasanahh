import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export function Registration() {
  const [formData, setFormData] = useState({
    namaAnak: '',
    tanggalLahir: '',
    namaOrangTua: '',
    email: '',
    telepon: '',
    alamat: '',
    pesan: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        namaAnak: '',
        tanggalLahir: '',
        namaOrangTua: '',
        email: '',
        telepon: '',
        alamat: '',
        pesan: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-red-200 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm mb-4"
          >
            Registrasi
          </motion.span>
          <h2 className="text-red-600 text-4xl md:text-5xl mb-4">
            Daftar Sekarang
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Bergabunglah dengan TK Insan Hasanah dan berikan pendidikan terbaik untuk buah hati Anda
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Anak */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-gray-700 mb-2">
                    <User className="inline mr-2" size={18} />
                    Nama Lengkap Anak
                  </label>
                  <input
                    type="text"
                    name="namaAnak"
                    value={formData.namaAnak}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Masukkan nama lengkap anak"
                  />
                </motion.div>

                {/* Tanggal Lahir */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={18} />
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </motion.div>

                {/* Nama Orang Tua */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-gray-700 mb-2">
                    <User className="inline mr-2" size={18} />
                    Nama Orang Tua/Wali
                  </label>
                  <input
                    type="text"
                    name="namaOrangTua"
                    value={formData.namaOrangTua}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Masukkan nama orang tua/wali"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-gray-700 mb-2">
                    <Mail className="inline mr-2" size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="contoh@email.com"
                  />
                </motion.div>

                {/* Telepon */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-gray-700 mb-2">
                    <Phone className="inline mr-2" size={18} />
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </motion.div>
              </div>

              {/* Alamat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-700 mb-2">
                  <MapPin className="inline mr-2" size={18} />
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Masukkan alamat lengkap"
                />
              </motion.div>

              {/* Pesan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-gray-700 mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tambahkan pesan atau pertanyaan Anda..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:from-red-600 hover:to-blue-600 transition-all"
              >
                <Send size={20} />
                Kirim Pendaftaran
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={80} />
              </motion.div>
              <h3 className="text-green-600 text-3xl mb-3">
                Pendaftaran Berhasil!
              </h3>
              <p className="text-gray-600 text-lg">
                Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Butuh bantuan? Hubungi kami di{' '}
            <a href="tel:02112345678" className="text-red-600 hover:underline">
              (021) 1234-5678
            </a>
            {' '}atau{' '}
            <a href="mailto:info@tkinsanhasanah.sch.id" className="text-blue-600 hover:underline">
              info@tkinsanhasanah.sch.id
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
