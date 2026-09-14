import CtaSection from '@/components/home/CtaSection';
import PricelistHero from '@/components/pricelist/PricelistHero';
import PdfViewerSection from '@/components/pricelist/PdfViewerSection';

const PDF_URL = 'https://res.cloudinary.com/wxjrbpho/image/upload/v1789384898/konveksi.pdf';

export default function PricelistPage() {
  return (
    <main className="lg:pt-22.5 pt-10 bg-white">
      <PricelistHero category='Konveksi' />
      <PdfViewerSection pdfUrl={PDF_URL} />
      <CtaSection />
    </main>
  );
}