<template>
  username: {{ account.username }}
  password: {{ account.password }}

  <div>
    {{ counter }}
    <button @click="inc">+1</button>
  </div>
</template>

<script>
import { reactive, ref, omMounted } from "vue"

export default {
  setup() {
    // 响应式数据
    // 2.1 reactive函数 复杂数据类型
      // 应用在本地数据
      // 多个数据之间有关系
    const account = reactive({
      username: 'kante',
      password: 'xxxxx',
      msg: 'hello'
    })

    // 2.2 ref函数 简单和复杂类型数据
    // 本地的简单数据
    let counter  = ref(0)

    // 通过网络获取的服务器数据
    const music = ref([])

    omMounted(() => {
      const serverMusic = [1, 2, 3]
      music.value = serverMusic
    })
    function inc() {
      counter.value++
    }

    return {
      account,
      counter,
      inc
    }
  }
}
</script>

<style scoped>
</style>
