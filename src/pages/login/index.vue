<template>
  <div>
    <!--    <div data-v-2c844fd9="" class="top-banner"><img src="@/assets/rl_top.35edfde.png"></div>-->
    <div class="title-line"><span class="tit" style="font-size: 38px;">登录</span></div>
    <el-row>
      <el-col :span="16">
        <div></div>
        <div class="line"></div>
      </el-col>

      <el-col :span="8">
        <div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="账号登录" name="first"
            >
              <el-form
                  label-position="right"
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
              >
                <el-form-item label="用户名" prop="userName">
                  <el-input
                      type="text"
                      v-model="ruleForm.userName"
                      autocomplete="off"
                      placeholder="请输入账号/手机号/邮箱"
                      class="lable-width"

                  ></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input
                      type="password"
                      v-model="ruleForm.pass"
                      autocomplete="off"
                      class="lable-width"
                  ></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input class="lable-width" v-model.number="ruleForm.code"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click.prevent="userLogin">
                    登录
                  </el-button>
                  <el-button @click="resetForm('ruleForm')">注册</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="验证登录" name="second"
            >
              <el-form
                  label-position="right"
                  :model="phoneForm"
                  status-icon
                  :rules="rules"
                  ref="phoneForm"
                  label-width="100px"
                  class="demo-ruleForm"
              >
                <el-form-item
                    :rules="[
                    {
                      required: true,
                      message: '请输入手机号码',
                      trigger: 'blur',
                    },
                    { validator: checkPhone, trigger: 'blur' },
                  ]"
                    label="手机号"
                    prop="mobile"
                >
                  <el-input
                      type="text"
                      v-model="username"
                      autocomplete="off"
                      class="lable-width"
                  ></el-input>
                </el-form-item>
                <el-form-item
                    :rules="[
                    {
                      required: true,
                      message: '请输入验证码',
                      trigger: 'blur',
                    },
                  ]"
                    label="验证码"
                    prop="code"
                >
                  <el-input
                      type="text"
                      class="lable-width"
                      v-model="code"
                      autocomplete="off"
                  >

                    <el-button v-if="show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                               @click="sms" type="primary">获取验证码
                    </el-button>
                    <el-button v-if="!show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                               type="primary">{{ times }}s
                    </el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="userLoginForPhone">登录
                  </el-button>
                  <el-button @click="resetForm('ruleForm')">注册</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane
            >
            <el-tab-pane label="邮箱登录" name="third"
            >
              <el-form
                  label-position="right"
                  :model="emailForm"
                  status-icon
                  :rules="rules"
                  ref="emailForm"
                  label-width="100px"
                  class="demo-ruleForm"
              >
                <el-form-item
                    :rules="[
                    {
                      type: 'email',
                      required: true,
                      message: '请输入邮箱',
                      trigger: 'blur',
                    },
                  ]"
                    label="邮箱"
                    prop="email"
                >
                  <el-input
                      type="text"
                      v-model="username"
                      autocomplete="off"
                      class="lable-width"
                  ></el-input>
                </el-form-item>
                <el-form-item
                    :rules="[
                    {
                      required: true,
                      message: '请输入验证码',
                      trigger: 'blur',
                    },
                  ]"
                    label="验证码"
                    prop="code"
                >
                  <el-input
                      type="text"
                      class="lable-width"
                      v-model="code"
                      autocomplete="off"
                  >

                    <el-button v-if="show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                               @click="sendEmail" type="primary">获取验证码
                    </el-button>
                    <el-button v-if="!show" style="background-color: #00a1d6;color: #fffffc;height: 100%" slot="append"
                               type="primary">{{ times }}s
                    </el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="userLoginForPhone"
                  >登录
                  </el-button
                  >
                  <el-button @click="resetForm('ruleForm')">注册</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane
            >
          </el-tabs>
          <el-link type="primary"><router-link to="/forget">忘记密码</router-link> </el-link>
        </div>
      </el-col>
    </el-row>
    <p data-v-2c844fd9="">登录即代表你同意<a data-v-2c844fd9="" target="_blank" href="#">
      用户协议</a>和<a data-v-2c844fd9="" target="_blank" href="#">隐私政策</a></p>

  </div>
</template>

<script>
import user from "@/api/user";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        code: "",
        userName: "",
      },
      phoneForm: {
        mobile: "",
        code: "",
      },
      emailForm: {
        email: "",
        code: "",
      },
      step: 1,
      fdPhone: '',
      findByPhoneCode: "",
      findByPassword: "",
      dialogVisible: false,
      activeName: "first",
      rules: {
        pass: [
          {min: 3, message: "长度大于3", trigger: "blur"},
          {validator: validatePass, trigger: "blur"},
        ],
        code: [{required: true, message: "请输入验证码", trigger: "blur"}],
        userName: [
          {required: true, message: "请输入用户名", trigger: "blur"},
          {min: 3, message: "长度大于3", trigger: "blur"},
        ],
      },
      times: 60,
      show: true,
      username: ''
    };
  },
  created() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // const username = '15079730794'
          // const password = '123456'
          // (username && password) && this.$store.dispatch('userLogin')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.activeName = 'second'
      this.$message('输入手机号,注册账号');
      this.$refs[formName].resetFields();
    },
    sendEmail(){
      if (this.username == "") {
        this.$message({
          message: '请输入邮箱',
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
    checkPhone(rule, value, callback) {
      //debugger
      if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      }
      return callback();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async userLogin() {
      try {
        //登录成功
        const username = this.ruleForm.userName
        const password = this.ruleForm.pass
        username && password && (await this.$store.dispatch("userLogin", {username, password}));
        //登录的路由组件：看x路由当中是否包含query参数，有：调到query参数指定路由，没有：调到home
        //let toPath = this.$route.query.redirect||"/home";
        this.$router.push({path: '/'});
      } catch (error) {
        alert(error.message);
      }
    },
    async userLoginForPhone() {
      try {
        //登录成功
        const username = this.username
        const password = this.code
        username && password && (await this.$store.dispatch("userLoginForPhone", {username, password}));
        //登录的路由组件：看x路由当中是否包含query参数，有：调到query参数指定路由，没有：调到home
        //let toPath = this.$route.query.redirect||"/home";
        this.$router.push({path: '/'});
      } catch (error) {
        alert(error.message);
      }
    },
    sms() {
      if (this.username == "") {
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        });
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
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    }
  },
};
</script>

<style scoped>
.demo-ruleForm {
  width: 300px;
}

.lable-width {
  width: 250px;
}

.tit {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: #fff;
  text-align: center;
}

.title-line {
  width: 980px;
  height: 28px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 28px;
  text-align: center;
  margin-top: 100px;
}

.line {
  border-right: 2px solid #ddd;
  height: 280px;
  margin-top: 20px;
  margin-right: 10px;
}


.top-banner {
  background: #00a0d8;
  height: 86px;
  text-align: center;
  margin-bottom: 20px;

}

p[data-v-2c844fd9] {
  margin: 24px auto 0;
  width: 980px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #99a2aa;
  text-align: center;
  line-height: 16px;
}
</style>
