<script>
export default {
  name: 'site-footer',

  render() {
    return (
      <div class="site-footer-wrap">
        <span>
          {this.$t('siteFooter.rights')}
          {this.$t('siteFooter.rightsCompany')}
        </span>
        <span>
          {this.$t('siteFooter.recordNumWord')}
          {this.$t('siteFooter.recordNum')}
        </span>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.site-footer-wrap {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #000;
  color: #fff;

  span {
    margin-right: 20px;
  }
}
</style>
