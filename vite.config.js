import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const srcBanner = path.resolve('src/assets/images/pro/oneplus-banner.png')
const destBanner = path.resolve('src/assets/images/oneplus-banner.png')
if (fs.existsSync(srcBanner) && !fs.existsSync(destBanner)) {
  fs.copyFileSync(srcBanner, destBanner)
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
})