<template>
  <div>
    <el-card class="box-at-1">
       <el-image
        style="width: 256px; height:  256px;"
        :src="nodata"
        fit="fill"></el-image>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodata: "http://img.xhnya.top/img/nodata.png",
    }
  },
  methods: {}
}
</script>

<style scoped>
.box-at-1{
  /*height: 100%*/
  text-align: center;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
