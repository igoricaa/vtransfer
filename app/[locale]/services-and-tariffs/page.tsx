import { getTranslations, setRequestLocale } from 'next-intl/server';
import Slider from '@/components/slider';
import { servicesImages, tariffsImages } from '@/data';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export default async function ServicesAndTariffs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations('servicesAndTariffs');

  return (
    <main className=''>
      <section className='lg:min-h-screen flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-4'>
        <div className='lg:min-w-2xl lg:w-2xl h-full flex flex-col justify-center px-side pt-44 sm:pt-52 lg:pt-64 2xl:pt-0 lg:pb-14 text-white'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold uppercase relative w-fit before:content-[""] before:absolute before:-top-12 before:left-0 before:w-full before:h-5 before:bg-orange-500'>
            {t('services.title')}
          </h1>
          <ul className='pl-6'>
            <li className='sm:text-xl mt-4 lg:mt-8 list-disc'>
              {t('services.service-one')}
            </li>
            <li className='sm:text-xl mt-2 lg:mt-4 list-disc'>
              {t('services.service-two')}
            </li>
            <li className='sm:text-xl mt-2 lg:mt-4 list-disc'>
              {t('services.service-three')}
            </li>
            <li className='sm:text-xl mt-2 lg:mt-4 list-disc'>
              {t('services.service-four')}
            </li>
            <li className='sm:text-xl mt-2 lg:mt-4 list-disc'>
              {t('services.service-five')}
            </li>
          </ul>
        </div>
        <Slider
          images={servicesImages}
          className='w-full lg:max-w-[calc(100%-672px)] h-auto overflow-hidden'
        />
      </section>
      <section className='lg:min-h-screen flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-4 pt-12 sm:pt-20 lg:pt-0'>
        <Slider
          images={tariffsImages}
          className='w-full lg:max-w-[calc(100%-672px)] h-auto overflow-hidden order-2 lg:order-1'
        />
        <div className='lg:w-2xl lg:min-w-2xl px-side flex flex-col justify-center order-1 lg:order-2 lg:pt-10 lg:pb-10'>
          <div className='flex gap-x-8 lg:pl-20'>
            <ul className='space-y-1 sm:space-y-2'>
              <li className='text-white text-lg sm:text-2xl'>
                MERCEDES v 220d 4x4
              </li>
              <li className='text-white text-lg sm:text-2xl'>
                &#8470; {t('tariffs.vehicle.seats')}
              </li>
              <p className='text-white text-lg sm:text-2xl'>
                {t('tariffs.vehicle.year')}
              </p>
            </ul>
            <ul className='space-y-1 sm:space-y-2'>
              <li className='text-white text-lg sm:text-2xl'>1950cm3</li>
              <li className='text-white text-lg sm:text-2xl'>120kw</li>
              <li className='text-white text-lg sm:text-2xl'>165 HP</li>
            </ul>
          </div>

          <div className='text-white mt-10 sm:mt-12 lg:mt-20'>
            <h1 className='text-3xl sm:text-4xl font-bold uppercase'>
              {t('tariffs.title')}
            </h1>
            <div>
              <p className='text-lg sm:text-xl lg:text-2xl font-bold mt-5 sm:mt-6 lg:mt-4'>
                {t('tariffs.tariff-one.title')}
              </p>
              <p className='sm:text-xl font-bold mt-1 sm:mt-2'>
                {t('tariffs.tariff-one.includes')}
              </p>
              <p className='sm:text-xl font-medium mt-1'>
                {t('tariffs.tariff-one.additional-info')}
              </p>
              <p className='sm:text-xl mt-1'>
                {t('tariffs.tariff-one.explanation')}
              </p>
            </div>
            <div className='mt-8 lg:mt-5'>
              <p className='text-lg sm:text-xl lg:text-2xl font-bold mt-4 sm:mt-5'>
                {t('tariffs.tariff-two.title')}
              </p>
              <p className='sm:text-xl font-bold mt-2'>
                {t('tariffs.tariff-two.includes')}
              </p>
              <p className='sm:text-xl font-medium mt-1'>
                {t('tariffs.tariff-two.additional-info')}
              </p>
              <p className='sm:text-xl mt-1'>
                {t('tariffs.tariff-two.explanation')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
