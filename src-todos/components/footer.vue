<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
      已完成{{completeSize}} / 全部{{totalSize}}
    </span>
    <button class="btn btn-danger" v-show="completeSize>0" @click="removeAllComplete">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    computed: {
      ...mapGetters(['totalSize']),

      completeSize () {
        return this.$store.getters.completeSize
      },
      checkAll: {
        get () { // 得到当前全选checkbox的状态
          return this.$store.getters.isAllComplete
        },
        set (value) { // 将全选checkbox的状态同步到所有的todo
          console.log('set', value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: {
      removeAllComplete () {
        if (window.confirm('确定删除吗?')) {
          this.$store.dispatch('deleteSelect')
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
