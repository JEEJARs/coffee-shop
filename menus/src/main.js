<<<<<<< HEAD
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import CoffeeHeader from "./components/CoffeeHeader.vue"

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

// ✅ Global Component
app.component("CoffeeHeader", CoffeeHeader)

app.mount('#app')
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) // สร้าง App
app.use(router) // ใช้งาน Router
app.mount('#app') // แปะลงไปที่ id="app" ใน index.html
>>>>>>> e781e81b4e96e404962983f97dc2a8a5e084729f
