import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env['VITE_APP_BASE_PATH'],
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src/') },
        { find: '@models', replacement: path.resolve(__dirname, './src/models') },
        { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      ],
    },
  };
});
