import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yourName:"Ntwari Clarance"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})
