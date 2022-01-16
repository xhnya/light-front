<template>
  <div>
    <el-card>
      <Video></Video>
    </el-card>
  </div>
</template>

<script>

import Video from "@/components/video/video";
export default {
  components: {Video},
  data() {
    return {
      isIndex: false,
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
