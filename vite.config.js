import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'
import { HashRouter } from 'react-router-dom'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ghPages()],
  base:'/React-NG-Shine/'
})
