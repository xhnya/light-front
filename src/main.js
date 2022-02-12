import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/style/global.less";

//视频播放组件
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)



// 动画库
import animated from 'animate.css'
Vue.use(animated)

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
import { Button } from 'ant-design-vue';
Vue.use(Button);



import less from 'less'
Vue.use(less)

import store from './store'


import HeaderBanner from "@/components/HeaderBanner";
Vue.component('HeaderBanner',HeaderBanner)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  el: '#app',
  store,
}).$mount('#app')
