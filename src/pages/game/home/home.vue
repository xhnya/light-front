<template>
  <div class="game-home-body">
    <el-row>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <div class="game-home-img">
            <el-image
                style="width: 100%; height:  100%; "
                :src="gameCoverUrl"
                fit="fill"></el-image>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple-light">
          <div class="game-home-text">
            <div class="game-info-title">荒野大镖客2</div>
            <span class="game-info-title-deps">(Red Dead: RedemptionⅡ)</span>
            <div class="game-home-info-content">
              <div class="game-home-info-text"><span>类型:</span><span>角色扮演</span></div>
              <div class="game-home-info-text"><span>制作:</span><span>Rockstar</span></div>
              <div class="game-home-info-text"><span>类型:</span><span>Rockstar</span></div>
              <div class="game-home-info-text" style="display: block;"><span>平台:</span>
                <div class="game-info-tags">
              <span>
                pc
              </span>
                </div>
              </div>
              <div class="game-home-info-text"><span>发售:</span><span>2019-11-05 ( PC )</span></div>
              <div class="game-home-info-text"><span>官网:</span>
                <el-link href="https://www.rockstargames.com/reddeadredemption2" target="_blank" type="primary">点击进入
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
              <a-progress strokeWidth=12 :width="80" strokeColor="red" type="circle" :percent="gameScore">
                <template #format="percent" style="font-size: 30px;">
                  <a-statistic :value="percent/10 " :value-style="{ color: 'red',fontSize: '30px',fontWeight: 'bold'}"/>
                </template>
              </a-progress>
            </div>
          </div>
          <div class="game-home-info-score">
            <div class="game-home-info-score111" style="">
              <span>你的评分是9.9</span>
            </div>
            <div style="display: inline;">
              <a-progress :strokeWidth="12" :width="80" strokeColor="red" type="circle" :percent="gameScore">
                <template #format="percent" style="font-size: 30px;">
                  <a-statistic :value="percent/10 " :value-style="{ color: 'red',fontSize: '30px',fontWeight: 'bold'}"/>
                </template>
              </a-progress>
            </div>
          </div>
        </div>
        <div class="game-home-ptext">
          <p>
            《荒野大镖客2(Red Dead Redemption 2)》是由Rockstar
            Games制作发行的一款开放世界动作冒险类游戏，是人气游戏《荒野大镖客》的最新续作。本作讲述在美国无情的蛮荒大地上绽放出的生命诗篇。游戏庞大又细腻的世界，也将是全新多人游戏模式体验的最佳舞台。
          </p>
        </div>
      </el-col>
    </el-row>
    <div class="game-info-index-content">

      <div class="game-info-home-cover1">
        <el-card>
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <el-image
                  style="width: 100%; height:100%"
                  :src="gameBGUrl"
                  fit="fill"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-card>
        <el-card>
          <Video></Video>
        </el-card>

      </div>
      <div class="game-info-home-cover2">
        <el-card style="height: 640px;">
          <a-list bordered :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
              {{ item }}
            </a-list-item>
          </a-list>
        </el-card>

        <el-card>
          xx
        </el-card>
      </div>

    </div>
<!--    评论-->
    <div class="game-home-comment">
      <div>
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
              <a-textarea :rows="4" :value="value" @change="handleChange" />
            </a-form-item>
            <a-form-item>
              <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                Add Comment
              </a-button>
            </a-form-item>
          </div>
        </a-comment>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "@/components/video/video";
import moment from 'moment';
export default {
  components: {Video},
  data() {
    return {
      gameCoverUrl: "http://img.xhnya.top/img/荒野大镖客2Cover.jpg",
      gameScore: 75,
      isIndex: true,
      gameBGUrl: "http://img.xhnya.top/img/荒野大镖客bg20220116.jpg",
      comments: [],
      submitting: false,
      value: '',
      moment,
    }
  },
  methods: {
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
  }
}
</script>

<style lang="less" scoped>
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
.game-home-ptext{
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
  float: left;
  width: 50%;
  padding-right: 10px;
}

.game-info-home-cover2 {
  float: right;
  width: 50%;
}
.game-home-comment{
  margin-top: 30px;
}
</style>
