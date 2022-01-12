<template>
  <div class="message-index">
    <!--    消息中心-->
    <div>
      <el-row>
        <!--        左边固定列-->
        <el-col style="background-color: #e8f5fd;" :span="4">
          <div style="height: 100%;" class="grid-content bg-purple-dark">
            <div class="message-sys-item">
              <i class="el-icon-s-promotion"></i><span>消息中心</span>
            </div>
            <div>
              <ul class="message-sys-ui">
                <li @click="changerHeaderName('回复我的')">
                  <router-link to="/message/reply">回复我的</router-link>
                </li>
                <li @click="changerHeaderName('@我的')">
                  <router-link to="/message/atme">@我的</router-link>
                </li>
                <li @click="changerHeaderName('收到的赞')">
                  <router-link to="">收到的赞</router-link>
                </li>
                <li @click="changerHeaderName('系统通知')">
                  <router-link to="">系统通知</router-link>
                </li>
                <li @click="changerHeaderName('我的消息')">
                  <router-link to="">我的消息</router-link>
                </li>
              </ul>
            </div>
            <div class="message-sys-item">
              <i class="el-icon-setting"></i><span>消息设置</span>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-dark">
            <!--            头部-->
            <div>
              <el-card class="box-message-1">
                {{ headerName }}
              </el-card>
            </div>
            <div>
              <router-view/>
            </div>
          </div>

        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      headerName: "回复我的",
    }
  },
  methods: {
    changerHeaderName(val) {
      this.headerName = val
    }
  }
}
</script>

<style scoped>
.message-index {
  margin-top: 30px;
  margin-left: 20%;
  margin-right: 20%;
}

.message-sys-item {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.message-sys-ui {
  margin-top: 30px;
}

.message-sys-ui li {
  margin-top: 20px;
  margin-left: 10px;
}

.message-sys-ui li a {
  color: #6b757b;
  text-decoration: none;
}
.box-message-1{
  margin-left: 10px;
}
</style>
