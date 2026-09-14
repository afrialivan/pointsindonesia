'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface ProductionItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
}

export default function PortfolioPreview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const products: ProductionItem[] = [
    {
      id: '1',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323747/portofolio/jaket-rompi/6.webp',
    },
    {
      id: '2',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323777/portofolio/jersey/2.webp',
    },
    {
      id: '3',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323857/portofolio/wisuda-jas-lab/wisuda5.webp',
    },
    {
      id: '4',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323800/portofolio/merchandise/3.webp',
    },
    {
      id: '5',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323844/portofolio/pdh-pdl/y.webp',
    },
    {
      id: '6',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323862/portofolio/workshirt-polo/12.webp',
    },
    {
      id: '7',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323730/portofolio/jaket-rompi/15.webp',
    },
    {
      id: '8',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323834/portofolio/pdh-pdl/o.webp',
    },
    {
      id: '9',
      title: 'Portofolio Image',
      category: 'Jaket & Rompi',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323898/portofolio/workshirt-polo/p.webp',
    },
  ];

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
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-24">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
              Portofolio Produk
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1437] leading-tight">
              Hasil Produksi Kami
            </h2>
          </div>

          <div>
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#155EEF] hover:text-[#0E3FB0] hover:gap-3 transition-all duration-200"
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

        {/* Gallery Grid Murni Gambar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8"
        >
          {products.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div
                onClick={() => setSelectedImage(item.imageSrc)}
                className="group relative block aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-[#EEF2FF] border border-[#E4E7EC] cursor-pointer"
              >
                {/* Gambar Hasil Produksi Murni */}
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox / Popup Gambar Murni */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Tombol Close (X) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2.5 transition-colors z-10"
              aria-label="Tutup"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Container Gambar Besar */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Portofolio Large Preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}