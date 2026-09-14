'use client';

import dynamic from 'next/dynamic';

// Komponen Above-the-fold diimpor langsung
import Hero from "@/components/home/Hero";
import HeroText from "@/components/home/HeroText";
import ProductCategory from '@/components/home/ProductCategory';

// Komponen Below-the-fold diimpor secara lazy / dynamic (TANPA ssr: false)
const LogoMitra = dynamic(() => import("@/components/home/LogoMitra"));
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"));
const LocationSection = dynamic(() => import("@/components/home/LocationSection"));
const PortfolioPreview = dynamic(() => import("@/components/home/PortfolioPreview"));
const Process = dynamic(() => import("@/components/home/Process"));
const CtaSection = dynamic(() => import("@/components/home/CtaSection"));

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductCategory />
      <HeroText />
      <LogoMitra />
      <WhyChooseUs />
      <LocationSection />
      <PortfolioPreview />
      <Process />
      <CtaSection />
    </main>
  );
};

export default Home;