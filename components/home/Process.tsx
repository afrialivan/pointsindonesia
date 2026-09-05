'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Process() {
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Siapkan Desain',
      description:
        'Siapkan desain Anda format JPG/PNG/CDR/PSD. Jika belum punya, kami bisa membantu untuk proses desain.',
      icon: (
        <svg className="w-6 h-6 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Kirim Desain',
      description:
        'Kirim desain melalui email atau WhatsApp. Bisa juga desain dibawakan langsung ke kantor kami.',
      icon: (
        <svg className="w-6 h-6 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Pembayaran',
      description:
        'Lakukan pembayaran uang muka minimal 50% dari total harga. Pelunasan dapat dilakukan setelah orderan selesai.',
      icon: (
        <svg className="w-6 h-6 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Proses Produksi',
      description:
        'Waktu produksi berkisar antara 1-2 minggu. Pemesanan jumlah banyak, waktu produksi dibicarakan kembali.',
      icon: (
        <svg className="w-6 h-6 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Pengiriman',
      description:
        'Orderan yang telah selesai dikirim menggunakan jasa pengiriman, atau Anda bisa datang langsung ke kantor.',
      icon: (
        <svg className="w-6 h-6 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
    },
  ];

  // Menambahkan eksplisit type Variants untuk Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F7F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
            Cara Pemesanan
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight mb-4">
            5 Langkah Mudah Memesan di Points
          </h2>
          <p className="text-base sm:text-lg text-[#667085]">
            Alur kerja praktis dan transparan untuk mewujudkan produk konveksi sesuai keinginan Anda.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E4E7EC] shadow-[0_4px_16px_rgba(11,20,55,0.04)] hover:shadow-[0_12px_24px_rgba(11,20,55,0.08)] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Top Bar Card: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl bg-linear-to-r from-[#155EEF] to-[#6941C6] bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-xl text-[#0B1437] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#667085] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}