import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-jobs-course/', // GitHub repository နာမည်အတိုင်း exact ဖြစ်ရပါမည်
})