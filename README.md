# Landing Page Inmobiliaria

Sitio web para mostrar una propiedad exclusiva en Pago de la Paja, Maldonado, Uruguay.

## Características

* Multilenguaje (Español, Inglés, Portugués)
* Diseño responsive y moderno
* Galería de imágenes interactiva
* Mapa interactivo con Google Maps
* Formulario de contacto con ReCAPTCHA y validaciones
* Tour virtual y videos de la propiedad
* Botones de compartir en redes sociales integrados en la navegación
* Contacto directo por WhatsApp
* Navegación suave entre secciones
* Tema oscuro elegante
* Optimización SEO
* Zoom interactivo en imágenes de la galería
* Navegación mejorada con breadcrumbs
* Botón "Volver arriba"
* Carga progresiva de componentes
* Análisis de rendimiento con Vercel Speed Insights

## Tecnologías

* Next.js 14
* TypeScript
* Tailwind CSS
* EmailJS para formulario de contacto
* Google Maps API
* React Icons
* ReCAPTCHA v2
* Framer Motion para animaciones
* Swiper para carruseles

## Configuración

1. Clona el repositorio
```bash
git clone https://github.com/py666/mi-landing-inmobiliaria.git
```

2. Instala las dependencias
```bash
npm install
```

3. Crea un archivo `.env.local` con las variables necesarias
4. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

## Variables de Entorno Requeridas

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

## Características Detalladas

### Multilenguaje
- Soporte completo para Español, Inglés y Portugués
- Detección automática del idioma del navegador
- Cambio de idioma sin recarga de página
- URLs amigables con prefijo de idioma

### Navegación
- Barra de navegación responsive
- Scroll suave entre secciones
- Menú hamburguesa en móviles
- Indicador de sección activa
- Botones de compartir integrados

### Galería y Media
- Carrusel de imágenes principal
- Galería de fotos con vista ampliada
- Reproductor de video integrado
- Tour virtual de la propiedad

### Formulario de Contacto
- Validaciones en tiempo real
- Protección contra spam con ReCAPTCHA
- Rate limiting para prevenir abuso
- Notificaciones por email con EmailJS
- Mensajes de estado y errores

### Características Sociales
- Botones de compartir en:
  * Facebook
  * Twitter
  * LinkedIn
  * WhatsApp
- Botón flotante de WhatsApp para contacto directo
- Enlaces personalizados para cada red social

## Despliegue

La forma más sencilla de desplegar es usando [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpy666%2Fmi-landing-inmobiliaria)

## Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Contacto

Arturo Nieto - [@py666](https://github.com/py666)

Link del proyecto: [https://github.com/py666/mi-landing-inmobiliaria](https://github.com/py666/mi-landing-inmobiliaria)

Demo: [chacra.vercel.app](https://chacra.vercel.app)
