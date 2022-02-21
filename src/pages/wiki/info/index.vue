<template>
  <div>
    <div class="wiki-info-body">
      <el-row>
        <el-col :span="4">
          <div>
            <div>
              <el-card style="width: 256px">
                <el-button @click="dialogVisible = true" type="text">添加菜单</el-button>
                <el-button type="text">编辑菜单</el-button>
              </el-card>
              <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
                <a-sub-menu v-for="item in menuList" :key="item.id">
                  <span slot="title">
                    <span>{{ item.name }}</span>
                  </span>
                  <a-menu-item v-for="menu in item.children" :key="menu.id">
                    {{ menu.name }}
                  </a-menu-item>
                </a-sub-menu>
              </a-menu>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="wiki-info-card">
            <el-card v-for="item in menuList" :key="item.id" style="margin: 30px;">
              <div slot="header" class="clearfix">
                <span>{{ item.name }}</span>
                <el-button @click="addSecond(item.id) " style="float: right; padding: 3px 0" type="text">添加</el-button>
              </div>
              <div v-for="list in item.children" :key="list.id" class="text item">
                <div>list.name</div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-dialog
          title="添加一级菜单"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
        <div>
          <el-form label-position="left" label-width="80px" :model="form">
            <el-form-item label="名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="修改设置">
              <el-radio v-model="radio" :label="0">所有</el-radio>
              <el-radio v-model="radio" :label="1">仅自己</el-radio>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitFirst">确 定</el-button>
        </span>
      </el-dialog>

    </div>


  </div>
</template>

<script>
import wiki from "@/api/wiki";

export default {
  data() {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      dialogVisible: false,
      form: {},
      radio: 0,
      menuList: []
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    submitFirst() {
      this.dialogVisible = false
      const params = {}
      params.gid = this.$route.params.id
      params.name = this.form.name
      params.editType = this.radio
      wiki.reqSubmitFirst(params).then((res) => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.getMenuList()
      })
    },
    getMenuList() {
      wiki.reqMenuList(this.$route.params.id).then((res) => {
        console.log(res)
        this.menuList = res.data.result
      })
    },
    addSecond(val) {
      this.$store.dispatch('getMenuId',val);
      this.$router.push({path: '/info/add'})
    }
  }
}
</script>

<style lang="less" scoped>
.wiki-info-body {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: @BgColor;
}

.wiki-info-card {
  margin-right: 20%;
}
</style>
