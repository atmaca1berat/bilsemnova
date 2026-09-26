// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// bilsemnova.com — GitHub Pages'te yayınlanan durağan site.
export default defineConfig({
  site: 'https://bilsemnova.com',
  trailingSlash: 'always',
  // Ders notu sayfaları PDF'e dönüşmek için var; arama motorlarına kapalı (noindex), haritada da yok.
  integrations: [sitemap({ filter: (sayfa) => !sayfa.includes('/ders-notu/') })],
});
