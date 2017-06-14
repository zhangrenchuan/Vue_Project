<template>
  <ul class="todo-main">
    <item v-for="(todo, index) in todos" :todo="todo" :key="index"></item>
  </ul>
</template>

<script>
  import {mapGetters} from 'vuex'
  import item from './item.vue'
  import storageUtils from '../util/storageUtils'

  export default {
    computed: mapGetters(['todos']),
    components: {
      item
    },
    watch: {
      todos: {
        handler: storageUtils.saveTodos,
        deep: true
      }
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
