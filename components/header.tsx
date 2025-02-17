'use client';

import { email, phone1, phone2 } from '@/data';
import Logo from './logo';
import Menu from './menu';
import LocaleSwitcher from './locale/locale-switcher';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const routeTranslations = {
    home: t('home'),
    aboutUs: t('aboutUs'),
    servicesAndTariffs: t('servicesAndTariffs'),
    priceCheck: t('priceCheck'),
    contact: t('contact'),
  };
  return (
    <header
      className={`absolute z-10 top-0 left-0 w-full flex items-center justify-between px-side py-12 ${
        pathname === '/contact' && `bg-black`
      }`}
    >
      <div className='flex items-center gap-x-20'>
        <Link href='/'>
          <Logo className='w-28 h-28' />
        </Link>
        <div className='flex items-center gap-x-4 opacity-list'>
          <a
            href={`mailto:${email}`}
            className='text-white text-xl transition-opacity duration-300'
          >
            {email}
          </a>
          <a
            href={`tel:${phone1}`}
            className='text-white text-xl transition-opacity duration-300 ml-6'
          >
            {phone1}
          </a>
          <span className='text-white text-2xl'>/</span>
          <a
            href={`tel:${phone2}`}
            className='text-white text-xl transition-opacity duration-300'
          >
            {phone2}
          </a>
        </div>
      </div>
      <div className='flex flex-col items-end gap-y-2'>
        <Menu translations={routeTranslations} />
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Header;
