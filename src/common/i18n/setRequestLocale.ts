import { Locale } from "@/types/locale";
import { unstable_setRequestLocale } from "next-intl/server";

/**
 * https://next-intl-docs.vercel.app/docs/getting-started/app-router#add-unstable_setrequestlocale-to-all-layouts-and-pages
 * next-intl uses cache() to create a mutable store that holds the current locale.
 * By calling unstable_setRequestLocale, the current locale will be written to the store, making it available to all APIs that require the locale.
 */
export const setRequestLocale = (locale: Locale) => {
  unstable_setRequestLocale(locale);
};