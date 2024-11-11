import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

interface NegotiatorHeaders {
  [key: string]: string;
}

function getLocale(request: Request): string {
  const negotiatorHeaders: NegotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  let languages: string[];
  try {
    languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  } catch (err) {
    console.error('Error getting languages:', err);
    languages = [i18n.defaultLocale];
  }

  try {
    return matchLocale(languages, i18n.locales, i18n.defaultLocale);
  } catch (err) {
    console.error('Error matching locale:', err);
    return i18n.defaultLocale;
  }
}

export function middleware(request: Request) {
  const pathname = new URL(request.url).pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|site.webmanifest|images|videos).*)',
  ],
}; 