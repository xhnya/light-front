<template>
  <div class="box-collection">
    <HeaderBanner/>
    <router-view></router-view>
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
@margin-top: 30px;
@marginLeftAndRight: 30%;

.box-collection {
  margin-top: @margin-top;
  margin-right: @marginLeftAndRight;
  margin-left: @marginLeftAndRight;
}
</style>
