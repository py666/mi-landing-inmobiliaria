import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import LanguageSelector from '@/components/LanguageSelector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Landing Inmobiliaria',
  description: 'Encuentra tu próxima propiedad con nosotros',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageSelector />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
