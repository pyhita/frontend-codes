<template>
    <div>
        Name: {{ name }}
    </div>
</template>

<script>
import {reactive, computed} from "vue"

export default {
    setup() {
        const fullName = reactive({
            firstName: "kante",
            lastName: "liam"
        })

        const name = computed(() => {
            return fullName.firstName + "  " + fullName.lastName
        })

        return {
            name
        }
    }
}
</script>

<style scoped>
</style>
