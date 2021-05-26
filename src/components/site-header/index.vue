<script>
import { setUserSetting, getUserSetting } from '@/utils/user'
import { languages, lang2Local } from './constant'
import { WEBSITE_PHONE1, WEBSITE_EMAIL } from '@/config'
import { loadLanguageAsync } from '@/locales'

export default {
  name: 'site-header',

  data() {
    return {
      languagesKey: 2
    }
  },

  methods: {
    handleChangeLanguage(id) {
      this.languagesKey = id
      setUserSetting(id)
      this.setLang(id)
    },

    setLang(id) {
      loadLanguageAsync(lang2Local[id])
    }
  },

  mounted() {
    const userSetting = getUserSetting()
    if (userSetting) {
      this.languagesKey = userSetting
      this.setLang(userSetting)
    }
  },

  render() {
    const languagesArr = languages[this.languagesKey]

    return (
      <div class="site-header-wrap">
        <div class="site-header-phone">
          {this.$t('siteHeader.phone')}: {WEBSITE_PHONE1}
        </div>
        <div class="site-header-email">
          {this.$t('siteHeader.email')}: {WEBSITE_EMAIL}
        </div>
        <ul class="site-language-wrap">
          {languagesArr.map(item => (
            <div
              key={item.id}
              class="language-item"
              onClick={() => this.handleChangeLanguage(item.id)}
            >
              {item.name}
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
