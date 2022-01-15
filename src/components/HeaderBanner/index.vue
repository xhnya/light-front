<template>
  <div>
    <div style="position: absolute;top: 0;z-index: -1" class="header-banner"></div>
    <div style="z-index: -1;height: 100px"></div>
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

.header-banner {
  background-image: url('../../assets/img/header_banner.jpg');
  opacity: 0.8;
  /*background-position-x: center;*/
  /*background-position-y: top;*/
  /*background-size: initial;*/
  /*background-repeat-x: no-repeat;*/
  /*background-repeat-y: no-repeat;*/
  /*background-attachment: initial;*/
  /*background-origin: initial;*/
  /*background-clip: initial;*/
  /*background-color: initial;*/

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 170px;
  z-index: 0;
}
</style>
