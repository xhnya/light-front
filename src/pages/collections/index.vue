<template>
  <div class="box-collection">
    <HeaderBanner/>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>收藏夹</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="text">新建收藏夹</el-button>
      </div>
      <div v-for="item in followList" :key="item.id" class="text item collections-item">
        <div>
          <span class="collections-title">{{ item.modelName }}</span>
          <i style="margin-left: 3px;" v-show="item.type===1" class="el-icon-lock"></i>
        </div>
        <div>
          <span>{{ item.updateTime }}</span>更新
        </div>
      </div>
    </el-card>
    <el-dialog
        title="新建收藏夹"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <div>
        <el-form label-position="left" label-width="80px" :model="form">
          <el-form-item label="名称">
            <el-input v-model="form.modelName"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-radio v-model="form.type" :label="0">公开</el-radio>
            <el-radio v-model="form.type" :label="1">私有</el-radio>
          </el-form-item>
          <el-form-item label="备注">
            <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入备注"
                v-model="form.favoriteContent">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import user from '@/api/user'

export default {
  data() {
    return {
      collectionsList: [],
      dialogVisible: false,
      form: {
        type: 0
      }
    }
  },
  computed: {
    followList() {
      return this.$store.state.user.follow;
    }
  },
  mounted() {
    //派发action,
    this.$store.dispatch('followerList');
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
    submit() {
      this.dialogVisible = false
      user.reqAddFollow(this.form).then((res) => {
        this.form = {}
        this.form.type = 0
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      })
      this.$store.dispatch('followerList');

    }
  }
}
</script>

<style lang="less" scoped>
@margin-top: 30px;
@marginLeftAndRight: 30%;

.box-collection {
  margin-top: @margin-top;
  margin-right: @marginLeftAndRight;
  margin-left: @marginLeftAndRight;
}

.collections-title {
  font-size: 18px;
  font-weight: bold;
}

.collections-item {
  margin-top: @margin-top;
}

</style>
