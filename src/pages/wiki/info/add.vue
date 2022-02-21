<template>
  <div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    if (this.$router.path !== '/wiki/info/add') {
      this.$router.replace('/wiki/')
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>