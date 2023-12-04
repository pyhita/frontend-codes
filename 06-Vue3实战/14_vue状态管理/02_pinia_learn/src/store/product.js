import { defineStore } from "pinia";

const useProduct = defineStore("product", {
    state: () => ({
        productList: ["item1", "item2", "item3"]
    })
})


export default useProduct