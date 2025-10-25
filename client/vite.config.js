import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy sitemap requests to backend during development
      '/sitemap.xml': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
