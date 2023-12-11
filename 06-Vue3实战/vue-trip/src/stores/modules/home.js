import { defineStore } from "pinia";
import hyRequest from "@/services/request/index"

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),

  actions: {
    async fetchHotSuggests() {
      hyRequest.get({url: "/home/hotSuggests"}).then(res => {
        this.hotSuggests = res.data
      })
    }
  }
})

export default useHomeStore