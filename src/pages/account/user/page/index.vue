<template>
  <div class="user-page">
      <div>
        <el-card class="box-card">
          <div v-for="o in 10" :key="o" class="user-page-text">
            <div>
              <span>{{'这个标题是 ' + o }}</span>
              <div style="float:right;">2022-12-16</div>
              <el-divider></el-divider>
            </div>
          </div>
        </el-card>
      </div>
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

.user-page{
  margin-top: 10px;
}
.user-page-text{
  /*margin-top: 10px;*/
}
</style>
