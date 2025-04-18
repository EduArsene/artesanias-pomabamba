import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/artesanias-pomabamba/', // usa el nombre exacto de tu repo
  plugins: [react()],
})
