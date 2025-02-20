import CustomLink from '@/components/custom-link';
import ImageResponsive from '@/components/image-responsive';
import { serviceIcons } from '@/data';
import { Pathnames, routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function PriceCheck({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations('priceCheck');

  const servicesUpdated = [
    'airport-transfers',
    'local-transfers',
    'long-distance-transfers',
  ].map((service) => ({
    slug: service,
    title: t(`${service}.serviceTitle`),
  }));

  return (
    <main className='h-screen relative flex flex-col pt-32 justify-center lg:justify-end pb-8 sm:pb-16 lg:pb-20'>
      <ImageResponsive
        src='/v-transfer-price-check.jpg'
        srcMobile='/v-transfer-price-check-mobile.jpg'
        alt='V Transfer Price Check'
        pictureClassName='absolute inset-0 w-screen h-full -z-10'
        sizes='100vw'
        fill
      />
      <div className='w-full lg:max-w-2xl lg:2xl:max-w-5xl lg:mx-auto px-side lg:px-0 relative'>
        <p className='lg:absolute lg:top-0 lg:-left-72 uppercase text-white text-2xl font-bold'>
          {t('title')}
        </p>
        <div className='grid grid-cols-3 gap-6 sm:gap-12 lg:gap-28 mt-4 sm:mt-8 lg:mt-0'>
          {servicesUpdated.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              Icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const ServiceCard = ({
  slug,
  title,
  Icon,
}: {
  slug: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGElement>>;
}) => {
  const words = title.split(' ');
  const titlePt2 = words.pop();
  const titlePt1 = words.join(' ');

  return (
    <CustomLink href={`/price-check/${slug}` as Pathnames}>
      <Icon className='w-full h-auto' />
      <h3 className='text-white text-sm sm:text-2xl uppercase mt-3 sm:mt-4 text-center'>
        <span className='font-bold lg:whitespace-nowrap'>{titlePt1}</span>
        <br />
        {titlePt2}
      </h3>
    </CustomLink>
  );
};
