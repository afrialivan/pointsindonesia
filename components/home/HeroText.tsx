'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function HeroText() {
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

  const phoneNumber = '6282128787270';
  const defaultMessage = encodeURIComponent(
    'Halo Points Indonesia, saya ingin konsultasi mengenai pemesanan konveksi/apparel.'
  );
  const waLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  // Daftar slide gambar di sisi kanan (gunakan dummy.png Anda)
  const productSlides = [
    { id: 1, imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323795/portofolio/kaos/5.webp', alt: 'Points Indonesia' },
    { id: 2, imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323862/portofolio/workshirt-polo/12.webp', alt: 'Points Indonesia' },
    { id: 3, imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323785/portofolio/jersey/5.webp', alt: 'Points Indonesia' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play slider setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [productSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? productSlides.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-[#F4F7FF] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-96 h-96 sm:w-125 sm:h-125 bg-[radial-gradient(circle,rgba(21,94,239,0.15)_0%,transparent_70%)] pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-[10%] w-72 h-72 sm:w-87.5 sm:h-87.5 bg-[radial-gradient(circle,rgba(105,65,198,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
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
              className="font-display font-extrabold text-xl sm:text-2xl lg:text-5xl text-[#0B1437] leading-[1.15] tracking-tight mb-4 sm:mb-6"
            >
              Hadir untuk Menjawab Berbagai{' '}
              <span className="text-primary-light bg-clip-text">
                Kebutuhan Seragam Anda
              </span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-[#667085] leading-relaxed mb-6 sm:mb-8 max-w-2xl"
            >
              CV. Points Sukses Indonesia dengan merek dagang <strong className="text-[#0B1437]">Points Indonesia</strong> adalah
              perusahaan percetakan apparel, konveksi &amp; merchandise yang berfokus
              pada kebutuhan klien, dengan harga yang kompetitif, kualitas yang
              terjamin, dan pelayanan yang memuaskan. Berdiri sejak 2019, kami
              hadir berfokus untuk menjadi solusi percetakan apparel dan konveksi di Indonesia Timur.
            </motion.p>

            {/* Action Button */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-sm sm:text-base text-white px-7 py-3.5 rounded-xl bg-primary shadow-[0_12px_28px_rgba(21,94,239,0.28)] hover:shadow-[0_16px_36px_rgba(21,94,239,0.38)] transition-all duration-200 inline-flex items-center gap-2.5"
                >
                  Konsultasikan Project Kamu
                  
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SISI KANAN: CAROUSEL GAMBAR HASIL PRODUK (RESPONSIVE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-lg aspect-[3/4] rounded-3xl bg-white p-3 sm:p-4 border border-[#E4E7EC] shadow-[0_20px_50px_rgba(11,20,55,0.08)] overflow-hidden group">
              
              {/* Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#EEF2FF]">
                {productSlides.map((slide, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className={`absolute inset-0 w-full h-full ${
                        isActive ? 'z-10' : 'z-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={slide.imgSrc}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Arrows (Tampil saat di-hover/di-sentuh) */}
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {productSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-7 bg-[#155EEF]' : 'w-2 bg-white/60'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}