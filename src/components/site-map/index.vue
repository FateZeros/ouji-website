<template>
  <div class="map-wrap">
    <el-amap
      vid="amapContainer"
      class="amap-container"
    >
    </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'

/**
 * 高德地图
 */
export default {
  name: 'site-map',

  data() {
    return {}
  },

  mounted() {
    // 114.210957, 22.341148
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new window.AMap.Map('amapContainer', {
        center: new window.AMap.LngLat(114.210957, 22.341148),
        zoom: 14,
        lang: 'zh_en' // en，zh_en, zh_cn
      })

      const marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(114.210957, 22.341148) // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      })
      this.map.add(marker)
    })
  }
}
</script>

<style lang="scss" scoped>
.map-wrap {
  width: 80%;
  height: 360px;
  margin: 60px auto;

  .amap-container {
    width: 100%;
    height: 100%;
  }

  ::v-deep {
    .amap-logo {
      // 隐藏高德地图logo
      opacity: 0;
    }
    .amap-copyright {
      // 隐藏高德的版本号
      opacity: 0;
    }
  }
}
</style>
