'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LocationSection() {
  // Embed Map dengan koordinat presisi Points Indonesia (-5.1406087, 119.4854023)
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=-5.1406087,119.4854023&hl=id&z=17&output=embed';

  const googleMapsShareLink =
    'https://www.google.com/maps?q=-5.1406087,119.4854023';

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
            Lokasi Workshop
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight mb-4">
            Lokasi Points Indonesia
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Kunjungi workshop kami untuk diskusi sampel bahan dan pemesanan secara langsung.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sisi Kiri: Detail Informasi Points Indonesia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.04)] flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-[#0B1437] mb-6">
                Points Indonesia
              </h3>

              {/* Alamat */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#155EEF] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-[#0B1437] mb-1">
                    Alamat Workshop
                  </span>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    Points Indonesia — Ruko HCC, Jl. Perintis Kemerdekaan Blk. A No.5, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245
                  </p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#155EEF] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-[#0B1437] mb-1">
                    Jam Operasional
                  </span>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    Senin – Sabtu: 09.00 – 18.00 WITA
                    <br />
                    Minggu: Libur
                  </p>
                </div>
              </div>

              {/* Kontak */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#155EEF] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-[#0B1437] mb-1">
                    Hubungi Kami
                  </span>
                  <p className="text-[#667085] text-sm leading-relaxed">
                    +62 821-2878-7270
                  </p>
                </div>
              </div>
            </div>

            {/* Tombol Petunjuk Arah Langsung ke Koordinat */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={googleMapsShareLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-display font-semibold text-sm text-white px-6 py-3.5 rounded-xl bg-primary shadow-[0_8px_20px_rgba(21,94,239,0.2)] hover:shadow-[0_12px_24px_rgba(21,94,239,0.3)] transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
            >
              Petunjuk Arah di Google Maps
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Sisi Kanan: Google Maps Embed dengan Pin Merah Presisi Koordinat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-7 h-105 lg:h-auto min-h-105 rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.04)] relative"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Titik Koordinat Points Indonesia"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}