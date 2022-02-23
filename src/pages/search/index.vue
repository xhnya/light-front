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
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
    this.searchPage()
  },
  computed: {
    searchInfo() {
      return this.$store.state.search.search;
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.label === "游戏") {
        const params = {}
        params.keyword = this.$store.state.search.keyword
        params.typeSearch = 1
        this.$store.dispatch('getSearch', params);
      }
      if (tab.label === "用户") {
        const params = {}
        params.keyword = this.$store.state.search.keyword
        params.typeSearch = 0
        this.$store.dispatch('getSearch', params);
      }
      if (tab.label === "文章") {
        const params = {}
        params.keyword = this.$store.state.search.keyword
        params.typeSearch = 2
        this.$store.dispatch('getSearch', params);
      }
      if (tab.label === "百科") {
        const params = {}
        params.keyword = this.$store.state.search.keyword
        params.typeSearch = 3
        this.$store.dispatch('getSearch', params);
      }
      if (tab.label === "综合") {
        const params = {}
        params.keyword = this.$store.state.search.keyword
        this.$store.dispatch('getSearch', params);
      }
    },
    searchPage() {
      const params = {}
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
