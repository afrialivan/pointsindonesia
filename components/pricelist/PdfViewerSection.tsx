'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PdfViewerSectionProps {
  pdfUrl: string;
  totalPages?: number; // Tentukan jumlah total halaman di sini
}

export default function PdfViewerSection({ pdfUrl, totalPages=1 }: PdfViewerSectionProps) {
  // Helper konversi URL PDF Cloudinary ke Gambar JPG HD per halaman
  const getImageUrl = (url: string, page: number) => {
    if (!url.includes('/upload/')) return url;
    return url
      .replace('/upload/', `/upload/w_1600,pg_${page},f_auto,q_auto/`)
      .replace(/\.pdf$/i, '.jpg');
  };

  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Header Toolbar (Hanya Tombol Unduh & Ringkasan Halaman) */}
        <div className="flex flex-row items-center justify-between gap-4 bg-[#F7F9FC] p-4 sm:p-5 rounded-2xl border border-[#E4E7EC] mb-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B1437]">
            <span className="bg-[#EEF2FF] text-[#155EEF] px-3 py-1 rounded-lg border border-[#D1E9FF]">
              {totalPages} Halaman
            </span>
            <span className="text-[#667085] hidden sm:inline">
              Gulir ke bawah untuk melihat seluruh isi katalog
            </span>
          </div>

          {/* Tombol Unduh PDF Asli */}
          <a
            href={pdfUrl}
            download="Pricelist-Points-Indonesia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-display font-semibold text-xs sm:text-sm text-white px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#0E3FB0] active:scale-[0.98] transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Unduh PDF
          </a>
        </div>

        {/* Container Utama: Menampilkan Seluruh Halaman Secara Berurutan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#EEF2FF] rounded-2xl border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.06)] flex flex-col items-center gap-6 p-3 sm:p-6"
        >
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNum = index + 1;
            return (
              <div 
                key={pageNum} 
                className="shadow-lg rounded-lg overflow-hidden border border-black/5 bg-white max-w-[850px] w-full"
              >
                <Image
                  src={getImageUrl(pdfUrl, pageNum)}
                  alt={`Pricelist Halaman ${pageNum}`}
                  width={1600}
                  height={2263}
                  sizes="(max-width: 768px) 100vw, 850px"
                  className="w-full h-auto object-contain block"
                  priority={pageNum === 1} // Prioritaskan load gambar halaman pertama
                />
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}