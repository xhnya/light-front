<template>
  <div style="background-color: #f4f5f7">
    <div class="user-body">
      <!--    头部背景卡片-->
      <div class="user-card">
        <el-card class="box-user-card1">
          <el-card
              class="box-user-card2"
              :style="{backgroundImage: 'url(' + bgUrl + ')', backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',}">
            <div class="user-card-user">
              <div class="user-card-user01">
                <div class="user-card-ava">
                  <el-avatar :size="60" :src="userinfo.cover"></el-avatar>
                </div>
                <div class="user-card-userinfo">
                  <div>
                    <div class="user-card-username">
                      <span class="user-name">xhnya</span>
                    </div>
                  </div>
                  <div>
                    <div  class="user-card-username">
                      <h4  title="唯有日月和信仰亘古不灭"  class="user-sign">唯有日月和信仰亘古不灭</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </el-card>
          <el-card class="user-menu">
            <el-row class="user-menu-row">
              <el-col :span="2"><div class="grid-content bg-purple">
                <div  class="user-menu-index">
                  <router-link to="/account/user/home"><span >主页</span></router-link>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-index">
                  <router-link to="/account/user/collections">  <span>收藏</span></router-link>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-index">
                  <router-link to="/account/user/game"> <span>游戏</span></router-link>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-index">
                  <router-link to="/account/user/page"><span>文章</span></router-link>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-index">
                  <router-link to="/account/user/order"><span>订单</span></router-link>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-index">
                  <span>设置</span>
                </div>
              </div></el-col>

              <el-col :span="3"><div class="grid-content bg-purple">
                <div class="user-menu-search">
                  <el-input prefix-icon="el-icon-search" v-model="input" placeholder="搜索文章"></el-input>
                </div>
              </div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple">
<!--                没啥用，占位-->
                <el-image
                    style="width: 100px; height: 100px"
                    :src="imgUrl01"
                    fit="fill"></el-image>
              </div></el-col>
<!--              右边-->
              <el-col :span="1"><div class="grid-content bg-purple">
                <div class="user-menu-count">
                  <p class="user-menu-text">关注数</p>
                  <p class="user-menu-nums">666</p>
                </div>
              </div></el-col>
              <el-col :span="1"><div class="grid-content bg-purple">
                <div class="user-menu-count">
                  <p class="user-menu-text" >粉丝数</p>
                  <p class="user-menu-nums">666</p>
                </div>
              </div></el-col>
              <el-col :span="1"><div class="grid-content bg-purple">
                <div class="user-menu-count">
                  <p class="user-menu-text">获赞数</p>
                  <p class="user-menu-nums">666</p>
                </div>
              </div></el-col>
              <el-col :span="1"><div class="grid-content bg-purple">
                <div class="user-menu-count">
                  <p class="user-menu-text">阅读量</p>
                  <p class="user-menu-nums">666</p>
                </div>
              </div></el-col>
              <el-col :span="2"><div class="grid-content bg-purple">
                <div class="user-menu-count">
                  <p class="user-menu-text">关注游戏数</p>
                  <p class="user-menu-nums">666</p>
                </div>
              </div></el-col>

            </el-row>
          </el-card>
        </el-card>

      </div>
      <router-view/>
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      bgUrl: "http://img.xhnya.top/img/userbg.webp",
      userinfo: {
        cover: "http://img.xhnya.top/img/vae.jpg"
      },
      input: "",
      imgUrl01: "http://img.xhnya.top/img/QQ截图20220113162431.png",

    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@marginLeftAndRight: 15%;
@margin-user: 30px;

.user-body {
  //padding-top: @margin-user;
  margin-left: @marginLeftAndRight;
  margin-right: @marginLeftAndRight;
  padding-bottom: 300px;
}

.box-user-card1 {
}

.box-user-card2 {
  height: 192px;
  padding: 0;
  position: relative;
  z-index: 10;
}
.box-user-card1 /deep/ .el-card__body{
  padding: 0;
}
.user-card /deep/ .el-card__body{
  padding: 0;
}

.user-card-user{
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.user-card-user01{
  margin-left: 10px;
  margin-bottom: 10px;
}
.user-card-ava{
  display: inline;
}
.user-card-userinfo{
  color: #ffffff;
  display: inline;
  //bottom: 10px;
  position:absolute;
  margin-left: 15px;
}
.user-card-username{
  display: inline-block;
  margin-right: 5px;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;
}
.user-sign{
  background: transparent;
  border-radius: 4px;
  border: none;
  box-shadow: none;
  color: hsla(0,0%,100%,.8);
  font-size: 12px;
  font-family: Microsoft Yahei;
  line-height: 26px;
  height: 26px;
  margin-left: -5px;
  padding: 0 5px;
  position: relative;
  top: -1px;
  width: 730px;
  font-weight: 400;
}
.user-name{
  display: inline-block;
  margin-right: 5px;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  vertical-align: middle;
}

.user-menu{
  height: 66px;
}
.user-menu-index{
  text-align: center;
  margin-top: 20px;

}
.user-menu-index a{
  text-decoration:none;
  color: black;
}
.user-menu-search{
  margin-top: 15px;
}
.user-menu-search /deep/ .el-input__inner{
  border-radius: 8px;

}
.user-menu-text{
  line-height: 14px;
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
}
.user-menu-nums{
  line-height: 16px;
  margin-top: 5px;
  color: #222;
  font-size: 12px;
  text-align: center;
}
</style>
