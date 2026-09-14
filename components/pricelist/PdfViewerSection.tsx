'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const PdfDocument = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const PdfPage = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

interface PdfViewerSectionProps {
  pdfUrl: string;
}

export default function PdfViewerSection({ pdfUrl }: PdfViewerSectionProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    import('react-pdf').then((pdfjsModule) => {
      pdfjsModule.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsModule.pdfjs.version}/build/pdf.worker.min.mjs`;
    });

    const updateWidth = () => {
      const container = document.getElementById('pdf-container');
      if (container) {
        // Kurangi padding internal container (32px) agar canvas pas presisi
        setContainerWidth(container.clientWidth - 32);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Header Toolbar Responsive (Navigasi + Tombol Unduh) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F7F9FC] p-4 sm:p-5 rounded-2xl border border-[#E4E7EC] mb-4 shadow-sm">
          {/* Info & Control Halaman */}
          <div className="flex items-center justify-between w-auto gap-3">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-[#E4E7EC] shadow-2xs">
              <button
                disabled={pageNumber <= 1 || isLoading}
                onClick={() => setPageNumber((prev) => prev - 1)}
                className="p-1.5 rounded-lg text-[#0B1437] hover:bg-[#F7F9FC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Halaman Sebelumnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-xs sm:text-sm font-semibold text-[#0B1437] min-w-[80px] text-center select-none">
                {isLoading ? '...' : `${pageNumber} / ${numPages}`}
              </span>

              <button
                disabled={pageNumber >= numPages || isLoading}
                onClick={() => setPageNumber((prev) => prev + 1)}
                className="p-1.5 rounded-lg text-[#0B1437] hover:bg-[#F7F9FC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Halaman Selanjutnya"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <span className="text-xs text-[#667085] hidden md:inline">
              Gunakan panah untuk berpindah halaman
            </span>
          </div>

          {/* Tombol Unduh PDF */}
          <a
            href={pdfUrl}
            download="Pricelist-Points-Indonesia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-semibold text-xs sm:text-sm text-white px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#0E3FB0] active:scale-[0.98] transition-all shadow-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Unduh PDF
          </a>
        </div>

        {/* Viewer Canvas Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full bg-[#EEF2FF] rounded-2xl border border-[#E4E7EC] shadow-[0_4px_20px_rgba(11,20,55,0.06)] relative flex justify-center items-center p-3 sm:p-6 overflow-hidden"
          id="pdf-container"
        >
          {/* Indicator Loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#EEF2FF]/90 backdrop-blur-xs z-10 flex flex-col items-center justify-center gap-3">
              <svg className="w-8 h-8 text-[#155EEF] animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-xs sm:text-sm text-[#667085] font-medium">Memuat dokumen PDF...</p>
            </div>
          )}

          {/* Render Halaman PDF */}
          <PdfDocument
            file={pdfUrl}
            onLoadSuccess={({ numPages }: { numPages: number }) => {
              setNumPages(numPages);
              setIsLoading(false);
            }}
            className="flex justify-center w-full"
          >
            {containerWidth > 0 && (
              <div className="shadow-lg rounded-lg overflow-hidden border border-black/5 bg-white">
                <PdfPage
                  pageNumber={pageNumber}
                  width={Math.min(containerWidth, 850)}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            )}
          </PdfDocument>
        </motion.div>

      </div>
    </section>
  );
}