import { defineConfig } from 'astro/config';

export default defineConfig({
  // Project root (optional, defaults to current folder)
  root: './src',

  // Vite-specific configuration
  vite: {
    resolve: {
      alias: {
        // Alias for layouts
        '@layouts': '/src/layouts',
        // You can also add aliases for components, pages, etc.
        '@components': '/src/components',
      },
    },
  },

  // Optional: Astro integrations (e.g., Markdown support)
  integrations: [],

  // Optional: build options
  build: {
    // clean output directory before building
    clean: true,
  },

  // Optional: markdown options
  markdown: {
    syntaxHighlight: 'prism', // or 'shiki'
  },
});
