import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modulea from './modules/moduleA'

const state = {
  cartList: [],
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    modulea,
  }
})

export default store