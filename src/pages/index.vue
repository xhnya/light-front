<template>
  <div class="index-header">
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
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>

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
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
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
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
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
                <el-divider direction="vertical"></el-divider>
                <span>荒野大镖客2</span>
                <el-divider direction="vertical"></el-divider>
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
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>

        <!--      列表-->
        <el-col :span="8">
          <div class="grid-content index-content-item">
            <div v-for="o in 8" :key="o" class="text item2 max-text ">
              {{ '老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。' + o }}
              <hr>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <!--          卡片 ---------------常用-->
          <el-card style="float: right;" :body-style="{ padding: '0px' }" class="box-card"
          >
            <div slot="header" class="clearfix">
              <span> 常用</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div style="margin-left: 20px;" v-for="o in 3" :key="o" class="text item">
              {{ '列表内容 ' + o }}
            </div>
          </el-card>

          <el-card style="float: right; " :body-style="{ padding: '0px' }" class="box-card2">
            <div slot="header" class="clearfix">
              <span> 规则</span>
              <el-button style="float: right; padding: 1px 0" type="text">操作</el-button>
            </div>
            <div v-for="o in 3" :key="o" class="text item" style="margin-left: 20px;">
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
              <div v-for="o in 4" :key="o" class="text item">
                {{ '列表内容 ' + o }}
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="12">
          <div   class="grid-content">
            <el-card style="float: right;" class="box-card4">
              <div slot="header" class="clearfix">
                <span>游戏动态</span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{ '列表内容 ' + o }}
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
                  <span>排行榜</span>
                </el-card>
              </div>
              <el-collapse v-for="o in 5" :key="o" v-model="activeName1" accordion>
                <div @mouseenter="changeItem1(o)">
                  <el-collapse-item title="一致性 Consistency" :name="o">
                    <div>{{ o }}与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                  <span>排行榜</span>
                </el-card>
              </div>
              <el-collapse v-for="o in 5" :key="o" v-model="activeName2" accordion>
                <div @mouseenter="changeItem2(o)">
                  <el-collapse-item title="一致性 Consistency" :name="o">
                    <div> {{ o }}与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                  <span>排行榜</span>
                </el-card>
              </div>
              <el-collapse v-for="o in 5" :key="o" v-model="activeName3" accordion>
                <div @mouseenter="changeItem3(o)">
                  <el-collapse-item title="一致性 Consistency" :name="o">
                    <div> {{ o }}与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
          </div>

        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      activeName1: '1',
      activeName2: '1',
      activeName3: '1',
    };
  },
  created() {
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

  },
};
</script>

<style scoped>
@import '../assets/style/home.css';


</style>
