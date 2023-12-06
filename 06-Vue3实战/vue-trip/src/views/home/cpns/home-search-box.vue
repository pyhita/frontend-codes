<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">广州</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

  import {useRouter} from "vue-router";

  const router = useRouter()
  function cityClick() {
    router.push("/city")
  }

  function positionClick() {
    // 获取当前位置信息 经纬度
    navigator.geolocation.getCurrentPosition((res) => {
      console.log("获取位置成功", res)
    }, (err) => {
      console.log("获取位置失败")
    })
  }

</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }

    .location {
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;

    .city {
        flex: 1;
        font-size: 12px;
    }

    .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            position: relative;
            top: 2px;
            font-size: 12px;
        }

        img {
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
    }

</style>