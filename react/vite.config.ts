import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  //   plugins: [react()],
  base: '/react',
  build: {
    outDir: '../docs/react',
    emptyOutDir: true,
  }
});
