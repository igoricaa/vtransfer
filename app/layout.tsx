import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vtransfer.rs'),

  title: {
    default: 'V Transfer',
    template: '%s | V Transfer',
  },
  description:
    'V Transfer is your trusted partner for premium transportation in Belgrade and beyond.',
  openGraph: {
    title: 'V Transfer',
    description:
      'V Transfer is your trusted partner for premium transportation in Belgrade and beyond.',
    url: 'https://vtransfer.rs',
    siteName: 'V Transfer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'V Transfer',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
