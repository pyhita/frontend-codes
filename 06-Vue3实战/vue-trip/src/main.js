import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "normalize.css"
import "@/assets/css/index.css"
import router from './router'
import App from './App.vue'



const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
