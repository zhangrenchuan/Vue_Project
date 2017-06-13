<template>
  <div class="food"
       transition="move"
       v-show="isShow"
       v-el:food>
    <div class="food-content">
      <!--TODO 食物大图-->
      <div class="image-header">
        <img :src="food.image">
        <div class="back" @click="show(false)">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>

      <!--TODO 商品内容详细-->
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
        </div>
        <div class="buy"
             v-show="!food.count"
             @click="updateFoodCount(food,true,$event)">加入购物车
        </div>
      </div>

      <!--分割线-->
      <split></split>

      <!-- TODO 商品信息-->
      <div class="info" v-show="food.info">
        <h1 class="title">商品信息</h1>
        <p class="text">{{food.info}}</p>
      </div>

      <!--分割线-->
      <split></split>

      <!--TODO 商品评论信息-->
      <div class="rating">
        <h1 class="title">商品评价</h1>

        <!-- TODO 评论过滤组件-->
        <ratingselect :desc="desc"
                      :only-content="onlyContent"
                      :ratings="food.ratings"
                      :select-type="selectType"
                      @switchonlycontent="switchOnlyContent"
                      @set-select-type="setSelectType"
                      v-if="food.ratings"></ratingselect>

        <!-- 评论列表-->
        <div class="rating-wrapper">
          <ul v-show="food.ratings && food.ratings.length">
            <li class="rating-item border-1px" v-for="rating in filterRatings">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img class="avatar" width="12" height="12" :src="rating.avatar">
              </div>
              <div class="time">{{rating.rateTime | dateString}}</div>
              <p class="text">
                <!--赞图标-->
                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入日期插件
  import moment from 'moment'
  // 引入 滑动插件
  import BScroll from 'better-scroll'
  // 引入控制购物车数量组件
  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  // 引入分割线组件
  import split from '../split/split.vue'
  // 引入评论过滤组件
  import ratingselect from '../ratingselect/ratingselect'
  // 代表显示是 "全部"
  const ALL = 2

  export default {
    props: {
      food: Object,
      updateFoodCount: Function
    },
    data () {
      return {
        isShow: false,
        onlyContent: false,
        selectType: ALL
      }
    },
    created () {
      this.desc = {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    },
    methods: {
      show (isShow) { // 显示隐藏方法
        this.isShow = isShow
        // 显示时进行滚动
        if (this.isShow) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$els.food, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      },
      // 切换 onlyContent
      switchOnlyContent () {
        this.onlyContent = !this.onlyContent
        // 刷新列表
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },
      // 更新 selectType 的值
      setSelectType (selectType) {
        this.selectType = selectType
        // 刷新列表
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    computed: {
      filterRatings () {
        if (!this.food.ratings) {
          return []
        }
        const ratings = this.food.ratings
        const selectType = this.selectType
        const onlyContent = this.onlyContent
        return ratings.filter(rating => {
          // TODO 解构赋值
          var {rateType, text} = rating
          if (selectType === 2) {
            return !onlyContent || text.length > 0
          } else {
            return selectType === rateType && (!onlyContent || text.length > 0)
          }
        })
      }
    },
    filters: {
      dateString (value) {
        return moment(value).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    &.move-transition
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff

    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
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
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        &.fade-transition
          transition: all 0.2s
          opacity: 1
        &.fade-enter, &.fade-leave
          opacity: 0
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right: 4px
              line-height: 16px
              font-size: 12px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon-thumb_down
              color: rgb(147, 153, 159)

        .no-rating
          padding: 16px 0
          font-size: 12px
          color: rgb(147, 153, 159)
</style>
