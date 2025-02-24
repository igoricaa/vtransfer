import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Image, { getImageProps } from 'next/image';
import ImageResponsive from '@/components/image-responsive';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('homePage');

  const common = {
    alt: 'V Transfer Belgrade',
    sizes: '100vw',
    fill: true,
    priority: true,
    quality: 100,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: '/v-transfer-home.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: '/v-transfer-home-mobile.jpg',
  });

  return (
    <main className='w-screen h-screen px-side relative flex flex-col justify-center'>
      <ImageResponsive
        src='/v-transfer-home.jpg'
        srcMobile='/v-transfer-home-mobile.jpg'
        alt='V Transfer Belgrade'
        sizes='100vw'
        fill
        priority
        quality={100}
        pictureClassName='absolute inset-0 w-screen h-full -z-10'
      />
      <div className='flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-9 relative'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-4xl font-medium uppercase'>
          {t('title')}
        </h1>
        <div className='relative lg:w-[50vw] aspect-[1177/111]'>
          <Image src='/v-transfer-text.svg' alt='hero' fill sizes='800px' />
        </div>
        <div className='absolute -bottom-[25vh] overflow-hidden'>
          <p className='text-white text-lg sm:text-3xl lg:text-[1.5vw] font-medium'>
            {t('subtitle.main')}
          </p>
          <p className='text-white/60 text-lg sm:text-3xl lg:text-[1.5vw] mt-1 sm:mt-2 lg:mt-4'>
            {t('subtitle.sub')}
          </p>
        </div>
      </div>
    </main>
  );
}
