// 1. 从 Vue 中导入 createApp 方法
import { createApp } from 'vue'

// 2. 直接在 createApp 里写模板（不需要 App.vue）
const app = createApp({
  template: `
    <div style="text-align: center; padding: 40px; font-family: Arial, sans-serif;">
      <h1>Hello Vue 3! 🎉</h1>
      <p>GitHub Pages 部署成功 ✅</p>
    </div>
  `
})

// 3. 把 Vue 实例挂载到 index.html 里的 #app 元素
app.mount('#app')