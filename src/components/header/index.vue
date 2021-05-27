<script>
export default {
  name: 'ouji-header',

  data() {
    return {
      currentRouteName: ''
    }
  },

  watch: {
    $route(to) {
      this.currentRouteName = to.name
    }
  },

  methods: {
    handleChangeRoute(routeName) {
      if (routeName !== this.currentRouteName) {
        this.$router.push({
          name: routeName
        })
      }
    }
  },

  render() {
    return (
      <div class="header">
        <ul class="header-menu-wrap">
          <li onClick={() => this.handleChangeRoute('home-land')}>
            {this.$t('header.homePage')}
          </li>
          <li onClick={() => this.handleChangeRoute('service')}>
            {this.$t('header.service')}
          </li>
          <li onClick={() => this.handleChangeRoute('company')}>
            {this.$t('header.company')}
          </li>
          <li onClick={() => this.handleChangeRoute('contact')}>
            {this.$t('header.contact')}
          </li>
        </ul>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
