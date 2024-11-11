import 'server-only'
import { DictionaryStructure } from '@/types/dictionary'

const dictionaries = {
  es: () => import('./es.json').then((module) => module.default) as Promise<DictionaryStructure>,
  en: () => import('./en.json').then((module) => module.default) as Promise<DictionaryStructure>,
  pt: () => import('./pt.json').then((module) => module.default) as Promise<DictionaryStructure>,
}

export const getDictionary = async (locale: string) => {
  try {
    // Si el locale no existe, usar el español por defecto
    if (!dictionaries[locale as keyof typeof dictionaries]) {
      console.warn(`Locale ${locale} not found, falling back to es`);
      locale = 'es';
    }

    return await dictionaries[locale as keyof typeof dictionaries]();
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);
    // Fallback al diccionario por defecto si hay un error
    return await dictionaries.es();
  }
} 