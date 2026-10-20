import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
    optimizeDeps: { include: ["@observablehq/plot"] }
  },

  adapter: netlify()
});