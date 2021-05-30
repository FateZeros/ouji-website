<script>
export default {
  name: 'ouji-header',

  data() {
    return {
      currentRouteName: '',
      showServiceRoute: false
    }
  },

  watch: {
    $route(to) {
      this.currentRouteName = to.name
    }
  },

  methods: {
    handleChangeRoute(routeName) {
      this.showServiceRoute = false
      if (routeName !== this.currentRouteName) {
        this.$router.push({
          name: routeName
        })
      }
    },

    handleServiceMouseover() {
      this.showServiceRoute = true
    }
  },

  mounted() {
    this.currentRouteName = this.$route.name
  },

  render() {
    return (
      <div class="header">
        <div class="header-logo" />
        <ul class="header-menu-wrap">
          <li
            class={this.currentRouteName === 'home-land' && 'acitve-menu'}
            onClick={() => this.handleChangeRoute('home-land')}
          >
            {this.$t('header.homePage')}
          </li>
          <li
            class={this.currentRouteName.match('service') && 'acitve-menu'}
            onMouseover={() => this.handleServiceMouseover()}
            onMouseout={() => (this.showServiceRoute = false)}
          >
            {this.$t('header.service')}
            <div
              class={[
                'service-list',
                this.showServiceRoute && 'show-service-list'
              ]}
            >
              <p
                class="service-list-item"
                onClick={() => this.handleChangeRoute('service/hkCompany')}
              >
                {this.$t('homeLand.briefWord1')}
              </p>
              <p
                class="service-list-item"
                onClick={() => this.handleChangeRoute('service/companySecret')}
              >
                {this.$t('homeLand.briefWord2')}
              </p>
              <p
                class="service-list-item"
                onClick={() => this.handleChangeRoute('service/accountService')}
              >
                {this.$t('homeLand.briefWord3')}
              </p>
              <p
                class="service-list-item"
                onClick={() => this.handleChangeRoute('service/auditArrange')}
              >
                {this.$t('homeLand.briefWord4')}
              </p>
              <p
                class="service-list-item"
                onClick={() => this.handleChangeRoute('service/taxService')}
              >
                {this.$t('homeLand.briefWord5')}
              </p>
            </div>
          </li>
          <li
            class={this.currentRouteName === 'company' && 'acitve-menu'}
            onClick={() => this.handleChangeRoute('company')}
          >
            {this.$t('header.company')}
          </li>
          <li
            class={this.currentRouteName === 'contact' && 'acitve-menu'}
            onClick={() => this.handleChangeRoute('contact')}
          >
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
