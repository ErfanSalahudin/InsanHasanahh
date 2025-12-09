import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, Palette, Music, Monitor, Flame, TreePine } from 'lucide-react';

const facilities = [
  {
    icon: BookOpen,
    title: 'Ruang Kelas Nyaman',
    description: 'Ruang belajar yang luas, bersih, dan dilengkapi AC'
  },
  {
    icon: Palette,
    title: 'Area Kreativitas',
    description: 'Ruang khusus untuk mengembangkan kreativitas anak'
  },
  {
    icon: Music,
    title: 'Ruang Musik',
    description: 'Fasilitas musik lengkap untuk pembelajaran seni'
  },
  {
    icon: Monitor,
    title: 'Pembelajaran Digital',
    description: 'Teknologi modern untuk metode belajar interaktif'
  },
  {
    icon: TreePine,
    title: 'Taman Bermain',
    description: 'Area bermain outdoor yang aman dan luas'
  },
  {
    icon: Flame,
    title: 'Dapur Bersih',
    description: 'Penyediaan makanan sehat dan bergizi'
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-accent/20 to-background">
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
            Fasilitas
          </motion.span>
          <h2 className="text-blue-600 text-4xl md:text-5xl mb-4">
            Fasilitas Lengkap & Modern
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Kami menyediakan fasilitas terbaik untuk mendukung proses pembelajaran yang optimal
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-gradient-to-br from-red-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
              >
                <facility.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-blue-600 text-xl mb-2">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Facility Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY1MjYxMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ruang kelas"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl">Ruang Kelas</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1710000736115-692bbb897fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kfGVufDF8fHx8MTc2NTE4MjcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Taman bermain"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl">Taman Bermain</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
