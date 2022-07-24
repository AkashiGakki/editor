import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'editor',
      fileName: 'editor-vue'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue(),
    unocss(),
    dts({
      outputDir: 'dist/types'
    }),
  ],
})
