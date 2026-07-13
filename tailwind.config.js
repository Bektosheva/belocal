/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          500: '#0F3460',
          600: '#0a1f3a',
          700: '#051a2f',
          800: '#021424',
          900: '#001118',
        },
        accent: {
          gold: '#D4AF37',
          maroon: '#8B3A3A',
          cream: '#FFFBF0',
          green: '#2D5016',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}