<script>
import PageTitle from '@/components/page-title'
import CommonTable from '@/components/common-table'
import { tableTitle, tableList } from './constant'

/**
 * 公司秘书
 */
export default {
  name: 'company-secret',

  components: {
    PageTitle,
    CommonTable
  },

  render() {
    const title = this.$t('companySecret.pageTile')

    return (
      <div class="company-secret-wrap">
        <PageTitle title={title} />
        <CommonTable tableTitle={tableTitle} tableList={tableList} />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.company-secret-wrap {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
}
</style>
