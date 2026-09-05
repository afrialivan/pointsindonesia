'use client';

import { motion } from 'framer-motion';

export default function CtaSection() {
  // Nomor WA dan pesan templat otomatis

  const phoneNumber = '6282128787270';
  
  // Pesan otomatis saat chat dibuka
  const defaultMessage = encodeURIComponent(
    'Halo Points Indonesia, saya ingin konsultasi mengenai pemesanan konveksi/apparel.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;


  // const whatsappUrl =
  //   'https://wa.me/6282345555423?text=Halo%20Points%20Indonesia,%20saya%20ingin%20konsultasi%20dan%20memulai%20project%20pembuatan%20apparel/seragam.';

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl bg-linear-to-br from-[#0B1437] via-[#101F56] to-[#0B1437] p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#155EEF]/20 shadow-[0_16px_32px_rgba(11,20,55,0.12)]"
        >
          
          {/* Decorative Glow Circle */}
          <div className="absolute -top-24 -right-24 w-87.5 h-87.5 rounded-full bg-[radial-gradient(circle,rgba(21,94,239,0.3)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-snug">
                Siap Wujudkan Produk Apparel &amp; Merchandise Anda?
              </h2>
              <p className="text-white/90 text-base sm:text-lg">
                Konsultasikan kebutuhan cetak, bahan, dan jumlah pesanan Anda bersama tim profesional kami secara gratis.
              </p>
            </div>

            {/* Action Button Redirect to WA */}
            <div className="shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-base text-white px-7 py-4 rounded-xl bg-linear-to-r from-[#155EEF] to-[#6941C6] shadow-[0_12px_28px_rgba(21,94,239,0.4)] hover:shadow-[0_16px_32px_rgba(21,94,239,0.5)] transition-all duration-200 inline-flex items-center gap-2.5"
                >
                  Mulai Project Anda
                  <svg
                    className="w-4 h-4 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}