import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import server from '@/server/services'

Vue.prototype.$server = server
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
