'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function NotFound() {
  return (
    <div className="bg-[#0B1437] text-white min-h-screen flex flex-col justify-between overflow-hidden">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. KONTEN UTAMA 404 WITH CUSTOM SEWING ANIMATION */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-30 pb-16">
        
        {/* Glow Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 sm:w-175 sm:h-175 bg-[radial-gradient(circle,rgba(21,94,239,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          
          {/* ANIMASI UNIK KHAS KONVEKSI: Mesin Jahit & Jalur Benang */}
          <div className="relative w-full max-w-xs mx-auto h-28 mb-6 flex items-center justify-center">
            
            {/* Animasi Jalur Benang Jahit (Dotted Path) */}
            <svg className="absolute w-full h-12 overflow-visible" viewBox="0 0 300 40">
              <motion.path
                d="M 0 20 Q 75 0, 150 20 T 300 20"
                fill="none"
                stroke="#155EEF"
                strokeWidth="3"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -48 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            {/* Animasi Jarum & Mesin Jahit Bergerak */}
            <motion.div
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex flex-col items-center"
            >
              <svg className="w-16 h-16 text-[#EEF2FF] fill-current drop-shadow-[0_0_12px_rgba(21,94,239,0.6)]" viewBox="0 0 24 24">
                {/* Icon Mesin Jahit / Jarum */}
                <path d="M19 7h-8v2h8c.55 0 1 .45 1 1v7c0 1.1-.9 2-2 2h-2v-2h-2v2H8v-2H6v2H5c-1.1 0-2-.9-2-2V7c0-1.66 1.34-3 3-3h11c1.1 0 2 .9 2 2v1zM6 6c-.55 0-1 .45-1 1v6h2V7c0-.55-.45-1-1-1zm6 3h-2v4h2V9z" />
              </svg>

              {/* Animasi Jarum Naik-Turun (Stitching Action) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 0.15, repeat: Infinity, ease: 'linear' }}
                className="w-1 h-4 bg-[#FFDE00] rounded-full -mt-1 shadow-[0_0_8px_#FFDE00]"
              />
            </motion.div>
          </div>

          {/* Badge Status Error */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold tracking-widest uppercase text-[#155EEF] bg-[#155EEF]/10 border border-[#155EEF]/30 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#155EEF] animate-pulse" />
            404
          </motion.div>

          {/* Headline Utama */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-4 leading-tight"
          >
            Jahitan Rutenya Terputus!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10"
          >
            Halaman yang Anda tuju sepertinya salah pola atau telah dipindahkan. Mari kembali ke pola utama halaman kami.
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="font-display font-semibold text-base text-white px-8 py-4 rounded-xl bg-linear-to-r from-[#155EEF] to-[#6941C6] shadow-[0_12px_28px_rgba(21,94,239,0.35)] hover:shadow-[0_16px_32px_rgba(21,94,239,0.45)] transition-all duration-200 inline-flex items-center gap-2.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                Kembali ke Beranda
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://wa.me/6282345555423?text=Halo%20Points%20Indonesia,%20saya%20mengalami%20kendala%20saat%20membuka%20halaman%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-base text-white/90 px-8 py-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 inline-flex items-center gap-2.5"
              >
                Hubungi Bantuan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}