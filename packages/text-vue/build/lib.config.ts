import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

import base from './base.config'

export default defineConfig({
  ...base,
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
    ...base(base as any).plugins,
    dts({
      outputDir: 'dist/types'
    }),
    libCss(),
  ]
})
