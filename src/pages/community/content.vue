<template>
  <a-list>
    <RecycleScroller
        v-infinite-scroll="handleInfiniteOnLoad"
        style="height: 600px;"
        :items="data"
        :item-size="73"
        key-field="email"
        :infinite-scroll-disabled="busy"
        :infinite-scroll-distance="10"
    >
      <a-list-item slot-scope="{ item }">
        <a-list-item-meta :description="item.email">
          <a slot="title" :href="item.href">{{ item.name.last }}</a>
          <a-avatar
              slot="avatar"
              src="http://img.xhnya.top/img/vae.jpg"
          />
        </a-list-item-meta>
        <div>Content {{ item.index }}</div>
      </a-list-item>
    </RecycleScroller>
    <a-spin v-if="loading" class="demo-loading"/>
  </a-list>
</template>
<script>
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
      loading: false,
      busy: false,
    };
  },
  beforeMount() {
    this.fetchData(res => {
      this.data = res.results.map((item, index) => ({...item, index}));
    });
  },
  methods: {
    fetchData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
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
