import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'الأستاذ عاصم فايد - معلم ومحفظ القرآن الكريم',
  description: 'الأستاذ عاصم فايد - معلم ومحفظ القرآن الكريم، إمام وخطيب، خريج الأزهر الشريف. تحفيظ القرآن وتدريس العلوم الشرعية.',
  keywords: 'تحفيظ القرآن، العلوم الشرعية، الأزهر الشريف، إمام، خطيب، معلم قرآن',
  authors: [{ name: 'الأستاذ عاصم فايد' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'الأستاذ عاصم فايد - معلم ومحفظ القرآن الكريم',
    description: 'معلم ومحفظ القرآن الكريم، إمام وخطيب، خريج الأزهر الشريف',
    type: 'website',
    locale: 'ar_EG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}