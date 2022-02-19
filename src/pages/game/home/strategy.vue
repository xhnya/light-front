<template>
  <div>
    <el-card class="info-item-card">
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
        <div slot="footer"><b><i>{{ this.$store.state.game.gameInfo.gameName }}</i></b> 攻略</div>
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
    }
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
      params.type = '攻略'
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

<style scoped>

</style>
