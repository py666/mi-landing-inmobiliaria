'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' }
] as const;

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getCurrentLang = () => {
    const currentLocale = pathname?.split('/')[1];
    return languages.find(lang => lang.code === currentLocale) || languages[0];
  };

  const getPathWithoutLocale = () => {
    const pathParts = pathname?.split('/').slice(2) || [];
    return '/' + pathParts.join('/');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300"
        >
          <FaGlobe className="text-gray-600" />
          <span className="font-medium">{getCurrentLang().flag}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 w-48">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}${getPathWithoutLocale()}`}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 block"
                onClick={() => setIsOpen(false)}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 