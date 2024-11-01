import { i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Locale } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default function RootLayout({
  children,
  params
}: RootLayoutProps) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Casa de Campo en Pago de la Paja</title>
        <meta name="description" content="Exclusiva propiedad en Maldonado, Uruguay" />
      </head>
      <body className={inter.className}>
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Casa de Campo en Pago de la Paja',
  description: 'Exclusiva propiedad en Maldonado, Uruguay',
} 