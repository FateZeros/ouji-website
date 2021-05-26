<template>
  <div class="home">
    <SiteHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/site-header'

export default {
  name: 'Home',

  components: {
    SiteHeader
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
