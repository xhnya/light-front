import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/style/global.css";

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


import HeaderBanner from "@/components/HeaderBanner";
Vue.component('HeaderBanner',HeaderBanner)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  el: '#app',
}).$mount('#app')
