'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarSrc: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      rating: 5,
      quote:
        '"Hasil sablon DTF dan jahitan seragam PDH untuk tim kami sangat rapi dan presisi. Pengerjaannya juga cepat, tepat sebelum deadline event."',
      authorName: 'Rahmat Hidayat',
      authorRole: 'Ketua Komunitas Motor Makassar',
      avatarSrc: 'https://i.pravatar.cc/100?img=33',
    },
    {
      id: '2',
      rating: 5,
      quote:
        '"Order apron dan baju kaos untuk kru cafe di Points Indonesia memuaskan sekali. Bahannya dingin, awet, dan layanan konsultasinya sangat membantu."',
      authorName: 'Siti Nurhaliza',
      authorRole: 'Owner Kopi Kita Tamalanrea',
      avatarSrc: 'https://i.pravatar.cc/100?img=47',
    },
    {
      id: '3',
      rating: 5,
      quote:
        '"Sangat rekomended untuk cetak rompi lapangan dan merchandise instansi! Pelayanan profesional, harga bersaing, dan garansi produknya bikin tenang."',
      authorName: 'Andi Pratama',
      authorRole: 'Project Manager Corporate',
      avatarSrc: 'https://i.pravatar.cc/100?img=12',
    },
  ];

  // Penambahan Tipe Variants Eksplisit
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
            Testimoni Klien
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1437] leading-tight">
            Apa Kata Mereka Tentang Points Indonesia
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-[#E4E7EC] rounded-2xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(11,20,55,0.06)] hover:shadow-[0_12px_24px_rgba(11,20,55,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars Rating */}
                <div className="text-[#FFB400] text-sm tracking-widest mb-4">
                  {'★'.repeat(item.rating)}
                </div>

                {/* Quote */}
                <p className="text-[#667085] leading-relaxed text-sm sm:text-base">
                  {item.quote}
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3.5 mt-8">
                <Image
                  src={item.avatarSrc}
                  alt={item.authorName}
                  width={48}
                  height={48}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <div className="font-display font-bold text-sm text-[#0B1437]">
                    {item.authorName}
                  </div>
                  <div className="text-xs text-[#98A2B3]">
                    {item.authorRole}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}