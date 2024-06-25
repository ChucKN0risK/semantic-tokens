import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const scssPaths: Array<string> = [
  './src/lib/assets/styles/01-utils/_mixins.scss',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/lib'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssPaths.reduce((acc, scssPath) => {
          const pathToImport = resolve(__dirname, scssPath);
          if (acc) {
            return `${acc} @import "${pathToImport}";`;
          }
          return `@import "${pathToImport}";`;
        }, ''),
      }
    },
  }
})
