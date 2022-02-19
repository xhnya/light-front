<template>
  <div>
    <HeaderBanner></HeaderBanner>
    <!--    资讯列表-->
    <div class="info-item-body">
      <el-row>
        <el-col :span="15">
          <el-card class="info-item-card">
            <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
              <div slot="footer"><b><i>light</i></b> 资讯</div>
              <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px"/>
                    <span v-if="type==='star-o'">{{ item.collection }}</span>
                    <span v-if="type==='star-o'">{{ item.likes }}</span>
                    <span v-if="type==='star-o'">{{ item.countComment }}</span>
                  </span>
                </template>
                <img
                    slot="extra"
                    width="272"
                    alt="logo"
                    :src="item.url"
                />
                <a-list-item-meta :description="item.name">
                  <div @click="gotoPageInfo(item.id)" slot="title">
                    <span>{{ item.title }}</span>
                  </div>
                  <a-avatar slot="avatar" :src="item.cover"/>
                </a-list-item-meta>
                <div @click="gotoPageInfo(item.id)">{{ item.content }}</div>
              </a-list-item>
            </a-list>
          </el-card>
        </el-col>

        <el-col :span="9">
          <div class="info-game-evaluating">
            <el-card>
              <div slot="header" class="clearfix">
                <span>游戏评测</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-d-arrow-right"></i>
                </el-button>
              </div>
              <div v-for="item in evaluatingList">
                <div>
                  <el-row>
                    <el-col :span="10">
                      <div>
                        <el-image
                            style="width: 100%; height: 100px"
                            :src="item.url"
                            fit="fill"></el-image>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <div @click="gotoPageInfo(item.pageId)" class="info-evaluating-content">
                        <p v-text="item.scoreDescribe">它确实在维持原本风味的同时，变得更好了，但可能仍旧无法吸引回对这个配方失去兴趣的食客</p>
                        <p style="display:flex;align-items:flex-end;margin-bottom: 0;">
                          {{item.createTime }}-{{ item.scoreName }}</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="info-evaluating-nums">
                        <a-statistic title="评分" :value="item.gameScore" :value-style="{ color: '#fb7299' }"
                                     style="margin-right: 50px;"/>

                      </div>
                    </el-col>
                  </el-row>
                </div>
                <a-divider/>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>


    </div>


  </div>
</template>

<script>
import community from "@/api/community";
import game from "@/api/game";

export default {
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          this.pagination.current = page
          this.getInformation()
        },
        pageSizeOptions: ['5', '10', '30', '100'],
        pageSize: 5,
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0,
        current: 1,
        onShowSizeChange: (current, size) => {
          this.pagination.current = current
          this.pagination.pageSize = size
          this.getInformation()
        }
      },
      actions: [
        {type: 'star-o', text: '0'},
        {type: 'like-o', text: '0'},
        {type: 'message', text: '0'},
      ],
      evaluatingUrl: "http://img.xhnya.top/img/孤岛惊魂6.jpg",
      evaluatingList: []
    }
  },
  created() {
    this.getInformation()
    this.getEvaluating()
  },
  methods: {
    gotoPageInfo(val) {
      this.$router.push({path: '/page/' + val})
    },
    getInformation() {
      const params = {}
      params.page = this.pagination.current
      params.limit = this.pagination.pageSize
      community.reqInformation(params).then((res) => {
        this.listData = res.data.page.list
        this.pagination.page = res.data.page.currPage
        this.pagination.pageSize = res.data.page.pageSize
        this.pagination.total = res.data.page.totalCount

      })
    },
    getEvaluating() {
      game.reqEvaluating().then((res) => {
        this.evaluatingList = res.data.result
      })
    }
  }
}
</script>

<style scoped>
.info-item-body {
  margin-left: 15%;
  margin-top: 30px;
}

.info-item-card {
  /*margin-top: 30px;*/
}

.info-game-evaluating {
  margin-left: 15px;
  margin-right: 30px;
}

.info-evaluating-nums {
  text-align: center;
}

.info-evaluating-content {
  margin-left: 10px;
}
</style>
