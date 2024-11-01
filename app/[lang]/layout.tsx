import { i18n } from '@/i18n.config'
import { Inter } from 'next/font/google'
import '../globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <WhatsAppButton />
        {children}
      </body>
    </html>
  )
} 