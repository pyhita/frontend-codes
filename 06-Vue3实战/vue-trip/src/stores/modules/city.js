import {defineStore} from "pinia";
import {getCityAll} from "@/services";


const useCityStore = defineStore("city", {
    state: () => ({
        cityAll: {},
        currentCity: {
            cityName: "上海"
        }
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




