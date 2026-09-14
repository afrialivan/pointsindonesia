'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function WhyChooseUs() {
  const points = [
    'Bahan Baku yang Premium',
    'Proses Produksi yang Cepat',
    'Garansi Produk',
    'Harga yang Kompetitif untuk Berbagai Kalangan',
    'Free Pengerjaan Desain Sesuai Custom Klien',
    'Layanan Konsultasi Gratis',
  ];

  // Menambahkan tipe Variants eksplisit agar aman dari galat TypeScript
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* SISI KIRI: Title & Deskripsi Penjelas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Pill Badge */}
            {/* <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
              TENTANG KAMI
            </span> */}

            {/* Main Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1437] leading-[1.15] tracking-tight uppercase mb-6">
              MITRA TERPERCAYA UNTUK KEBUTUHAN{' '}
              <span className="text-[#155EEF]">KONVEKSI ANDA</span>
            </h2>

            {/* Paragraph Content */}
            <p className="text-[#667085] text-base sm:text-lg leading-relaxed">
              <strong className="text-[#0B1437]">Points Indonesia</strong> merupakan perusahaan percetakan apparel, konveksi & merchandise di indonesia timur, yg berfokus pada kebutuhan klien, dengan harga yang kompetitif, kualitas terjamin, pelayanan yang ramah & profesional. Points Indonesia dapat membantu mewujudkan produk yg anda inginkan karna di Points Indonesia semua di tangani dari awal desain sampai akhir pengiriman dalam satu sistem yang efektif dan efisien.
            </p>
          </motion.div>

          {/* SISI KANAN: List Poin-Poin Keunggulan */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pt-14"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {/* Circle Icon Checkmark (Tema Nexora/Points Blue) */}
                <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0 border border-[#155EEF]/20">
                  <svg
                    className="w-5 h-5 text-[#155EEF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Text Point */}
                <span className="font-display font-medium text-base sm:text-lg text-justify text-[#0B1437]">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}