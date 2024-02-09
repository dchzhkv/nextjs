import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import { localesList } from '@/common/i18n/config';
import { Locale } from '@/types/locale';
import '@/styles/globals.css';
import { setRequestLocale } from '@/common/i18n/setRequestLocale';

type Props = {
  children: ReactNode;
  params: { locale: Locale };
};

export function generateStaticParams() {
  return localesList.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  setRequestLocale(locale);

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <Navbar />
      {children}
    </main>
  );
};