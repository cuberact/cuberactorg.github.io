import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.cuberact.org',
  integrations: [sitemap()],
  // Astro 5's whitespace handling: Astro 7's default ('jsx') drops the space where a line break joins words.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
