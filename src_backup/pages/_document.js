import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta 
          name="google-site-verification" 
          content="GfIijkMlnLDrtAWj-IlYR6l8pyEtXdtyE8YHPUuZ8ig" 
        />

        <link
          rel="icon"
          type="image/png"
          href="/favicon_io/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link 
          rel="manifest" 
          href="/favicon_io/site.webmanifest" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 