<script>
export default {
  name: 'page-title',

  props: {
    title: {
      type: String,
      default: ''
    }
  },

  render() {
    console.log(this.title, 1212)
    return (
      <div class="page-title">
        <div class="page-title-word">{this.title}</div>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  width: 100%;
  height: 50px;
  padding: 0 10%;
  box-sizing: border-box;
  margin-bottom: 20px;

  .page-title-word {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 2px solid $fontColor;
    border-bottom: 2px solid $fontColor;
    font-size: 20px;
    color: $fontColor;
    font-weight: 600;
  }
}
</style>
