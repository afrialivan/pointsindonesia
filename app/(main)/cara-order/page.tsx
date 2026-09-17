'use client';

import { motion } from 'framer-motion';
import Process from '@/components/home/Process';
import LocationSection from '@/components/home/LocationSection';
import CtaSection from '@/components/home/CtaSection';

export default function OrderProcessPage() {
  const faqs = [
    {
      q: 'Berapa minimal order di Points Indonesia?',
      a: 'Minimal order tergantung jenis produk. Untuk pemesanan kaos dan PDH dapat dipesan tanpa minimum order. Silakan konsultasikan kebutuhan Kamu via WhatsApp.',
    },
    {
      q: 'Apakah bisa dibuatkan sampel (sample produk) terlebih dahulu?',
      a: 'Bisa. Untuk pemesanan jumlah besar (bulk order), kami melayani pembuatan mock-up digital serta sampel fisik setelah kesepakatan DP dilakukan.',
    },
    {
      q: 'Berapa lama durasi pengerjaan pesanan?',
      a: 'Waktu produksi standar berkisar 1–2 minggu tergantung jumlah antrean dan kompleksitas desain. Jika Kamu butuh pengerjaan kilat/express, tim kami siap mendiskusikan opsi jadwalnya.',
    },
    {
      q: 'Bagaimana metode pembayaran di Points Indonesia?',
      a: 'Pembayaran dilakukan dua tahap: Uang Muka (DP) minimal 50% saat konfirmasi pesanan, dan pelunasan sisa 50% dilakukan saat barang selesai diproduksi dan siap dikirim.',
    },
  ];

  return (
    <main className="lg:pt-22.5 pt-10 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-20 bg-[#F4F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-6">
              PANDUAN PEMESANAN
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
              Cara Order di <span className="text-[#155EEF]">Points Indonesia</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Proses pemesanan seragam, konveksi, dan merchandise kami rancang sangat simpel, transparan, dan terintegrasi dari tahap desain hingga siap kirim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROCESS SECTION (5 STEPS) */}
      <Process />

      {/* 3. FAQ SECTION */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E4E7EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl mb-12"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight">
              Pertanyaan Sering Diajukan
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F7F9FC] rounded-2xl p-6 sm:p-8 border border-[#E4E7EC]"
              >
                <h3 className="font-display font-bold text-lg text-[#0B1437] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[#667085] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA & MAPS SECTION */}
      <CtaSection />
      <LocationSection />
    </main>
  );
}