import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ai-call-kappa.vercel.app',
  integrations: [sitemap()],
});
