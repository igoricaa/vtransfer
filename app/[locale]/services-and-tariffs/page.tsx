import { getTranslations } from 'next-intl/server';
import Slider from '@/components/slider';
import { servicesImages, tariffsImages } from '@/data';

export default async function ServicesAndTariffs() {
  const t = await getTranslations('ServicesAndTariffs');

  return (
    <main>
      <section className='h-screen flex gap-x-4'>
        <div className='min-w-2xl w-2xl h-full flex flex-col justify-center px-side pt-30 2xl:pt-0'>
          <h1 className='text-white text-5xl font-semibold uppercase relative w-fit before:content-[""] before:absolute before:-top-12 before:left-0 before:w-full before:h-5 before:bg-orange-500'>
            {t('services.title')}
          </h1>
          <ul className='pl-6'>
            <li className='text-white text-xl mt-8 list-disc'>
              {t('services.service-one')}
            </li>
            <li className='text-white text-xl mt-4 list-disc'>
              {t('services.service-two')}
            </li>
            <li className='text-white text-xl mt-4 list-disc'>
              {t('services.service-three')}
            </li>
            <li className='text-white text-xl mt-4 list-disc'>
              {t('services.service-four')}
            </li>
            <li className='text-white text-xl mt-4 list-disc'>
              {t('services.service-five')}
            </li>
          </ul>
        </div>
        <Slider
          images={servicesImages}
          className='w-full max-w-[calc(100%-672px)] h-full overflow-hidden'
        />
      </section>
      <section className='h-screen gap-x-4 flex'>
        <Slider
          images={tariffsImages}
          className='w-full max-w-[calc(100%-672px)] h-full overflow-hidden'
        />
        <div className='w-2xl min-w-2xl px-side flex flex-col justify-center'>
          <div className='flex gap-x-8 pl-20'>
            <ul className='space-y-2'>
              <li className='text-white text-2xl'>MERCEDES v 220d 4x4</li>
              <li className='text-white text-2xl'>
                &#8470; {t('tariffs.vehicle.seats')}
              </li>
              <p className='text-white text-2xl'>{t('tariffs.vehicle.year')}</p>
            </ul>
            <ul className='space-y-2'>
              <li className='text-white text-2xl'>1950cm3</li>
              <li className='text-white text-2xl'>120kw</li>
              <li className='text-white text-2xl'>165 HP</li>
            </ul>
          </div>

          <div className='mt-20'>
            <h1 className='text-white text-4xl font-bold uppercase'>
              {t('tariffs.title')}
            </h1>
            <div>
              <p className='text-white text-3xl font-semibold mt-4'>
                {t('tariffs.tariff-one.title')}
              </p>
              <p className='text-white text-2xl font-semibold mt-1'>
                {t('tariffs.tariff-one.includes')}
              </p>
              <p className='text-white text-2xl font-medium'>
                {t('tariffs.tariff-one.additional-info')}
              </p>
              <p className='text-white text-2xl'>
                {t('tariffs.tariff-one.explanation')}
              </p>
            </div>
            <div className='mt-5'>
              <p className='text-white text-3xl font-semibold mt-4'>
                {t('tariffs.tariff-two.title')}
              </p>
              <p className='text-white text-2xl font-semibold mt-1'>
                {t('tariffs.tariff-two.includes')}
              </p>
              <p className='text-white text-2xl font-medium'>
                {t('tariffs.tariff-two.additional-info')}
              </p>
              <p className='text-white text-2xl'>
                {t('tariffs.tariff-two.explanation')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
