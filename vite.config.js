import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';

export default defineConfig({
  root: resolve(__dirname, 'src/'),
  base: '/storybook',
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    //eslint() // WARNING: This breaks storybook at the moment
  ],
  // rollupOptions: {
  //   external: [/^node:.*/],
  // },
  // build: {
  //   ssr: true,
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.js'),
  //     name: '@studio-freight/hamo',
  //     fileName: 'hamo',
  //   },
  //   outDir: resolve(__dirname, 'dist'),
  // },
});
