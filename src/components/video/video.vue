<template>
  <div class='demo'>
    <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  @play="onPlayerPlay($event)"
                  :options="playerOptions">
    </video-player>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/webm", // 类型
          src: 'http://img.xhnya.top/video/red.webm' // url地址
        }],
        poster: 'http://img.xhnya.top/img/荒野大镖客bg20220116.jpg', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        width: document.documentElement.clientWidth,
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    ...mapGetters(["gameInfoView"]),

  },
  methods: {
    fullScreen() {
      const player = this.$refs.videoPlayer.player
      player.requestFullscreen()//调用全屏api方法
      player.isFullscreen(true)
      player.play()
    },
    onPlayerPlay(player) {
      this.playerOptions.sources[0].src=this.gameInfoView.videoUrl
      player.play()
    },
    onPlayerPause(player) {
      // alert("pause");
    },

  },

}
</script>

<style scoped>

</style>
