/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0f1523',
          light: '#1a2236',
          medium: '#243050',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e8cc6e',
          dark: '#a68929',
        },
      },
    },
  },
  plugins: [],
};
