/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import CtaSection from '@/components/home/CtaSection';

interface CategoryGroup {
  key: string;
  label: string;
  images: string[];
}

interface PortfolioItem {
  id: string;
  categoryKey: string;
  imageSrc: string;
}

const ITEMS_PER_PAGE = 12;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categoryGroups: CategoryGroup[] = [
    {
      key: 'jaket-rompi',
      label: 'Jaket & Rompi',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323722/portofolio/jaket-rompi/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323735/portofolio/jaket-rompi/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323744/portofolio/jaket-rompi/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323745/portofolio/jaket-rompi/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323746/portofolio/jaket-rompi/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323747/portofolio/jaket-rompi/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323748/portofolio/jaket-rompi/7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323749/portofolio/jaket-rompi/8.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323750/portofolio/jaket-rompi/9.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323723/portofolio/jaket-rompi/10.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323725/portofolio/jaket-rompi/11.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323727/portofolio/jaket-rompi/12.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323728/portofolio/jaket-rompi/13.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323729/portofolio/jaket-rompi/14.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323730/portofolio/jaket-rompi/15.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323731/portofolio/jaket-rompi/16.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323732/portofolio/jaket-rompi/17.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323733/portofolio/jaket-rompi/18.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323734/portofolio/jaket-rompi/19.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323737/portofolio/jaket-rompi/20.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323738/portofolio/jaket-rompi/21.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323739/portofolio/jaket-rompi/22.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323740/portofolio/jaket-rompi/23.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323741/portofolio/jaket-rompi/24.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323742/portofolio/jaket-rompi/25.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323743/portofolio/jaket-rompi/26.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323752/portofolio/jaket-rompi/91.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323724/portofolio/jaket-rompi/101.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323726/portofolio/jaket-rompi/111.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323753/portofolio/jaket-rompi/abu.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323754/portofolio/jaket-rompi/abu2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323755/portofolio/jaket-rompi/abu3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323756/portofolio/jaket-rompi/abu4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323757/portofolio/jaket-rompi/abu5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323758/portofolio/jaket-rompi/abu6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323760/portofolio/jaket-rompi/abu7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323761/portofolio/jaket-rompi/pink.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323762/portofolio/jaket-rompi/pink2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323763/portofolio/jaket-rompi/pink3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323764/portofolio/jaket-rompi/ungu.webp',
      ],
    },
    {
      key: 'jersey',
      label: 'Jersey',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323765/portofolio/jersey/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323777/portofolio/jersey/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323783/portofolio/jersey/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323784/portofolio/jersey/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323785/portofolio/jersey/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323786/portofolio/jersey/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323787/portofolio/jersey/7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323788/portofolio/jersey/8.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323789/portofolio/jersey/9.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323766/portofolio/jersey/10.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323767/portofolio/jersey/11.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323768/portofolio/jersey/12.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323770/portofolio/jersey/13.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323771/portofolio/jersey/14.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323772/portofolio/jersey/15.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323773/portofolio/jersey/16.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323774/portofolio/jersey/17.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323775/portofolio/jersey/18.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323776/portofolio/jersey/19.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323778/portofolio/jersey/20.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323779/portofolio/jersey/21.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323781/portofolio/jersey/22.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323782/portofolio/jersey/23.webp',
      ],
    },
    {
      key: 'kaos',
      label: 'Kaos',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323791/portofolio/kaos/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323792/portofolio/kaos/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323793/portofolio/kaos/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323794/portofolio/kaos/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323795/portofolio/kaos/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323796/portofolio/kaos/6.webp',
      ],
    },
    {
      key: 'pdh-pdl',
      label: 'PDH & PDL',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323804/portofolio/pdh-pdl/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323808/portofolio/pdh-pdl/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323810/portofolio/pdh-pdl/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323811/portofolio/pdh-pdl/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323812/portofolio/pdh-pdl/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323813/portofolio/pdh-pdl/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323814/portofolio/pdh-pdl/7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323815/portofolio/pdh-pdl/8.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323816/portofolio/pdh-pdl/9.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323806/portofolio/pdh-pdl/10.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323807/portofolio/pdh-pdl/11.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323817/portofolio/pdh-pdl/a.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323818/portofolio/pdh-pdl/aa.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323819/portofolio/pdh-pdl/b.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323820/portofolio/pdh-pdl/c.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323821/portofolio/pdh-pdl/d.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323823/portofolio/pdh-pdl/e.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323824/portofolio/pdh-pdl/f.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323825/portofolio/pdh-pdl/g.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323826/portofolio/pdh-pdl/h.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323827/portofolio/pdh-pdl/i.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323829/portofolio/pdh-pdl/j.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323830/portofolio/pdh-pdl/k.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323831/portofolio/pdh-pdl/l.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323832/portofolio/pdh-pdl/m.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323833/portofolio/pdh-pdl/n.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323834/portofolio/pdh-pdl/o.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323835/portofolio/pdh-pdl/p.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323836/portofolio/pdh-pdl/q.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323837/portofolio/pdh-pdl/r.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323838/portofolio/pdh-pdl/s.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323840/portofolio/pdh-pdl/t.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323841/portofolio/pdh-pdl/u.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323842/portofolio/pdh-pdl/v.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323843/portofolio/pdh-pdl/x.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323844/portofolio/pdh-pdl/y.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323845/portofolio/pdh-pdl/z.webp',
      ],
    },
    {
      key: 'merchandise',
      label: 'Merchandise',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323797/portofolio/merchandise/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323798/portofolio/merchandise/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323800/portofolio/merchandise/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323800/portofolio/merchandise/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323801/portofolio/merchandise/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323802/portofolio/merchandise/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323803/portofolio/merchandise/7.webp',
      ],
    },
    {
      key: 'wisuda-jas-lab',
      label: 'Jubah Wisuda & Jas Lab',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323846/portofolio/wisuda-jas-lab/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323847/portofolio/wisuda-jas-lab/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323848/portofolio/wisuda-jas-lab/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323849/portofolio/wisuda-jas-lab/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323850/portofolio/wisuda-jas-lab/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323851/portofolio/wisuda-jas-lab/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323852/portofolio/wisuda-jas-lab/7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323853/portofolio/wisuda-jas-lab/wisuda.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323854/portofolio/wisuda-jas-lab/wisuda2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323855/portofolio/wisuda-jas-lab/wisuda3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323856/portofolio/wisuda-jas-lab/wisuda4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323857/portofolio/wisuda-jas-lab/wisuda5.webp',
      ],
    },
    {
      key: 'workshirt-polo',
      label: 'Workshirt & Polo',
      images: [
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323858/portofolio/workshirt-polo/1.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323871/portofolio/workshirt-polo/2.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323872/portofolio/workshirt-polo/3.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323873/portofolio/workshirt-polo/4.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323874/portofolio/workshirt-polo/5.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323875/portofolio/workshirt-polo/6.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323876/portofolio/workshirt-polo/7.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323877/portofolio/workshirt-polo/8.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323878/portofolio/workshirt-polo/9.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323860/portofolio/workshirt-polo/10.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323861/portofolio/workshirt-polo/11.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323862/portofolio/workshirt-polo/12.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323863/portofolio/workshirt-polo/13.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323864/portofolio/workshirt-polo/14.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323865/portofolio/workshirt-polo/15.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323866/portofolio/workshirt-polo/16.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323867/portofolio/workshirt-polo/17.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323869/portofolio/workshirt-polo/18.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323869/portofolio/workshirt-polo/19.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323879/portofolio/workshirt-polo/a.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323880/portofolio/workshirt-polo/aa.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323881/portofolio/workshirt-polo/b.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323882/portofolio/workshirt-polo/c.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323884/portofolio/workshirt-polo/d.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323885/portofolio/workshirt-polo/e.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323887/portofolio/workshirt-polo/f.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323888/portofolio/workshirt-polo/g.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323889/portofolio/workshirt-polo/h.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323891/portofolio/workshirt-polo/i.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323892/portofolio/workshirt-polo/j.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323893/portofolio/workshirt-polo/k.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323894/portofolio/workshirt-polo/l.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323895/portofolio/workshirt-polo/m.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323896/portofolio/workshirt-polo/n.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323897/portofolio/workshirt-polo/o.webp',
        'https://res.cloudinary.com/wxjrbpho/image/upload/v1789323898/portofolio/workshirt-polo/p.webp',
      ],
    },
  ];

  const filterCategories = useMemo(() => [
    { key: 'all', label: 'Semua Produk' },
    ...categoryGroups.map((group) => ({ key: group.key, label: group.label })),
  ], [categoryGroups]);

  const portfolioItems: PortfolioItem[] = useMemo(() => {
    return categoryGroups.flatMap((group) =>
      group.images.map((imgSrc, index) => ({
        id: `${group.key}-${index}-${imgSrc}`,
        categoryKey: group.key,
        imageSrc: imgSrc,
      }))
    );
  }, [categoryGroups]);

  const filteredItems = useMemo(() => {
    return activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.categoryKey === activeCategory);
  }, [activeCategory, portfolioItems]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Logika membatasi tampilan maksimal 3 angka halaman
  const visiblePages = useMemo(() => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage === 1) {
      return [1, 2, 3];
    }
    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [currentPage, totalPages]);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const gallerySection = document.getElementById('galeri-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="lg:pt-22.5 pt-10 bg-white">
      {/* 1. HERO SECTION */}
      <section className="py-12 sm:py-20 bg-[#F4F7FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl text-left"
          >
            <span className="inline-block font-display text-xs font-bold tracking-wider uppercase text-[#155EEF] bg-[#EEF2FF] px-4 py-2 rounded-full mb-4 sm:mb-6">
              GALERI KARYA
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0B1437] leading-[1.15] tracking-tight mb-4 sm:mb-6">
              Portofolio Hasil Produksi <span className="text-[#155EEF]">Points Indonesia</span>
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Temukan berbagai contoh pengerjaan apparel, seragam kerja, PDH/PDL, hingga merchandise custom yang telah kami selesaikan dengan standar kualitas tinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. GALLERY GRID WITH FILTER & PAGINATION */}
      <section id="galeri-section" className="py-12 sm:py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`font-display text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-[#155EEF] text-white shadow-md'
                    : 'bg-[#F7F9FC] text-[#667085] hover:bg-[#EEF2FF] hover:text-[#155EEF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Portfolio */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <AnimatePresence mode="wait">
              {paginatedItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                >
                  <div
                    onClick={() => setSelectedImage(item.imageSrc)}
                    className="group relative block aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm bg-[#EEF2FF] border border-[#E4E7EC] cursor-pointer"
                  >
                    <Image
                      src={item.imageSrc}
                      alt="Portofolio Points Indonesia"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigasi Paginasi (Maksimal 3 Angka) */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16">
              {/* Tombol Previous */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-full border border-[#E4E7EC] text-[#0B1437] hover:bg-[#EEF2FF] hover:text-[#155EEF] disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all"
                aria-label="Halaman Sebelumnya"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Render 3 Angka Halaman Aktif */}
              <div className="flex items-center gap-1 sm:gap-2">
                {visiblePages.map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full font-display text-xs sm:text-sm font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#155EEF] text-white shadow-sm'
                        : 'text-[#667085] hover:bg-[#EEF2FF] hover:text-[#155EEF]'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Tombol Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-full border border-[#E4E7EC] text-[#0B1437] hover:bg-[#EEF2FF] hover:text-[#155EEF] disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all"
                aria-label="Halaman Selanjutnya"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox / Popup Gambar Murni */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2.5 transition-colors z-10"
              aria-label="Tutup"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[80vh] flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Portofolio Large Preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaSection />
    </main>
  );
}