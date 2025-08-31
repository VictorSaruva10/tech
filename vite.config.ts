
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Otimizações para produção
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar sourcemaps em produção
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
    // Otimizar assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500
  },
  
  // Configurações de desenvolvimento
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Otimizações de dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: []
  },
  
  // Base para deploy
  base: '/'
})
