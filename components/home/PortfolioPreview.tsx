'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface ProductionItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
}

export default function PortfolioPreview() {
  const products: ProductionItem[] = [
    {
      id: '1',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '2',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '3',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '4',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '5',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
    {
      id: '6',
      title: 'Rompi Custom Field Team',
      category: 'Jaket & Rompi',
      imageSrc:
        '/dummy/card.png',
    },
  ];

  // Penambahan tipe Variants eksplisit agar aman di TypeScript
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Header Section dengan Fade Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
              Portofolio Produk
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1437] leading-tight">
              Hasil Produksi Kami
            </h2>
          </div>

          <div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#155EEF] hover:text-[#0E3FB0] hover:gap-3 transition-all duration-200"
            >
              Lihat Seluruh Portofolio
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Gallery Grid (Staggered Animation & Responsive Layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div
                className="group relative block aspect-square rounded-2xl overflow-hidden shadow-sm bg-[#EEF2FF] border border-[#E4E7EC]"
              >
                {/* Gambar Hasil Produksi */}
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay khas Nexora / Points */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1437]/90 via-[#0B1437]/30 transition-opacity duration-300 flex flex-col justify-end p-6">
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
        </motion.div>

      </div>
    </section>
  );
}