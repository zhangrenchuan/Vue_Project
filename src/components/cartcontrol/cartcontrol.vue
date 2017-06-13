<template>
  <div class="cartcontrol">
    <!--初始化默认按钮-->
    <div class="cart-decrease"
         transition="move"
         v-show="food.count"
         @click.stop="updateFoodCount(food, false, $event)">

      <!--减少的按钮-->
      <span class="inner icon-remove_circle_outline"></span>
    </div>

    <!--购物车添加的商品数量-->
    <div class="cart-count" v-show="food.count">{{food.count}}</div>

    <!--添加的按钮-->
    <div class="cart-add icon-add_circle"
         @click.stop="updateFoodCount(food, true, $event)">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: Object,
      updateFoodCount: Function
    },
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      &.move-transition
        opacity: 1
        transform: translate3d(0, 0, 0)
        .inner
          display: inline-block
          line-height: 24px
          font-size: 24px
          color: rgb(0, 160, 220)
          transition: all 0.4s linear
          transform: rotate(0)
      &.move-enter, &.move-leave
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
