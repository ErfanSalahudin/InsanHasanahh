import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import accreditationCert from '../asset/Sertifikat Akreditasi TK InHas_page-0001.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-blue-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 opacity-30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <Star className="text-yellow-300 fill-yellow-300" size={20} />
              <span className="text-white">Taman Kanak-Kanak Dengan Fasilitas dan Pendidikan Terbaik</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white text-5xl md:text-6xl mb-6"
            >
              TK INSAN HASANAH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-xl mb-8"
            >
              Membentuk generasi berkualitas Serta CERDAS (Ceria, Energik, Religius, Disiplin, Antusias, Semangat)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#registration"
                className="bg-white text-red-600 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Daftar Sekarang
                <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-all"
              >
                Pelajari Lebih Lanjut
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-white text-3xl">10+</div>
                <div className="text-white text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl">500+</div>
                <div className="text-white text-sm">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-white text-3xl">15+</div>
                <div className="text-white text-sm">Guru Profesional</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
                >
                  <ImageWithFallback
                    src={accreditationCert}
                    alt="Sertifikat Akreditasi TK Insan Hasanah"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                      Klik untuk memperbesar
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0">
                <DialogTitle className="sr-only">Sertifikat Akreditasi TK Insan Hasanah</DialogTitle>
                <DialogDescription className="sr-only">
                  Sertifikat akreditasi resmi dari TK Insan Hasanah menunjukkan pengakuan kualitas pendidikan yang tinggi
                </DialogDescription>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={accreditationCert}
                    alt="Sertifikat Akreditasi TK Insan Hasanah - Tampilan Penuh"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>

            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
