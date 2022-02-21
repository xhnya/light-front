<template>
  <div>
    <div style="margin-right: 15%;margin-left: 15%;margin-top: 30px;">
      <a-page-header
          style="border: 1px solid rgb(235, 237, 240);background-color: #ffffff; "
          title="返回"
          sub-title="百科详情"
          @back="() =>  this.$router.go(-1)"
      />
      <el-card style="margin-top: 30px;">
        <div v-html="pageInfo.content"></div>

      </el-card>
      <div style="margin-bottom: 600px;"></div>
    </div>
  </div>
</template>

<script>
import wiki from "@/api/wiki";

export default {
  data() {
    return {
      pageInfo: {}
    }
  },
  created() {
    this.getPageInfo()
  },
  methods: {
    getPageInfo() {
      wiki.reqPageInfo(this.$route.params.id).then((res) => {

        this.pageInfo=res.data.page
      })

    }
  }
}
</script>

<style scoped>

</style>
