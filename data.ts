import AirportTransfersIcon from '@/components/icons/airport-transfers-icon';
import LocalTransfersIcon from '@/components/icons/local-transfers-icon';
import LongDistanceTransfersIcon from '@/components/icons/long-distance-transfers-icon';

export const email: string = 'infovtransfer@gmail.com';
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

export type Service = {
  slug: string;
  title?: string;
  icon?: React.FC<React.SVGProps<SVGElement>>;
  link?: string;
};

export const serviceIcons = {
  'airport-transfers': AirportTransfersIcon,
  'local-transfers': LocalTransfersIcon,
  'long-distance-transfers': LongDistanceTransfersIcon,
};

export type RouteDetails = {
  distance: string;
  duration: string;
  price: number;
};
