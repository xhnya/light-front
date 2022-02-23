<template>
  <div>
    <div>
      <div class="wiki-info-card">
        <el-card v-for="item in menuList" :key="item.id" style="margin: 30px;">
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
            <el-button @click="addSecond(item.id) " style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <div class="text item">
            <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="item.children">
              <a-list-item class="wiki-list-body01" slot="renderItem" slot-scope="item, index">
                <div @click="gotoInfo(item.pid)">
                  <a-card style="text-align: center;padding: 0">
                    <el-image
                        style="width: 80px; height: 80px"
                        :src="item.cover"
                        fit="fill"></el-image>
                    <div style="margin-bottom: 5px;">{{ item.name }}</div>
                  </a-card>
                </div>
              </a-list-item>
            </a-list>
          </div>
          <el-empty v-if="menuList==null" :image-size="200"></el-empty>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import wiki from "@/api/wiki";

export default {
  data() {
    return {
      menuList: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    gotoInfo(val){
      this.$router.push({path: '/wiki/info/'+val})
    },
    getMenuList() {
      wiki.reqMenuList(this.$route.params.id).then((res) => {
        console.log(res)
        this.menuList = res.data.result
      })
    },
    addSecond(val) {
      this.$store.dispatch('getMenuId',val);
      this.$store.dispatch('getMenuGameId',this.$route.params.id);
      this.$router.push({path: '/wiki/info/add'})
    }

  }
}
</script>

<style lang="less" scoped>
.wiki-info-body {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: @BgColor;
}

.wiki-info-card {
  /*margin-right: 20%;*/
}
</style>
