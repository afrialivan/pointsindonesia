'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  const navLinks = [
    { name: 'BERANDA', href: '/' },
    { name: 'TENTANG KAMI', href: '/tentang-kami' },
    { name: 'PRICELIST', href: '/pricelist' },
    { name: 'PORTOFOLIO', href: '/portofolio' },
    { name: 'CARA ORDER', href: '/cara-order' },
    { name: 'KONTAK', href: '/kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow">
      
      {/* 1. TOP BAR (Informasi Kontak & Alamat) */}
      <div className="bg-[#04243A] hidden lg:block text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 sm:gap-6">
          
          {/* Telepon */}
          <a
            href="https://wa.me/6282345555423"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold hover:text-[#155EEF] transition-colors"
          >
            <svg
              className="w-4 h-4 text-white fill-current shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
            </svg>
            <span>+62 821-2878-7270</span>
          </a>

          {/* Garis Pemisah (Divider Vertical) */}
          <div className="hidden sm:block w-px h-4 bg-white/30" />

          {/* Alamat */}
          <div className="flex items-center gap-2 text-white/90">
            <svg
              className="w-4 h-4 text-white fill-current shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            <span className="font-medium truncate">
               Jl. Perintis Kemerdekaan Blk C, Ruko HCC 
            </span>
          </div>

        </div>
      </div>

      {/* 2. NAVBAR UTAMA */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-md'
            : 'py-2.5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <Link href="/" onClick={handleLinkClick} className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo Points Indonesia"
                width={150}
                height={45}
                priority
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-[#EEF2FF] rounded-lg gap-1 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <span
                className={`w-5 h-0.5 bg-[#0B1437] rounded transition-all duration-300 ${
                  isNavOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#0B1437] rounded transition-all duration-300 ${
                  isNavOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#0B1437] rounded transition-all duration-300 ${
                  isNavOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </button>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 font-display font-bold text-sm tracking-wide">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#FF9900]' // Warna kuning/oranye aktif seperti gambar
                        : 'text-primary hover:text-[#FF9900]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

          </div>

          {/* Mobile Menu Dropdown */}
          {isNavOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-2 font-display font-bold text-sm">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`px-4 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? 'text-[#FF9900] bg-[#EEF2FF]'
                          : 'text-[#0B1437] hover:text-[#FF9900] hover:bg-[#EEF2FF]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

    </header>
  );
}