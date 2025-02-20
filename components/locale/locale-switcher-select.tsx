'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useEffect, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import React from 'react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const locales = ['en', 'sr', 'ru'];

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    const nextLocale = event.target.value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  useEffect(() => {
    const index = locales.indexOf(defaultValue);
  }, [defaultValue]);

  return (
    <label
      className={`${isPending && 'transition-opacity [&:disabled]:opacity-30'}`}
    >
      <p className='sr-only'>{label}</p>
      <div className='flex items-center gap-x-4 lg:gap-x-2 opacity-list'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && (child.props as any).value) {
            const isSelected = defaultValue === (child.props as any).value;

            return (
              <div
                key={`lang-${index}`}
                className='transition-opacity duration-300'
              >
                <input
                  type='radio'
                  id={(child.props as any).value}
                  name='locale'
                  value={(child.props as any).value}
                  checked={defaultValue === (child.props as any).value}
                  disabled={isPending}
                  onChange={(event) => onSelectChange(event, index)}
                  className='sr-only'
                />
                <label
                  htmlFor={(child.props as any).value}
                  className={`cursor-pointer font-medium text-sm sm:text-base ${
                    isSelected && 'border-b border-white pb-0.5'
                  }`}
                >
                  {(child.props as any).children}
                </label>
              </div>
            );
          }
          return null;
        })}
      </div>
    </label>
  );
}
