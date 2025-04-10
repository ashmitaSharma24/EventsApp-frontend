import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react-icons/io5']
  },
  
  plugins: [react()],
  server: {
    proxy: {
      '/events': 'http://localhost:4000',
      '/api': 'http://localhost:4000',
    }
  }
  
})

