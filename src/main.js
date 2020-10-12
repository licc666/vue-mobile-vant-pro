import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // px 转 rem 基准器
import { Toast } from 'vant'
import { loadInterceptors } from '@/utils/request'
import interceptors from '@/utils/axios-interceptors'

Vue.use(Toast)
Vue.config.productionTip = false
loadInterceptors(interceptors, { store, Toast: Vue.prototype.$toast })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
