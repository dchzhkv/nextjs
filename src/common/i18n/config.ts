import { locales as constantsLocales } from './../constants';

export const localesList: readonly string[] = Object.values(constantsLocales);

/**
 * https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix
 *
 * 'always' - by default, pathnames always start with the locale (e.g. /en/about).
 * 'as-needed' - requests where the locale prefix matches the default locale will be redirected (e.g. /en/about to /about).
 * 'never' - requests for all locales will be rewritten to have the locale only prefixed internally.
 */
export type localePrefixType = 'as-needed' | 'always' | 'never';

export const localePrefix: localePrefixType = 'as-needed';