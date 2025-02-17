export const email: string = 'info@vclass.serbia.com';
export const phone1: string = '+381 65 2731990';
export const phone2: string = '+381 64 2332000';
export const instagram: string = 'vtransfer_bg';

export type Page = {
  label: string;
  href: string;
};

export const pages: Page[] = [
  {
    label: 'home',
    href: '/',
  },
  {
    label: 'aboutUs',
    href: '/about-us',
  },
  {
    label: 'servicesAndTariffs',
    href: '/services-and-tariffs',
  },
  {
    label: 'priceCheck',
    href: '/price-check',
  },
  {
    label: 'contact',
    href: '/contact',
  },
];

export const servicesImages: string[] = [
  '/services/v-transfer-services-1.jpg',
  '/services/v-transfer-services-2.jpg',
  '/services/v-transfer-services-3.jpg',
  '/services/v-transfer-services-4.jpg',
];

export const tariffsImages: string[] = [
  '/tariffs/v-transfer-tariffs-1.jpg',
  '/tariffs/v-transfer-tariffs-2.jpg',
  '/tariffs/v-transfer-tariffs-3.jpg',
  '/tariffs/v-transfer-tariffs-4.jpg',
  '/tariffs/v-transfer-tariffs-5.jpg',
];
