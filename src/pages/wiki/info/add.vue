<template>
  <div style="margin: 30px 15% 30px 15%">
    <div>
      <div>
        <span>名称:</span>
        <el-input style="width: 600px;" v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div style="margin-top: 30px;">
        <el-upload
            class="upload-demo"
            :action="url"
            :on-success="addCover"
            list-type="picture"
        >
          <el-button size="small" type="primary">上传封面</el-button>
        </el-upload>
      </div>
      <div style="margin-top: 30px;">
        <tinymce :height="600" v-model="content"></tinymce>
      </div>
      <el-button @click="submit" type="primary">立即创建</el-button>
    </div>
  </div>
</template>

<script>

import Tinymce from "@/components/Tinymce";
import {uploadUrl} from '@/utils/upload'
import wiki from "@/api/wiki";

export default {
  components: {Tinymce},
  data() {
    return {
      input: '',
      coverUrl: '',
      url: '',
      content: 'xhn'
    }
  },
  created() {
    // if (this.$router.path !== '/wiki/info/add') {
    //   this.$router.replace('/wiki/')
    // }
    this.url = uploadUrl
  },
  methods: {
    addCover(response, file) {
      this.coverUrl = response.data.url
      this.$message({
        message: '上传成功',
        type: 'success'
      });
    },
    submit() {
      const params = {}
      params.title=this.input
      params.menuId = this.$store.state.wiki.menuId
      params.gameId = this.$store.state.wiki.gid
      params.cover = this.coverUrl
      params.content = this.content
      wiki.reqSaveWiki(params).then((res) => {
        this.$message({
          message: '添加',
          type: 'success'
        });
        this.$router.push({path: '/wiki/'+this.$store.state.wiki.gid})
      })
    }
  }
}
</script>

<style scoped>
</style>
