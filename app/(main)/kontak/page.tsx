'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import LocationSection from '@/components/home/LocationSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const whatsappMessage = encodeURIComponent(
      `Halo Points Indonesia,\n\nSaya: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nKategori: ${formData.subject}\n\nPesan:\n${formData.message}`
    );

    setTimeout(() => {
      setStatus('success');
      window.open(`https://wa.me/6282128787270?text=${whatsappMessage}`, '_blank');

      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setStatus('idle');
      }, 2000);
    }, 800);
  };

  const contactCards = [
    {
      title: 'WhatsApp & Telepon',
      detail: ['+62 821-2878-7270 (Admin 1)', '+62 823-5553-4970 (Admin 2)'],
      sub: 'Respon cepat jam kerja (09.00 - 18.00 WITA)',
      href: 'https://wa.me/6282128787270',
      icon: (
        <svg className="w-5 h-5 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'Email Resmi',
      detail: 'Points.indonesiaa@gmail.com',
      sub: 'Kirimkan penawaran atau berkas kerja sama',
      href: 'mailto:Points.indonesiaa@gmail.com',
      icon: (
        <svg className="w-5 h-5 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Alamat Workshop',
      detail: 'Ruko HCC, Jl. Perintis Kemerdekaan Blk. A No.5',
      sub: 'Tamalanrea, Kota Makassar, Sulawesi Selatan 90245',
      href: 'https://www.google.com/maps?q=-5.1406087,119.4854023',
      icon: (
        <svg className="w-5 h-5 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Jam Operasional',
      detail: 'Senin – Sabtu: 09.00 – 18.00 WITA',
      sub: 'Hari Minggu & Tanggal Merah Libur',
      href: '#',
      icon: (
        <svg className="w-5 h-5 text-[#155EEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="lg:pt-22.5 bg-white">
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
              HUBUNGI KAMI
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-6">
              Diskusi &amp; Konsultasi <span className="text-[#155EEF]">Project Kamu</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Punya pertanyaan seputar sampel bahan, perkiraan biaya, atau alur pengerjaan? Tim Points Indonesia siap membantu kebutuhan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT CARDS & FORM SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Sisi Kiri: Informasi Kontak */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1437] mb-2">
                  Mari Terhubung
                </h2>
                <p className="text-[#667085] text-sm leading-relaxed">
                  Kunjungi Toko dan Kantor kami secara langsung di Makassar atau hubungi melalui saluran komunikasi resmi di bawah ini.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3.5 pt-2 flex-1">
                {contactCards.map((card, idx) => (
                  <motion.a
                    key={idx}
                    href={card.href}
                    target={card.href !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="flex items-center bg-[#F7F9FC] rounded-2xl p-4 border border-[#E4E7EC] hover:border-[#155EEF]/30 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-3.5 w-full">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0">
                        {card.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block font-display font-bold text-xs text-[#0B1437]">
                          {card.title}
                        </span>
                        <span className="block font-display font-semibold text-sm sm:text-base text-[#155EEF] truncate my-0.5">
                          {card.detail.length === 2 ?
                            (<>
                              <div>
                                {card.detail[0]}
                              </div>
                              <div>
                                {card.detail[1]}
                              </div>
                            </>) : card.detail}
                        </span>
                        {/* <span className="block text-[11px] sm:text-xs text-[#667085]">
                          {card.sub}
                        </span> */}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sisi Kanan: Form Pesan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-[#F7F9FC] rounded-3xl p-6 sm:p-8 border border-[#E4E7EC] shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-2xl text-[#0B1437] mb-1">
                  Kirim Pesan Konsultasi
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] mb-6">
                  Isi formulir di bawah ini untuk terhubung secara otomatis ke layanan WhatsApp Points Indonesia.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-semibold text-[11px] uppercase tracking-wider text-[#0B1437] mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Masukkan nama Anda"
                        className="w-full bg-white border border-[#E4E7EC] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1437] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#155EEF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-display font-semibold text-[11px] uppercase tracking-wider text-[#0B1437] mb-1.5">
                        Nomor Telepon / WA *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="08123456789"
                        className="w-full bg-white border border-[#E4E7EC] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1437] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#155EEF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-semibold text-[11px] uppercase tracking-wider text-[#0B1437] mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full bg-white border border-[#E4E7EC] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1437] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#155EEF] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-display font-semibold text-[11px] uppercase tracking-wider text-[#0B1437] mb-1.5">
                        Kategori Produk *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-[#E4E7EC] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1437] focus:outline-none focus:border-[#155EEF] transition-colors"
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Apparel & Kaos Custom">Apparel &amp; Kaos Custom</option>
                        <option value="Seragam PDH / PDL">Seragam PDH / PDL</option>
                        <option value="Jaket & Rompi">Jaket &amp; Rompi</option>
                        <option value="Merchandise & Aksesoris">Merchandise &amp; Aksesoris</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-display font-semibold text-[11px] uppercase tracking-wider text-[#0B1437] mb-1.5">
                      Detail Pesanan / Pesan *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan perkiraan jumlah pcs, desain, atau pertanyaan Anda..."
                      className="w-full bg-white border border-[#E4E7EC] rounded-xl px-3.5 py-2.5 text-sm text-[#0B1437] placeholder:text-[#98A2B3] focus:outline-none focus:border-[#155EEF] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status !== 'idle'}
                    className="w-full font-display font-semibold text-sm text-white px-6 py-3.5 rounded-xl bg-primary shadow-[0_8px_20px_rgba(21,94,239,0.25)] hover:shadow-[0_12px_28px_rgba(21,94,239,0.35)] transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                  >
                    {status === 'submitting' ? (
                      'Menghubungkan ke WhatsApp...'
                    ) : status === 'success' ? (
                      'Tersambung!'
                    ) : (
                      <>
                        Kirim via WhatsApp
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. MAPS SECTION */}
      <LocationSection />
    </main>
  );
}