<template>
  <div class="home">
    <SiteHeader />
    <Header />
    <router-view />
    <Footer />
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/site-header'
import Header from '@/components/header'
import SiteFooter from '@/components/site-footer'
import Footer from '@/components/footer'

export default {
  name: 'Home',

  components: {
    SiteHeader,
    Header,
    Footer,
    SiteFooter
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
