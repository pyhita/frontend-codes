import {defineStore} from "pinia";
import {getCityAll} from "@/services";


const useCityStore = defineStore("city", {
    state: () => ({
        cityAll: {}
    }),

    actions: {
        fetchAllCities() {
            getCityAll().then(res => {
                console.log(res)
                this.cityAll = res.data
            })
        }
    }
})

export default useCityStore




