'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menutup dropdown desktop saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const pricelistSubmenu = [
    { name: 'Pricelist Sablon', href: '/pricelist/sablon' },
    { name: 'Pricelist Konveksi', href: '/pricelist/konveksi' },
    { name: 'Pricelist Merchandise', href: '/pricelist/merchandise' },
  ];

  const navLinks = [
    { name: 'BERANDA', href: '/' },
    { name: 'TENTANG KAMI', href: '/tentang-kami' },
    {
      name: 'PRICELIST',
      href: '/pricelist',
      isDropdown: true,
      submenu: pricelistSubmenu,
    },
    { name: 'PORTOFOLIO', href: '/portofolio' },
    { name: 'CARA ORDER', href: '/cara-order' },
    { name: 'KONTAK', href: '/kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow">
      {/* 1. TOPBAR (Desktop Only) */}
      <div className="bg-[#04243A] hidden lg:block text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/6282128787270"
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

          <div className="hidden sm:block w-px h-4 bg-white/30" />

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
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-md'
            : 'py-2.5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <Link href="/" onClick={handleLinkClick} className="flex items-center">
              <Image
                src="/logo-points.png"
                alt="Logo Points Indonesia"
                width={150}
                height={45}
                priority
                className="h-auto w-36 object-contain"
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

                if (link.isDropdown) {
                  return (
                    <div
                      key={link.name}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'text-[#FF9900]'
                            : 'text-primary hover:text-[#FF9900]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#FF9900]' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu Box */}
                      {isDropdownOpen && (
                        <div className="absolute left-0 top-full pt-1 w-52 rounded-xl shadow-lg bg-white border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {link.submenu?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={handleLinkClick}
                                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                                  isSubActive
                                    ? 'text-[#FF9900] bg-[#EEF2FF]'
                                    : 'text-[#0B1437] hover:text-[#FF9900] hover:bg-gray-50'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#FF9900]'
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

                  if (link.isDropdown) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        <button
                          onClick={() =>
                            setIsMobileDropdownOpen(!isMobileDropdownOpen)
                          }
                          className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors ${
                            isActive
                              ? 'text-[#FF9900] bg-[#EEF2FF]'
                              : 'text-[#0B1437] hover:text-[#FF9900] hover:bg-[#EEF2FF]'
                          }`}
                        >
                          <span>{link.name}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileDropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Submenu Accordion Mobile */}
                        {isMobileDropdownOpen && (
                          <div className="flex flex-col pl-6 pr-2 py-1 gap-1 my-1 border-l-2 border-[#FF9900]/30 ml-4">
                            {link.submenu?.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={handleLinkClick}
                                  className={`px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                                    isSubActive
                                      ? 'text-[#FF9900] bg-[#EEF2FF]'
                                      : 'text-[#0B1437] hover:text-[#FF9900]'
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

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