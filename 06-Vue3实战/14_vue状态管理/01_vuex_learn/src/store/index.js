import { createStore } from "vuex";
import { CHANGE_INFO } from "./mutation_types";
import homeModule from "./modules/home"

const store = createStore({
    state: () => ({
        counter: 100,
        books: [
            {id: 1, desc: "xxxx", price: 33},
            {id: 2, desc: "xxxx", price: 33},
            {id: 3, desc: "xxxx", price: 33}
        ],
        rootCounter: 333
    }),

    mutations: {
        // update store 必须提交mitations
        incre(state, n) {
            state.counter += n
        },

        [CHANGE_INFO](state, payload) {
            state.books[0].desc = payload.desc
            state.books[0].price = payload.price
        }
        
    },

    getters: {
        totalPrice(state) {
            return state.books.reduce((prev, book) => {
                return prev + book.price
            }, 0)
        },

        /// 外界可以传入参数
        findBook(state) {
            return function(id) {
                return state.books.find(item => item.id == id)
            }
        }
    },
    
    actions: {
        incre(context, n) {
            context.commit("incre", n)
        },

        // fetchHomeMultidataAction() {
        //     fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //         res.json().then(data => {
        //             console.log(data)
        //         })
        //     }).then
        // }

        // fetchHomeMultidataAction(context) {
        //     fetch("http://123.207.32.32:8000/home/multidata").then(res => {
        //         return res.json()
        //     }).then(data => {
        //         console.log(data)
        //         context.commit("changeBanners", data.data.banner.list)
        //         context.commit("changeRecommands", data.data.recommend.list)
        //     })
        // }

        // async fetchHomeMultidataAction(context) {
        //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
        //     const data = await res.json()
            
        //     context.banners = data.data.banner.list
        //     context.recommands = data.data.recommend.list
        // }

    },

    modules: {
        home: homeModule
    }
})


export default store