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
              <div  class="text item">
                <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8 }" :data-source="item.children">
                  <a-list-item class="wiki-list-body01" slot="renderItem" slot-scope="item, index">
                    <div @click="gotoInfo(item.pid)">
                      <a-card style="text-align: center;padding: 0">
                        <el-image
                            style="width: 80px; height: 80px"
                            :src="item.cover"
                            fit="fill"></el-image>
                        <div style="margin-bottom: 5px;">{{ item.name }}</div>
                      </a-card>
                    </div>
                  </a-list-item>
                </a-list>
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
    gotoInfo(val){
      this.$router.push({path: '/wiki/info/'+val})
    },
    getMenuList() {
      wiki.reqMenuList(this.$route.params.id).then((res) => {
        console.log(res)
        this.menuList = res.data.result
      })
    },
    addSecond(val) {
      this.$store.dispatch('getMenuId',val);
      this.$store.dispatch('getMenuGameId',this.$route.params.id);
      this.$router.push({path: '/wiki/info/add'})
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
