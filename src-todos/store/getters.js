export default {
  todos (state) {
    return state.todos
  },

  completeSize (state) {
    console.log('completeSize()')
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  totalSize (state) {
    return state.todos.length
  },
  isAllComplete (state, getters) {
    return getters.completeSize === state.todos.length && state.todos.length > 0
  }
}