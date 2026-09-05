'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CtaSection from '@/components/home/CtaSection';

export default function PricelistPage() {
  const pdfUrl = '/docs/pricelist-points-indonesia.pdf';
  
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="pt-22.5 bg-white">
      {/* HERO SECTION */}
      <section className="py-16 sm:py-20 bg-[#F4F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
              DAFTAR HARGA
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
              Pricelist Resmi <span className="text-[#155EEF]">Points Indonesia</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Lihat dan unduh katalog daftar harga lengkap untuk pembuatan apparel, seragam PDH/PDL, sablon custom, dan merchandise Points Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF VIEWER SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-[#F7F9FC] p-6 rounded-2xl border border-[#E4E7EC]"
          >
            <div>
              <h2 className="font-display font-bold text-xl text-[#0B1437] mb-1">
                Katalog Harga Terkini
              </h2>
              <p className="text-sm text-[#667085]">
                Gunakan kontrol di bawah untuk membaca langsung atau mengunduh berkas PDF.
              </p>
            </div>

            <a
              href={pdfUrl}
              download="Pricelist-Points-Indonesia.pdf"
              className="inline-flex items-center gap-2 font-display font-semibold text-sm text-white px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#0E3FB0] transition-colors shadow-sm shrink-0 w-full sm:w-auto justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Unduh File PDF
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-95 sm:h-212.5 bg-[#EEF2FF] rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.06)] relative"
          >
            {isMobile ? (
              /* Tampilan khusus Mobile: Kartu Akses Cepat (mencegah HP lag/file besar) */
              <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-[#F4F7FF]">
                <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] border border-[#155EEF]/20 flex items-center justify-center mb-4 text-[#155EEF]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-[#0B1437] mb-2">
                  Pricelist Points Indonesia
                </h3>
                <p className="text-xs text-[#667085] max-w-xs mb-6">
                  Dokumen PDF dapat dibuka langsung atau diunduh untuk kenyamanan membaca di perangkat Anda.
                </p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-semibold text-xs text-white px-6 py-3 rounded-xl bg-[#155EEF] shadow-sm hover:bg-[#0E3FB0] transition-colors"
                >
                  Buka / Unduh Pricelist (PDF) ↗
                </a>
              </div>
            ) : (
              /* Tampilan Desktop: PDF Viewer Native Browser */
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                title="Pricelist Points Indonesia PDF"
                className="w-full h-full border-0"
              />
            )}
          </motion.div>

        </div>
      </section>

      <CtaSection />
    </main>
  );
}