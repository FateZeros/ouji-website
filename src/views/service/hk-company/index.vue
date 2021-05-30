<script>
import PageTitle from '@/components/page-title'
import CommonTable from '@/components/common-table'
import { content1List, tableTitle, tableList } from './constant'
import contentImg from '@/assets/home-land/home001.jpg'

/**
 * 注册香港公司
 */
export default {
  name: 'hk-company',

  components: {
    PageTitle,
    CommonTable
  },

  render() {
    const title = this.$t('hkCompany.pageTile')

    return (
      <div class="hk-company-wrap">
        <PageTitle title={title} />
        <div class="hk-company-content">
          <div class="content-list">
            <div class="list-title">{this.$t('hkCompany.content1Title')}</div>
            {content1List.map(item => {
              return (
                <div key={item.id} class="list-item">
                  <div class="list-item-block" />
                  <div class="list-item-word">{this.$t(item.label)}</div>
                </div>
              )
            })}
          </div>
          <div class="content-img">
            <img src={contentImg} alt="" />
          </div>
        </div>
        <CommonTable tableTitle={tableTitle} tableList={tableList} />
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

  .hk-company-content {
    width: 100%;
    display: flex;

    .content-list {
      flex: 1;

      .list-title {
        color: $fontColor;
        font-size: 20px;
        font-weight: 500;
        height: 40px;
        line-height: 40px;
      }

      .list-item {
        min-height: 40px;
        line-height: 40px;
        display: flex;

        .list-item-block {
          width: 12px;
          height: 12px;
          background: #000;
          margin-top: 12px;
        }

        .list-item-word {
          flex: 1;
          margin-left: 8px;
        }
      }
    }

    .content-img {
      width: 600px;

      img {
        max-width: 600px;
      }
    }
  }
}
</style>
