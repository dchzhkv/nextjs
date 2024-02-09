import createIntlMiddleware from 'next-intl/middleware';
import { localePrefix, localesList } from './common/i18n/config';
import { NextRequest } from 'next/server';

/**
 * Docs: https://nextjs.org/docs/app/building-your-application/routing/middleware
 *
 * Middleware is invoked for every route. Middleware allows to run code before a request is completed.
 * Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request
 * or response headers, or responding directly.
 */
export function middleware(request: NextRequest) {

  /**
   * https://next-intl-docs.vercel.app/docs/getting-started/app-router#middleware
   *
   * The middleware matches a locale for the request and handles redirects and rewrites accordingly.
   */
  const nextResponse = createIntlMiddleware({
    defaultLocale: 'en',
    locales: localesList,
    localePrefix
  });

  return nextResponse(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(de|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

// const getLocale = (request: NextRequest) => {
//   let languages = new Negotiator({
//     headers: {
//       'accept-language': request.headers.get('accept-language') || '',
//     }
//   }).languages()
//   const locale = match(languages, Object.keys(constantsLocales), 'en');
//   return locale
// };

/**
 * Docs: https://nextjs.org/docs/app/building-your-application/routing/middleware
 *
 * Middleware is invoked for every route. Middleware allows to run code before a request is completed.
 * Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request
 * or response headers, or responding directly.
 */
// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   )

//   if (pathnameHasLocale) return

//   // Redirect if there is no locale
//   const locale = getLocale(request)
//   request.nextUrl.pathname = `/${locale}${pathname}`
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return Response.redirect(request.nextUrl)
// }