<script>
import PageTitle from '@/components/page-title'

export default {
  name: 'hk-company',

  render() {
    const title = this.$t('hkCompany.pageTile')

    return (
      <div class="hk-company-wrap">
        <PageTitle title={title} />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.hk-company-wrap {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
}
</style>
