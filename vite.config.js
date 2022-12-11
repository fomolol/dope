import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src/'),
  base: '/storybook',
  plugins: [react()],
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
})
