import { Link, Pathnames, usePathname } from '@/i18n/routing';

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
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
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
