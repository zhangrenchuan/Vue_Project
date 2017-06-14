import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态: 相当于data
const state = { // 初始化状态
  count: 0
}

/*
1. 包含多个直接更新state的方法(回调函数)的对象
2. action对象来触发: commit('函数名')
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

/*
1. 包含多个事件回调函数的对象
2. 在组件中触发: component.dispatch('函数名')
 */
const actions = {
  increment ({commit}) {  // 框架调用时increment({commit, state,...})
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}
/*
包含多个计算属性(get)的对象
 */
const getters = {
  countOddOrEven (state) {
    return state.count%2===0 ? '偶数': '奇数'
  },
  count (state) {
    return state.count
  }
}

// 暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})