import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pointsindonesia.com'),

  // Title Statis
  title: 'Points Indonesia',

  description: 'Easy on Us, Easy on Points! Layanan konveksi terpercaya untuk pembuatan PDH/PDL, Jersey, Rompi, Sablon Kaos, dan Merchandise berkualitas.',
  keywords: [
    'konveksi makassar',
    'konveksi indonesia timur',
    'vendor apparel custom',
    'jasa buat kemeja pdh makassar',
    'bikin kemeja pdl custom',
    'cetak jersey printing makassar',
    'sablon kaos murah makassar',
    'bikin rompi angkatan',
    'vendor seragam kantor makassar',
    'konveksi baju angkatan unhas',
    'konveksi perintis kemerdekaan',
    'bikin kaos event makassar',
    'workshirt polo custom',
    'vendor konveksi sulawesi selatan',
    'konveksi nomor 1 di indonesia timur',
    'konveksi terbaik di makassar',
    'konveksi terpercaya di sulawesi selatan',
  ],

  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  openGraph: {
    title: 'Points Indonesia',
    description: 'Easy on Us, Easy on Points!',
    url: 'https://pointsindonesia.com',
    siteName: 'Points Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Points Indonesia Logo',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans text-[#667085] bg-white antialiased selection:bg-[#155EEF] selection:text-white">
        {children}
      </body>
    </html>
  );
}