import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Opnamepro-saas/', // INI YG PALING PENTING
})
