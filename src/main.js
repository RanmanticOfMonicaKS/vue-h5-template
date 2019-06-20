import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios
// 移动端适配
import 'lib-flexible'
//解决移动端300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
//按需引入，这样体积小
import { Toast } from 'vant'
import 'vant/lib/index.css'
Vue.use(Toast)
//每次请求都会有一个loading的效果
axios.interceptors.request.use((config) => {
    Toast.loading({
    mask: true,
    message: '加载中...'
    });
    return config;
    }, (err) => {
    return Promise.reject(err)  
})
axios.interceptors.response.use((response) => {
    Toast.clear()
    return response;
  }, (err) => {
    return Promise.reject(err);
  
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
