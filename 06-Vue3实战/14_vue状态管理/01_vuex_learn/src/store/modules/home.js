export default {
    namespaced: true,
    state: () => ({
        banners: [],
        recommands: [],
        counter: 1
    }),

    getters: {
        doubleCounter(state, getters, rootState) {
            console.log("first")
            console.log(state, rootState)
            return state.counter + rootState.rootCounter
        }
    },

    mutations: {
        changeBanners(state, banners) {
            state.banners = banners
        },

        changeRecommands(state, recommands) {
            state.recommands = recommands
        }
    },

    actions: {
        fetchHomeMultidataAction(context) {
            return new Promise( async (resolve, reject) => {
                const res = await fetch("http://123.207.32.32:8000/home/multidata")
                const data = await res.json()

                context.commit("changeBanners", data.data.banner.list)
                context.commit("changeRecommands", data.data.recommend.list)

                resolve("xxxx")
            })
        }
    }
}