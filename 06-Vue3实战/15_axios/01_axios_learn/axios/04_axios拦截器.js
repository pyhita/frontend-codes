import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)
app.mount('#app')


axios.interceptors.request.use((config) => {
    console.log("请求成功拦截")

    // 1. 显示loading 动画
    // 2. 对原来的配置文件进行修改
        // header
        // token/cookie
    
    return config
}, (err) => {
    console.log("请求失败拦截")
    return err
})


axios.interceptors.response.use((res) => {
    // 1 结束loading 动画
    // 2 对数据进行转化 然后在返回
    return res.data
})

axios.get("http://httpbin.org/get").then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})