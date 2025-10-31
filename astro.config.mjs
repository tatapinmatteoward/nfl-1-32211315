import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://pet-toy-fun-zone.pages.dev',
  build: {
    format: 'directory'
  }
});
