import PriceCalculator from '@/components/calculator/price-calculator';
import VTransferTextual from '@/components/icons/v-transfer-textual';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const ServicePriceCheck = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations(`priceCheck.long-distance-transfers`);

  return (
    <main className='px-side relative pb-20'>
      <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-4 w-full opacity-50 -z-10 pointer-events-none'>
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
        <VTransferTextual className='w-[85%] h-full aspect-[1177/111] opacity-10' />
      </div>
      <PriceCalculator
        titleMain={t('title.main')}
        titleSub={t('title.sub')}
        className='mt-52'
      />
    </main>
  );
};

export default ServicePriceCheck;
