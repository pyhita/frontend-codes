import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
app.mount('#app')


// 1 创建axios 实例
// axios.get("http://123.207.32.32:9001/lyric")
// 抽取公共的配置
const instance1 = axios.create({
    baseURL: "http://123.207.23.32:9001",
    timeout: 9000,
    headers: {}
})

const instance2 = axios.create({
    baseURL: "http://123.207.23.32:9001",
    timeout: 10000,
    headers: {}
})