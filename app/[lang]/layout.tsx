import { i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <head>
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