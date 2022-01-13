<template>
  <div class="history-body">
    <HeaderBanner/>
<!--    头部-->
    <div>
      <div>
        <div  class="history-icon">
          <i class="el-icon-alarm-clock"></i>
          <span>历史记录</span>
        </div>
        <div class="history-search"  style="color: #ffffff ;display:inline">
          <el-input class="history-search-input"  prefix-icon="el-icon-search"  v-model="input" placeholder="搜索历史记录"></el-input>
          <el-button  class="history-search-button" size="small"   type="primary" plain>清空历史</el-button>
        </div>
      </div>
    </div>
<!--    历史记录列表-->
    <div >
      <el-timeline reverse="reverse">
        <el-timeline-item v-for="(item,index) in historyList" :key="index" :timestamp="item.data" placement="top">
          <div v-for="(list,index) in item.content" :key="index">
            <el-card  class="history-timeline-item">
              <div style="display:inline;">
                <h4>{{ list.title }}</h4>
                <p>{{ item.username }} 观看于 {{ list.createTime }}</p>
              </div>
              <div class="history-icon-delete">
                <i class="el-icon-delete"></i>
              </div>
            </el-card>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      historyList: [
        {
          id: 1,
          data: '2018/4/12',
          username: "xhnya",
          content: [
            {
              createTime: "2018/4/12 20:46",
              title: "这是我观看的历史记录1111",

            },
            {
              createTime: "2018/4/12 21:46",
              title: "这是我观看的历史记录",

            },
            {
              createTime: "2018/4/12 22:46",
              title: "这是我观看的历史记录xxx",

            },

          ]
        },
        {
          id: 2,
          data: '2019/4/12',
          username: "xhnya",
          content: [
            {
              createTime: "2018/4/12 20:46",
              title: "这是我观看的历史记录1111",

            },
            {
              createTime: "2018/4/12 21:46",
              title: "这是我观看的历史记录",

            },
            {
              createTime: "2018/4/12 22:46",
              title: "这是我观看的历史记录xxx",

            },

          ]
        },
        {
          id: 3,
          data: '2021/4/12',
          username: "xhnya",
          content: [
            {
              createTime: "2018/4/12 20:46",
              title: "这是我观看的历史记录1111",

            },
            {
              createTime: "2018/4/12 21:46",
              title: "这是我观看的历史记录",

            },
            {
              createTime: "2018/4/12 22:46",
              title: "这是我观看的历史记录xxx",

            },

          ]
        },
        {
          id: 4,
          data: '2022/4/12',
          username: "xhnya",
          content: [
            {
              createTime: "2018/4/12 20:46",
              title: "这是我观看的历史记录1111",

            },
            {
              createTime: "2018/4/12 21:46",
              title: "这是我观看的历史记录",

            },
            {
              createTime: "2018/4/12 22:46",
              title: "这是我观看的历史记录xxx",

            },

          ]
        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@marginLeftAndRight: 30%;
@margin-top: 30px;
@levelDisplay: inline;

.history-body {
  margin-top: 30px;
  margin-right: @marginLeftAndRight;
  margin-left: @marginLeftAndRight;
}

.history-timeline-item {
  margin-top: 5px;
}

.history-icon{
  font-size: 28px;
  margin-bottom: @margin-top;
  display: @levelDisplay;

}
.history-icon i{
  color: #e3936c;
}
.history-icon span{
  margin-left: 5px;
}
.history-search{
  position: absolute;
  right: @marginLeftAndRight;
  border-radius: 4px
}
.history-search-input{
  width: 188px;
  background-color: #ffffff;
}
.history-search-button{
    margin-left: 30px;
}
.history-icon-delete{
  font-size: 16px;
  text-align: center;
  float: right;
}
</style>
