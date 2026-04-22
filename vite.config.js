import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://wattexenergy.in',
      outDir: 'dist',
      dynamicRoutes: [
        '/',
        '/about',
        '/contact',
        '/residential-solar',
        '/commercial-solar',
        '/on-grid-solar',
        '/off-grid-solar',
        '/utility-scale-solar',
        '/housing-society',
        '/our-projects',
        '/solar-calculator',
        '/blogs'
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})