import InstagramIcon from '@/components/icons/instagram';
import ImageResponsive from '@/components/image-responsive';
import { email } from '@/data';
import { phone1 } from '@/data';
import { phone2 } from '@/data';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <main className='flex flex-col justify-center items-end h-screen px-side relative lg:pt-[10vh]'>
      <ImageResponsive
        src='/v-transfer-contact.png'
        srcMobile='/v-transfer-contact-mobile.jpg'
        alt='V Transfer Belgrade Contact'
        sizes='100vw'
        fill
        priority
        quality={100}
        pictureClassName='absolute inset-0 w-screen h-full -z-10'
      />
      <div className='bg-black/50 px-4 sm:px-8 py-6 sm:py-10 rounded-md lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold uppercase'>
          {t('title')}
        </h1>
        <div className='flex flex-col items-end gap-y-2 lg:gap-y-1 opacity-list mt-4 sm:mt-6 lg:mt-10'>
          <ContactItem href={`mailto:${email}`} text={email} />
          <ContactItem href={`tel:${phone1}`} text={phone1} />
          <ContactItem href={`tel:${phone2}`} text={phone2} />
          <ContactItem
            href={`https://www.instagram.com/vtransfer.vn`}
            text='vtransfer_bg'
            icon={<InstagramIcon className='w-6 h-6 lg:w-7 lg:h-7' />}
          />
        </div>
      </div>
    </main>
  );
}

const ContactItem = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className='text-white text-xl lg:text-2xl text-medium transition-opacity duration-300 flex gap-x-2 lg:gap-x-3 items-center'
    >
      {icon}
      {text}
    </a>
  );
};
