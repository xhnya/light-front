<template>
  <div class="type-body">
    <HeaderBanner/>
<!--    头部-->
    <el-card>
      <div>
        <div >
          <tr>

          </tr>
          <el-button size="mini" plain>动作</el-button>
          <el-button size="mini" plain>角色</el-button>
          <el-button size="mini" plain>射击</el-button>
          <el-button size="mini" plain>策略</el-button>
          <el-button size="mini" plain>冒险</el-button>
          <el-button size="mini" plain>体育</el-button>
          <el-button size="mini" plain>模拟</el-button>
        </div>
        <div>
          aa
        </div>

      </div>
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

<style lang="less" scoped>
@marginLeftAndRight: 15%;
.type-body{
  margin-top: 30px;
  margin-left: @marginLeftAndRight;
  margin-right: @marginLeftAndRight;
}

</style>
