import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null
  },
  mutations: {
    SET_DATA (state, data) {
      state.data = data
    }
  },
  actions: {
  },
  modules: {
  }
})
