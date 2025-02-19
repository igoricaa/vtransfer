import CustomLink from '@/components/custom-link';
import { serviceIcons } from '@/data';
import { Pathnames, routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
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
    <main className='h-screen relative flex flex-col justify-end pb-20'>
      <Image
        src='/v-transfer-price-check.jpg'
        alt='V Transfer Price Check'
        fill
        sizes='100vw'
        priority
        quality={100}
        className='object-cover -z-10'
      />
      <div className='w-full max-w-2xl 2xl:max-w-5xl mx-auto relative'>
        <p className='absolute top-0 -left-72 uppercase text-white text-2xl font-bold'>
          {t('title')}
        </p>
        <div className='grid grid-cols-3 gap-28'>
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
      <h3 className='text-white text-2xl uppercase mt-4 text-center'>
        <span className='font-bold whitespace-nowrap'>{titlePt1}</span>
        <br />
        {titlePt2}
      </h3>
    </CustomLink>
  );
};
