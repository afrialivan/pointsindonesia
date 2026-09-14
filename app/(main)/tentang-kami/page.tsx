'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutPage() {
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

  const waLink =
    'https://wa.me/6282128787270?text=Halo%20Points%20Indonesia,%20saya%20tertarik%20untuk%20berkolaborasi.';

  return (
    <main className="bg-white min-h-screen pt-20 lg:pt-24">
      
      {/* 1. HERO SECTION PERSIS SEPERTI GAMBAR ACUAN */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          
          {/* Frame Container Gambar Melayang dengan Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-[#0B1437] border border-[#E4E7EC] flex items-center justify-center text-center"
          >
            {/* Gambar Background Konveksi Unsplash */}
            <Image
              src="https://res.cloudinary.com/wxjrbpho/image/upload/v1789404865/about-hero.jpg"
              alt="Workshop Konveksi Points Indonesia"
              fill
              priority
              className="object-cover opacity-35"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            
            {/* Overlay Gradient Gelap Khas Tapada/Points */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1437]/90 via-[#0B1437]/60 to-transparent" />

            {/* Teks Judul Utama di Tengah Gambar */}
            <div className="relative z-10 px-4 max-w-3xl mx-auto flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mb-2"
              >
                POINTS <span className="text-[#FFDE00]">INDONESIA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 font-medium text-base sm:text-xl italic tracking-wide"
              >
                Easy on Us, Easy on Points
              </motion.p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. PROFIL DESKRIPSI PERUSAHAAN (DENGAN GARIS PEMBATAS ATAS DAN BAWAH) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          
          <div className="py-8 border-y border-[#E4E7EC]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="max-w-5xl mx-auto text-center space-y-4"
            >
              <motion.p
                variants={itemVariants}
                className="text-[#0B1437] font-semibold text-base sm:text-lg lg:text-xl leading-relaxed"
              >
                <strong className="text-[#155EEF]">CV. POINTS SUKSES INDONESIA</strong> dengan merek dagang <strong className="text-[#0B1437]">Points Indonesia</strong> adalah sebuah Perusahaan yang fokus bergerak dalam bidang industri percetakan apparel, konveksi, dan merchandise. Points Indonesiaresmi beroperasi sejak 2019.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[#667085] text-sm sm:text-base lg:text-lg leading-relaxed"
              >
                Tujuan utama diinisiasinya Points Indonesia merupakan wujud pengembangan industri serta bisnis percetakan apparel dan konveksi di Kota Makassar, bahkan Indonesia Timur.
              </motion.p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. VISI & MISI SECTION (2 KOLOM CARDS DENGAN UI BADGE KHAS) */}
      <section className="py-16 sm:py-20 bg-[#F4F7FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight">
              Visi &amp; Misi Perusahaan
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4E7EC] shadow-[0_10px_30px_rgba(11,20,55,0.05)] hover:shadow-[0_16px_40px_rgba(21,94,239,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="font-display font-black italic text-3xl sm:text-4xl text-[#155EEF]">
                    Our
                  </span>
                  <span className="font-display font-black italic text-3xl sm:text-4xl text-[#0B1437] bg-[#FFDE00] px-3 py-1 rounded-lg">
                    Vision
                  </span>
                </div>

                <p className="text-[#0B1437] font-medium text-lg sm:text-xl leading-relaxed italic">
                  &ldquo;Menjadi perusahaan konveksi No. 1 di Sulawesi yang berfokus ke kebutuhan pelanggan dengan kualitas yang terjamin, pelayanan yang memuaskan serta pengelolaan bisnis yang profesional dan berkelanjutan.&rdquo;
                </p>
              </div>

            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4E7EC] shadow-[0_10px_30px_rgba(11,20,55,0.05)] hover:shadow-[0_16px_40px_rgba(21,94,239,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="font-display font-black italic text-3xl sm:text-4xl text-[#155EEF]">
                    Our
                  </span>
                  <span className="font-display font-black italic text-3xl sm:text-4xl text-[#0B1437] bg-[#FFDE00] px-3 py-1 rounded-lg">
                    Mission
                  </span>
                </div>

                <p className="text-[#0B1437] font-medium text-lg sm:text-xl leading-relaxed italic">
                  &ldquo;Menciptakan standar bisnis proses yang optimal &amp; pengelolaan sumber daya yang profesional.&rdquo;
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* 5. CALL TO ACTION (CTA BANNER) */}
      <section className="py-16 sm:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0B1437] p-8 sm:p-12 text-center relative overflow-hidden border border-[#155EEF]/30 shadow-xl"
          >
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-4">
              Ingin Berkolaborasi atau Memulai Project Bersama Kami?
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Hubungi tim Points Indonesia sekarang untuk konsultasi gratis mengenai kebutuhan konveksi, seragam, dan merchandise perusahaan Kamu.
            </p>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-base text-white px-8 py-4 rounded-xl bg-primary-light shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2"
              >
                HUBUNGI KAMI SEKARANG
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}