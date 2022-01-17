<template>
  <div class="game-info-bg">
    <div :class="{gameInfoBg1: isIssues,gameInfoBg2: !isIssues}">
      <div v-if="isIssues===true">
        <div class="game-info-bg01" :style="{backgroundImage: 'url(' + gameBGUrl + ')'}">
        </div>
      </div>
      <el-card v-else class="game-info-card1">
        <el-image
            style="width: 100%; height: 300px;"
            :src="gameUrl"
            fit="fill"></el-image>
      </el-card>
      <div class="game-info-content">
        <div class="game-info-content-card0">
          <el-card class="game-info-content-card">
            <el-tabs stretch class="game-info-content-tabs" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane class="game-info-tabs-item" label="首页" name="index">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="社区" name="community">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="攻略" name="strategy">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="百科" name="wiki">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="资讯" name="information">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="图集" name="atlas">
                <router-view/>
              </el-tab-pane>
            </el-tabs>
          </el-card>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Video from "@/components/video/video";

export default {
  components: {Video},
  data() {
    return {
      gameUrl: "http://img.xhnya.top/img/消逝的光芒详情背景图.jpg",
      gameVideoUrl: "http://img.xhnya.top/video/%E8%8D%92%E9%87%8E%E5%A4%A7%E9%95%96%E5%AE%A2%E8%A7%86%E9%A2%911.webm",
      isIssues: true,
      gameBGUrl: "http://img.xhnya.top/img/荒野大镖客bg20220116.jpg",
      activeName: 'index',
      isHome: "",
      isIndex: true,
    }
  },
  created() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push({path: '/game/1/' + this.activeName})
    }

  },
}
</script>

<style lang="less" scoped>


.game-info-bg {
  //padding-bottom: 300px;

  //padding-top: @MarginTop;
}

.gameInfoBg1 {
  background-color: #222222;
}

.gameInfoBg2 {
  background-color: #ffffff;
}

.game-info-card1 {
  margin-right: @Margin20;
  margin-left: @Margin20;
}

.game-info-content {
  .game-info-card1;
  z-index: 6;
  margin: -185px auto;
  position: relative;
  width: 1200px;
  //margin-top: -185px;
}

.game-info-content-card {
  position: relative;
  background: url(http://img.xhnya.top/img/gamainfobg.png) repeat left top;
  z-index: 1;
  display: block;
  color: #8e8e93;
  font-size: 18px;
}

.game-info-content-card0 /deep/ .el-card {
  border: 0px;
  color: #8e8e93;
}

.game-info-card1 /deep/ .el-card__body {
  padding: 0;
}

.game-info-content-tabs /deep/ .el-tabs__item {
  font-size: 18px;
  color: #8e8e93;
}

.game-info-content-tabs /deep/ .el-tabs__nav-wrap::after {
  color: #8e8e93;
}

.game-info-bg01 {
  width: 100%;
  height: auto;
  min-height: 500px;
  background: no-repeat center top;
  //background-size: 100% 100%;
}


.game-info-index-content /deep/ .el-card__body {
  padding: 0;
}
</style>
