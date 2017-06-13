<template>
  <div class="goods">
    <!--TODO 左侧菜单项div-->
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <!--菜单列表-->
        <li class="menu-item"
            v-for="good in goods"
            :class="{current:currentIndex===$index}"
            @click="clickMenu($index,$event)">
           <span class="text border-1px">
             <span class="icon"
                   v-if="good.type >= 0"
                   :class="classMap[good.type]"></span>{{good.name}}
           </span>
        </li>
      </ul>
    </div>

    <!--TODO 右侧商品详情div-->
    <div class="foods-wrapper" v-el:foods-wrapper>
      <ul>
        <li class="food-list food-list-hook" v-for="good in goods">
          <h1 class="title">{{good.name}}</h1>
          <ul>

            <!--商品列表菜单-->
            <li class="food-item border-1px"
                v-for="food in good.foods"
                @click="showFood(food)">

              <!--商品图标-->
              <div class="icon">
                <img width="57" height="57" :src="food.icon">
              </div>

              <!--商品内容详情-->
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>

                <!--cartcontrol组件-->
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!--TODO 购物车底部组件-->
    <shopcart :food-list="foodList"
              :min-price="seller.minPrice"
              :delivery-price="seller.deliveryPrice"
              :update-food-count="updateFoodCount"
              @clear="clearCart"
              v-ref:shopcart></shopcart>
  </div>

  <!--TODO 大图预览组件-->
  <food :food="selectedFood"
        v-ref:food
        :update-food-count="updateFoodCount"></food>
</template>

<script>
  // 引入 滑动插件
  import BScroll from 'better-scroll'
  // 引入控制购物车数量组件
  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  // 引入Vue
  import Vue from 'vue'
  // 引入底部购物车
  import shopcart from '../shopcart/shopcart.vue'
  // 引入 food 组件
  import food from '../food/food.vue'
  export default {
    props: ['seller'],
    data () {
      return {
        goods: [],
        scrollY: 0,
        tops: [],
        selectedFood: {}
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']

      // 发ajax请求. 得到goods数据
      this.$http.get('/api2/goods')
        .then(response => {
          var result = response.body
          if (result.code === 0) {
            this.goods = result.data

            // 在页面更新之后执行
            this.$nextTick(() => {
              this._initScroll()

              // 初始化top值
              this._initTops()
            })
          }
        })
    },
    methods: {
      // TODO 初始化创建 Scroller对象. 行成滚动条
      _initScroll () {
        // 左侧菜单滑动
        var menuScroll = new BScroll(this.$els.menuWrapper, {
          click: true  // 派发点击事件
        })

        // 右侧商品内容滑动
        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
          click: true,
          probeType: 3 // 让scroll 事件回调函数执行
        })

        // 监视 foodsScroll 滚动
        this.foodsScroll.on('scroll', pos => {
          // 保存滚动的y轴坐标
          this.scrollY = -pos.y
        })
        console.log(menuScroll)
      },

      // TODO 初始化top值
      _initTops () {
        var tops = this.tops
        var top = 0
        tops.push(top) // 添加第一个top值

        // 得到所有分类的li
        var lis = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
        ;[].slice.call(lis).forEach(li => {
          // 获得li 的高度并累加
          top += li.clientHeight
          tops.push(top)
        })
      },

      // TODO 点击菜单指定对应列表
      clickMenu (index, event) {
        // 过滤系统的点击回调
        if (!event._constructed) {
          return
        }
        // 得到对应的li
        var lis = this.$els.foodsWrapper.getElementsByClassName('food-list-hook')
        var li = lis[index]
        // 滚动
        this.foodsScroll.scrollToElement(li, 300)
      },

      // TODO 定义更新 商品的数量
      updateFoodCount (food, isAdd, event) {
        // 过滤系统的点击回调
        if (!event._constructed) {
          return
        }
        if (isAdd) { // 加
          if (!food.count) { // 第一次操作
            // set方法进行监视属性第一次操作
            Vue.set(food, 'count', 1)
          } else {
            food.count++
          }
        } else { // 减
          if (food.count) {
            food.count --
          }
        }

        // 让小球产生动画效果
        this.$refs.shopcart.drop(event.target)
      },

      // TODO shopcart组件事件订阅 --> 清空购物车选项
      clearCart (foodList) { // 让购物车中所有food的count指定为0
        foodList.forEach(food => {
          food.count = 0
        })
      },

      // TODO 把商品列表传递给food组件
      showFood (food) {
        // 指定选中的food
        this.selectedFood = food
        // 显示food组件: 通过$ref找到组件对象并调用方法
        this.$refs.food.show(true)
      }
    },
    computed: {
      // 计算出当前分类的下标
      currentIndex () {
        /*
        *   this.scrollY
        *   this.tops
        */

        return this.tops.findIndex((top, index) => {
          // 如果返回true. 结果就为对应的index
          return this.scrollY >= top && this.scrollY < this.tops[ index + 1 ]
        })
      },
      // shopcart组件: 计算商品列表
      foodList () {
        const foods = []
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    components: {
      cartcontrol,
      shopcart,
      food
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden

    /*TODO 左侧菜单项样式*/
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        /*菜单项选中时样式*/
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
     /*TODO 右侧商品详情页样式*/
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7

      /*食物列表分类项样式*/
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        /*商品内容详情  */
        .content
          flex: 1
          .name /*商品名*/
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra /*商品描述*/
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra /*月售好评*/
            .count
              margin-right: 12px
          .price /*价格*/
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)

          /*cartcontrol组件样式  */
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
