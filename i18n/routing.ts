import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'sr', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about-us': {
      en: '/about-us',
      sr: '/o-nama',
      ru: '/o-nas',
    },
    '/services-and-tariffs': {
      en: '/services-and-tariffs',
      sr: '/usluge-i-tarife',
      ru: '/услуги-и-тарифы',
    },
    '/contact': {
      en: '/contact',
      sr: '/kontakt',
      ru: '/контакт',
    },
    '/price-check': {
      en: '/price-check',
      sr: '/proveri-cenu',
      ru: '/проверить-цену',
    },
    // '/[...rest]': {
    //   en: '/[...rest]',
    //   sr: '/[...rest]',
    //   ru: '/[...rest]',
    // },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
