import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9002,
    proxy: {
      '/app': {
        target: 'https://baidu.com',
        changeOrigin: true,
      },
    },
  },
})
