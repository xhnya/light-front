<template>
  <div>
    <div class="game-info-info-body">
      <el-row>
        <el-col :span="16">
          <el-card class="info-item-card">
            <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
              <div slot="footer"><b><i>{{ this.$store.state.game.gameInfo.gameName }}</i></b> 资讯</div>
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
        <el-col :span="8">

        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import community from "@/api/community";

export default {
  data() {
    return {
      listData: [],
      pagination: {
        onChange: page => {
          this.pagination.current = page
          this.getInformationList()
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
          this.getInformationList()
        }
      },
      actions: [
        {type: 'star-o', text: '0'},
        {type: 'like-o', text: '0'},
        {type: 'message', text: '0'},
      ],
    };
  },
  created() {
    this.getInformationList()
  },
  methods: {
    gotoPageInfo(val) {
      this.$router.push({path: '/page/' + val})
    },
    getInformationList() {
      const params = {}
      params.page = this.pagination.current
      params.limit = this.pagination.pageSize
      params.gameId = this.$store.state.game.gameInfo.id
      params.type = '资讯'
      community.reqInformationByGameId(params).then((res) => {
        this.listData = res.data.page.list
        this.pagination.page = res.data.page.currPage
        this.pagination.pageSize = res.data.page.pageSize
        this.pagination.total = res.data.page.totalCount
      })

    }
  }
}
</script>

<style lang="less" scoped>
.game-info-info-body {
  color: #c7c7cc;
}

.game-info-info-item {
  color: #c7c7cc;
}

.ant-list-item-meta-description {
  color: #c7c7cc;
}

.ant-list-item-action > li {
  color: #c7c7cc;
  font-size: 18px;

}

.ant-list-item-action {
  color: #c7c7cc;
}

</style>
