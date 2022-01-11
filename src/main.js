import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/style/global.css";

// 动画库
import animated from 'animate.css'
Vue.use(animated)


Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  el: '#app',
}).$mount('#app')