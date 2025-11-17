import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlMetaTagsPlugin from './vite-plugin-ssr.js'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    htmlMetaTagsPlugin(),
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files larger than 10KB
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false
    })
  ],
  server: {
    proxy: {
      // Proxy sitemap requests to backend during development
      '/sitemap.xml': {
        target: 'https://api.tarlose.com',
        changeOrigin: true,
      }
    }
  },
  build: {
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  }
})
