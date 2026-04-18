import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/fernandes-portfolio/",
  base: './',
  build: {
    outDir: "dist"
  }
})
