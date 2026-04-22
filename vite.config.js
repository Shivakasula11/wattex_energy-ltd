import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://wattexenergy.com',
      dynamicRoutes: [
        '/',
        '/residential',
        '/commercial',
        '/housing',
        '/on-grid',
        '/off-grid',
        '/utility-scale',
        '/calculator',
        '/blogs',
        '/projects',
        '/contact',
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
})