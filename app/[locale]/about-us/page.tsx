import ImageResponsive from '@/components/image-responsive';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
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
    <main className='min-h-screen px-side relative pt-30 sm:pt-44 lg:pt-56 pb-16 sm:pb-20'>
      <ImageResponsive
        src='/v-transfer-about-us.jpg'
        srcMobile='/v-transfer-about-us-mobile-2.jpg'
        alt='V Transfer About Us'
        sizes='100vw'
        fill
        priority
        quality={100}
        pictureClassName='absolute inset-0 w-screen h-full -z-10'
      />
      <div className='lg:max-w-xl bg-black/50 px-4 sm:px-8 py-6 sm:py-10 rounded-md lg:bg-transparent lg:px-0 lg:py-0 lg:rounded-none text-white'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold uppercase'>
          {t('title')}
        </h1>
        <p className='lg:text-xl mt-6 sm:mt-8 lg:mt-9'>{t('description')}</p>
      </div>
    </main>
  );
}
