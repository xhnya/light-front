<template>
  <div>

      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="6"><div class="grid-content">
          <img class="header-img" src="./images/logo.png"></div>
        </el-col>
        <el-col :span="10"><div  class="grid-content bg-purple header-top" >
          <div class="header-text">
            <span>首页</span>
            <span>分类</span>
            <span>论坛</span>
            <span>百科</span>
            <span>资讯</span>
            <span>关于我们</span>
          </div>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple" ></div></el-col>

      </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import "./css/header.css";
  .el-row {
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
  }
</style>