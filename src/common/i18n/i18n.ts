import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { localesList } from './config';

/**
 * https://next-intl-docs.vercel.app/docs/getting-started/app-router#i18nts
 *
 * Creates a configuration once per request. This is where you can load messages.
 */
export default getRequestConfig(async ({ locale }) => {
  if (!localesList.includes(locale)) notFound();

  return {
    messages: (
      await (locale === 'en' ? import('@/../messages/en.json') : import(`@/../messages/${locale}.json`))
    ).default
  };
});