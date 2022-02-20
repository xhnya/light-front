<template>
  <div>
    <div style="margin-left: 20%;margin-right: 20%">
      <a-page-header
          style="border: 1px solid rgb(235, 237, 240);background-color: #ffffff; margin-top: 30px;"
          title="返回"
          sub-title="我的收藏夹"
          @back="() =>  this.$router.go(-1)"
      />
      <el-card style="margin-top: 30px;">
        <div v-for="item in listData" :key="item.pid" class="text item">
          <div @click="toPageIndex(item.pid)">
            <span>{{item.title}}</span>
            <span style="float: right"> {{item.createTime}}</span>
            <el-divider></el-divider>
          </div>
        </div>
        <div class="block page">
          <el-pagination
              @size-change="sizeChangeHandle"
              @current-change="currentChangeHandle"
              :current-page="page"
              :page-sizes="[5, 10, 30, 50]"
              :page-size.sync="limit"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import community from "@/api/community";

export default {
  data() {
    return {
      data: [],
      loading: false,
      busy: false,
      page: 1,
      limit: 5,
      total: 10,
      listData: [],
    }
  },
  created() {
    this.getPageList()
  },
  methods: {
    sizeChangeHandle(val) {
      this.limit = val
      this.page = 1
      this.getPageList()
    },
    // 当前页
    currentChangeHandle(val) {
      this.page = val
      this.getPageList()
    },
    getPageList() {
      const params = {}
      params.page = this.page
      params.limit = this.limit
      params.parentId=this.$route.params.id
      community.reqCollectionsList(params).then((res) => {
        this.listData = res.data.page.list
        this.page = res.data.page.currPage
        this.total = res.data.page.totalCount
        this.limit = res.data.page.pageSize
      })
    },
    toPageIndex(val) {
      this.$router.push({path: `/page/${val}`})
    },
  }
}
</script>

<style scoped>

</style>
