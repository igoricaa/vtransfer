import VTransferTextual from '@/components/icons/v-transfer-textual';
import { serviceIcons } from '@/data';
import { routing } from '@/i18n/routing';
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
    <main className='px-side min-h-screen pt-52 pb-20 relative'>
      <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-4 w-full opacity-50 -z-10 pointer-events-none'>
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
      </div>
      <div className='absolute flex gap-8'>
        <Icon className='w-40 h-40' />
        <h3 className='text-4xl uppercase whitespace-nowrap pt-6'>
          {t('title.main')} <span className='text-5xl'>{t('title.sub')}</span>
        </h3>
      </div>

      <section className='mt-32 3xl:mt-52 4xl:mt-64 max-w-2xl w-fit mx-auto flex flex-col gap-y-8'>
        <div className='bg-white/10 px-7 pt-5 pb-6 rounded-md'>
          <p className='text-white text-3xl font-bold mt-4'>
            {tariffs('tariff-one.title')}
          </p>
          <p className='text-white text-xl font-medium mt-1'>
            {tariffs('tariff-one.includes')}
          </p>
          <p className='text-white text-xl font-medium mt-1'>
            {tariffs('tariff-one.additional-info')}
          </p>
          <p className='text-white text-xl'>
            {tariffs('tariff-one.explanation')}
          </p>
        </div>
        <div className='bg-white/10 px-7 pt-5 pb-6 rounded-md'>
          <p className='text-white text-3xl font-bold mt-4'>
            {tariffs('tariff-two.title')}
          </p>
          <p className='text-white text-xl font-medium mt-1'>
            {tariffs('tariff-two.includes')}
          </p>
          <p className='text-white text-xl font-medium mt-1'>
            {tariffs('tariff-two.additional-info')}
          </p>
          <p className='text-white text-xl mt-1'>
            {tariffs('tariff-two.explanation')}
          </p>
        </div>
      </section>
    </main>
  );
};

export default LocalTransfersPriceCheck;
