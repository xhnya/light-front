<template>
  <div class="game-info-bg">
    <div class="game-info-body">
      <el-card class="game-info-card1">
        <el-image
            style="width: 100%; height: 300px;"
            :src="gameUrl"
            fit="fill"></el-image>

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameUrl: "http://img.xhnya.top/img/消逝的光芒详情背景图.jpg",
      gameVideoUrl: "http://img.xhnya.top/video/%E8%8D%92%E9%87%8E%E5%A4%A7%E9%95%96%E5%AE%A2%E8%A7%86%E9%A2%911.webm",
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>


.game-info-bg {
  background-color: @BgColor;
  padding-top: @MarginTop;
}

.game-info-body {
  margin-left: @Margin20;
  margin-right: @Margin20;
}
.game-info-card1{

}
.game-info-card1 /deep/ .el-card__body{
  padding: 0;
}
</style>
