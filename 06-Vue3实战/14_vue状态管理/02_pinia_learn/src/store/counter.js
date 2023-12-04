// 定义关于Counter 的store
import {defineStore} from "pinia"
import useProduct from "../store/product"
// name对多个store 进行标识
const useCounter = defineStore("counter", {
    state: () => ({
        count: 33,

        friends: [
            {id:1, name: "kante"},
            {id:2, name: "liam"},
        ]
    }),

    getters: {
        // 1 基本使用
        doubleCounter(state) {
            return state.count * 2
        },

        // 2 一个getter 引入另外一个getter
        addOne() {
            // this是store 实例
            return this.doubleCounter + 1
        },

        // 3 返回函数
        getFriend(state) {
            return function(id) {
                return state.friends.find(item => item.id === id)
            }
        },

        // 4 getter 中用到了别的store 数据
        showMsg() {
            // 回去 product list
            const productStore = useProduct()

            return productStore.productList
        }
    },

    actions: {
        increment(n) {
            // 发送异步请求
            this.count += n
            console.log(this)
        }
    }
})

export default useCounter







