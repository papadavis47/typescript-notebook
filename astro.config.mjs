import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkCodeTitles from 'remark-code-titles';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkCodeTitles],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'night-owl',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: ['go'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
  integrations: [mdx(), tailwind()],
});
