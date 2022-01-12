<template>
  <div>
    <div v-for="item in sysList" :key="item.id">
      <el-card class="box-message-system1">
        <div><span style="font-weight:bold;">{{ item.title }}</span><span
            style="margin-left: 10px;">{{ item.createTime }}</span></div>
        <div style="margin-left: 10px;margin-top: 10px;">{{ item.content }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sysList: [
        {
          id: 1,
          title: "这是一条系统消息",
          createTime: "2022年1月2日 11:53",
          content: "这是一条系统消息,快来看一看啦"
        },
        {
          id: 2,
          title: "这是一条系统消息",
          createTime: "2022年1月2日 11:53",
          content: "这是一条系统消息,快来看一看啦"
        },
        {
          id: 3,
          title: "这是一条系统消息",
          createTime: "2022年1月2日 11:53",
          content: "这是一条系统消息,快来看一看啦"
        },
        {
          id: 4,
          title: "这是一条系统消息",
          createTime: "2022年1月2日 11:53",
          content: "这是一条系统消息,快来看一看啦"
        },
        {
          id: 5,
          title: "这是一条系统消息",
          createTime: "2022年1月2日 11:53",
          content: "这是一条系统消息,快来看一看啦"
        }
      ],
    }
  },
  methods: {}
}
</script>

<style scoped>
.box-message-system1 {
  margin-left: 10px;
  margin-top: 10px;
  font-size: Small;
}
</style>
