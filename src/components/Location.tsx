import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-red-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full text-sm mb-4"
          >
            Lokasi
          </motion.span>
          <h2 className="text-blue-600 text-4xl md:text-5xl mb-4">
            Kunjungi Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Temukan lokasi TK Insan Hasanah dan kunjungi kami untuk informasi lebih lanjut
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-red-600 text-2xl mb-6">Informasi Kontak</h3>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Pesona Cianjur Indah No.14 BLOK A1, Nagrak, Cianjur, Cianjur Regency, West Java 43215
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Telepon</h4>
                  <p className="text-gray-600">085600842591</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">tkinsanhasanah05@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-800 mb-1">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Jumat: 07.00 - 16.00 WIB</p>
                  <p className="text-gray-600">Sabtu: 07.00 - 12.00 WIB</p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl mb-3">Ingin Berkunjung?</h3>
              <p className="mb-4">
                Silakan hubungi kami terlebih dahulu untuk membuat janji kunjungan
              </p>
              <a
                href="tel:02112345678"
                className="inline-block bg-white text-red-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Jl.+Pesona+Cianjur+Indah+No.14+BLOK+A1,+Nagrak,+Cianjur,+Cianjur+Regency,+West+Java+43215&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi TK Insan Hasanah"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
