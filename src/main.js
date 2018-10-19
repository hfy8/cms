// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import vueaxios from 'vue-axios'
import axios from 'axios'
import App from './App'
import router from './router'


axios.defaults.baseURL = config.api; // 设置axios的基础请求路径
axios.defaults.timeout = 2000; // 设置axios的请求时间

axios.loadData = async function (url) {
  const resp = await axios.get(url);
  return resp.data;
}

Vue.prototype.$http = axios;// 将axios添加到 Vue的原型，这样一切vue实例都可以使用该对象
Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
