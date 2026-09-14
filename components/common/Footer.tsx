'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const companyLinks = [
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Pricelist', href: '/pricelist/konveksi' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Cara Order', href: '/cara-order' },
    { name: 'Hubungi Kami', href: '/kontak' },
  ];

  const serviceLinks = [
    { name: 'Konveksi', href: '/pricelist/konveksi' },
    { name: 'Kaos Sablon', href: '/pricelist/sablon' },
    { name: 'Merchandise', href: '/pricelist/merchandise' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@points.indonesia',
      href: 'https://instagram.com/points.indonesia',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      handle: '@points.indonesia',
      href: 'https://tiktok.com/@points.indonesia',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.52-1.39 2.52-.08.97.35 1.95 1.08 2.59.83.73 2.01.99 3.08.73 1.08-.23 1.99-1.03 2.37-2.09.28-.75.33-1.57.31-2.37.02-4.78.01-9.56.01-14.34z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      handle: '0821-2878-7270',
      href: 'https://wa.me/6282128787270',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0B1437] text-white/65 pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">

          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-points.png"
                alt="Logo Points Indonesia"
                width={150}
                height={45}
                priority
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              CV. Points Sukses Indonesia adalah perusahaan percetakan apparel, konveksi &amp; merchandise di Indonesia Timur yang berfokus pada kualitas premium, harga kompetitif, dan layanan profesional.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#155EEF] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 border border-white/10"
                  aria-label={social.name}
                  title={`${social.name}: ${social.handle}`}
                >
                  {social.icon}
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

          {/* Contact Details Section */}
          <div className="lg:col-span-4 col-span-1">
            <h6 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
              Informasi Kontak
            </h6>
            
            <ul className="space-y-3.5 text-sm text-white/70">
              {/* WhatsApp & Telp */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#155EEF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block text-xs text-white/40 uppercase font-semibold">WhatsApp / Telp</span>
                  <a href="https://wa.me/6282128787270" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    0821-2878-7270
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#155EEF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-xs text-white/40 uppercase font-semibold">Email</span>
                  <a href="mailto:Points.indonesiaa@gmail.com" className="hover:text-white transition-colors">
                    Points.indonesiaa@gmail.com
                  </a>
                </div>
              </li>

              {/* Alamat Workshop / Ruko */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#155EEF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block text-xs text-white/40 uppercase font-semibold">Alamat Kantor &amp; Workshop</span>
                  <span className="leading-relaxed block text-white/80">
                    Ruko HCC, Jl. Perintis Kemerdekaan Blk C, Tamalanrea, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245
                  </span>
                </div>
              </li>
            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Points Indonesia (CV. Points Sukses Indonesia). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}