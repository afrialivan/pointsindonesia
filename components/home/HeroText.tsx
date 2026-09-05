'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function HeroText() {
  // Menentukan tipe Variants eksplisit agar aman dari galat TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#F4F7FF] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-125 h-125 bg-[radial-gradient(circle,rgba(21,94,239,0.15)_0%,transparent_70%)] pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-[10%] w-87.5 h-87.5 bg-[radial-gradient(circle,rgba(105,65,198,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* SISI KIRI: Headline & Call To Action */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 text-left"
          >

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl text-[#0B1437] leading-[1.15] tracking-tight mb-6"
            >
              Hadir untuk Menjawab Berbagai{' '}
              <span className="text-primary-light bg-clip-text">
                Kebutuhan Anda
              </span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8 max-w-2xl"
            >
              CV. Points Sukses Indonesia dengan merek dagang <strong className="text-[#0B1437]">Points Indonesia</strong> adalah
              perusahaan percetakan apparel, konveksi &amp; merchandise yang berfokus
              pada kebutuhan klien, dengan harga yang kompetitif, kualitas yang
              terjamin, dan pelayanan yang memuaskan. Berdiri sejak 2019, kami
              hadir berfokus untuk menjadi solusi percetakan apparel dan konveksi di Sulawesi Selatan.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/cara-order"
                  className="font-display font-semibold text-base text-white px-7 py-3.5 rounded-xl bg-primary shadow-[0_12px_28px_rgba(21,94,239,0.28)] hover:shadow-[0_16px_36px_rgba(21,94,239,0.38)] transition-all duration-200 inline-flex items-center gap-2.5"
                >
                  Mulai Project Anda
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/pricelist"
                  className="font-display font-semibold text-base text-[#0B1437] px-7 py-3.5 rounded-xl bg-white border border-[#E4E7EC] hover:bg-[#F7F9FC] hover:border-[#155EEF]/30 transition-all duration-200 block shadow-sm"
                >
                  Pelayanan Kami
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SISI KANAN: DIGITAL APPAREL VISUALIZER ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_20px_50px_rgba(11,20,55,0.08)] relative overflow-visible">
              
              {/* Floating Badge Top-Right: Material Swatch */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-2 z-30 bg-white border border-[#E4E7EC] px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2.5"
              >
                <div className="flex -space-x-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#155EEF] border-2 border-white" />
                  <span className="w-4 h-4 rounded-full bg-[#0B1437] border-2 border-white" />
                  <span className="w-4 h-4 rounded-full bg-[#FFDE00] border-2 border-white" />
                </div>
                <div>
                  <span className="block font-display font-bold text-xs text-[#0B1437]">Kain Premium</span>
                </div>
              </motion.div>

              {/* Floating Badge Bottom-Left: Custom Logo & Embroidery */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-3 z-30 bg-[#0B1437] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/10"
              >
                <div className="w-7 h-7 rounded-xl bg-[#155EEF] flex items-center justify-center font-extrabold text-[10px] text-white">
                  DTF
                </div>
                <div>
                  <span className="block font-display font-semibold text-xs tracking-wide text-white">
                    Sablon &amp; Bordir
                  </span>
                  <span className="block text-[9px] text-white/70">Presisi Tinggi &amp; Tahan Lama</span>
                </div>
              </motion.div>

              {/* Stage Visualizer Box */}
              <div className="relative w-full h-64 bg-linear-to-b from-[#F7F9FC] to-[#EEF2FF] rounded-2xl border border-[#E4E7EC]/80 overflow-hidden flex items-center justify-center p-4">
                
                {/* Sinar Pemindai Laser Precision (Moving Scan Line) */}
                <motion.div
                  animate={{ y: [-110, 110, -110] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#155EEF] to-transparent z-20 shadow-[0_0_12px_#155EEF]"
                />

                {/* Display Hanger & Main Clothes Render */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Metallic Hanger Bar */}
                  <div className="w-12 h-6 border-t-2 border-r-2 border-[#0B1437] rounded-tr-full -mb-1 relative z-10" />

                  {/* Apparel Item: Kemeja Custom PDH / Apparel */}
                  <motion.div
                    animate={{ rotate: [-1.5, 1.5, -1.5], scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-44 h-48 bg-white rounded-b-3xl shadow-xl border-2 border-[#155EEF] relative overflow-hidden flex flex-col items-center pt-3 px-3 z-10"
                  >
                    {/* Collar & Buttons */}
                    <div className="w-12 h-4 bg-[#EEF2FF] border-b-2 border-[#155EEF] rounded-b-lg mb-2 flex justify-center items-center">
                      <div className="w-1 h-1 rounded-full bg-[#155EEF]" />
                    </div>

                    {/* Pocket & Logo Badge */}
                    <div className="w-full flex justify-between items-start px-2 mb-2">
                      <div className="w-7 h-8 bg-[#EEF2FF] rounded-b-md border border-[#155EEF]/30 flex items-center justify-center">
                        <span className="text-[7px] font-bold text-[#155EEF]">LOGO</span>
                      </div>
                      <div className="w-6 h-3 bg-[#FFDE00] rounded-sm flex items-center justify-center">
                        <span className="text-[6px] font-black text-[#0B1437]">POINTS</span>
                      </div>
                    </div>

                    {/* Main Printing Graphics on Shirt */}
                    <div className="w-24 h-16 bg-[#EEF2FF]/60 rounded-xl border border-dashed border-[#155EEF]/40 flex flex-col items-center justify-center p-1">
                      <span className="text-[9px] font-extrabold text-[#0B1437] tracking-wider">CUSTOM APPAREL</span>
                      <span className="text-[7px] text-[#155EEF] font-semibold">ONE STOP CONVECTION</span>
                    </div>
                  </motion.div>

                </div>

                {/* Karakter Pembeli / Seseorang Mengamati Baju */}
                <motion.div
                  animate={{ x: [-12, 12, -12] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-1 right-4 z-30 flex flex-col items-center pointer-events-none"
                >
                  {/* Kepala & Pandangan Menatap Baju */}
                  <div className="w-10 h-10 rounded-full bg-[#0B1437] relative flex items-center justify-center shadow-md border-2 border-white">
                    <motion.div
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-1"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#FFDE00]" />
                      <div className="w-2 h-2 rounded-full bg-[#FFDE00]" />
                    </motion.div>
                  </div>

                  {/* Body Contour (Penyesuaian class Tailwind standar) */}
                  <div className="w-12 h-10 bg-linear-to-t from-[#0B1437] to-[#155EEF] rounded-t-2xl border-t-2 border-white/30" />
                </motion.div>

              </div>

              {/* Text Subtitle */}
              <div className="mt-4 text-center">
                <span className="font-display font-bold text-sm text-[#0B1437] block">
                  Bebas Konsultasi Bahan &amp; Desain Custom
                </span>
                <span className="text-xs text-[#667085] block mt-0.5">
                  Mewujudkan Pakaian &amp; Seragam Sesuai Keinginan Anda
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}