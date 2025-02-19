import VTransferTextual from '@/components/icons/v-transfer-textual';
import { serviceIcons } from '@/data';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const AirportTransfersPriceCheck = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations(`priceCheck.airport-transfers`);
  const Icon = serviceIcons['airport-transfers'];

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
          <p className='text-white text-2xl font-bold'>
            {t('description.main')}
          </p>
          <p className='text-white text-2xl font-medium mt-10'>
            {t('description.sub')}
          </p>
        </div>
      </section>
    </main>
  );
};

export default AirportTransfersPriceCheck;
