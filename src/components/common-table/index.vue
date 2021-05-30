<script>
export default {
  name: 'common-table',

  props: {
    tableTitle: {
      type: Array,
      default: () => []
    },
    tableList: {
      type: Array,
      default: () => []
    }
  },

  render() {
    return (
      <Table class="common-table">
        <thead class="common-table-header">
          <tr>
            {this.tableTitle.map(item => (
              <th key={item.id}>{this.$t(item.name)}</th>
            ))}
          </tr>
        </thead>
        <tbody class="common-table-body">
          {this.tableList.map(tr => {
            return (
              <tr key={tr.id}>
                {tr.columns.map(column => (
                  <td key={column.id}>{this.$t(column.name)}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
</script>

<style lang="scss" scoped>
.common-table {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  border-collapse: collapse;

  .common-table-header {
    background: $fontColor;
    color: #fff;
    font-size: 20px;
    font-weight: 500;

    tr {
      height: 40px;
    }
  }

  .common-table-body {
    font-size: 16px;
    text-align: center;
    color: #00637b;

    tr {
      border-bottom: 1px solid $fontColor;
    }

    td {
      padding: 15px 0;
      box-sizing: border-box;
    }
  }
}
</style>
