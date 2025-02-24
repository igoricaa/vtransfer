import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../globals.css';
import Header from '@/components/header';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

const inputSans = localFont({
  src: [
    {
      path: '../../fonts/InputSans-Light.ttf',
      weight: '300',
    },
    {
      path: '../../fonts/InputSans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../fonts/InputSans-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../fonts/InputSans-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-inputsans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vtransfer.rs'),

  title: {
    default: 'V Transfer - Your trusted partner for premium transportation in Belgrade and beyond.',
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
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inputSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
