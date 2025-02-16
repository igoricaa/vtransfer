import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src='/logo/v-transfer-logo.svg'
        alt='logo'
        fill
        quality={100}
        sizes='150px'
        className='cover'
      />
    </div>
  );
};

export default Logo;
