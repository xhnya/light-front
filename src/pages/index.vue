<template>
  <div class="index-header">
    <!--    游戏展示-->
    <div>
      <div class="card-header">
        <el-tag type="danger" style="margin-right: 10px;display:inline">热门游戏</el-tag>
        <div style="display:inline">
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <el-tag style="margin-right: 10px;display:inline;margin-left: 30px;">最受期待</el-tag>
        <div style="display:inline">
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
        </div>
      </div>
      <div class="card-header">
        <el-tag type="warning" style="margin-right: 10px;display:inline">优惠促销</el-tag>
        <div style="display:inline">
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
        </div>
        <el-tag type="success" style="margin-right: 10px;display:inline;margin-left: 30px;">最近热门</el-tag>
        <div style="display:inline">
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
          <span>荒野大镖客2</span>
          <el-divider direction="vertical"></el-divider>
        </div>
      </div>
    </div>
    <!--    第二部分-->
    <div>

      <el-row>
        <el-col :span="12">
          <!--     ----- 轮播图-->
          <div class="grid-content">
            <div class="block index-lun">
              <el-carousel height="360px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>

        <!--      列表-->
        <el-col :span="6">
          <div class="grid-content index-content-item">
            <div v-for="o in 10" :key="o" class="text item max-text ">
              {{ '老当益壮，宁移白首之心？穷且益坚，不坠青云之志。' + o }}
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="box-card">
            <div slot="header" class="clearfix">
              <span> 常用</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div style="margin-left: 20px;" v-for="o in 3" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>

          <el-card :body-style="{ padding: '0px' }" class="box-card2">
            <div slot="header" class="clearfix">
              <span> 规则</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div v-for="o in 3" :key="o" class="text item" style="margin-left: 20px;">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  created() {
  },
  methods: {},
};
</script>

<style scoped>
.index-header {
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
}

.max-text {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.card-header span {
  font-size: 15px;
}

.index-lun {
  width: 600px;
  margin-top: 30px;
}

.index-content-item {
  margin-top: 30px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.text {
  font-size: 15px;
}

.item {
  margin-bottom: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 260px;
  margin-top: 30px;
}

.box-card2 {
  width: 260px;
  margin-top: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


</style>