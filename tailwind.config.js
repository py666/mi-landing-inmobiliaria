/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Principal
        'primary-dark': '#1A1A19',    // Negro elegante
        'primary-green': '#8B7355',   // Marrón cálido
        'secondary-green': '#D4AF37', // Dorado elegante
        'light-green': '#F5F5F5',     // Blanco suave

        // Acentos
        'accent': {
          'gold': '#FFD700',          // Dorado brillante
          'bronze': '#CD7F32',        // Bronce
          'silver': '#C0C0C0',        // Plata
        },

        // Modo Oscuro
        'dark': {
          'primary': '#1A1A19',
          'secondary': '#8B7355',
          'text': '#F5F5F5',
          'accent': '#D4AF37',
        },

        // Modo Claro
        'light': {
          'primary': '#F5F5F5',
          'secondary': '#D4AF37',
          'text': '#1A1A19',
          'accent': '#8B7355',
        },
      },
    },
  },
  plugins: [],
} 