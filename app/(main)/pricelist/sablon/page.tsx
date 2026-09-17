import CtaSection from '@/components/home/CtaSection';
import PricelistHero from '@/components/pricelist/PricelistHero';
import PdfViewerSection from '@/components/pricelist/PdfViewerSection';

// const PDF_URL = 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789384896/sablon.pdf';
const PDF_URL = 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789649899/sablonv2.pdf';

export default function PricelistPage() {
  return (
    <main className="lg:pt-22.5 pt-10 bg-white">
      <PricelistHero category='Sablon' />
      <PdfViewerSection pdfUrl={PDF_URL} totalPages={3} />
      <CtaSection />
    </main>
  );
}