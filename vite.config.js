import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/zeabur-homework/' // 让所有资源路径带上仓库名，适配GitHub Pages子目录
})