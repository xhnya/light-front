<template>
  <div class="style-type">
    <div class="type-body">
      <HeaderBanner/>
      <!--    头部-->
      <el-card class="game-card-body">
        <div slot="header" class="clearfix">
          <span>分类</span>
          <el-button @click="gotoAllGame" style="float: right; padding: 3px 0" type="text">全部游戏</el-button>
        </div>
        <div class="game-card-01">
          <!--        按钮列表-->
          <div class="type-button01-parent">
            <div class="type-button01">
              <el-button class="type-button02" size="mini" style="margin-left: 10px;" plain>动作</el-button>
              <el-button class="type-button02" size="mini" plain>角色</el-button>
              <el-button class="type-button02" size="mini" plain>射击</el-button>
              <el-button class="type-button02" size="mini" plain>策略</el-button>
              <el-button class="type-button02" size="mini" plain>冒险</el-button>
              <el-button class="type-button02" size="mini" plain>体育</el-button>
              <el-button class="type-button02" size="mini" plain>模拟</el-button>
            </div>
          </div>
          <!--        游戏列表-->
          <div class="game-item-01">
            <div style="width:100%;display:  inline;" v-for="(item,index) in gameImageList" :key="index">
              <div class="game-image-item">
                <el-image
                    style="width: 100%; height: 100%;border-radius: 6px;"
                    :src="item.url"
                    fit="fill"></el-image>
                <p>{{ item.title }}</p>
              </div>
            </div>
            <div>
              <div class="game-title-item">
                <div class="game-title-item1" v-for="(item,index) in gameTitleList" :key="index">
                  <span>{{ item.title }}</span>
                  <el-divider direction="vertical"></el-divider>
                </div>
              </div>
            </div>

          </div>
        </div>
      </el-card>
      <!--    第2层级-->
      <div class="game-type-second">
        <el-row :gutter="20">
          <el-col class="game-type-second-card" :span="12">

            <div class="grid-content bg-purple">
              <a-carousel arrows dots-class="slick-dots slick-thumb">
                <a   slot="customPaging" slot-scope="props">
                  <img  @mouseenter="changeGameBanner(props.i)" :src="gameBanner[props.i].coverUrl"/>
                </a>
                <div class="game-type-second-image" v-for="item in gameBanner">
                  <el-card>
                    <el-row>
                      <el-col :span="15">
                        <img style="width: 100%;height: 240px;" :src="item.bannerUrl"/>
                      </el-col>
                      <el-col :span="9" style="display: inline;">
                        <h2 style="text-align: center;">{{ item.gameName }}</h2>
                        <div class="game-type-button-score">
                          <el-button size="mini" type="primary">进入详情</el-button>
                          <span class="game-type-second-score">9.9</span>
                        </div>
                        <div class="game-type-item">
                          <el-row>
                            <el-col :span="12" >
                              <ul>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                              </ul>
                            </el-col>
                            <el-col :span="12" >
                              <ul>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                                <li>PC照相模式</li>
                              </ul>
                            </el-col>
                          </el-row>
                        </div>

                      </el-col>
                    </el-row>

                  </el-card>
                </div>
              </a-carousel>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-card class="box-card">
                <div v-for="o in 4" :key="o" class="text item">
                  {{'列表内容 ' + o }}
                </div>
              </el-card>

            </div>
          </el-col>
        </el-row>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameImageList: [
        {
          title: "赛博朋克2077",
          url: "http://img.xhnya.top/img/2077.jpg",
        },
        {
          title: "Red Dead: RedemptionⅡ",
          url: "http://img.xhnya.top/img/RedDeadRedemption.png",
        },
        {
          title: "Battlefield 2042",
          url: "http://img.xhnya.top/img/Battlefield2042.jpg",
        },
        {
          title: "Cities：Skylines",
          url: "http://img.xhnya.top/img/Cities：Skylines.png",
        },
        {
          title: "Forza Horizon 5",
          url: "http://img.xhnya.top/img/ForzaHorizon5.jpg",
        },
        {
          title: "Civilization VI",
          url: "http://img.xhnya.top/img/Civilization 6.jpg",
        },
      ],
      gameTitleList: [
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
        {
          title: "地平线5"
        },
      ],
      gameBanner: [
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        }
        ,
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        },
        {
          bannerUrl: "http://img.xhnya.top/img/荒野大镖客2Banner.png",
          coverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
          gameName: "荒野大镖客2"
        }
      ],

    }
  },
  methods: {
    gotoAllGame() {
      this.$router.push({path: '/game/all'})
    },
    changeGameBanner(i){
      // alert(i)
      return this.gameBanner[i].coverUrl;
    }

  }
}
</script>

<style lang="less" scoped>
@marginLeftAndRight: 15%;
.style-type{
  background-color: #fafafa;
}
.type-body {
  margin-top: 30px;
  margin-left: @marginLeftAndRight;
  margin-right: @marginLeftAndRight;

}

.game-card-body {
  padding-bottom: 30px;

}

.type-body /deep/ .el-card {
  border-radius: 6px;
  padding: 0;

}

.type-button01-parent {
  float: left;
  width: 10%;
  padding-bottom: 10px;
}

.type-button01 {
  //width: 70px;

}

.type-button02 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.game-item-01 {
  display: inline;
  width: 90%;
}

.game-card-01 {
  width: 100%;

}

.game-image-item {
  width: 130px;
  height: 85px;
  display: inline-block;
  color: #ffffff;
  margin-right: 10px;
  font-size: 12px;
  overflow: hidden;
  position: relative;
}

.game-image-item p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}

.game-title-item {
  display: inline;
  text-align: center;
}

.game-title-item1 {
  display: inline-block;

  text-align: center;
  margin-top: 10px;
}

.game-title-item1 span {
  margin-right: 20px;
  margin-left: 20px;
}

.game-type-second {
  margin-top: 30px;
}

.game-type-second-image {

}

.game-type-second-image /deep/ .el-card__body {
  padding: 10px 0 0 10px;
}
.game-type-second-score{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border:2px solid #00a0d8;
  color: #fb7299;
  margin-left: 10px;
}
.game-type-button-score{
  text-align: center;
}
.game-type-item{
  margin-top: 10px;
  font-size: 12px;
}
.game-type-more{
  float: right;
  padding: 3px 0;
}

/****************************************************** 分割 **************************************************************/
</style>



<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}

.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: 0;
  max-width: 95%;
}

.ant-carousel >>> .slick-thumb {
  bottom: -72px;
}

.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 72px;
  margin-top: 30px;
}

.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}

.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

</style>