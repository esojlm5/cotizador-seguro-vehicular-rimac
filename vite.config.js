import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
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
  ]
})
