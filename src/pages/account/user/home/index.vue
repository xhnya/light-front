<template>
  <div>
    <el-card class="user-home-body">
      <div slot="header" class="clearfix">
        <span>个人资料</span>
        <el-button @click="dialogVisible=true" style="float: right; padding: 3px 0" type="text">修改个人资料</el-button>
      </div>
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">{{ userinfo.userName }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ userinfo.phone }}</el-descriptions-item>
        <el-descriptions-item label="所在地">{{ userinfo.address }}</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">描述</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ userinfo.email }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-dialog
        title="修改个人信息"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <div>
        <div style="margin: 20px;"></div>
        <el-form label-position="right" label-width="80px" :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="城市">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="form.signature"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
                class="upload-demo"
                :action="url"
                :on-success="uploadCover"
                multiple
                :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景图片">
            <el-upload
                class="upload-demo"
                :action="url"
                :on-success="uploadBg"
                multiple
                :limit="1">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeUserInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import user from "@/api/user";
import {uploadUrl} from '@/utils/upload'

export default {
  data() {
    return {
      userinfo: {},
      dialogVisible: false,
      form: {},
      url: uploadUrl,
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      user.reqUserInfoForView().then((res) => {
        this.userinfo = res.data.result
        this.form = res.data.result
        this.form.id=res.data.result.id
        console.log(this.form)
      })
    },
    uploadCover(response, file) {
      this.form.avatar = response.data.url
      this.$message({
        message: '头像上传成功',
        type: 'success'
      });
    },
    uploadBg(response, file) {
      this.form.bgUrl = response.data.url
      this.$message({
        message: '背景图片上传成功',
        type: 'success'
      });
    },
    changeUserInfo() {
      this.dialogVisible = false
      user.updateUserInfo(this.form).then((res) => {
        this.$message({
          message: '更新成功',
          type: 'success'
        });
        this.getUserInfo()
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    }
  }
}
</script>

<style scoped>
.user-home-body {
  margin-top: 10px;
}
</style>
