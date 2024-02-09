import { useTranslations } from 'next-intl';
import { Locale } from '@/types/locale';
import { setRequestLocale } from '@/common/i18n/setRequestLocale';

type Props = {
  params: { locale: Locale };
};

export default function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return <div>{t('title')}</div>;
}
