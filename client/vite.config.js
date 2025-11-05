import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlMetaTagsPlugin from './vite-plugin-ssr.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlMetaTagsPlugin()],
  server: {
    proxy: {
      // Proxy sitemap requests to backend during development
      '/sitemap.xml': {
        target: 'https://api.tarlose.com',
        changeOrigin: true,
      }
    }
  }
})
