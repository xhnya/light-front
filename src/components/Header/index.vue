<template>
  <div style="color: #2b2b2c;margin: 10px 10px 10px 10px">
    <el-row :gutter="0" type="flex" justify="center">
      <el-col :span="3"
      >
        <div @click="goIndex" class="grid-content">
          <img class="header-img" src="../../assets/img/logo2.png"/>
        </div>
      </el-col>
      <el-col :span="5"
      >
        <div class="grid-content header-top">
          <div class="header-text">
            <router-link to="/"><span class="box animated bounce">首页</span></router-link>
            <router-link to="/type"><span><span>分类</span></span></router-link>
            <router-link to="/community"><span>社区</span></router-link>
            <router-link to="/wiki"><span>百科</span></router-link>
            <router-link to="/info"><span>资讯</span></router-link>
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
        <div @click="goUser"  class="block">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <router-link to="/message/reply">
            <div>
              <el-badge :value="200" :max="99" class="item">
                <i style="font-size:20px" class="el-icon-message"></i>
              </el-badge>
            </div>
            <div>
              <span style="font-size: small">消息</span>
            </div>
          </router-link>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <router-link to="/collections">
            <div>
              <i style="font-size:20px" class="el-icon-star-off"></i>
            </div>
            <div>
              <span style="font-size: small">收藏</span>
            </div>
          </router-link>
        </div>
      </el-col>
      <el-col :span="1">
        <div style="text-align: center;">
          <router-link to="/account/history">
            <div>
              <i style="font-size:20px" class="el-icon-time"></i>
            </div>
            <div>
              <span style="font-size: small">历史</span>
            </div>
          </router-link>
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
        <el-button style="width: 100px;background-color: #fb7299" type="danger" icon="el-icon-circle-plus">发布
        </el-button>
      </el-col>
    </el-row>

<!--    <div style="position: absolute;top: 0;z-index: -1" class="header-banner"></div>-->
<!--    <div style="height: 100px"></div>-->
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
  methods: {
    goType() {
      this.$router.push({path: '/type'})
    },
    goIndex() {
      this.$router.push({path: '/'})
    },
    goUser(){
      this.$router.push({path: '/account/user'})
    }
  }
};
</script>


<style scoped>
@import "./css/header.css";


/**************动画*************/

/**************动画结束*************/
.header_bar {
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
