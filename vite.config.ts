import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Este nome deve ser igual ao nome do seu repositório no GitHub.
  // Se o seu repo for 'meu-simulado', mude parabase: '/meu-simulado/'
  base: '/hdi-sca-practice/', 
})