/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#07545A',
          muted: '#14777B',
          mist: '#C8DAD2',
          soft: '#F7F1E8',
          text: '#08292C',
          petrol: '#002F35',
          pink: '#F52E83',
          aqua: '#25D5D0',
        },
      },
      fontFamily: {
        serif: ['Caveat', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31, 47, 51, 0.08)',
      },
    },
  },
  plugins: [],
};
