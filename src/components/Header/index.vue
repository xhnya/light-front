<template>
  <div style="color: #f7f8f9">
    <el-row :gutter="0" type="flex" justify="center">
      <el-col :span="3"
      >
        <div class="grid-content">
          <img class="header-img" src="./images/logo.png"/>
        </div>
      </el-col>
      <el-col :span="5"
      >
        <div class="grid-content header-top">
          <div class="header-text">
            <span>首页</span>
            <span>分类</span>
            <span>论坛</span>
            <span>百科</span>
            <span>资讯</span>
            <span>关于我们</span>
          </div>
        </div>
      </el-col>
      <!--   --------------------   搜索框，中间---------------------->
      <el-col :span="8"
      >
        <div class="grid-content bg-purple">
          <div>
            <el-input placeholder="请输入内容" v-model="input3">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div
        >
      </el-col>
      <!--   --------------------   搜索框结束，右边---------------------->
      <el-col class="header-right" :span="0.8">
        <div class="block">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <div>
            <el-badge :value="200" :max="99" class="item">
              <i style="font-size:20px" class="el-icon-message"></i>
            </el-badge>
          </div>
          <div>
            <span style="font-size: small">消息</span>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <div>
            <i style="font-size:20px" class="el-icon-star-off"></i>
          </div>
          <div>
            <span style="font-size: small">收藏</span>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <div>
            <i style="font-size:20px" class="el-icon-time"></i>
          </div>
          <div>
            <span style="font-size: small">历史</span>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <div>
            <i style="font-size:20px" class="el-icon-shopping-bag-1"></i>
          </div>
          <div>
            <span style="font-size: small">积分商城</span>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <div>
            <i style="font-size:20px" class="el-icon-time"></i>
          </div>
          <div>
            <span style="font-size: small">创作中心</span>
          </div>
        </div>
      </el-col>
      <el-col style="text-align: center;" :span="2">
        <el-button style="width: 100px" type="danger" icon="el-icon-circle-plus">发布</el-button>
      </el-col>
    </el-row>
    <div style="position: absolute;top: 0;z-index: -1" class="header-banner"></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      input3: "",
      select: "",
      circleUrl: "http://img.xhnya.top/img/vae.jpg",
    };
  },
};
</script>


<style scoped>
@import "./css/header.css";

.header-banner {
  background-image: url('../../assets/img/header_banner.jpg');
  /*background-position-x: center;*/
  /*background-position-y: top;*/
  /*background-size: initial;*/
  /*background-repeat-x: no-repeat;*/
  /*background-repeat-y: no-repeat;*/
  /*background-attachment: initial;*/
  /*background-origin: initial;*/
  /*background-clip: initial;*/
  /*background-color: initial;*/

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 170px;
  z-index: 0;
}
.header_bar{
  position: absolute;
  top: 0;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 2560px;
  width: 100%;
  height: 64px;
}
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
} */
</style>

<style>
.header-search-color {
  background-color: #dcdee4;
}
</style>