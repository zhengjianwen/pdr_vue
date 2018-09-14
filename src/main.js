// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 默认样式
import '@/assets/css/common.css'
import '@/assets/js/remStyle.js'
// 导入vant ui库
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
// 富文本
import initRichText from '@/assets/js/editor.js';
initRichText();
import "../node_modules/font-awesome.css/css/font-awesome.css"
Vue.use(Vant);
// axios
import axios from '../node_modules/axios/dist/axios';
axios.defaults.baseURL = 'https://m.pingdaren.cn/api'
Vue.prototype.axios = axios

// 公共token
import token from '@/assets/js/token.js'
Vue.prototype.token = token;
// 公共cookie
import cookie from '@/util/util';
Vue.prototype.cookie = cookie;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
