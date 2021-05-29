<script>
import PageTitle from '@/components/page-title'
import SiteMap from '@/components/site-map'

export default {
  name: 'contact',

  components: {
    PageTitle,
    SiteMap
  },

  render() {
    const title = this.$t('contactUs.pageTile')

    return (
      <div>
        <PageTitle title={title} />
        <SiteMap />
      </div>
    )
  }
}
</script>
