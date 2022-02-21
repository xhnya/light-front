<template>
  <div>
    <HeaderBanner></HeaderBanner>
    <div class="wiki-body">
      <div class="wiki-tabs">
        <el-tabs type="border-card">
          <el-tab-pane label="常用">
            <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 5 }" :data-source="dataAll">
              <a-list-item class="wiki-list-body01" slot="renderItem" slot-scope="item, index">
                <a-card @click="goInfo(item.id)" style="text-align: center;padding: 0;">
                  <el-image
                      style="width: 150px; height: 200px;margin-top: 5px;"
                      :src="item.cover"
                      fit="fill"></el-image>
                  <div style="margin-bottom: 5px;">{{ item.name }}</div>
                </a-card>
              </a-list-item>
            </a-list>
          </el-tab-pane>
          <el-tab-pane label="推荐">
            <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :data-source="data">
              <a-list-item class="wiki-list-body01" slot="renderItem" slot-scope="item, index">
                <a-card style="text-align: center;background-color: #00a1d6">
                  <el-image
                      style="width: 100px; height: 80px;margin-top: 5px;"
                      :src="circleUrl2"
                      fit="fill"></el-image>
                  <div style="margin-bottom: 5px;">xhnya</div>
                </a-card>
              </a-list-item>
            </a-list>
          </el-tab-pane>
          <el-tab-pane label="全部">
            <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 5 }" :data-source="dataAll">
              <a-list-item class="wiki-list-body01" slot="renderItem" slot-scope="item, index">
                <a-card style="text-align: center;padding: 0">
                  <el-image
                      style="width: 150px; height: 200px;margin-top: 5px;"
                      :src="item.cover"
                      fit="fill"></el-image>
                  <div style="margin-bottom: 5px;">{{ item.name }}</div>
                </a-card>
              </a-list-item>
            </a-list>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import wiki from "@/api/wiki";

const data = [];
export default {
  data() {
    return {
      dataAll: [],
      circleUrl: "http://img.xhnya.top/img/vae.jpg",
      circleUrl2: "http://img.xhnya.top/DyingLight2.jpg",
      circleUrl3: "http://img.xhnya.top/img/2077.jpg",
      data: []
    }
  },
  created() {
    this.getAllWikiGameLists()
  },
  methods: {
    getAllWikiGameLists() {
      wiki.reqAllWikiGameList().then((res) => {
        this.dataAll = res.data.result
      })
    },
    goInfo(val) {
      this.$router.push({path: '/wiki/'+val})
    },
  }
}
</script>

<style lang="less" scoped>
@margin: 15%;
.wiki-body {
  margin-left: @margin;
  margin-right: @margin;
  margin-top: 30px;
}

.wiki-tabs {
  width: 100%;
}

.wiki-list-body01 /deep/ .ant-card-body {
  padding: 0;
}
</style>
