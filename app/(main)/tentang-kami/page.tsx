'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LocationSection from '@/components/home/LocationSection';

export default function AboutPage() {
  const companyProfileUrl = '/docs/company-profile-points-indonesia.pdf';
  const brandGuidelineUrl = '/docs/brand-guideline-points-indonesia.pdf';

  const [activePdf, setActivePdf] = useState<'company' | 'brand'>('company');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const currentPdfPath = activePdf === 'company' ? companyProfileUrl : brandGuidelineUrl;
  const currentFileName = activePdf === 'company' ? 'Company Profile Points Indonesia' : 'Brand Guideline Logo Points Indonesia';

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="pt-22.5 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-24 bg-[#F4F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
              TENTANG KAMI
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
              Mengenal Lebih Dekat <span className="text-[#155EEF]">Points Indonesia</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8">
              CV. Points Sukses Indonesia dengan merek dagang <strong className="text-[#0B1437]">Points Indonesia</strong> adalah perusahaan percetakan apparel, konveksi &amp; merchandise di Indonesia Timur.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={companyProfileUrl}
                download="Company-Profile-Points-Indonesia.pdf"
                className="inline-flex items-center gap-2.5 font-display font-semibold text-sm text-white px-6 py-3.5 rounded-xl bg-primary transition-colors shadow-[0_12px_28px_rgba(21,94,239,0.28)] hover:shadow-[0_16px_36px_rgba(21,94,239,0.38)]"
              >
                Unduh Company Profile (PDF)
              </a>

              <a
                href={brandGuidelineUrl}
                download="Brand-Guideline-Points-Indonesia.pdf"
                className="inline-flex items-center gap-2.5 font-display font-semibold text-sm text-[#0B1437] px-6 py-3.5 rounded-xl bg-white border border-[#E4E7EC] hover:bg-[#F7F9FC] transition-colors shadow-sm"
              >
                Unduh Brand Guideline (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DOKUMEN RESMI & PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-4">
                DOKUMEN RESMI
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight">
                Company Profile &amp; Brand Guideline
              </h2>
            </div>

            {/* Switcher Tab */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-[#E4E7EC] shrink-0">
              <button
                onClick={() => setActivePdf('company')}
                className={`font-display text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  activePdf === 'company'
                    ? 'bg-[#155EEF] text-white shadow-sm'
                    : 'text-[#667085] hover:text-[#0B1437]'
                }`}
              >
                Company Profile
              </button>
              <button
                onClick={() => setActivePdf('brand')}
                className={`font-display text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  activePdf === 'brand'
                    ? 'bg-[#155EEF] text-white shadow-sm'
                    : 'text-[#667085] hover:text-[#0B1437]'
                }`}
              >
                Brand Guideline Logo
              </button>
            </div>
          </div>

          {/* Area Preview Container */}
          <motion.div
            key={activePdf}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full h-95 sm:h-187.5 bg-white rounded-2xl overflow-hidden border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.06)] relative"
          >
            {isMobile ? (
              /* Tampilan khusus Mobile (Ganti Preview PDF dengan Kartu Unduh Cepat agar HP tidak lag) */
              <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-[#F4F7FF]">
                <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] border border-[#155EEF]/20 flex items-center justify-center mb-4 text-[#155EEF]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg text-[#0B1437] mb-2">
                  {currentFileName}
                </h3>
                <p className="text-xs text-[#667085] max-w-xs mb-6">
                  Dokumen berukuran besar (HD). Buka langsung atau unduh untuk melihat konten dengan lancar di perangkat Anda.
                </p>
                <a
                  href={currentPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display font-semibold text-xs text-white px-6 py-3 rounded-xl bg-[#155EEF] shadow-sm hover:bg-[#0E3FB0] transition-colors"
                >
                  Buka / Unduh Berkas PDF ↗
                </a>
              </div>
            ) : (
              /* Tampilan Desktop (Iframe Native Browser) */
              <iframe
                src={`${currentPdfPath}#toolbar=1&navpanes=0`}
                title="PDF Preview"
                className="w-full h-full border-0"
              />
            )}
          </motion.div>
        </div>
      </section>

      <LocationSection />
    </main>
  );
}