<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header></todo-header>
      <list></list>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import list from './list.vue'
  import footer from './footer.vue'

  export default {
    components: {
      'todo-header': header,
      list,
      'todo-footer': footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
