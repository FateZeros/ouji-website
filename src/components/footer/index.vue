<script>
import { WEBSITE_PHONE1, WEBSITE_EMAIL } from '@/config'

export default {
  name: 'footer',

  render() {
    return (
      <div class="ouji-footer">
        <ul class="footer-info-wrap">
          <li>
            {this.$t('app.phone')}:{WEBSITE_PHONE1}
          </li>
          <li>
            {this.$t('app.email')}:{WEBSITE_EMAIL}
          </li>
          <li>
            {this.$t('app.addr')}:{this.$t('app.companyAddr')}
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
