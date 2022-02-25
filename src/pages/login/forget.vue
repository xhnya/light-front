<template>
  <div style="margin-left: 15%;margin-right: 15%;">
    <div style="margin: 150px;">
      <el-card>
        <el-tabs type="border-card">
          <el-tab-pane label="手机号验证">
            <el-form label-position="right" label-width="80px">
              <el-form-item label="手机号">
                <el-input style="width: 300px;" v-model="username"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input
                    type="text"
                    class="lable-width"
                    v-model="code"
                    autocomplete="off"
                    style="width: 300px;"
                >

                  <el-button v-if="show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                             @click="sms" type="primary">获取验证码
                  </el-button>
                  <el-button v-if="!show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                             type="primary">{{ times }}s
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input style="width: 300px;" type="password" v-model="pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input style="width: 300px;" type="password" v-model="checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(0)">提交</el-button>
                <el-button @click="resetForm()">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="邮箱验证">
            <el-form label-position="right" label-width="80px">
              <el-form-item label="邮箱">
                <el-input style="width: 300px;" v-model="username"></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input
                    type="text"
                    class="lable-width"
                    v-model="code"
                    autocomplete="off"
                    style="width: 300px;"
                >

                  <el-button v-if="show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                             @click="sendEmail" type="primary">获取验证码
                  </el-button>
                  <el-button v-if="!show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                             type="primary">{{ times }}s
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input style="width: 300px;" type="password" v-model="pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input style="width: 300px;" type="password" v-model="checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(1)">提交</el-button>
                <el-button @click="resetForm()">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import user from "@/api/user";

export default {
  data() {
    return {
      code: '',
      username: '',
      times: 60,
      show: true,
      pass: '',
      checkPass: ''
    }
  },
  methods: {
    sms() {
      if (this.username === "") {
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        });
        return;
      }
      this.show = false
      this.timer = setInterval(() => {
        this.times--
        if (this.times === 0) {
          this.show = true
          clearInterval(this.timer)
          this.times = 60
        }
      }, 1000)
      user.smsPhone(this.username).then((res) => {
        this.$message({
          message: '发送成功',
          type: 'success'
        });
      })
    },
    sendEmail(){
      if (this.username === "") {
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        });
        return;
      }
      this.show = false
      this.timer = setInterval(() => {
        this.times--
        if (this.times === 0) {
          this.show = true
          clearInterval(this.timer)
          this.times = 60
        }
      }, 1000)
      user.sendEmails(this.username).then((res) => {
        this.$message({
          message: '发送成功',
          type: 'success'
        });
      })
    },
    submitForm(val) {
      if (this.pass != this.checkPass) {
        this.$message.error('两次密码不一致');
        return false;
      }
      if (this.code === "") {
        this.$message({
          message: '请输入验证码',
          type: 'warning'
        });
        return;
      }
      const param = {}
      param.code=this.code
      param.userName=this.username
      param.pass=this.pass
      param.checkPass=this.checkPass
      param.type=val
      user.changePassword(param).then((res) => {
        this.$message({
          message: '密码更新成功',
          type: 'success'
        });
        this.$router.push({path: '/login'})
      })

    },
    resetForm() {
      this.phone = ''
      this.pass = ''
      this.checkPass = ''
      this.code = ''
    }
  }
}
</script>

<style scoped>

</style>
