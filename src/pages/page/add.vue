<template>
  <div style="margin: 30px;width: 75%;">
    <div style="margin-bottom: 30px;">
      <el-dropdown @command="changeType">
        <el-button type="primary">
          {{ typeName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="原创">原创</el-dropdown-item>
          <el-dropdown-item command="攻略">攻略</el-dropdown-item>
          <el-dropdown-item command="资讯">资讯</el-dropdown-item>
          <el-dropdown-item command="评测">评测</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input style="width: 600px;" v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div style="margin-bottom: 30px;">
      <span>请选择分区:</span>
      <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
          filterable
      ></el-cascader>
      <el-upload
          class="upload-demo"
          :action="url"
          :on-success="addCover"
          :file-list="fileList"
          list-type="picture"
      >
        <el-button size="small" type="primary">上传封面</el-button>
      </el-upload>
      <el-input
          type="textarea"
          autosize
          placeholder="请输入描述"
          maxlength="450"
          show-word-limit
          v-model="textarea">
      </el-input>
    </div>
    <tinymce :height="600" v-model="content"></tinymce>
    <el-button style="margin-top: 30px;" @click="saveArticle" type="primary">立即创建</el-button>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import community from '@/api/community'

export default {
  components: {Tinymce},
  data() {
    return {
      content: `<h1 style="text-align: center;">Welcome to the light!</h1>`,
      value: '',
      title: '',
      options: [],
      typeName: '原创',
      parentId: 0,
      url: '',
      fileList: [],
      coverUrl: '',
      textarea: ''
    }
  },
  created() {
    this.getCascaderOptions()
    this.url = this.baseUrl + 'cloud/oss/upload'
  },
  methods: {
    saveArticle() {
      const article = {}
      article.title = this.title
      article.content = this.content
      article.parentId = this.parentId
      article.description = this.textarea
      article.publishType = this.typeName
      if (this.coverUrl !== '') {
        article.coverImage = this.coverUrl
      }
      community.reqSaveArticle(article).then((res) => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.$router.push({path: '/user/myPage'})
      })
    },
    handleChange(value) {
      this.parentId = value[1]
    },
    getCascaderOptions() {
      community.getCascaderOptionsData().then((res) => {
        this.options = res.data.result
      })
    },
    changeType(val) {
      this.typeName = val
    },
    addCover(response, file) {
      this.coverUrl = response.data.url
      this.$message({
        message: '上传成功',
        type: 'success'
      });

    }
  }
}
</script>

<style scoped>
</style>