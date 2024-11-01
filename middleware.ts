import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de idiomas soportados
const locales = ['es', 'en', 'pt']

export function middleware(request: NextRequest) {
  // Obtener la ruta actual
  const pathname = request.nextUrl.pathname

  // Si estamos en la raíz o no hay un idioma en la URL
  if (pathname === '/' || !locales.some(locale => pathname.startsWith(`/${locale}`))) {
    // Redirigir a la versión en español
    return NextResponse.redirect(new URL('/es', request.url))
  }

  return NextResponse.next()
}

// Configurar qué rutas deben ser manejadas por el middleware
export const config = {
  matcher: [
    /*
     * Coincidir con todas las rutas excepto:
     * 1. /api (rutas API)
     * 2. /_next (archivos Next.js)
     * 3. /images, /videos (archivos estáticos)
     * 4. /favicon.ico, /robots.txt (archivos del sistema)
     */
    '/((?!api|_next|images|videos|favicon.ico|robots.txt).*)',
  ],
} 