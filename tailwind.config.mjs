/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF0066',
          blue: '#0077FF',
          'blue-light': '#6699FF',
          'blue-dark': '#0D47A1',
        },
        surface: {
          900: '#0d0d1a',
          800: '#141425',
          700: '#1a1a2e',
          600: '#24243e',
        },
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
