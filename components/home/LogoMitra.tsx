'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Logo {
  imgSrc: string;
}

export default function LogoMitra() {
  const logos: Logo[] = [
    { imgSrc: '/mitra/browcyl.svg' },
    { imgSrc: '/mitra/bumn.svg' },
    { imgSrc: '/mitra/kalla.svg' },
    { imgSrc: '/mitra/mandiri.svg' },
    { imgSrc: '/mitra/ojk.svg' },
    { imgSrc: '/mitra/oto.svg' },
    { imgSrc: '/mitra/unhas.svg' },
  ];

  return (
    <section className="py-16 bg-white border-b border-[#E4E7EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section dengan Fade Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight mb-4">
            Dipercaya Brand Lokal maupun Nasional
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Berbagai Client ternama telah mempercayakan project-nya ke Points. Mari Tumbuh dan Berkembang Bersama Points Indonesia.
          </p>
        </motion.div>

      </div>

      {/* Container Marquee Slider */}
      <div className="relative w-full overflow-hidden flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track Animasi 1 */}
        <div className="flex shrink-0 animate-marquee-reverse gap-12 items-center min-w-full justify-around pr-12">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center justify-center opacity-70 shrink-0"
            >
              <Image
                src={logo.imgSrc}
                alt="Logo Mitra"
                width={100}
                height={32}
                className="h-auto w-24 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Track Animasi 2 (Duplikasi untuk Seamless Loop) */}
        <div className="flex shrink-0 animate-marquee-reverse gap-12 items-center min-w-full justify-around pr-12">
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center opacity-70 shrink-0"
            >
              <Image
                src={logo.imgSrc}
                alt="Logo Mitra"
                width={100}
                height={32}
                className="h-auto w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}