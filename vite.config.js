import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'OpnamePro SaaS',
        short_name: 'OpnamePro',
        theme_color: '#4f46e5',
        background_color: '#ffffff',
        display: 'standalone'
      }
    })
  ]
})
