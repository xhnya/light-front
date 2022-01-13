<template>
  <div>
    <el-card class="user-home-body">
      <div slot="header" class="clearfix">
        <span>个人资料</span>
        <el-button style="float: right; padding: 3px 0" type="text">修改个人资料</el-button>
      </div>
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">xhnya</el-descriptions-item>
        <el-descriptions-item label="手机号">15079730794</el-descriptions-item>
        <el-descriptions-item label="所在地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">描述</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="邮箱">xhnya@foxmail.com</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.user-home-body{
  margin-top: 10px;
}
</style>
