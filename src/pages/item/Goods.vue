<template>
  <Card>
    <div slot="title">
      <Row>
        <Col span="8"><goods-form></goods-form></Col>
        <Col span="8"><p></p></Col>
        <Col span="8"><Input search placeholder="搜索" /></Col>
      </Row>
    </div>
    <Table :row-class-name="rowClassName" :columns="columns">
    </Table>
  </Card>
</template>

<script>
import GoodsForm from './GoodsForm'
export default {
  name: 'goods',
  data () {
    return {
      columns: [
        {title: 'id', align: 'center', sortable: false, key: 'id'},
        {title: '标题', align: 'center', sortable: false, key: 'title'},
        {title: '商品分类', align: 'center', sortable: false, key: 'cname'},
        {title: '品牌', align: 'center', key: 'bname', sortable: false},
        {title: '操作', align: 'center', sortable: false}
      ]
    }
  },
  methods: {
    rowClassName (row, index) {
      if (index === 1) {
        return 'demo-table-info-row'
      } else if (index === 3) {
        return 'demo-table-error-row'
      }
      return ''
    }
  },
  components: {
    GoodsForm
  }
}
</script>

<style scoped>

</style>
