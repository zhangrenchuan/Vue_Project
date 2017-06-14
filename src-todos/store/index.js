import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import storageUtils from '../util/storageUtils'

Vue.use(Vuex)

const state = {
  todos: storageUtils.getTodos()
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
