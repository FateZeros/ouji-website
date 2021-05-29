<script>
import ContactForm from '@/components/contact-form'

export default {
  name: 'service',

  components: {
    ContactForm
  },

  render() {
    return (
      <div class="service-wrap">
        <router-view />
        <ContactForm />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.service-wrap {
  width: 100%;
  box-sizing: border-box;
}
</style>
