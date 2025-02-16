import { email } from '@/data';
import { phone1 } from '@/data';
import { phone2 } from '@/data';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <main className='flex flex-col justify-center items-end h-screen px-side relative pt-[10vh]'>
      <Image
        src='/v-transfer-contact.png'
        alt='V Transfer Contact'
        fill
        quality={100}
        priority
        className='object-cover -z-10'
      />
      <div>
        <h1 className='text-white text-7xl font-semibold uppercase'>
          {t('title')}
        </h1>
        <div className='flex flex-col items-end gap-y-1 opacity-list mt-10'>
          <ContactItem href={`mailto:${email}`} text={email} />
          <ContactItem href={`tel:${phone1}`} text={phone1} />
          <ContactItem href={`tel:${phone2}`} text={phone2} />
          <ContactItem
            href={`https://www.instagram.com/vtransfer.vn`}
            text='vtransfer_bg'
            // icon={<InstagramIcon />}
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
      className='text-white text-2xl text-medium transition-opacity duration-300 flex gap-x-2 items-center'
    >
      {icon}
      {text}
    </a>
  );
};
