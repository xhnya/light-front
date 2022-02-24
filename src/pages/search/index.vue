<template>
  <div>
    <div style="margin-left: 15%;margin-right: 15%;margin-top: 30px;">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="综合" name="first">
            <div v-for="(item,index) in searchInfo" :key="index">
              <div @click="gotoInfo(item.id,item.typeSearch)">
                <el-tag v-if="item.typeSearch===2">文章</el-tag>
                <el-tag v-if="item.typeSearch===0" type="success">用户</el-tag>
                <el-tag v-if="item.typeSearch===1" type="danger">游戏</el-tag>
                <el-tag v-if="item.typeSearch===3" type="warning">百科</el-tag>
                <span style="font-size: 18px;margin-left: 5px;" v-html="item.name"></span>
              </div>
              <a-divider/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="游戏" name="second">
            <div v-for="(item,index) in searchInfo" :key="index">
              <div @click="gotoInfo(item.id,item.typeSearch)">
                <el-tag v-if="item.typeSearch===1" type="danger">游戏</el-tag>
                <span style="font-size: 18px;margin-left: 5px;" v-html="item.name"></span>
              </div>
              <a-divider/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="文章" name="third">
            <div v-for="(item,index) in searchInfo" :key="index">
              <div @click="gotoInfo(item.id,item.typeSearch)">
                <el-tag>文章</el-tag>
                <span style="font-size: 18px;margin-left: 5px;" v-html="item.name"></span>
              </div>
              <a-divider/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="百科" name="fourth">
            <div v-for="(item,index) in searchInfo" :key="index">
              <div @click="gotoInfo(item.id,item.typeSearch)">
                <el-tag type="warning">百科</el-tag>
                <span style="font-size: 18px;margin-left: 5px;" v-html="item.name"></span>
              </div>
              <a-divider/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="用户" name="five">
            <div v-for="(item,index) in searchInfo" :key="index">
              <div @click="gotoInfo(item.id,item.typeSearch)">
                <el-tag type="success">用户</el-tag>
                <span style="font-size: 18px;margin-left: 5px;" v-html="item.name"></span>
              </div>
              <a-divider/>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="block page">
          <el-pagination
              @size-change="sizeChangeHandle"
              @current-change="currentChangeHandle"
              :current-page="page"
              :page-sizes="[10, 50, 100, 500]"
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
export default {
  data() {
    return {
      activeName: 'first',
      page: 1,
      limit: 10,
      total: 10,
      typeSearch: "综合"
    }
  },
  created() {
    this.searchPage()
  },
  computed: {
    searchInfo() {
      this.page=this.$store.state.search.search.pageNum
      this.total=this.$store.state.search.search.total
      return this.$store.state.search.search.model;
    }
  },
  methods: {
    sizeChangeHandle(val) {
      this.limit = val
      this.page = 1
      this.searchPage()
    },
    // 当前页
    currentChangeHandle(val) {
      this.page = val
      this.searchPage()
    },
    handleClick(tab, event) {
      this.typeSearch=tab.label
      this.searchPage()
    },
    searchPage() {
      const params = {}
      const val=this.typeSearch
      if (val === "游戏") {
        params.typeSearch = 1
      }
      if (val === "用户") {
        params.typeSearch = 0
      }
      if (val === "文章") {
        params.typeSearch = 2
      }
      if (val === "百科") {
        params.typeSearch = 3
      }
      params.pageNum=this.page
      params.keyword = this.$store.state.search.keyword
      this.$store.dispatch('getSearch', params);
    },
    gotoInfo(id, type) {
      if (type === 0) {
      }
      if (type === 1){
        this.$router.push({path: '/game/'+id})
      }
      if (type === 2){
        this.$router.push({path: '/page/'+id})
      }
      if (type === 3){
        this.$router.push({path: '/wiki/'+id})
      }
    }
  }
}
</script>

<style scoped>

</style>
