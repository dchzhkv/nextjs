import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localesList, localePrefix } from './common/i18n/config';

/**
 * https://next-intl-docs.vercel.app/docs/routing/navigation#localized-pathnames
 *
 * Using Strategy 2: Localized pathnames. Provide distinct pathnames for every locale that your app supports.
 * Middleware also has to use the same pathnames.
 */
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales: localesList, localePrefix});