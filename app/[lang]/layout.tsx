import '../globals.css'
import { Suspense } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import { i18n } from '@/i18n-config';
import Script from 'next/script';
import LoadingSpinner from '@/components/LoadingSpinner';
import Analytics from '@/components/Analytics';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params?.lang || i18n.defaultLocale;
  const url = 'https://chacra.vercel.app';

  return {
    title: 'Casa de Campo en Pago de la Paja',
    description: 'Una propiedad única en un entorno natural privilegiado',
    other: {
      author: 'Arturo Nieto',
      keywords: ['casa de campo', 'propiedad', 'Maldonado', 'Uruguay'],
      'format-detection': {
        telephone: 'no',
        email: 'no',
        address: 'no',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    },
  };
}

export async function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#1A1A19',
    colorScheme: 'dark',
  };
}

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export default async function RootLayout({ children, params }: Props) {
  const lang = params?.lang || i18n.defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-primary-dark text-light-green">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
        <WhatsAppButton />
        <ScrollToTop />
        <Analytics />
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}