<template>
  <div>
    <HeaderBanner></HeaderBanner>
    <!--    资讯列表-->
    <div class="info-item-body">
      <el-row>
        <el-col :span="15">
          <el-card class="info-item-card">
            <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
              <div slot="footer"><b>ant design vue</b> footer part</div>
              <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{ text }}
        </span>
                </template>
                <img
                    slot="extra"
                    width="272"
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.title }}</a>
                  <a-avatar slot="avatar" :src="item.avatar"/>
                </a-list-item-meta>
                {{ item.content }}
              </a-list-item>
            </a-list>
          </el-card>
        </el-col>

        <el-col :span="9">
          <div class="info-game-evaluating">
            <el-card>
              <div slot="header" class="clearfix">
                <span>游戏评测</span>
                <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-d-arrow-right"></i></el-button>
              </div>
              <div>
                <div >
                  <el-row>
                    <el-col :span="10">
                      <div>
                        <el-image
                            style="width: 100%; height: 100px"
                            :src="evaluatingUrl"
                            fit="fill"></el-image>
                      </div>
                    </el-col>
                    <el-col :span="10">
                    <div class="info-evaluating-content">
                      <p>它确实在维持原本风味的同时，变得更好了，但可能仍旧无法吸引回对这个配方失去兴趣的食客</p>
                      <p style="display:flex;align-items:flex-end;margin-bottom: 0;">2021-10-06 19:00:00-xhn</p>
                    </div>
                  </el-col>
                    <el-col :span="4">
                      <div class="info-evaluating-nums">
                        <a-statistic title="评分" :value="9.9"  :value-style="{ color: '#fb7299' }" style="margin-right: 50px;" />

                      </div>
                    </el-col>
                  </el-row>
                </div>
                <a-divider />
                <div >
                  <el-row>
                    <el-col :span="10">
                      <div>
                        <el-image
                            style="width: 100%; height: 100px"
                            :src="evaluatingUrl"
                            fit="fill"></el-image>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <div class="info-evaluating-content">
                        <p>它确实在维持原本风味的同时，变得更好了，但可能仍旧无法吸引回对这个配方失去兴趣的食客</p>
                        <p style="display:flex;align-items:flex-end;margin-bottom: 0;">2021-10-06 19:00:00-xhn</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="info-evaluating-nums">
                        <a-statistic title="评分" :value="9.9"  :value-style="{ color: '#fb7299' }" style="margin-right: 50px;" />

                      </div>
                    </el-col>
                  </el-row>
                </div> <a-divider />

                <div >
                  <el-row>
                    <el-col :span="10">
                      <div>
                        <el-image
                            style="width: 100%; height: 100px"
                            :src="evaluatingUrl"
                            fit="fill"></el-image>
                      </div>
                    </el-col>
                    <el-col :span="10">
                      <div class="info-evaluating-content">
                        <p>它确实在维持原本风味的同时，变得更好了，但可能仍旧无法吸引回对这个配方失去兴趣的食客</p>
                        <p style="display:flex;align-items:flex-end;margin-bottom: 0;">2021-10-06 19:00:00-xhn</p>
                      </div>
                    </el-col>
                    <el-col :span="4">
                      <div class="info-evaluating-nums">
                        <a-statistic title="评分" :value="9.9"  :value-style="{ color: '#fb7299' }" style="margin-right: 50px;" />

                      </div>
                    </el-col>
                  </el-row>
                </div> <a-divider />
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>


    </div>


  </div>
</template>

<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
      evaluatingUrl: "http://img.xhnya.top/img/孤岛惊魂6.jpg",
    }
  },
  methods: {}
}
</script>

<style scoped>
.info-item-body {
  margin-left: 15%;
  margin-top: 30px;
}

.info-item-card {
  /*margin-top: 30px;*/
}
.info-game-evaluating{
  margin-left: 15px;
  margin-right: 30px;
}
.info-evaluating-nums{
  text-align: center;
}
.info-evaluating-content{
  margin-left: 10px;
}
</style>
