<template>
  <div class="index-header">
    <HeaderBanner/>
    <el-backtop></el-backtop>
    <!--    游戏展示-->
    <div>
      <div class="card-header">
        <el-row>
          <el-col :span="2">
            <div class="grid-content ">
              <el-tag type="danger">热门游戏</el-tag>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content ">
              <div class="game-item text-tag">
                <span @click="toGameInfo()">荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content ">
              <el-tag>最受期待</el-tag>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content ">
              <div class="game-item">
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="card-header">
        <el-row>
          <el-col :span="2">
            <div class="grid-content ">
              <el-tag type="warning">优惠促销</el-tag>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content ">
              <div class="game-item">
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>

              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content ">
              <el-tag type="success">最近热门</el-tag>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content ">
              <div class="game-item">
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--    第二部分-->
    <div>

      <el-row>
        <el-col :span="10">
          <!--     ----- 轮播图-->
          <div class="grid-content">
            <div class="block index-lun">
              <el-carousel height="360px">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                  <el-image
                      style="width: 100%; height: 100%"
                      :src="item.coverUrl"
                      fit="fill"></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>

        <!--      列表-->
        <el-col :span="8">
          <div class="grid-content index-content-item">
            <div v-for="item in hotPageList" :key="item.id" class="text item2 max-text ">
              <span @click="toPageIndex(item.id)">{{ item.title }}</span>
              <hr>
            </div>
            <el-empty v-if="hotPageList===[]" :image-size="200"></el-empty>
          </div>
        </el-col>
        <el-col :span="6">
          <!--          卡片 ---------------常用-->
          <el-card style="float: right;" :body-style="{ padding: '0px' }" class="box-card-index1"
          >
            <div slot="header" class="clearfix">
              <span> 常用</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div style="margin-left: 20px;" v-for="o in 3" :key="o" class="text item1">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>

          <el-card style="float: right; " :body-style="{ padding: '0px' }" class="box-card2">
            <div slot="header" class="clearfix">
              <span> 规则</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div v-for="o in 3" :key="o" class="text item1" style="margin-left: 20px;">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>

      </el-row>
    </div>

    <!--    动态行-->
    <div>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <el-card class="box-card3">
              <div slot="header" class="clearfix">
                <span>游戏动态</span>
              </div>
              <div v-for="item in gamePageInfoList" :key="item.id" class="text item1">
                <div @click="toPageIndex(item.id)">{{ item.title }}</div>
              </div>
              <el-empty v-if="gamePageInfoList.length===0" :image-size="200"></el-empty>
            </el-card>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="grid-content">
            <el-card shadow="hover" style="float: right;" class="box-card4">
              <div slot="header" class="clearfix">
                <span>经典大作</span>
                <i style="float: right;" class="el-icon-d-arrow-right"></i>
              </div>
              <div>
                <el-row>
                  <el-col v-for="item in newReleaseGame" :key="item.id" :span="6">
                    <div @click="gotoGameInfo(item.id)" class="grid-content recently-game ">
                      <!--                     TODO: 游戏描述-->
                      <el-popover
                          placement="top-start"
                          title="标题"
                          width="200"
                          trigger="hover"
                          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                        <div slot="reference">
                          <div style="text-align: center;">
                            <el-image
                                style="width: 100px; height: 120px;text-align: center;"
                                :src="item.cover"
                                fit="fill"></el-image>
                          </div>
                          <div style="text-align: center;">
                            {{ item.name }}
                          </div>
                          <div style="text-align: center;">
                            {{ item.time }}
                          </div>
                        </div>
                      </el-popover>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
            <el-card shadow="hover" style="float: right;" class="box-card5">
              <div slot="header" class="clearfix">
                <span>最近发布</span>
                <i style="float: right;" class="el-icon-d-arrow-right"></i>
              </div>
              <div>
                <el-row>
                  <el-col v-for="item in newReleaseGame" :key="item.id" :span="6">
                    <div class="grid-content ">
                      <div @click="gotoGameInfo(item.id)">
                        <div style="text-align: center;">
                          <el-image
                              style="width: 100px; height: 120px;text-align: center;"
                              :src="item.cover"
                              fit="fill"></el-image>
                        </div>
                        <div style="text-align: center;">
                          {{ item.name }}
                        </div>
                        <div style="text-align: center;">
                          {{ item.time }}
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div v-if="newReleaseGame==null">
                <el-empty description="描述文字"></el-empty>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

    </div>

    <!--    排行榜-->
    <div class="sort-header">
      <el-row>
        <el-col :span="8">
          <div class="grid-content">
            <div @mouseleave="leaveShow1" class="sort-index">
              <div style="text-align: center;font-size: 25px;">
                <el-card shadow="hover">
                  <span>新游榜</span>
                </el-card>
              </div>
              <el-collapse v-for="(item,index) in newRankGameList" :key="index" v-model="activeName1" accordion>
                <div @click="gotoGameInfo(item.gameId)" @mouseenter="changeItem1(item.sort)">
                  <el-collapse-item :title="item.sort+'  '+item.gameName" :name="item.sort">
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <div class="grid-content bg-purple">
                          <el-image
                              style="width: 150px; height: 180px"
                              :src="item.coverUrl"
                              fit="fill"></el-image>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple">
                          <div>{{ item.sort }}</div>
                          <div>{{ item.gameName }}</div>
                          <div>
                            <div><span>热度：</span><span></span></div>
                            <div><span>类型：</span><span>{{ item.gameType }}</span></div>
                            <div><span>发行：</span><span>{{ item.releaseTime }}</span></div>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
          </div>

        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div @mouseleave="leaveShow2" class="sort-index">
              <div style="text-align: center;font-size: 25px;">
                <el-card shadow="hover">
                  <span>热门榜</span>
                </el-card>
              </div>
              <el-collapse v-for="(item,index) in hotRankGameList" :key="index" v-model="activeName2" accordion>
                <div @click="gotoGameInfo(item.gameId)" @mouseenter="changeItem2(item.sort)">
                  <el-collapse-item :title="item.sort+'  '+item.gameName" :name="item.sort">
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <div class="grid-content bg-purple">
                          <el-image
                              style="width: 150px; height: 180px"
                              :src="item.coverUrl"
                              fit="fill"></el-image>
                        </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="grid-content bg-purple">
                          <div>{{ item.sort }}</div>
                          <div>{{ item.gameName }}</div>
                          <div>
                            <div><span>热度：</span><span></span></div>
                            <div><span>类型：</span><span>{{ item.gameType }}</span></div>
                            <div><span>发行：</span><span>{{ item.releaseTime }}</span></div>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ">
            <div @mouseleave="leaveShow3" class="sort-index">
              <div style="text-align: center;font-size: 25px;">
                <el-card shadow="hover">
                  <span>期待榜</span>
                </el-card>
              </div>
              <div v-for="item in expectRankGameList" :key="item.id">
                <el-collapse v-model="activeName3" accordion>
                  <div @click="gotoGameInfo(item.gameId)" @mouseenter="changeItem3(item.sort)">
                    <el-collapse-item :title="item.sort+'  '+item.gameName" :name="item.sort">
                      <el-row :gutter="20">
                        <el-col :span="12">
                          <div class="grid-content bg-purple">
                            <el-image
                                style="width: 150px; height: 180px"
                                :src="item.coverUrl"
                                fit="fill"></el-image>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="grid-content bg-purple">
                            <div>{{ item.sort }}</div>
                            <div>{{ item.gameName }}</div>
                            <div>
                              <div><span>热度：</span><span></span></div>
                              <div><span>类型：</span><span>{{ item.gameType }}</span></div>
                              <div><span>发行：</span><span>{{ item.releaseTime }}</span></div>
                            </div>
                          </div>
                        </el-col>
                      </el-row>
                    </el-collapse-item>
                  </div>
                </el-collapse>
              </div>

            </div>
          </div>

        </el-col>
      </el-row>
    </div>
    <!--      回到顶部-->

    <!--    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
  </div>

</template>

<script>
import index from "@/api/index"
import game from "@/api/game"

export default {
  data() {
    return {
      currentDate: new Date(),
      activeName1: '1',
      activeName2: '1',
      activeName3: '1',
      recentlyUrl: "http://img.xhnya.top/DyingLight2.jpg",
      bannerList: [],
      hotRankGameList: [],
      expectRankGameList: [],
      newRankGameList: [],
      hotPageList: [],
      newReleaseGame: [],
      gamePageInfoList: []
    };
  },
  created() {
    this.getBannerList()
    this.getHotGameRankList()
    this.getPageList()
    this.getNewRelease()
    this.getGamePageInfo()
  },
  methods: {
    changeItem1(o) {
      this.activeName1 = o;
    },
    changeItem2(o) {
      this.activeName2 = o;
    },
    changeItem3(o) {
      this.activeName3 = o;
    },
    leaveShow1() {
      this.activeName1 = 0;
    },
    leaveShow2() {
      this.activeName2 = 0;
    },
    leaveShow3() {
      this.activeName3 = 0;
    },
    toGameInfo() {
      this.$router.push({path: `/game/1`})
    },
    toPageIndex(val) {
      this.$router.push({path: `/page/${val}`})
    },
    getPageList() {
      index.getIndexPageList().then((res) => {
        this.hotPageList = res.data.result
      })
    },
    getBannerList() {
      index.getBannerList().then((res) => {
        this.bannerList = res.data.bannerList
      })
    },
    getHotGameRankList() {
      index.getHotGameRankList(1).then((res) => {

        this.newRankGameList = res.data.rankList
      })
      index.getHotGameRankList(2).then((res) => {
        this.hotRankGameList = res.data.rankList
      })
      index.getHotGameRankList(3).then((res) => {

        this.expectRankGameList = res.data.rankList
      })
    },
    gotoGameInfo(val) {
      //前往游戏详情
      this.$router.push({path: '/game/' + val})
    },
    getNewRelease() {
      index.getNewReleaseGame().then((res) => {
        this.newReleaseGame = res.data.result
      })
    },
    getGamePageInfo() {
      index.getGamePageInfoLit().then((res) => {
        this.gamePageInfoList = res.data.result
      })
    }
  },
};
</script>

<style scoped>
@import '../assets/style/home.css';

</style>
