<template>
  <div class="all-game-body">
    <div class="all-game-body01">
      <el-card class="box-card">
        <h1>全部游戏</h1>
<!--        TODO: 游戏分类显示-->
<!--        <div style="margin: 30px">-->
<!--          <el-button type="primary">分类</el-button>-->
<!--        </div>-->
<!--        <div style="margin: 30px">-->
<!--          <el-button type="primary">标签</el-button>-->
<!--        </div>-->
        <a-list item-layout="vertical"
                size="large"
                :pagination="pagination"
                :data-source="listData">
          <div slot="footer"><b>light</b>: 所有游戏</div>
          <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
            <img
                slot="extra"
                width="272"
                alt="logo"
                :src="item.imgUrl"
            />
            <a-list-item-meta :description="item.describes">
              <div @click="gotoGameInfo(item.id)" slot="title">{{ item.name }}</div>
            </a-list-item-meta>
            <el-descriptions class="margin-top"  :column="3" :size="size">
              <el-descriptions-item label="发行时间">{{ item.releaseTime }}</el-descriptions-item>
              <el-descriptions-item label="发行">{{ item.makingName }}</el-descriptions-item>
              <el-descriptions-item label="制作">{{ item.issueName }}</el-descriptions-item>
              <el-descriptions-item label="类型">
                {{item.typeName}}
              </el-descriptions-item>
              <el-descriptions-item label="平台">
                PC
              </el-descriptions-item>
              <el-descriptions-item label="语言">
                简体中文
              </el-descriptions-item>
            </el-descriptions>
          </a-list-item>
        </a-list>
      </el-card>

    </div>


  </div>
</template>

<script>
import game from '@/api/game'

export default {
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
    }
  },
  created() {
    this.getGameList()
  },
  methods: {
    getGameList() {
      const params = {}
      game.reqAllGameList(params).then((res) => {
        this.listData = res.data.result
      })
    },
    gotoGameInfo(val) {
      this.$router.push({path: '/game/' + val})
    }
  }
}
</script>

<style lang="less" scoped>
@OverallMargin: 15%;
.all-game-body {
  padding-top: 30px;
  background-color: #f0f0f0;
  padding-bottom: 30px;
}

.all-game-body01 {
  margin: 0 @OverallMargin 10px @OverallMargin;
}
</style>
