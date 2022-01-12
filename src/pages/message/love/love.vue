<template>
  <div>
    <div class="message-reply-item">
      <el-card>
        <div v-for="item in replyList" :key="item.id">
          <el-avatar style="width: 50px;height: 50px;margin-top: 10px;" size="large" :src="circleUrl"></el-avatar>
          <div style="display:inline-block;" class="reply-content-item">
            <div>{{item.id}}</div>
            <div class="max-text" >{{item.content}}</div>
          </div>
          <el-divider></el-divider>
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:"http://img.xhnya.top/img/vae.jpg",
      replyList:[
        {
          id: 1,
          content: "时运不齐，命途多舛。冯唐易老，李广难封。",
        },
        {
          id: 2,
          content: "屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？",
        },
        {
          id: 3,
          content: "所赖君子见机，达人知命。",
        },
        {
          id: 4,
          content: "老当益壮，宁移白首之心？穷且益坚，不坠青云之志。",
        },
        {
          id: 5,
          content: "酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！",
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

.reply-index{
}
.message-reply-item{
  margin-left: 10px;
  margin-top: 20px;
}
.reply-content-item{
  margin-left: 10px;


}
/*设置文字最大显示长度*/
.max-text {
  width: 600px;
  overflow: hidden;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

</style>
