import { email, phone1, phone2 } from '@/data';
import Logo from './logo';
import Menu from './menu';
import LocaleSwitcher from './locale/locale-switcher';
import { useTranslations } from 'next-intl';
import CustomLink from './custom-link';
import HeaderClientWrapper from './header-client-wrapper';

const Header = () => {
  const t = useTranslations('nav');

  const routeTranslations = {
    home: t('home'),
    aboutUs: t('aboutUs'),
    servicesAndTariffs: t('servicesAndTariffs'),
    priceCheck: t('priceCheck'),
    contact: t('contact'),
  };
  return (
    <HeaderClientWrapper>
      <div className='flex items-center gap-x-20'>
        <CustomLink href='/'>
          <Logo className='w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28' />
        </CustomLink>
        <div className='hidden lg:flex items-center gap-x-4 opacity-list'>
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
      <div className='flex items-center gap-x-8'>
        <LocaleSwitcher />
        <Menu translations={routeTranslations} />
      </div>
    </HeaderClientWrapper>
  );
};

export default Header;
