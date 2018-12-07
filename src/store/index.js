import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
