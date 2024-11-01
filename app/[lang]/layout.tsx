import { Inter } from 'next/font/google'
import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import LanguageSelector from '@/components/LanguageSelector'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <title>Casa de Campo en Pago de la Paja</title>
        <meta name="description" content="Exclusiva propiedad en Maldonado, Uruguay" />
      </head>
      <body className={inter.className}>
        <main className="relative min-h-screen">
          <LanguageSelector />
          <WhatsAppButton />
          {children}
        </main>
      </body>
    </html>
  )
}