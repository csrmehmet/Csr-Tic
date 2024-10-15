/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#101a35',   // Primary Renk (Koyu Mavi)
        secondary: '#76777c', // Secondary Renk (Gri)
        accent: '#e2e2e2',    // Accent Renk (Açık Gri)
        light: '#97dbff',     // Ekstra Light Renk (Açık Mavi)
      },
      fontFamily: {
        sans: ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.2' }],
        'h2': ['2.25rem', { lineHeight: '1.3' }],
        'h3': ['1.875rem', { lineHeight: '1.35' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'h5': ['1.25rem', { lineHeight: '1.5' }],
        'h6': ['1rem', { lineHeight: '1.6' }],
        'btn-text': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'mobile-menu': ['1.5rem', { lineHeight: '1.4' }],
        'paragraph': ['1rem', { lineHeight: '1.75' }],
        'list': ['1rem', { lineHeight: '1.75' }],
        'link': ['1rem', { lineHeight: '1.75', textDecoration: 'underline' }],
      },
    },
  },
  plugins: [],
}
