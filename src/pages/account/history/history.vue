<template>
  <div class="history-body">
    <HeaderBanner/>
    <!--    头部-->
    <div>
      <div>
        <div class="history-icon">
          <i class="el-icon-alarm-clock"></i>
          <span>历史记录</span>
        </div>
        <div class="history-search" style="color: #ffffff ;display:inline">
          <el-input @change="getHistoryList" class="history-search-input" prefix-icon="el-icon-search" v-model="input"
                    placeholder="搜索历史记录"></el-input>
          <el-button @click="deleteHistoryAll" class="history-search-button" size="small" type="primary" plain>清空历史
          </el-button>
        </div>
      </div>
    </div>
    <!--    历史记录列表-->
    <div>
      <el-timeline reverse="reverse">
        <el-timeline-item v-for="item in historyList" :key="item.id" :timestamp="item.name" placement="top">
          <div v-for="list in item.content" :key="list.id">
            <el-card class="history-timeline-item">
              <div @click="gotoPageInfo(list.id)" style="display:inline;">
                <h4>{{ list.name }}</h4>
                <p>观看于 {{ list.data }}</p>
              </div>
              <div @click="deleteHistory(list.id)" class="history-icon-delete">
                <i class="el-icon-delete"></i>
              </div>
            </el-card>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import community from "@/api/community";

export default {
  data() {
    return {
      input: '',
      historyList: []
    }
  },
  created() {
    this.getHistoryList()
  },
  methods: {
    getHistoryList() {
      const title = this.input
      community.reqHistoryList(title).then((res) => {
        this.historyList = res.data.result
      })
    },
    gotoPageInfo(val) {
      this.$router.push({path: '/page/' + val})
    },
    deleteHistory(val) {
      const ids = []
      ids.push(val)
      community.reqDeleteHistory(ids).then((res) => {
        this.$message({
          message: 'success',
          type: 'success'
        });
        this.getHistoryList()
      })
    },
    deleteHistoryAll() {
      this.$confirm('此操作将清空历史记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        community.reqDeleteHistoryAll().then((res) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getHistoryList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    }
  }
}
</script>

<style lang="less" scoped>
@marginLeftAndRight: 30%;
@margin-top: 30px;
@levelDisplay: inline;

.history-body {
  margin-top: 30px;
  margin-right: @marginLeftAndRight;
  margin-left: @marginLeftAndRight;
}

.history-timeline-item {
  margin-top: 5px;
}

.history-icon {
  font-size: 28px;
  margin-bottom: @margin-top;
  display: @levelDisplay;

}

.history-icon i {
  color: #e3936c;
}

.history-icon span {
  margin-left: 5px;
}

.history-search {
  position: absolute;
  right: @marginLeftAndRight;
  border-radius: 4px
}

.history-search-input {
  width: 188px;
  background-color: #ffffff;
}

.history-search-button {
  margin-left: 30px;
}

.history-icon-delete {
  font-size: 16px;
  text-align: center;
  float: right;
}
</style>
