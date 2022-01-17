<template>
  <div>
    <div class="atlas-index-images">
      <el-card>
        <div slot="header" class="clearfix">
          <span>2022-1-17</span>
          <el-button style="float: right; padding: 3px 0" type="text">查看原图</el-button>
        </div>
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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

.atlas-index-images{
  margin-right: @Margin;
  margin-left: @Margin;
  margin-top: @MarginTop;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
