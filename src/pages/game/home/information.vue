<template>
  <div>
    <div class="game-info-info-body">
      <el-row>
        <el-col :span="16">
          <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
            <a-list-item class="game-info-info-item" slot="renderItem" key="item.title" slot-scope="item, index">
              <template v-for="{ type, text } in actions" slot="actions">
                <span :key="type"><a-icon :type="type" style="margin-right: 8px"/>{{ text }}</span>
              </template>
              <img
                  slot="extra"
                  width="272"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <a-list-item-meta  :description="item.description">
                <a slot="title" style="color: #c7c7cc" :href="item.href">{{ item.title }}</a>
                <a-avatar slot="avatar"  :src="item.avatar"/>
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
          </a-list>
        </el-col>
        <el-col :span="8">

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
    };
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.game-info-info-body{
  color: #c7c7cc;
}

.game-info-info-item{
  color: #c7c7cc;
}

.ant-list-item-meta-description{
  color: #c7c7cc;
}
.ant-list-item-action > li{
  color: #c7c7cc;
  font-size: 18px;

}
.ant-list-item-action{
  color: #c7c7cc;
}

</style>
