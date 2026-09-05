'use client';

import dynamic from 'next/dynamic';

// Komponen Above-the-fold diimpor langsung
import Hero from "@/components/home/Hero";
import HeroText from "@/components/home/HeroText";
import LogoMitra from "@/components/home/LogoMitra";
import WhyChooseUs from "@/components/home/WhyChooseUs";

// Komponen Below-the-fold diimpor secara lazy / dynamic
const LocationSection = dynamic(() => import("@/components/home/LocationSection"), { ssr: false });
const PortfolioPreview = dynamic(() => import("@/components/home/PortfolioPreview"));
const Process = dynamic(() => import("@/components/home/Process"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const CtaSection = dynamic(() => import("@/components/home/CtaSection"));

const Home = () => {
  return (
    <main>
      <Hero />
      <HeroText />
      <LogoMitra />
      <WhyChooseUs />
      <LocationSection />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <CtaSection />
    </main>
  );
};

export default Home;