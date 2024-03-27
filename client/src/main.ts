import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/assets/css/master.css'

const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')
