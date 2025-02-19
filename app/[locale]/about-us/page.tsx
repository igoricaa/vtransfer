import CustomLink from '@/components/custom-link';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations('aboutUs');

  return (
    <main className='flex flex-col justify-center h-screen px-side relative pt-[10vh]'>
      <Image
        src='/v-transfer-about-us.jpg'
        alt='V Transfer About Us'
        fill
        quality={100}
        priority
        className='object-cover -z-10'
      />
      <div className='max-w-xl'>
        <h1 className='text-white text-7xl font-bold uppercase'>
          {t('title')}
        </h1>
        <p className='text-white text-xl mt-12'>{t('description')}</p>
        <CustomLink
          href='/'
          className='block w-fit uppercase text-white font-medium text-xl border-1 border-white rounded-md px-4 py-3 mt-10 hover:bg-white hover:text-black transition-all duration-300'
        >
          {t('viewVehicle')}
        </CustomLink>
      </div>
    </main>
  );
}
