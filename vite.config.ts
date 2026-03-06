import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/odlingsguiden/',
  plugins: [react()],
  server: {
    proxy: {
      '/api/feedback': 'http://localhost:8080',
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) {
            return 'react-vendor'
          }
          if (id.includes('/illustrations/') && id.endsWith('Illustration.tsx')) {
            return 'illustrations'
          }
          if (id.includes('/data/crops/') && !id.endsWith('index.ts')) {
            return 'crop-data'
          }
        },
      },
    },
  },
}))
