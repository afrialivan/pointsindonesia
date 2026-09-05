'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CtaSection from '@/components/home/CtaSection';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  imageSrc: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'Semua Produk' },
    { key: 'apparel', label: 'Apparel & Kaos' },
    { key: 'seragam', label: 'Seragam & Kemeja' },
    { key: 'outerwear', label: 'Jaket & Rompi' },
    { key: 'merchandise', label: 'Topi & Aksesoris' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'apparel',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '2',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'outerwear',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '3',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'outerwear',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '4',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'outerwear',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '5',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'seragam',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '6',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      categoryKey: 'outerwear',
      imageSrc:
        '/dummy/card.png',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categoryKey === activeCategory);

  return (
    <main className="pt-22.5 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 bg-[#F4F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
              GALERI KARYA
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
              Portofolio Hasil Produksi <span className="text-[#155EEF]">Points Indonesia</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Temukan berbagai contoh pengerjaan apparel, seragam kerja, PDH/PDL, hingga merchandise kustom yang telah kami selesaikan dengan standar kualitas tinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GALLERY GRID WITH FILTER */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`font-display text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#155EEF] text-white shadow-md'
                    : 'bg-[#F7F9FC] text-[#667085] hover:bg-[#EEF2FF] hover:text-[#155EEF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Portfolio */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                >
                  <div
                    className="group relative block aspect-square rounded-2xl overflow-hidden shadow-sm bg-[#EEF2FF] border border-[#E4E7EC]"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1437]/90 via-[#0B1437]/30  transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[#EEF2FF] text-xs font-semibold uppercase tracking-wider mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white font-display font-bold text-xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <CtaSection />
    </main>
  );
}