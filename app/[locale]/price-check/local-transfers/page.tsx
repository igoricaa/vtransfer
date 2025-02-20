import VTransferTextual from '@/components/icons/v-transfer-textual';
import { serviceIcons } from '@/data';
import { Link, routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const LocalTransfersPriceCheck = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations(`priceCheck.local-transfers`);
  const tariffs = await getTranslations(`servicesAndTariffs.tariffs`);

  const Icon = serviceIcons['local-transfers'];

  return (
    <main className='px-side min-h-screen pt-32 sm:pt-44 lg:pt-52 pb-20 relative'>
      <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-4 w-full opacity-50 -z-10 pointer-events-none'>
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
      </div>
      <div className='absolute flex gap-4 sm:gap-8 items-center lg:items-start'>
        <Icon className='w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40' />
        <h3 className='text-xl sm:text-2xl lg:text-4xl uppercase whitespace-nowrap lg:pt-6'>
          {t('title.main')}
          <br className='lg:hidden' />{' '}
          <span className='text-xl sm:text-3xl lg:text-5xl'>
            {t('title.sub')}
          </span>
        </h3>
      </div>

      <section className='mt-32 sm:mt-44 lg:mt-32 3xl:mt-52 4xl:mt-64 lg:max-w-2xl w-fit mx-auto flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8'>
        <div className='bg-white/10 px-side lg:px-7 p-2 sm:py-8 pb-4 rounded-md text-white'>
          <p className='text-xl sm:text-2xl lg:text-3xl font-bold'>
            {tariffs('tariff-one.title')}
          </p>
          <p className='sm:text-lg lg:text-xl font-medium mt-1'>
            {tariffs('tariff-one.includes')}
          </p>
          <p className='sm:text-lg lg:text-xl font-medium mt-1'>
            {tariffs('tariff-one.additional-info')}
          </p>
          <p className='sm:text-lg lg:text-xl'>
            {tariffs('tariff-one.explanation')}
          </p>
        </div>
        <div className='bg-white/10 px-side lg:px-7 pt-4 sm:pt-5 pb-4 sm:pb-6 rounded-md text-white'>
          <p className='text-xl sm:text-2xl lg:text-3xl font-bold'>
            {tariffs('tariff-two.title')}
          </p>
          <p className='sm:text-lg lg:text-xl font-medium mt-1'>
            {tariffs('tariff-two.includes')}
          </p>
          <p className='sm:text-lg lg:text-xl font-medium mt-1'>
            {tariffs('tariff-two.additional-info')}
          </p>
          <p className='sm:text-lg lg:text-xl'>
            {tariffs('tariff-two.explanation')}
          </p>
        </div>
        <div className='flex gap-4 sm:gap-8 mt-4 sm:mt-6 lg:mt-8 justify-between lg:justify-start items-center'>
          <Link
            href='/price-check'
            className='flex items-center justify-center bg-transparent uppercase text-white font-medium text-lg border-1 border-white rounded-md px-4 py-2 sm:px-5 sm:py-4 w-full lg:w-fit hover:bg-white hover:text-black transition-all duration-300 cursor-pointer'
          >
            {t('back')}
          </Link>
          <Link
            href='/contact'
            className='flex items-center justify-center whitespace-nowrap bg-white uppercase text-black font-medium text-lg border-1 border-white rounded-md px-4 py-2 sm:px-5 sm:py-4 w-full lg:w-fit hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer'
          >
            {t('reserve')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LocalTransfersPriceCheck;
