<script>
import PageTitle from '@/components/page-title'
import ContactForm from '@/components/contact-form'

export default {
  name: 'company',

  components: {
    PageTitle,
    ContactForm
  },

  render() {
    const title = this.$t('company.pageTile')
    return (
      <div class="company-wrap">
        <PageTitle title={title} />
        <div class="company-content">
          <div class="company-tips">*{this.$t('company.companyTips')}</div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle1')}</div>
            <div class="row-content">{this.$t('company.rowContent1')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle2')}</div>
            <div class="row-content">{this.$t('company.rowContent2')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle3')}</div>
            <div class="row-content">{this.$t('company.rowContent3')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle4')}</div>
            <div class="row-content">{this.$t('company.rowContent4')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle5')}</div>
            <div class="row-content">{this.$t('company.rowContent5')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle6')}</div>
            <div class="row-content">{this.$t('company.rowContent6')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle7')}</div>
            <div class="row-content">{this.$t('company.rowContent7')}</div>
          </div>
          <div class="company-row">
            <div class="row-title">{this.$t('company.rowTitle8')}</div>
            <div class="row-content">{this.$t('company.rowContent8')}</div>
          </div>
        </div>
        <ContactForm />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
