<template>
  <div class="game-info-bg">
    <div :class="{gameInfoBg1: isIssues,gameInfoBg2: !isIssues}">
      <div v-if="isIssues===true">
        <div class="game-info-bg01" :style="{backgroundImage: 'url(' + this.gameInfoView.bgUrl + ')'}">
        </div>
      </div>
      <el-card v-else class="game-info-card1">
        <el-image
            style="width: 100%; height: 300px;"
            :src="this.gameInfoView.bgUrl"
            fit="fill"></el-image>
      </el-card>
      <div class="game-info-content">
        <div class="game-info-content-card0">
          <el-card class="game-info-content-card">
            <el-tabs stretch class="game-info-content-tabs" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane class="game-info-tabs-item" label="首页" name="index">
                <el-row>
                  <el-col :span="5">
                    <div class="grid-content bg-purple">
                      <div class="game-home-img">
                        <el-image
                            style="width: 100%; height:  100%; "
                            :src="this.gameInfoView.cover"
                            fit="fill"></el-image>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="9">
                    <div class="grid-content bg-purple-light">
                      <div class="game-home-text">
                        <div class="game-info-title">{{ this.gameInfoView.gameName }}</div>
                        <span class="game-info-title-deps">({{ this.gameInfoView.gameNameOther }})</span>
                        <div class="game-home-info-content">
                          <div class="game-home-info-text">
                            <span>类型:</span><span>{{ this.gameInfoView.typeName }}</span>
                          </div>
                          <div class="game-home-info-text">
                            <span>制作:</span><span>{{ this.gameInfoView.produceName }}</span>
                          </div>
                          <div class="game-home-info-text">
                            <span>发行:</span><span>{{ this.gameInfoView.issueName }}</span>
                          </div>
                          <div class="game-home-info-text" style="display: block;"><span>平台:</span>
                            <div class="game-info-tags">
                              <span>pc</span>
                            </div>
                          </div>
                          <div class="game-home-info-text">
                            <span>发售:</span><span>{{ this.gameInfoView.releaseTime }} ( PC )</span>
                          </div>
                          <div class="game-home-info-text"><span>官网:</span>
                            <el-link :href="this.gameInfoView.website" target="_blank"
                                     type="primary">点击进入
                            </el-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="10">
                    <div class="grid-content bg-purple">
                      <div class="game-home-info-score">
                        <div style="display: inline;margin-left: 10px;margin-right: 10px;">
                          <el-button plain>light游戏评测</el-button>
                        </div>
                        <div style="display: inline;">
                          <a-progress v-if="this.gameInfoView.lightScore!=null" strokeWidth=12 :width="80"
                                      strokeColor="red" type="circle" :percent="this.gameInfoView.lightScore">
                            <template #format="percent" style="font-size: 30px;">
                              <a-statistic :value="percent"
                                           :value-style="{ color: 'red',fontSize: '30px',fontWeight: 'bold'}"/>
                            </template>
                          </a-progress>
                          <span v-if="this.gameInfoView.lightScore==null">
                            <span style="font-size: 12px;">暂无评分</span>
                          </span>
                        </div>
                      </div>
                      <div class="game-home-info-score">
                        <div class="game-home-info-score111" style="">
                          <!--                          TODO: 未登录显示请登录，以及登录显示评分，或者请评分-->
                          <span>你的评分是9.9</span>
                        </div>
                        <div style="display: inline;">
                          <a-progress v-if="this.gameInfoView.userScore!=null" :strokeWidth="12" :width="80"
                                      strokeColor="red" type="circle"
                                      :percent="this.gameInfoView.userScore">
                            <template #format="percent" style="font-size: 30px;">
                              <a-statistic :value="percent/10 "
                                           :value-style="{ color: 'red',fontSize: '30px',fontWeight: 'bold'}"/>
                            </template>
                          </a-progress>
                          <span v-if="this.gameInfoView.userScore==null">
                            <span style="font-size: 12px;">暂无评分</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="game-home-ptext">
                      <!--                      TODO: 文本过长的时候隐藏下拉款-->
                      <p v-text="this.gameInfoView.gameDescribe">
                        《荒野大镖客2(Red Dead Redemption 2)》是由Rockstar
                        Games制作发行的一款开放世界动作冒险类游戏，是人气游戏《荒野大镖客》的最新续作。本作讲述在美国无情的蛮荒大地上绽放出的生命诗篇。游戏庞大又细腻的世界，也将是全新多人游戏模式体验的最佳舞台。
                      </p>
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="社区" name="community">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="攻略" name="strategy">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="百科" name="wiki">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="资讯" name="information">
                <router-view/>
              </el-tab-pane>
              <el-tab-pane class="game-info-tabs-item" label="图集" name="atlas">
                <router-view/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
        <!--        主页头部以外-->
        <div v-if="isIndex">
          <div class="game-info-index-content">

            <div class="game-info-home-cover1">
              <el-row>
                <el-col :span="12">
                  <el-card>
                    <el-carousel indicator-position="outside">
                      <div v-for="(item,index) in this.gameInfoView.bannerList" :key="index">
                        <el-carousel-item>
                          <el-image
                              style="width: 100%; height:100%"
                              :src="item"
                              fit="fill"></el-image>
                        </el-carousel-item>
                      </div>
                    </el-carousel>
                  </el-card>
                  <el-card>
                    <Video></Video>
                  </el-card>
                </el-col>
                <el-col :span="12">
                  <div class="game-info-home-cover2">
                    <el-card style="height: 640px;">
                      <a-list bordered :data-source="data">
                        <!--                       TODO: 游戏动态显示-->
                        <a-list-item slot="renderItem" slot-scope="item, index">
                          {{ item }}
                        </a-list-item>
                      </a-list>
                    </el-card>

                  </div>
                </el-col>
              </el-row>

            </div>

          </div>
          <!--          游戏评分和奖项-->
          <div v-if="this.gameInfoView.scoreList==null && this.gameInfoView.awardList==null" style="margin-top: 30px;">
            <el-row>
              <el-col :span="15">
                <el-card class="game-home-info-card-10">
                  <div slot="header" class="clearfix">
                    <span>评分</span>
                  </div>
                  <div>
                    <a-list :grid="{ gutter: 16, column: 2 }" :data-source="this.gameInfoView.scoreList">
                      <a-list-item slot="renderItem" slot-scope="item, index">
                        <div>
                          <el-card class="media-game-info">
                            <span style="font-size: 24px;font-style:italic;">{{ item.scoreName }} </span>
                            <span style="font-size: 24px;color: red;font-style:italic;">{{ item.gameScore }}</span>
                            <span style="font-size: 15px;">/10</span>
                            <div class="media-game-info-text">
                              {{ item.scoreDescribe }}
                            </div>
                          </el-card>
                        </div>
                      </a-list-item>
                      <div v-if="this.gameInfoView.scoreList ==null">
                        <el-card class="box-at-1">
                          <el-image
                              style="width: 256px; height:  256px;"
                              src="http://img.xhnya.top/img/nodata.png"
                              fit="fill"></el-image>
                        </el-card>
                      </div>
                    </a-list>

                  </div>
                </el-card>
              </el-col>
              <el-col :span="9">
                <el-card class="game-home-info-card-10">
                  <div slot="header" class="clearfix">
                    <span>奖项</span>
                  </div>
                  <div v-for="item in this.gameInfoView.awardList" :key="item.id">
                    <div style="height: 80px;">
                      <div>
                        <div class="game-home-award-div">
                          <el-image
                              style="width: 100%; height: 100%"
                              :src=" item.coverUrl"
                              fit="fill"></el-image>
                        </div>
                      </div>
                      <div style="margin-left: 20px;">
                        <span style="font-size:20px;margin-left: 10px;">{{ item.institutionsName }}</span>
                        <span style="font-size:12px;color: #8e8e93;margin-left: 10px;">( the game award )</span>
                      </div>
                      <div style="font-size: 13px;">
                        <span style="margin-left: 10px;color: #ff853b;">2018</span> <span>{{ item.awardName }}</span>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                  <div v-if="this.gameInfoView.awardList.length ==0">
                    <el-card class="box-at-1">
                      <el-image
                          style="width: 256px; height:  256px;"
                          src="http://img.xhnya.top/img/nodata.png"
                          fit="fill"></el-image>
                    </el-card>
                  </div>

                </el-card>
              </el-col>
            </el-row>

          </div>

          <!--          精美图片-->
          <div v-if="this.gameInfoView.pictureList==null" class="game-index-home-images-goods">
            <el-card>
              <el-carousel :interval="4000" type="card" height="420px">
                <el-carousel-item v-for="(item,index) in this.gameInfoView.pictureList" :key="index">
                  <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
                <el-empty :image-size="200"></el-empty>
              </el-carousel>
            </el-card>
          </div>
          <!--          ======类型游戏and产商游戏=======-->
          <div class="game-type-card-index111">
            <el-card>
              <div class="game-type-button-index">
                <a-button type="primary">
                  系列游戏
                </a-button>
                <a-button type="primary">
                  产商佳作
                </a-button>
              </div>
              <div class="game-type-images-index">
                <div>
                  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                      <a-card :title="item.title">
                        Card content
                      </a-card>
                    </a-list-item>
                  </a-list>

                </div>
              </div>
            </el-card>
          </div>

          <!--    评论-->
          <div class="game-home-comment">
            <el-card>
              <div>
                <!--              评论-->
                <a-list
                    v-if="comments.length"
                    :data-source="comments"
                    :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                    item-layout="horizontal"
                >
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment
                        :author="item.author"
                        :avatar="item.avatar"
                        :content="item.content"
                        :datetime="item.datetime"
                    />
                  </a-list-item>
                </a-list>
                <a-comment>
                  <a-avatar
                      slot="avatar"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                  />
                  <div slot="content">
                    <a-form-item>
                      <a-textarea :rows="4" :value="value" @change="handleChange"/>
                    </a-form-item>
                    <a-form-item>
                      <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                        Add Comment
                      </a-button>
                    </a-form-item>
                  </div>
                </a-comment>
              </div>
              <!--      评论列表-->
              <div>
                <a-list
                    class="comment-list"
                    :header="`${content.length} replies`"
                    item-layout="horizontal"
                    :data-source="content"
                >
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment :author="item.author" :avatar="item.avatar">
                      <template slot="actions">
                        <span v-for="action in item.actions">{{ action }}</span>
                      </template>
                      <p slot="content">
                        {{ item.content }}
                      </p>
                      <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                        <span>{{ item.datetime.fromNow() }}</span>
                      </a-tooltip>
                    </a-comment>
                  </a-list-item>
                </a-list>
              </div>
            </el-card>


          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Video from "@/components/video/video";
import moment from "moment";
import {mapGetters} from "vuex";

const data = [];
export default {
  components: {Video},
  data() {
    return {
      gameUrl: "http://img.xhnya.top/img/消逝的光芒详情背景图.jpg",
      gameVideoUrl: "http://img.xhnya.top/video/%E8%8D%92%E9%87%8E%E5%A4%A7%E9%95%96%E5%AE%A2%E8%A7%86%E9%A2%911.webm",
      isIssues: true,
      gameBGUrl: "http://img.xhnya.top/img/荒野大镖客bg20220116.jpg",
      activeName: 'index',
      isHome: "",
      isIndex: true,
      gameCoverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
      gameScore: 75,
      comments: [],
      submitting: false,
      value: '',
      moment,
      data,
      gameId: 0,
      content: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
      gameInfo: {}
    }
  },
  created() {
    this.gameId = this.$route.params.id
    this.getGameInfo()
  },
  mounted() {
    //派发action获取gameInfo
    this.$store.dispatch('getGameInfos', this.$route.params.id)
  },
  computed: {
    ...mapGetters(["gameInfoView"]),
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (this.activeName === 'index') {
        this.isIndex = true;
      } else {
        this.isIndex = false;
        this.$router.push({path: '/game/' + this.$route.params.id + '/' + this.activeName})
      }
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    getGameInfo() {
      this.gameInfo = this.$store.state.gameInfo
    }

  },
}
</script>

<style lang="less" scoped>


.game-info-bg {
  //padding-bottom: 300px;

  //padding-top: @MarginTop;
}

.gameInfoBg1 {
  background-color: #222222;
}

.gameInfoBg2 {
  background-color: #ffffff;
}

.game-info-card1 {
  margin-right: @Margin20;
  margin-left: @Margin20;
}

.game-info-content {
  .game-info-card1;
  z-index: 6;
  margin: -185px auto;
  position: relative;
  width: 1200px;
  //margin-top: -185px;
}

.game-info-content-card {
  position: relative;
  background: url(http://img.xhnya.top/img/gamainfobg.png) repeat left top;
  z-index: 1;
  display: block;
  color: #8e8e93;
  font-size: 18px;
}

.game-info-content-card0 /deep/ .el-card {
  border: 0px;
  color: #8e8e93;
}

.game-info-card1 /deep/ .el-card__body {
  padding: 0;
}

.game-info-content-tabs /deep/ .el-tabs__item {
  font-size: 18px;
  color: #8e8e93;
}

.game-info-content-tabs /deep/ .el-tabs__nav-wrap::after {
  color: #8e8e93;
}

.game-info-bg01 {
  width: 100%;
  height: auto;
  min-height: 500px;
  background: no-repeat center top;
  //background-size: 100% 100%;
}


.game-info-index-content /deep/ .el-card__body {
  padding: 0;
}

//++++++++++++++++++home+++++++++++++++++++++++++++

@TitleColor: #cd231d;

.game-home-body {
  margin-top: 20px;
}

.game-home-img {
  padding: 0px 20px 20px 20px;

}

.game-info-title {
  color: @TitleColor;
  font-size: 20px;
}

.game-info-title-deps {
  font-size: 12px;
  color: @TitleColor;
}

.game-home-info-content {
  font-size: 14px;
}

.game-info-tags {
  display: inline;
}

.game-home-info-text {
  margin-top: 10px;
  margin-bottom: 10px;
}

.game-home-info-score {
  display: inline;
}

.game-home-info-score /deep/ .el-button {
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid red;
  color: red;
}

.game-home-info-score111 {

  text-align: left;
  color: #8e8e93;
  width: 120px;
  overflow: hidden;
  font-size: 13px;
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
}

.game-home-ptext {
  line-height: 30px;
  font-size: 12px;
  color: #8e8e93;
  margin-top: 20px;
  overflow-y: auto;
  height: 120px;
  text-align: justify;
}

.game-home-ptext p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}


.game-info-index-content {
  margin-top: 30px;
  background-color: #0e0e0e;
}


.game-info-index-content /deep/ .el-card__body {
  padding: 0;
}

.game-info-home-cover1 {
  margin-right: 10px;
}

.game-info-home-cover2 {
  margin-left: 10px;
  width: 100%;
  height: 100%
}

.game-home-comment {
  margin-top: 30px;
  padding-bottom: 30px;
}

.game-home-info-card-10 {
  margin-left: 5px;
  margin-right: 5px;
  background-color: #0e0e0e;
  color: #ffffff;
  border: @CancelBorder;
}

.media-game-info {
  background-color: #0e0e0e;
  border: @CancelBorder;
  color: #c7c7cc;
}

.media-game-info-text {
  font-size: 13px;
  text-align: justify;
  color: #8e8e93;
  margin-top: 15px;
}

.game-home-award-div {
  float: left;
  width: 55px;
  height: 55px;
}

.game-index-home-images-goods {
  margin-top: 30px;
  height: 540px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 450px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.game-type-button-index {
  text-align: center;
}

.game-type-button-index button {
  margin-right: 5px;
  margin-left: 5px;
}

.game-type-card-index111 {
  margin-bottom: 30px;
  margin-top: 30px;
}

.game-type-images-index {
  margin-top: 30px;
}

.box-at-1 {
  /*height: 100%*/
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
