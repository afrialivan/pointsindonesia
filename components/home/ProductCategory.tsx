'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface ProductItem {
  title: string;
  category: string;
  imageSrc: string;
  whatsappMessage: string;
}

export default function ProductCategory() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const products: ProductItem[] = [
    {
      title: 'KAOS SABLON',
      category: 'Sablon Kaos',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323796/portofolio/kaos/6.webp',
      whatsappMessage: 'Halo Points Indonesia, saya ingin pesan Sablon Kaos Custom.',
    },
    {
      title: 'JERSEY',
      category: 'Jersey',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323768/portofolio/jersey/12.webp',
      whatsappMessage: 'Halo Points Indonesia, saya ingin pesan Jersey Printing Custom.',
    },
    {
      title: 'PDH & PDL',
      category: 'PDH & PDL',
      imageSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323813/portofolio/pdh-pdl/6.webp',
      whatsappMessage: 'Halo Points Indonesia, saya ingin pesan Kemeja PDH/PDL.',
    },
  ];

  const getWaLink = (message: string) => {
    return `https://wa.me/6282128787270?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="bg-white pt-8 sm:pt-16 lg:pt-24 pb-10 lg:pb-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-center my-4 sm:my-12 gap-2 sm:gap-4">
          <div className="h-[2px] bg-[#091A7A] flex-1 max-w-[30px] sm:max-w-[180px] block" />
          <h1 className="font-display font-extrabold text-xl sm:text-3xl lg:text-4xl text-[#091A7A] text-center tracking-tight uppercase">
            Kamu mau buat apa?
          </h1>
          <div className="h-[2px] bg-[#091A7A] flex-1 max-w-[30px] sm:max-w-[180px] block" />
        </div>

        <p className="text-center text-[#667085] text-xs sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          3 Layanan utama konveksi terfavorit di Points Indonesia dengan kualitas bahan terjamin &amp; pengerjaan cepat.
        </p>

        {/* FLYER 3 PRODUK GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {products.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={getWaLink(item.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full rounded-xl sm:rounded-3xl overflow-hidden border sm:border-2 border-[#091A7A] bg-white p-1 sm:p-2 shadow-[0_4px_16px_rgba(9,26,122,0.08)] hover:shadow-[0_16px_36px_rgba(9,26,122,0.22)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
              >
                {/* Frame Gambar */}
                <div className="relative aspect-[4/5] w-full rounded-lg sm:rounded-2xl overflow-hidden bg-[#F4F7FF]">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 33vw, 33vw"
                  />

                  {/* Badge Kategori Transparan di Kiri Atas */}
                  {/* <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-[#091A7A]/90 backdrop-blur-xs text-white text-[7px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-sm z-10">
                    {item.category}
                  </div> */}

                  {/* Area Judul Produk dengan Gradasi Biru di Bagian Bawah Gambar */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#091A7A] via-[#091A7A]/80 to-transparent p-2 sm:p-4 pt-6 sm:pt-14 flex flex-col justify-end transition-all duration-300">
                    <h3 className="font-display font-black text-white text-[10px] sm:text-sm lg:text-xl leading-tight sm:leading-snug line-clamp-2 drop-shadow-md group-hover:text-yellow-300 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    {/* Sub-label Interaktif */}
                    {/* <span className="text-white/90 font-display font-semibold text-[8px] sm:text-xs uppercase tracking-wider mt-1 flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      Pesan Produk Ini
                      <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current shrink-0 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span> */}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}