<script>
import PageTitle from '@/components/page-title'
import CommonTable from '@/components/common-table'
import { tableTitle, tableList } from './constant'
/**
 * 报税服务
 */
export default {
  name: 'tax-service',

  components: {
    PageTitle,
    CommonTable
  },

  render() {
    const title = this.$t('taxService.pageTile')

    return (
      <div class="tax-service-wrap">
        <PageTitle title={title} />
        <CommonTable tableTitle={tableTitle} tableList={tableList} />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.tax-service-wrap {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
}
</style>
