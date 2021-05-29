<script>
import { landBriefImgs } from './constant'
import ContactForm from '@/components/contact-form'

export default {
  name: 'home-land',

  components: {
    ContactForm
  },

  methods: {
    handleRouteChange(routeName) {
      this.$router.push({
        name: routeName
      })
    }
  },

  render() {
    return (
      <div class="home-land-wrap">
        <div class="home-land-video" />
        <ul class="home-land-brief-wrap">
          {landBriefImgs.map(item => {
            return (
              <li
                key={item.id}
                class="brief-item"
                onClick={() => this.handleRouteChange(item.routeName)}
              >
                <img src={item.img} />
                <div class="brief-word">
                  {this.$t(`homeLand.briefWord${item.id}`)}
                </div>
              </li>
            )
          })}
        </ul>
        <ContactForm />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
