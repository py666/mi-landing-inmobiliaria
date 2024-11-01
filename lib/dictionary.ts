import type { Locale } from '@/i18n.config'

export interface Dictionary {
  location: {
    title: string;
    subtitle: string;
    pointsOfInterest: string;
    direction: {
      title: string;
      value: string;
    };
    access: {
      title: string;
      value: string;
    };
    transport: {
      title: string;
      value: string;
    };
    services: {
      title: string;
      value: string;
    };
    distances: {
      title: string;
      items: {
        laBarraManantiales: { name: string; time: string; };
        joseIgnacio: { name: string; time: string; };
        puntaDelEste: { name: string; time: string; };
        sanCarlos: { name: string; time: string; };
      };
    };
    loadingText: string;
    markerTitle: string;
  };
  // ... resto de las propiedades
}

const dictionaries = {
  es: () => import('@/dictionaries/es.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  pt: () => import('@/dictionaries/pt.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
} 