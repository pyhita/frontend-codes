import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
app.mount('#app')


// 1 baseURL

axios.defaults.baseURL = "http://123.207.23.23:8000"
axios.defaults.headers = {}

axios.get("/home/multidata").then(res => {
    console.log(res.data)
})

// 2 axios一次性发送多个请求
axios.all([
    axios.get("/home1"),
    axios.get("/home2")
]).then(res => {
    
})
