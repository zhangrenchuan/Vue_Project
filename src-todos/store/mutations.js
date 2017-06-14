import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_SELECT
} from './types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [DELETE_TODO] (state, {todo}) {
    state.todos.$remove(todo)
  },

  [SELECT_ALL] (state, {check}) {
    state.todos.forEach(todo => {
      todo.complete = check
    })
  },
  [DELETE_SELECT] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}