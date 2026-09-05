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
  title: 'Points Indonesia',
  description: 'Easy on Us, Easy on Points!',
  icons: {
    icon: '/icon.svg',
    // icon: [
    //     {
    //         url: '/icon.svg',
    //         type: 'image/svg+xml',
    //         sizes: '32x32',
    //     }
    // ],
    // Jika ingin menambahkan ikon khusus Apple (iOS):
    // apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans text-[#667085] bg-white antialiased selection:bg-[#155EEF] selection:text-white">
        {children}
      </body>
    </html>
  );
}