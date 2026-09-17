'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  bgImage: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      bgImage: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789403478/points-indonesia.jpg',
    },
    {
      id: 2,
      bgImage: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789468906/points-indonesia-1.jpg',
    },
    {
      id: 3,
      bgImage: 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789468906/points-indonesia-2.jpg',
    },
  ];

  // Auto-play (5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    /* 
      PEMBUNGKUS UTAMA:
      1. flex justify-center w-full : Memaksa elemen di dalamnya selalu berada tepat di tengah layar
      2. px-4 sm:px-6 lg:px-8 : Memberikan jarak/margin aman di kanan-kiri agar tidak menempel ke tepi layar
    */
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-24 mt-16 md:mt-12 lg:mt-22.5">
      
      {/* 
        CONTAINER CAROUSEL:
        - max-w-7xl : Membatasi lebar maksimum agar sejajar dengan Navbar dan komponen lain
        - w-full : Mengisi lebar pembungkus secara presisi
        - mx-auto : Memastikan perataan tengah di semua resolusi
      */}
      <header className="relative w-full max-w-7xl aspect-video max-h-[calc(100vh-90px)] mx-auto overflow-hidden bg-[#0B1437] shadow-md">
        
        {/* Slides Container */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.bgImage}
                alt="Hero Background"
                fill
                priority={index === 0}
                className="object-cover w-full h-full"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          );
        })}

        {/* Navigation Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/0 hover:bg-black/50 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/0 hover:bg-black/50 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-[#155EEF]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

      </header>

    </div>
  );
}