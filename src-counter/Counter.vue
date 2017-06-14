<template>
  <div>
    clicked: {{count}} times, count is {{countOddOrEven}}
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters(['count', 'countOddOrEven']),
    methods: mapActions({
      increment: 'increment',
      decrement: 'decrement',
      incrementOdd: 'incrementIfOdd',
      incrementAsync: 'incrementAsync'
    })
  }
</script>