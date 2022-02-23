<template>
  <!--  TODO: 无限长滚动条，暂时启用-->
  <!--  <a-list>-->
  <!--    <RecycleScroller-->
  <!--        v-infinite-scroll="handleInfiniteOnLoad"-->
  <!--        style="height: 600px;"-->
  <!--        :items="data"-->
  <!--        :item-size="73"-->
  <!--        key-field="id"-->
  <!--        :infinite-scroll-disabled="busy"-->
  <!--        :infinite-scroll-distance="10"-->
  <!--    >-->
  <!--      <a-list-item @click="toPageIndex(item.id)" slot-scope="{ item }">-->
  <!--        <a-list-item-meta :description="item.name">-->
  <!--          <a slot="title" :href="item.href">{{ item.title }}</a>-->
  <!--          <a-avatar-->
  <!--              slot="avatar"-->
  <!--              :src="item.cover"-->
  <!--          />-->
  <!--        </a-list-item-meta>-->
  <!--        <div>{{ item.time }}</div>-->
  <!--      </a-list-item>-->
  <!--    </RecycleScroller>-->
  <!--    <a-spin v-if="loading" class="demo-loading"/>-->
  <!--  </a-list>-->
  <div>
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
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
</template>
<script>
import community from '@/api/community'
import reqwest from 'reqwest';
import infiniteScroll from 'vue-infinite-scroll';
import {RecycleScroller} from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo';
export default {
  directives: {infiniteScroll},
  components: {
    RecycleScroller,
  },
  data() {
    return {
      data: [],
      radio: 1,
      state: [],
      dialogVisible: false,
      loading: false,
      busy: false,
      page: 1,
      limit: 5,
      listData: [],
      pagination: {
        onChange: page => {
          this.pagination.current = page
          this.getPageList()
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
          this.getPageList()
        }
      },
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
      pageId: 0


    };
  },
  // beforeMount() {
  //   this.fetchData(res => {
  //     this.data = res.data.results.map((item, index) => ({...item, index}));
  //   });
  // },
  created() {
    this.getPageList()
  },
  computed: {
    followList() {
      return this.$store.state.user.follow;
    }
  },

  methods: {
    fetchData(callback) {
      const params = {}
      params.page = this.pagination.current
      params.limit = this.pagination.pageSize
      community.indexListView(params).then((res) => {
        console.log(res.data.result)
        callback(res.data);
      })
      // reqwest({
      //   url: fakeDataUrl,
      //   type: 'json',
      //   method: 'get',
      //   contentType: 'application/json',
      //   success: res => {
      //     callback(res);
      //     console.log(res)
      //   },
      // });
    },
    handleInfiniteOnLoad() {
      const data = this.data;
      this.loading = true;
      if (data.length > 100) {
        this.$message.warning('Infinite List loaded all');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.fetchData(res => {
        this.data = data.concat(res.results).map((item, index) => ({...item, index}));
        this.loading = false;
      });
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    getPageList() {
      const params = {}
      params.page = this.pagination.current
      params.limit = this.pagination.pageSize
      community.indexListView(params).then((res) => {
        this.listData = res.data.results.list
        console.log(res)
        this.pagination.page = res.data.results.currPage
        this.pagination.pageSize = res.data.results.pageSize
        this.pagination.total = res.data.results.totalCount
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
        this.listData[index].likes=this.listData[index].likes+1
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

    }
  },
};
</script>
<style>
.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

.type-item-11 {
  height: 100%;
  width: 100%;
  overflow: hidden;

}

.type-item-12 {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
