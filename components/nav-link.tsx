'use client';

import { Pathnames, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const NavLink = ({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href: Pathnames;
  className?: string;
  onClick?: () => void;
}) => {
  const locale = useLocale();
  const pathname = usePathname();
  const isActive = pathname === href;

  const localizedHref = href.startsWith(`/${locale}`)
    ? href
    : `/${locale}${href}`;

  return (
    <Link
      href={localizedHref}
      className={`${className} border-b-2 border-transparent pb-0.5 transition-all duration-300 ${
        isActive ? 'border-b-2 border-white ' : ''
      } hover:border-white `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
