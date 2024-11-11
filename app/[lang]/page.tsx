import { getDictionary } from '@/dictionaries';
import type { Metadata } from 'next';
import { i18n } from '@/i18n-config';
import MainContent from '@/components/MainContent';

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params?.lang || i18n.defaultLocale;
  const dict = await getDictionary(lang);
  const url = 'https://chacra.vercel.app';

  return {
    title: dict.hero?.title,
    description: dict.hero?.subtitle,
    alternates: {
      canonical: '/',
      languages: {
        [lang]: `/${lang}`,
      },
    },
    other: {
      openGraph: {
        type: 'website',
        locale: lang,
        url: `${url}/${lang}`,
        title: dict.hero?.title,
        description: dict.hero?.subtitle,
        siteName: 'Casa de Campo',
        images: [
          {
            url: `${url}/images/casa-landing.jpeg`,
            width: 1200,
            height: 630,
            alt: dict.hero?.title,
          },
        ],
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const defaultLang = i18n.defaultLocale;
  const lang = await Promise.resolve(params?.lang || defaultLang);
  const dict = await getDictionary(lang);

  if (!dict) {
    return null;
  }

  return <MainContent dict={dict} />;
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
} 