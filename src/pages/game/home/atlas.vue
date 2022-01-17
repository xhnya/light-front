<template>
  <div>
    <div>
      <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
        <a-list-item class="game-atlas-images" slot="renderItem" slot-scope="item, index">
          <el-card >
            <div @click="gotoAtlasInfo(index)">
              <el-image
                  style="width: 100%; height: 200px"
                  src=" http://img.xhnya.top/img/red2atlas.jpg"
                  fit="fill"></el-image>
              <div style="text-align: center;"><h2>荒野大镖客高清壁纸</h2></div>
            </div>
          </el-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
export default {
  data() {
    return {
      data,
    }
  },
  methods: {
    gotoAtlasInfo(index){
      this.$router.push({path: '/atlas/'+index})
    }
  }
}
</script>

<style scoped>
.game-atlas-images /deep/ .el-card__body{
  padding: 0;
}
</style>
