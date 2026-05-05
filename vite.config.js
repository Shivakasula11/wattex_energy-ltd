import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng:  { optimizationLevel: 7 },
      mozjpeg:  { quality: 75 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      webp:     { quality: 75 },
    }),
  ],
})