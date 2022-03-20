<template>
  <div>
    <div class="message-reply-item">
      <el-card>
        <div v-for="item in replyList" :key="item.id">
          <el-avatar style="width: 50px;height: 50px;margin-top: 10px;" size="large" :src="circleUrl"></el-avatar>
          <div style="display:inline-block;" class="reply-content-item">
            <div v-html="item.message "></div>
            <div class="max-text">{{ item.likeTime }}</div>
          </div>
          <el-divider></el-divider>
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
import user from "@/api/user";

export default {
  data() {
    return {
      circleUrl: "http://img.xhnya.top/img/vae.jpg",
      replyList: []
    }
  },
  created() {
    this.getMyLikeMessage()
  },
  methods: {
    getMyLikeMessage() {
      user.reqMyLikeMessage().then((res) => {
        this.replyList=res.data.result
      })

    }
  }
}
</script>

<style scoped>

.reply-index {
}

.message-reply-item {
  margin-left: 10px;
  margin-top: 20px;
}

.reply-content-item {
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
