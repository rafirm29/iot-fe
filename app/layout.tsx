'use client';

import { Public_Sans } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'IoT Frontend',
  description: 'IF4051 - Tugas proyek IoT',
};

const public_sans = Public_Sans({
  variable: '--public-font',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${public_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
