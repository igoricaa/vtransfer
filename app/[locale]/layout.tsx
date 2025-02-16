import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import Header from '@/components/header';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
