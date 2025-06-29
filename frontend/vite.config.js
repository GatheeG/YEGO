import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Frontend runs on 3000
    proxy: {
      '/api': {
        target: 'http://localhost:8930', // Backend runs on 8930
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
