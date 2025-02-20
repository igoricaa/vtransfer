import CustomLink from '@/components/custom-link';
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
    <main className='flex flex-col justify-center h-screen px-side relative pt-[10vh]'>
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
        <p className='lg:text-xl mt-6 sm:mt-8 lg:mt-9'>
          {t('description')}
        </p>
        <CustomLink
          href='/'
          className='block w-fit uppercase sm:bg-transparent font-medium text-base sm:text-lg lg:text-xl border-1 border-white rounded-md px-4 py-3 mt-6 sm:mt-8 lg:mt-10 hover:bg-white hover:text-black transition-all duration-300'
        >
          {t('viewVehicle')}
        </CustomLink>
      </div>
    </main>
  );
}
