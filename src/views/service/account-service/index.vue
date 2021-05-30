<script>
import PageTitle from '@/components/page-title'
import CommonTable from '@/components/common-table'
import { tableTitle, tableList } from './constant'

/**
 * 会计服务
 */
export default {
  name: 'account-service',

  components: {
    PageTitle,
    CommonTable
  },

  render() {
    const title = this.$t('accountService.pageTile')

    return (
      <div class="account-service-wrap">
        <PageTitle title={title} />
        <CommonTable tableTitle={tableTitle} tableList={tableList} />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.account-service-wrap {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
}
</style>
