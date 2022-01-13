<template>
  <div style="background-color: #f4f5f7">
    <div class="user-body">
      <!--    头部背景卡片-->
      <div>
        <el-card class="box-user-card1">
          <el-card
              class="box-user-card2"
              :style="{backgroundImage: 'url(' + bgUrl + ')', backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',}">
            <div>
              <div class="box-user-header">
                <div class="user-changer-cover">
                  <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                  >
                    <el-button size="small" class="upload-user-button" plain>编辑封面图片</el-button>
                  </el-upload>
                </div>
                <div class="user">
                  <el-avatar size="large" :src="userinfo.cover"></el-avatar>
                </div>

              </div>
            </div>
          </el-card>

        </el-card>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      bgUrl: "http://img.xhnya.top/img/userbg.webp",
      userinfo: {
        cover: "http://img.xhnya.top/img/vae.jpg"
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@marginLeftAndRight: 15%;
@margin-user: 30px;

.user-body {
  padding-top: @margin-user;
  margin-left: @marginLeftAndRight;
  margin-right: @marginLeftAndRight;
}

.box-user-card1 {
}
.box-user-card2 {
  height: 192px;
  padding: 0;

}

.box-user-header {
}

.user-changer-cover {
  float: right;
}

.upload-user-button {
  background-color: transparent;
  border-style: none;
}
.box-user-card1 /deep/ .el-card__body {
  padding: 0;
}
</style>
