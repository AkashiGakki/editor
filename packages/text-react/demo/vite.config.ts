import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    react(),
    unocss()
  ],
})
