<template>
  <div class="home">
    <SiteHeader />
    <Header />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/site-header'
import Header from '@/components/header'

export default {
  name: 'Home',

  components: {
    SiteHeader,
    Header
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
