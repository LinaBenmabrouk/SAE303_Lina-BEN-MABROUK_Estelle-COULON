// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Garde chaque fichier (JSON téléchargeables) en vrai fichier, même petit
    build: { assetsInlineLimit: 0 },
    // Prépare Plot dès le démarrage de « npm run dev » (évite l'erreur 504 « Outdated Optimize Dep »)
    optimizeDeps: { include: ["@observablehq/plot"] }
  },

  adapter: netlify()
});