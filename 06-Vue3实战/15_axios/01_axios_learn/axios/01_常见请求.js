import axios from 'axios'

// 通过axios 发送请求
axios.request({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "get"
}).then(res => {
    console.log(res.data)
})

// 2 发送get
axios.get("http://123.207.32.32:9001/lyric", {
    params: {
        id: 500031
    }
}).then(res => {
    console.log(res.data)
})

// 3 发送post 第二个可以当成data 或者是 当成 config
axios.post("http://123.207.32.32:1888/02_param/postjson", {
    // name: "coderwhy",
    // password: "123456"
    data: {
        name: "coderwhy",
        password: "123456"
    }
}).then(res => {
    console.log(res.data)
})