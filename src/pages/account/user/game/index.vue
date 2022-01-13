<template>
  <div class="user-game">
    <div>
      <el-card class="box-card">
        <div class="game-user-item">
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px;border-radius: 6px;"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>
          <div class="game-user-item1">
            <el-image
                style="width: 100px; height: 120px"
                :src="gameInfo.gameUrl"
                fit="fill"></el-image>
            <div>{{ gameInfo.title }}</div>
          </div>

          <el-divider></el-divider>
        </div>

      </el-card>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameInfo: {
        title: "Dying Light 2",
        content: "《消逝的光芒2（Dying Light 2）》是由Techland制作的《消逝的光芒》系列的正统续作，新作继承了前作的世界观和游戏玩法，在病毒爆发的无情世界里，最后一个人类定居点如风中残烛一般倔强的存在着。拥有主角光环的你有着敏捷的身手和精湛的战斗技巧，凭借着一身的本事，你是别人眼中强大的盟友和宝贵的人才。而你拥有的这份力量有着改变整个城市命运的能力，你需要谨慎合理地使用它。",
        gameUrl: "http://img.xhnya.top/DyingLight2.jpg",
      }

    }
  },
  methods: {}
}
</script>

<style scoped>
.user-game {
  margin-top: 10px;
}
.game-user-item{
  display:  inline;
}
.game-user-item1{
  display: inline-block;
  width: 240px;
  text-align: center;
  margin-top: 30px;
}
</style>
