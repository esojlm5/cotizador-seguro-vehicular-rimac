import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'
import path from 'path'

const relativePath = path.resolve(__dirname, './src')

export default defineConfig({
  define: {
    theme: {
      md: '(min-width: 480px)'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@atoms': path.resolve(__dirname, './src/components/UI/atoms'),
      '@hooks': path.resolve(__dirname, './src/hooks')
    }
  },
  plugins: [react(),
    VitePluginFonts({
      google: {
        families: [
          { name: 'Lato' },
          { name: 'Roboto' }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${relativePath}/scss/general";`
      }
    }
  }
})
