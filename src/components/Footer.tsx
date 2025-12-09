import { motion } from 'motion/react';
import { Heart, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import logo from '../asset/logotkinsanhasanah.jpg';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/kb.tk_insanhasanah/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@kbtkinsanhasanahpesonacian9809', label: 'YouTube' },
    { icon: Mail, href: 'tkinsanhasanah05@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-r from-red-600 via-red-700 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="TK Insan Hasanah Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-bold">TK INSAN HASANAH</h3>
                <p className="text-sm text-red-100">Membentuk Generasi Berkualitas</p>
              </div>
            </div>
            <p className="text-red-100 text-sm">
              Lembaga pendidikan anak usia dini yang berkomitmen memberikan pendidikan terbaik 
              untuk putra-putri Indonesia.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-red-100 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-red-100 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-red-100 hover:text-white transition-colors">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="#registration" className="text-red-100 hover:text-white transition-colors">
                  Registrasi
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-red-100 text-sm mb-6">
              <p>Jl. Pesona Cianjur Indah Blok A1 No.14</p>
              <p>Nagrak, Cianjur 43215</p>
              <p>Telp: 085600842591</p>
              <p>Email: tkinsanhasanah05@gmail.com</p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/20 pt-8 text-center text-red-100 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            © 2025 TK Insan Hasanah. Dibuat dengan <Heart className="fill-current" size={16} /> untuk generasi masa depan.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
