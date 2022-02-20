<template>
  <div>
    <div class="gameInfoBg1">
      <div>
        <div class="game-info-bg01" :style="{backgroundImage: 'url(' + this.$store.state.game.gameInfo.bgUrl + ')'}">
        </div>
      </div>
      <div class="game-info-content">
        <el-card>
          <el-button @click="changeType('全部')"> 全部</el-button>
          <el-button @click="changeType('原创')">原创</el-button>
          <el-button @click="changeType('攻略')">攻略</el-button>
          <el-button @click="changeType('资讯')">资讯</el-button>
          <el-button @click="changeType('评测')">评测</el-button>
          <div style="float: right">
            <el-input placeholder="请输入内容" v-model="title" class="input-with-select">
              <el-button @click="getPageList" slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-card>

        <el-card style="margin-top: 30px;padding-bottom: 30px;">
          <el-button type="primary" icon="el-icon-plus">发帖</el-button>
          <div style="float: right" class="block page">
            <el-pagination
                @size-change="sizeChangeHandle"
                @current-change="currentChangeHandle"
                :current-page="page"
                :page-sizes="[10, 50, 100, 500]"
                :page-size.sync="limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
          </div>
          <div>
            <a-list item-layout="vertical" size="large" :data-source="listData">
              <div slot="footer"><b>light</b> 社区</div>
              <a-list-item slot="renderItem" key="item.name" slot-scope="item, index">
                <template slot="actions">
                  <div @click="open(item.id)">
                    <a-icon type="star-o" style="margin-right: 8px"/>
                    <span>{{ item.collection }}</span>
                  </div>
                  <div @click="userLikes(item.id,index)">
                    <a-icon type="like-o" style="margin-right: 8px"/>
                    <span>{{ item.likes }}</span>
                  </div>
                  <div>
                    <a-icon type="message" style="margin-right: 8px"/>
                    <span>{{ item.countComment }}</span>
                  </div>
                </template>
                <a-list-item-meta :description="item.name">
                  <div @click="toPageIndex(item.id)" slot="title"><span>{{ item.title }}</span></div>
                  <a-avatar slot="avatar" :src="item.cover"/>
                </a-list-item-meta>
                <div @click="toPageIndex(item.id)">{{ item.content }}</div>
              </a-list-item>
            </a-list>
            <el-dialog
                title="选择收藏夹"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
              <div>
                <el-radio-group v-model="radio">
                  <div v-for="item in followList" :key="item.id" class="text item">
                    <el-radio-button :label="item.id">{{ item.modelName }}</el-radio-button>
                    <el-divider></el-divider>
                  </div>
                </el-radio-group>
              </div>
              <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCpllections">确 定</el-button>
      </span>
            </el-dialog>
          </div>
          <div style="float: right" class="block page">
            <el-pagination
                @size-change="sizeChangeHandle"
                @current-change="currentChangeHandle"
                :current-page="page"
                :page-sizes="[10, 50, 100, 500]"
                :page-size.sync="limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            >
            </el-pagination>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import community from "@/api/community";

export default {
  data() {
    return {
      page: 1,
      limit: 10,
      total: 10,
      data: [],
      radio: 1,
      state: [],
      dialogVisible: false,
      loading: false,
      busy: false,
      listData: [],
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
      pageId: 0,
      type: '全部',
      title: ''
    }
  },
  created() {
    this.getPageList()
  },
  computed: {
    followList() {
      return this.$store.state.user.follow;
    }
  },
  methods: {
    sizeChangeHandle(val) {
      this.limit = val
      this.page = 1
      this.getBannerList()
    },
    // 当前页
    currentChangeHandle(val) {
      this.page = val
      this.getBannerList()
    },
    getPageList() {
      const params = {}
      params.page = this.page
      params.limit = this.limit
      params.gameId = this.$store.state.game.gameInfo.id
      params.title = this.title
      if (this.type !== '全部') {
        params.publishType = this.type
      }
      community.reqGameCommunityList(params).then((res) => {
        this.listData = res.data.results.list
        this.page = res.data.results.currPage
        this.limit = res.data.results.pageSize
        this.total = res.data.results.totalCount
      })
    },
    toPageIndex(val) {
      this.$router.push({path: `/page/${val}`})
    },
    open(val) {
      this.dialogVisible = true
      this.pageId = val
    },
    submitCpllections() {
      this.dialogVisible = false
      const params = {}
      params.contentId = this.pageId
      params.parentId = this.radio
      community.reqCollections(params).then((res) => {
        this.$message({
          message: '收藏成功',
          type: 'success'
        });
      })
      this.getPageList()
    },
    userLikes(val, index) {
      if (this.state[index] !== 1) {
        this.listData[index].likes++
        this.state[index] = 1
      }
      const params = {}
      params.pid = val
      community.reqLike(params).then((res) => {
        this.$message({
          message: '点赞成功',
          type: 'success'
        });
      })

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    changeType(val) {
      console.log(val)
      this.type=val
      this.getPageList()
    }
  }
}
</script>

<style lang="less" scoped>
.gameInfoBg1 {
  background-color: #222222;
}

.game-info-card1 {
  margin-right: @Margin20;
  margin-left: @Margin20;
}

.game-info-bg01 {
  width: 100%;
  height: auto;
  min-height: 500px;
  background: no-repeat center top;
  //background-size: 100% 100%;
}

.game-info-content {
  .game-info-card1;
  z-index: 6;
  margin: -185px auto;
  position: relative;
  width: 1200px;
  //margin-top: -185px;
}
</style>
