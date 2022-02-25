<template>
  <div class="page-index-body">
    <div style="margin-left: 10%">
      <a-affix :offset-top="300" @change="change">
        <div>
          <div>
            <el-image
                style="width: 50px; height: 50px"
                src="http://img.xhnya.top/img/点赞3.png"
                fit="fill"></el-image>
          </div>
          <div>
            <el-image
                style="width: 50px; height: 50px"
                src="http://img.xhnya.top/img/赏.png"
                fit="fill"></el-image>
          </div>
        </div>
      </a-affix>
    </div>
    <!--    内容主体-->
    <div class="page-index-content">
      <div>
        <a-page-header
            style="border: 1px solid rgb(235, 237, 240);background-color: #ffffff; "
            title="返回"
            :sub-title="this.pageInfoView.title"
            @back="() =>  this.$router.go(-1)"
        />
        <div class="page-index-content-card">
          <el-card>
            <div v-html="this.pageInfoView.content">
              <h1>滕王阁序</h1>
              豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。

              时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。

              披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。

              遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？

              嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！

              勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？

              呜乎！胜地不常，盛筵难再；兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔：
            </div>
          </el-card>
        </div>
      </div>
      <div>
        <el-card>
          <div>
            <a-comment>
              <a-avatar
                  slot="avatar"
                  :src="this.$store.state.user.userInfo.cover"
                  alt="Han Solo"
              />
              <div slot="content">
                <a-form-item>
                  <a-textarea placeholder="说说你的看法吧"
                              :autosize="textareaRow"
                              :value="value"
                              @change="handleChange"/>
                </a-form-item>
                <a-form-item>
                  <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                    评论
                  </a-button>
                </a-form-item>
              </div>
            </a-comment>
            <a-list
                v-if="comments.length"
                :data-source="comments"
                :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                item-layout="horizontal"
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-comment
                    :author="item.userName"
                    :avatar="item.cover"
                    :content="item.content"
                    :datetime="item.createTime"
                />
              </a-list-item>
            </a-list>
            <div class="block page">
              <el-pagination
                  @size-change="sizeChangeHandle"
                  @current-change="currentChangeHandle"
                  :current-page="page"
                  :page-sizes="[10, 50, 100, 500]"
                  :page-size.sync="limit"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
              >
              </el-pagination>
            </div>
          </div>
        </el-card>
      </div>

    </div>

    <a-back-top/>
  </div>

</template>

<script>
import moment from 'moment';
import {mapGetters} from "vuex";
import community from "@/api/community";

export default {
  data() {
    return {
      textareaRow: {
        minRows: 4,
        maxRows: 8
      },
      comments: [],
      submitting: false,
      value: '',
      moment,
      page: 1,
      limit: 10,
      total: 10
    }
  },
  mounted() {
    //派发action获取gameInfo
    this.$store.dispatch('getPageInfos', this.$route.params.id)
  },
  computed: {
    ...mapGetters(["pageInfoView"]),
  },
  created() {
    this.getCommentList()
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }
      if (!this.$store.state.user.userInfo.id) {
        this.$message({
          message: '请登录',
          type: 'warning'
        });
        return;
      }
      this.submitting = true;
      const param = {}
      // TODO: 把id改成后端获取
      param.userId = this.$store.state.user.userInfo.id
      param.aid = this.$route.params.id
      param.content = this.value
      community.reqAddPageComment(param).then((res) => {
        this.$message({
          message: '评论成功',
          type: 'success'
        });
      })
      this.value = ''
      this.submitting = false
    },
    handleChange(e) {
      this.value = e.target.value;
    },
    change(affixed) {
      console.log(affixed);
    },
    getCommentList() {
      const params = {}
      params.page = this.page
      params.limit = this.limit
      params.parentId = this.$route.params.id
      community.reqCommentList(params).then((res) => {
        this.comments = res.data.page.list
        this.page = res.data.page.currPage
        this.total = res.data.page.totalCount
      })
    },
    sizeChangeHandle(val) {
      this.limit = val
      this.page = 1
      this.getCommentList()
    },
    // 当前页
    currentChangeHandle(val) {
      this.page = val
      this.getCommentList()
    },
  }
}
</script>

<style lang="less" scoped>
.page-index-body {
  background-color: @BgColor;
}

.page-index-content {
  margin-right: @Margin;
  margin-left: @Margin;
  margin-top: @MarginTop;
  padding-top: 30px;
}

.page-index-content-card {
  margin-top: 10px;
  padding-bottom: 30px;
}
</style>
