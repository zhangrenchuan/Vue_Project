import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_SELECT
} from './types'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, todo) {
    commit(DELETE_TODO, todo)
  },
  deleteSelect ({commit}) {
    commit(DELETE_SELECT)
  },
  selectAll ({commit}, check) {
    commit(SELECT_ALL, {check})
  }
}
