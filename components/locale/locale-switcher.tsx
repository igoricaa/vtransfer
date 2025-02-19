import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';

import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} className='cursor-pointer'>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
