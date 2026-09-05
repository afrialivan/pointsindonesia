'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 2200);
    }, 1000);
  };

  const companyLinks = [
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Pricelist', href: '/pricelist' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Cara Order', href: '/cara-order' },
    { name: 'Hubungi Kami', href: '/kontak' },
  ];

  const serviceLinks = [
    { name: 'Konveksi Apparel', href: '/pricelist' },
    { name: 'Seragam PDH & PDL', href: '/pricelist' },
    { name: 'Sablon Custom & DTF', href: '/pricelist' },
    { name: 'Merchandise & Souvenir', href: '/pricelist' },
    { name: 'Rompi & Outerwear', href: '/pricelist' },
  ];

  return (
    <footer className="bg-[#0B1437] text-white/65 pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">

          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-4"
            >
              <Image
                src="/logo.svg"
                alt="Logo Points Indonesia"
                width={150}
                height={45}
                priority
                className="h-28 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              CV. Points Sukses Indonesia adalah perusahaan percetakan apparel, konveksi & merchandise di Indonesia Timur yang berfokus pada kualitas premium, harga kompetitif, dan layanan profesional.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {[
                { name: 'Instagram', href: 'https://instagram.com' },
                { name: 'WhatsApp', href: 'https://wa.me/6282345555423' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#155EEF] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 col-span-1">
            <h6 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Perusahaan
            </h6>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-2 col-span-1">
            <h6 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Layanan Utama
            </h6>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4">
            <h6 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Dapatkan Penawaran Khusus
            </h6>
            <p className="text-white/60 text-sm mb-4">
              Berlangganan newsletter untuk mendapatkan update produk terbaru dan promo khusus dari Points Indonesia.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#155EEF] transition-colors"
              />
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="shrink-0 bg-[#155EEF] hover:bg-[#0E3FB0] text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-200 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Mengirim...'
                ) : status === 'success' ? (
                  '✓'
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>
            &copy; 2026 Points Indonesia (CV. Points Sukses Indonesia). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}