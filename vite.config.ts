import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app' : path.resolve(__dirname, './src/app'),
      '@components' : path.resolve(__dirname, './src/components'),
    }
  },
  plugins: [react()]
})
