// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: './',                 // <<< make asset paths relative for SWA
  build: { outDir: 'dist' },  // (matches your workflow's output_location)
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
})
