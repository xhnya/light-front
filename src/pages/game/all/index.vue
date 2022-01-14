<template>
  <div class="all-game-body">
    <div class="all-game-body01">
      <el-card class="box-card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>全部游戏</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-card>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@OverallMargin: 15%;
.all-game-body{
  padding-top: 30px;
  background-color: #f0f0f0;
  padding-bottom: 30px;
}
.all-game-body01{
  margin: 0 @OverallMargin 10px @OverallMargin;
}
</style>