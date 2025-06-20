import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      layouts: resolve(__dirname, 'src/layouts'),
      views: resolve(__dirname, 'src/views'),
      variables: resolve(__dirname, 'src/variables'),
      assets: resolve(__dirname, 'src/assets'),
      '@': resolve(__dirname, 'src'), // add alias for src root
      utils: resolve(__dirname, 'src/utils'), // add alias for utils
    },
  },
});
