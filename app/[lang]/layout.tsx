import { i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Locale } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const lang = await Promise.resolve(params.lang);

  return (
    <html lang={lang} suppressHydrationWarning>
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