'use client';

import { motion } from 'framer-motion';

export default function CtaSection() {
  // Nomor WA dan pesan templat otomatis

  const phoneNumber = '6282128787270';
  
  const defaultMessage = encodeURIComponent(
    'Halo Points Indonesia, saya ingin konsultasi mengenai pemesanan konveksi/apparel.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl bg-[#0B1437] p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#155EEF]/20 shadow-[0_16px_32px_rgba(11,20,55,0.12)]"
        >
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="font-display font-extrabold text-md sm:text-3xl lg:text-4xl text-white mb-3 leading-snug">
                Siap Wujudkan Produk Apparel &amp; Merchandise Kamu?
              </h2>
              <p className="text-white/90 text-sm lg:text-lg">
                Konsultasikan kebutuhan pesanan kamu bersama tim kami secara gratis
              </p>
            </div>

            {/* Action Button Redirect to WA */}
            <div className="shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-center font-semibold text-base text-white px-7 py-4 rounded-xl bg-primary-light shadow-[0_12px_28px_rgba(21,94,239,0.4)] hover:shadow-[0_16px_32px_rgba(21,94,239,0.5)] transition-all duration-200 inline-flex items-center gap-2.5"
                >
                  Mulai Project Kamu
                </a>
              </motion.div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}