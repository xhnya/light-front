<template>
  <div class="user-collections">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>收藏夹</span>
        <el-button style="float: right; padding: 3px 0" type="text">新建收藏夹</el-button>
      </div>
      <div v-for="item in collectionsList" :key="item.id" class="text item collections-item">
        <div>
          <span class="collections-title">{{ item.title }}</span><i style="margin-left: 3px;" v-show="item.isLock===1" class="el-icon-lock"></i>
        </div>
        <div>
          <span>{{ item.updateTime }}</span>更新- <span>{{ item.nums }}</span>条内容
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return { collectionsList: [
        {
          id: 1,
          title: "我的收藏夹",
          isLock: 1,
          updateTime: "2022-1-01",
          nums: 6666666
        },
        {
          id: 2,
          title: "我的收藏夹aaa",
          isLock: 0,
          updateTime: "2022-1-24",
          nums: 9999999
        },
        {
          id: 3,
          title: "我的收藏夹333",
          isLock: 1,
          updateTime: "2022-1-07",
          nums: 99999
        },
        {
          id: 4,
          title: "xhnya",
          isLock: 0,
          updateTime: "2022-1-15",
          nums: 7
        },
        {
          id: 5,
          title: "xhnya的收藏夹",
          isLock: 0,
          updateTime: "2022-1-03",
          nums: 4
        }
      ]}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@margin-top: 30px;
.user-collections{
  margin-top: 10px;
}

.collections-title{
  font-size: 18px;
  font-weight: bold;
}
.collections-item{
  margin-top: @margin-top;
}
</style>
