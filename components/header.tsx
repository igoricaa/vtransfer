import { email, phone1, phone2 } from '@/data';
import Logo from './logo';
import Link from 'next/link';
import Menu from './menu';

const Header = () => {
  return (
    <header className='absolute z-10 top-0 left-0 w-full flex items-center justify-between px-side pt-12'>
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
      <div className='flex flex-col items-center gap-y-2'>
        <Menu />
        <div>ENG</div>
      </div>
    </header>
  );
};

export default Header;
