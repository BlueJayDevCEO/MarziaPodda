/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#6FB7B7',
          muted: '#8FCFC4',
          mist: '#CFEAE6',
          soft: '#F4FBFA',
          text: '#1F2F33',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31, 47, 51, 0.08)',
      },
    },
  },
  plugins: [],
};
