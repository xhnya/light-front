<template>

  <div class="footer-div">
    <div style="width: 80%;margin-left: 10%;margin-top: 30px;">
      <hr>
    </div>
    <el-row class="footer-row">
        <el-col :span="6">
          <div class="grid-content "></div>
        </el-col>

        <el-col :span="2">
          <div style="text-align: center;" class="grid-content ">
            关于我们
          </div>
        </el-col>
        <el-col :span="2">
          <div style="text-align: center;"  class="grid-content ">
            联系我们
          </div>
        </el-col>
        <el-col  :span="2">
          <div style="text-align: center;"  class="grid-content ">
            用户协议
          </div>
        </el-col>
        <el-col :span="2">
          <div style="text-align: center;"  class="grid-content ">
            加入我们
          </div>
        </el-col>
        <el-col style="text-align: center;"  :span="2">
          <div class="grid-content ">
            友情链接
          </div>
        </el-col>
        <el-col style="text-align: center;"  :span="2">
          <div class="grid-content ">
            隐私协议
          </div>
        </el-col>


        <el-col :span="6">
          <div class="grid-content "></div>
        </el-col>
      </el-row>
    <div style="width: 80%;margin-left: 10%;margin-top: 30px;">
      <hr>
    </div>

  </div>
</template>

<script>
export default {
  name: "index,vue"
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

&
:last-child {
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
.footer-row{
  margin-top: 10px;
}
.footer-div{
  background-color: #858585;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
}

</style>