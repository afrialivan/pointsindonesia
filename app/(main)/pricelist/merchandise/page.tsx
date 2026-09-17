import CtaSection from '@/components/home/CtaSection';
import PricelistHero from '@/components/pricelist/PricelistHero';
import PdfViewerSection from '@/components/pricelist/PdfViewerSection';

const PDF_URL = 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789384904/merchandise.pdf';

export default function PricelistPage() {
  return (
    <main className="lg:pt-22.5 pt-10 bg-white">
      <PricelistHero category='Merchandise' />
      <PdfViewerSection pdfUrl={PDF_URL} totalPages={24} />
      <CtaSection />
    </main>
  );
}