'use client';

import Burger from './burger';
import { useState } from 'react';
import Logo from './logo';
import { Page, pages, phone1, phone2 } from '@/data';
import { Pathnames } from '@/i18n/routing';
import NavLink from './nav-link';
import CustomLink from './custom-link';

const Menu = ({ translations }: { translations: Record<string, string> }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Burger handleClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

      <div
        className={`fixed inset-0 w-screen h-screen bg-black z-10 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        } transition-all duration-300`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed z-20 top-0 right-0 w-screen sm:w-xl lg:w-2xl h-svh bg-black px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8 lg:pt-14 pb-8 lg:pb-10 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-300`}
      >
        <div className='flex items-center justify-between'>
          <CustomLink href='/'>
            <Logo className='w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28' />
          </CustomLink>
        </div>
        <div className='flex flex-col gap-y-2 sm:gap-y-4 lg:gap-y-4 mt-20 [@media(min-height:1015px)]:mt-32 opacity-list'>
          {pages.map((page: Page, index) => (
            <NavLink
              key={index}
              href={page.href as Pathnames}
              className='text-white text-xl sm:text-2xl lg:text-4xl font-bold uppercase transition-opacity duration-300 w-fit'
              onClick={() => setIsOpen(false)}
            >
              {translations[page.label]}
            </NavLink>
          ))}
        </div>
        <div className='mt-auto'>
          <p className='text-white text-lg sm:text-xl lg:text-2xl font-bold uppercase mb-3 sm:mb-4 lg:mb-6 border-b-1 w-fit'>
            Contact us:
          </p>
          <div className='flex flex-col gap-y-2 opacity-list'>
            <ContactLink href={`tel:${phone1}`}>{phone1}</ContactLink>
            <ContactLink href={`tel:${phone2}`}>{phone2}</ContactLink>
            <ContactLink href='https://www.instagram.com/vtransfer.vn'>
              Instagram
            </ContactLink>
            <ContactLink href='https://www.facebook.com/vtransfer.vn'>
              Facebook
            </ContactLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

const ContactLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className='text-white text-sm sm:text-base lg:text-lg font-bold uppercase w-fit transition-opacity duration-300'
    >
      {children}
    </a>
  );
};
