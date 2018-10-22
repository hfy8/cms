<template>
  <div>
    <v-card>
      <v-card-title>
        <v-btn color="primary">增加</v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="请输入搜索关键字"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="brands"
        :pagination.sync="pagination"
        :total-items="totalBrands"
        :loading="loading"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center"><img v-if="props.item.image" :src="props.item.image" height="40px" width="140px"/>
          </td>
          <td class="text-xs-center">{{ props.item.letter }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2 mt-3"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              class="mt-3"
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'MyBrand',
  data () {
    return {
      totalBrands: 0,
      search: '',
      brands: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'id',
          align: 'center',
          sortable: false,
          value: 'id'
        },
        {text: '名称', align: 'center', value: 'name'},
        {text: 'LOGO', align: 'center', sortable: false, value: 'image'},
        {text: '品牌首字母', align: 'center', value: 'letter'},
        {text: '编辑', align: 'center', sortable: false}
      ]
    }
  },
  created () {
    this.getDataFromApi()
    this.loading = false
  },
  watch: {
    pagination: {
      handler () {
        this.getDataFromApi()
      },
      deep: true
    },
    search () {
      this.getDataFromApi()
    }
  },
  methods: {
    getDataFromApi () {
      this.loading = true
      this.$http.get('/item/brand/page', {
        params: {
          page: this.pagination.page,
          rows: this.pagination.rowsPerPage,
          desc: this.pagination.descending,
          sortBy: this.pagination.sortBy,
          key: this.search
        }
      }).then(resp => {
        this.brands = resp.data.items
        this.totalBrands = resp.data.total
        this.loading = false
      })
    }

  }
}
</script>

<style scoped>

</style>
