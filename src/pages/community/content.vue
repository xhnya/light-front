<template>
  <a-list>
    <RecycleScroller
        v-infinite-scroll="handleInfiniteOnLoad"
        style="height: 600px;"
        :items="data"
        :item-size="73"
        key-field="id"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
    >
      <a-list-item @click="toPageIndex(item.id)" slot-scope="{ item }">
        <a-list-item-meta :description="item.name">
          <a slot="title" :href="item.href">{{ item.title }}</a>
          <a-avatar
              slot="avatar"
              :src="item.cover"
          />
        </a-list-item-meta>
        <div>{{ item.time }}</div>
      </a-list-item>
    </RecycleScroller>
    <a-spin v-if="loading" class="demo-loading"/>
  </a-list>
</template>
<script>
import community from '@/api/community'
import reqwest from 'reqwest';
import infiniteScroll from 'vue-infinite-scroll';
import {RecycleScroller} from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

const fakeDataUrl= 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo';
export default {
  directives: {infiniteScroll},
  components: {
    RecycleScroller,
  },
  data() {
    return {
      data: [],
      loading: false,
      busy: false,
      page: 1,
      limit: 10,

    };
  },
  beforeMount() {
    this.fetchData(res => {
      this.data = res.data.results.map((item, index) => ({...item, index}));
    });
  },
  created() {
    this.getPageList()
  },
  methods: {
    fetchData(callback) {
      const params = {}
      params.page = this.page
      params.limit = this.limit
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
    getPageList() {
      // const params = {}
      // params.page = this.page
      // params.limit = this.limit
      // community.indexListView(params).then((res) => {
      //   console.log(res)
      //   this.data = res.data.page.list
      // })
    },
    toPageIndex(val) {
      this.$router.push({path: `/page/${val}`})
    },
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
