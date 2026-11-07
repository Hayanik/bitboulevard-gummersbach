import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.bitboulevard.de',
  trailingSlash: 'always',
  integrations: [react(), sitemap({ filter: page => !/\/(datenschutz|privacy)\/$/.test(page) })],
  vite: { plugins: [tailwind()] },
  devToolbar: { enabled: false },
});
