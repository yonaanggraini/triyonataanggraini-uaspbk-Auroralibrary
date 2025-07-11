import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// src/main.js
import './assets/index.css' // ✅ Ini tempat yang benar


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
