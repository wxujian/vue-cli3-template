import Vue from 'vue'
import Vuex from 'vuex'
// import store from './store' //注册store
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    singleData: {} // 单条数据选择
  },
  getters: {
    getSingleData (state) {
      return state.singleData
    }
  },
  mutations: {
    changeSingleData (state, payload) {
      state.singleData = payload
    }
  },
  actions: {
    changeSingleData (store, payload) {
      store.commit({
        type: 'changeSingleData',
        singleData: payload
      })
    }
  }
})
