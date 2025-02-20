'use client';

import { usePathname } from '@/i18n/routing';

const HeaderClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <header
      className={`absolute z-10 top-0 left-0 w-full flex items-center justify-between px-side py-4 sm:py-8 lg:py-12 ${
        pathname === '/contact' && `bg-black`
      }`}
    >
      {children}
    </header>
  );
};

export default HeaderClientWrapper;
