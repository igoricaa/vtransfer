'use client';

import { Pathnames } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const CustomLink = ({
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

  const localizedHref = href.startsWith(`/${locale}`)
    ? href
    : `/${locale}${href}`;

  return (
    <Link href={localizedHref} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
