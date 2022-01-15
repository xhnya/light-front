<template>
  <div class="community-first">
    <HeaderBanner/>
    <el-row>
<!--      left-->
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <el-card class="box-card-c1">
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <i class="header-icon el-icon-info"></i>我的关注
              </template>
              <div>北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！</div>
            </el-collapse-item>
            <el-collapse-item title="分类">
              <div>冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？</div>
            </el-collapse-item>
          </el-collapse>
          </el-card>
        </div>
      </el-col>
<!--      中间显示-->
      <el-col :span="14">
        <div  class="grid-content bg-purple-light">
          <el-card style="height:80%;" class="box-card-c2">
            <router-view/>
          </el-card>
        </div>
      </el-col>
<!--      右边显示-->
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card-c3">
            <div slot="header" class="clearfix">
              <span>热议榜</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
          <el-card class="box-card-c4">
            <div slot="header" class="clearfix">
              <span>最新发布</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.community-first {
  margin-left: 18%;
  margin-right: 18%;
  margin-top: 30px;
}
.box-card-c1{
  width: 100%;
}
.box-card-c2{
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
}
.box-card-c3{

}
.box-card-c4{
  margin-top: 30px;
}
</style>

