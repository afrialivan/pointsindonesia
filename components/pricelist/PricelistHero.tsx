'use client';

import { motion } from 'framer-motion';

// Interface untuk menentukan prop dinamis
interface PricelistHeroProps {
  category: string; // Nilai opsional
}

export default function PricelistHero({ category }: PricelistHeroProps) {
  return (
    <section className="py-10 sm:py-20 bg-[#F4F7FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl text-left"
        >
          <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
            DAFTAR HARGA
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
            Pricelist {category} <span className="text-[#155EEF]">Points Indonesia</span>
          </h1>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
            Lihat dan unduh katalog daftar harga lengkap untuk pembuatan apparel, seragam PDH/PDL, sablon custom, dan merchandise Points Indonesia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}