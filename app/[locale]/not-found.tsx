import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notFoundPage');

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>{t('title')}</h1>
      <p className='text-lg text-gray-500'>{t('description')}</p>
    </div>
  );
}
