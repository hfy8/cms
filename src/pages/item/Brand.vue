<template>
  <Card>
    <div slot="title">
      <Row>
        <Col span="8"><Button type="primary">新增品牌</Button></Col>
        <Col span="8"><p></p></Col>
        <Col span="8"><Input search placeholder="搜索" /></Col>
      </Row>
    </div>
    <Table :row-class-name="rowClassName" :columns="columns">
    </Table>
  </Card>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      columns: [
        {title: 'id', align: 'center', key: 'id'},
        {title: '名称', align: 'center', sortable: false, key: 'name'},
        {title: 'LOGO', align: 'center', sortable: false, key: 'image'},
        {title: '首字母', align: 'center', key: 'letter', sortable: true},
        {title: '操作', align: 'center', key: 'id', sortable: false}]
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

  }
}
</script>

<style scoped>

</style>
