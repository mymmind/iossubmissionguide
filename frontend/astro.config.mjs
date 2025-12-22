import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iossubmissionguide.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/success') && !page.includes('/restore') && !page.includes('/404'),
    serialize: (item) => {
      // Add lastmod to all pages
      item.lastmod = new Date().toISOString();

      // Set priority based on page importance
      if (item.url === 'https://iossubmissionguide.com/') {
        item.priority = 1.0;
        item.changefreq = 'weekly';
      } else if (item.url.includes('/ai-review')) {
        item.priority = 0.9;
        item.changefreq = 'weekly';
      } else if (item.url.includes('/guideline-')) {
        item.priority = 0.8;
        item.changefreq = 'monthly';
      } else if (item.url.includes('/about') || item.url.includes('/privacy') || item.url.includes('/terms')) {
        item.priority = 0.3;
        item.changefreq = 'yearly';
      } else {
        item.priority = 0.7;
        item.changefreq = 'monthly';
      }

      return item;
    }
  })]
});
