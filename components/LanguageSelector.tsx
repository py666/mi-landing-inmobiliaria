'use client'

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n.config';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

const languageNames = {
  es: {
    name: 'Español',
    flag: '🇪🇸',
    shortName: 'ES'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    shortName: 'EN'
  },
  pt: {
    name: 'Português',
    flag: '🇧🇷',
    shortName: 'PT'
  }
};

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const currentLocale = pathName?.split('/')[1] || 'es';

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        >
          <FaGlobe className="text-xl" />
          <span className="font-medium">
            {languageNames[currentLocale as keyof typeof languageNames].shortName}
          </span>
          <FaChevronDown 
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[160px]">
            {i18n.locales.map(locale => {
              const { name, flag } = languageNames[locale as keyof typeof languageNames];
              return (
                <button
                  key={locale}
                  onClick={() => {
                    router.push(redirectedPathName(locale));
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-2 transition-colors
                    ${locale === currentLocale 
                      ? 'bg-gray-50 text-primary font-medium' 
                      : 'text-gray-700'
                    }`}
                >
                  <span className="text-xl">{flag}</span>
                  <span>{name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
} 