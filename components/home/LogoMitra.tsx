'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Logo {
  imgSrc: string;
  name: string;
}

export default function LogoMitra() {
  const logos: Logo[] = [
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323899/mitra/bapenda.webp', name: 'Bapenda' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323900/mitra/bpn.webp', name: 'BPN' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323901/mitra/browcyl.webp', name: 'Browcyl' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323902/mitra/bumn.webp', name: 'BUMN' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323903/mitra/ciputra.webp', name: 'Ciputra' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323904/mitra/diavo.webp', name: 'Diavo' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323905/mitra/golqi.webp', name: 'Golqi' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323906/mitra/gsi.webp', name: 'GSI' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323907/mitra/hadin.webp', name: 'Hadin' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323908/mitra/huabao.webp', name: 'Huabao' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323909/mitra/igip.webp', name: 'IGIP' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323910/mitra/jamkrindo.webp', name: 'Jamkrindo' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323911/mitra/jasa-raharja.webp', name: 'Jasa Raharja' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323912/mitra/kaku.webp', name: 'Kaku' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323913/mitra/kalla-friend.webp', name: 'Kalla Friend' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323914/mitra/kalla-land.webp', name: 'Kalla Land' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323916/mitra/kalla.webp', name: 'Kalla' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323917/mitra/kampus-merdeka.webp', name: 'Kampus Merdeka' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323918/mitra/kemenag.webp', name: 'Kemenag' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323919/mitra/kemenkes.webp', name: 'Kemenkes' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323920/mitra/kpu.webp', name: 'KPU' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323921/mitra/malea.webp', name: 'Malea' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323922/mitra/malindo.webp', name: 'Malindo' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323923/mitra/mandiri.webp', name: 'Mandiri' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323924/mitra/ogud.webp', name: 'OGUD' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323925/mitra/ojk.webp', name: 'OJK' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323926/mitra/oto.webp', name: 'Oto' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323927/mitra/pelindo.webp', name: 'Pelindo' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323928/mitra/pln.webp', name: 'PLN' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323929/mitra/pokphand.webp', name: 'Pokphand' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323930/mitra/polytron.webp', name: 'Polytron' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323931/mitra/pu.webp', name: 'PU' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323932/mitra/smbc.webp', name: 'SMBC' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323933/mitra/STKIP.webp', name: 'STKIP' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323934/mitra/tiran.webp', name: 'Tiran' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323935/mitra/trakindo.webp', name: 'Trakindo' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323936/mitra/uin.webp', name: 'UIN' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323937/mitra/uki.webp', name: 'UKI' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323938/mitra/umi.webp', name: 'UMI' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323939/mitra/unhas.webp', name: 'Unhas' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323940/mitra/unibos.webp', name: 'Unibos' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323941/mitra/unimerz.webp', name: 'Unimerz' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323942/mitra/unm.webp', name: 'UNM' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323943/mitra/vale.webp', name: 'Vale' },
    { imgSrc: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323944/mitra/yotta.webp', name: 'Yotta' },
  ];

  const row1 = logos.slice(0, 15);
  const row2 = logos.slice(15, 30);
  const row3 = logos.slice(30, 45);

  // Helper render logo item, dengan opsi untuk copy duplikat (aria-hidden, lazy)
  const renderLogo = (logo: Logo, index: number, isDuplicate: boolean) => (
    <div
      key={`${logo.name}-${isDuplicate ? 'dup' : 'orig'}-${index}`}
      className="w-[160px] h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity shrink-0"
      aria-hidden={isDuplicate} // copy duplikat gak perlu dibaca screen reader
    >
      <Image
        src={logo.imgSrc}
        alt={isDuplicate ? '' : `Logo ${logo.name}`}
        width={120}
        height={40}
        className="h-16 w-auto object-contain"
        loading="lazy" // semua lazy, karena section ini sekarang dynamic-imported (below-fold)
      />
    </div>
  );

  return (
    <section className="py-16 bg-white border-b border-[#E4E7EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Berbagai Client ternama telah mempercayakan project-nya ke Points Indonesia. Mari Tumbuh dan Berkembang Bersama Points Indonesia.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col lg:gap-6 relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* BARIS 1 (Ke Kiri / Normal Marquee) */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex shrink-0 animate-marquee lg:gap-6 items-center min-w-full justify-around pr-6">
            {row1.map((logo, index) => renderLogo(logo, index, false))}
          </div>
          <div className="flex shrink-0 animate-marquee lg:gap-6 items-center min-w-full justify-around pr-6">
            {row1.map((logo, index) => renderLogo(logo, index, true))}
          </div>
        </div>

        {/* BARIS 2 (Ke Kanan / Reverse Marquee) */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex shrink-0 animate-marquee-reverse lg:gap-6 items-center min-w-full justify-around pr-6">
            {row2.map((logo, index) => renderLogo(logo, index, false))}
          </div>
          <div className="flex shrink-0 animate-marquee-reverse lg:gap-6 items-center min-w-full justify-around pr-6">
            {row2.map((logo, index) => renderLogo(logo, index, true))}
          </div>
        </div>

        {/* BARIS 3 (Ke Kiri / Normal Marquee) */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex shrink-0 animate-marquee lg:gap-6 items-center min-w-full justify-around pr-6">
            {row3.map((logo, index) => renderLogo(logo, index, false))}
          </div>
          <div className="flex shrink-0 animate-marquee lg:gap-6 items-center min-w-full justify-around pr-6">
            {row3.map((logo, index) => renderLogo(logo, index, true))}
          </div>
        </div>

      </div>
    </section>
  );
}