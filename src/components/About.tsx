import { motion } from 'motion/react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Pendidikan Karakter',
    description: 'Membentuk karakter anak dengan nilai-nilai kebaikan dan akhlak mulia',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Guru Berkualitas',
    description: 'Tenaga pengajar profesional dan berpengalaman di bidang pendidikan anak usia dini',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Kurikulum Terintegrasi',
    description: 'Menggunakan kurikulum yang sesuai dengan perkembangan anak',
    color: 'from-red-500 to-blue-500'
  },
  {
    icon: Sparkles,
    title: 'Pembelajaran Menyenangkan',
    description: 'Metode belajar yang kreatif dan menyenangkan untuk mengoptimalkan potensi anak',
    color: 'from-blue-500 to-red-600'
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/20">
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
            className="inline-block bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm mb-4"
          >
            Tentang Kami
          </motion.span>
          <h2 className="text-red-600 text-4xl md:text-5xl mb-4">
            TK INSAN HASANAH
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Lembaga pendidikan anak usia dini yang berkomitmen untuk memberikan pendidikan terbaik
            dengan suasana yang nyaman, aman, dan menyenangkan bagi putra-putri Anda.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-red-600 text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-center text-2xl mb-4">Visi</h3>
            <p>
              Terwujudnya peserta didik  sebagai Insan yang Bertaqwa dan berahlak mulia dan CERDAS 
            </p>
            <p>
              ( Ceria, Energik, Religius, Disiplin, Antusias, Semangat).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl mb-4">Misi</h3>
            <ul className="space-y-2">
              <li>{'•'} Memberikan pendidikan berkualitas tinggi</li>
              <li>{'•'} Mengembangkan potensi anak secara optimal</li>
              <li>{'•'} Membentuk karakter yang kuat dan berakhlak</li>
              <li>{'•'} Menciptakan lingkungan belajar yang menyenangkan</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
