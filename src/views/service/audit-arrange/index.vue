<script>
import PageTitle from '@/components/page-title'
import CommonTable from '@/components/common-table'
import { tableTitle, tableList } from './constant'

/**
 * 审计安排
 */
export default {
  name: 'audit-arrange',

  components: {
    PageTitle,
    CommonTable
  },

  render() {
    const title = this.$t('auditArrage.pageTile')
    return (
      <div class="audit-arrange">
        <PageTitle title={title} />
        <CommonTable tableTitle={tableTitle} tableList={tableList} />
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.audit-arrange {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
}
</style>
