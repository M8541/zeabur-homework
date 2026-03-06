import { createApp } from 'vue'
// 先注释掉 Bootstrap，避免构建报错
// import 'bootstrap/dist/css/bootstrap.min.css'

createApp({
  template: `
    <div>
      <h1>Hello Vue 3!</h1>
      <p>GitHub Pages 部署成功 ✅</p>
    </div>
  `
}).mount('#app')