<template>
  <div>
    <div class="wiki-info-body">
      <el-row>
        <el-col :span="4">
          <div>
            <div>
              <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange">
                <a-sub-menu key="sub1">
                  <span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
                  <a-menu-item key="1">
                    Option 1
                  </a-menu-item>
                  <a-menu-item key="2">
                    Option 2
                  </a-menu-item>
                  <a-menu-item key="3">
                    Option 3
                  </a-menu-item>
                  <a-menu-item key="4">
                    Option 4
                  </a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                  <span slot="title"><a-icon type="appstore"/><span>Navigation Two</span></span>
                  <a-menu-item key="5">
                    Option 5
                  </a-menu-item>
                  <a-menu-item key="6">
                    Option 6
                  </a-menu-item>
                  <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">
                      Option 7
                    </a-menu-item>
                    <a-menu-item key="8">
                      Option 8
                    </a-menu-item>
                  </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                  <span slot="title"><a-icon type="setting"/><span>Navigation Three</span></span>
                  <a-menu-item key="9">
                    Option 9
                  </a-menu-item>
                  <a-menu-item key="10">
                    Option 10
                  </a-menu-item>
                  <a-menu-item key="11">
                    Option 11
                  </a-menu-item>
                  <a-menu-item key="12">
                    Option 12
                  </a-menu-item>
                </a-sub-menu>
              </a-menu>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="wiki-info-card">
            <el-card>
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card>
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
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
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  }
}
</script>

<style lang="less" scoped>
.wiki-info-body{
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: @BgColor;
}
.wiki-info-card{
  margin-right: 20%;
}
</style>
