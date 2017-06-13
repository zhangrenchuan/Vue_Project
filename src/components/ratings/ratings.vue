<template>
  <div class="ratings" v-el:ratings>
    <div class="ratings-content">
      <!-- TODO 评分系统-->
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :score="seller.serviceScore" :size="36"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <!--TODO 分割线-->
      <split></split>

      <!-- TODO 评论过滤组件-->
      <ratingselect :desc="desc"
                    :only-content="onlyContent"
                    :ratings="ratings"
                    :select-type="selectType"
                    @switchonlycontent="switchOnlyContent"
                    @set-select-type="setSelectType"
                    v-if="ratings"></ratingselect>

      <!--TODO 评论列表-->
      <div class="rating-wrapper">
        <ul>
          <li  class="rating-item"
               v-for="rating in ratings"
               v-show="needShow(rating)">

            <!--评论头像-->
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>

            <!--评论内容-->
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <!--赞和小标签-->
              <div class="recommend">
                <span :class="{'icon-thumb_up':rating.rateType===0, 'icon-thumb_down':rating.rateType===1}"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | dateString}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import moment from 'moment'
  import BScroll from 'better-scroll'
  import star from '../star/star.vue'
  import split from '../split/split.vue'
  import ratingselect from '../ratingselect/ratingselect.vue'
  const ALL = 2

  export default {
    props: {
      seller: Object
    },
    data () {
      return {
        ratings: [],
        onlyContent: true,
        selectType: ALL
      }
    },
    created () {
      this.desc = {
        all: '全部',
        positive: '满意',
        negative: '不满意'
      }
      // ajax 获取 ratings
      this.$http.get('/api2/ratings')
        .then(response => {
          const result = response.body
          if (result.code === 0) {
            this.ratings = result.data

            // 创建Scroll 对象
            this.$nextTick(() => {
              if (this.$els.ratings) {
                this.scroll = new BScroll(this.$els.ratings, {
                  click: true
                })
              }
            })
          }
        })
    },
    methods: {
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
      },
      needShow (rating) {
        const {rateType, text} = rating
        const selectType = this.selectType
        const onlyContent = this.onlyContent
        if (selectType === 2) {
          return !onlyContent || text.length > 0
        } else {
          return selectType === rateType && (!onlyContent || text.length > 0)
        }
      }
    },
    filters: {
      dateString (value) {
        return moment(value).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    components: {
      star,
      split,
      ratingselect
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .ratings
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        @media only screen and (max-width: 320px)
          flex: 0 0 120px
          width: 120px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding: 6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left: 6px
        .score-wrapper
          margin-bottom: 8px
          font-size: 0
          .title
            display: inline-block
            line-height: 18px
            vertical-align: top
            font-size: 12px
            color: rgb(7, 17, 27)
          .star
            display: inline-block
            margin: 0 12px
            vertical-align: top
          .star_36 {
            display: inline-block;
            width: 15px;
            height: 15px;
            background-repeat: no-repeat;
            background-size: 15px 15px;
            margin: 0 4px;
          }
          .score
            display: inline-block
            line-height: 20px
            vertical-align: top
            font-size: 12px
            color: rgb(255, 153, 0)
        .delivery-wrapper
          font-size: 0
          .title
            line-height: 18px
            font-size: 12px
            color: rgb(7, 17, 27)
          .delivery
            margin-left: 12px
            font-size: 12px
            color: rgb(147, 153, 159)
    .rating-wrapper
      padding: 0 18px
      .rating-item
        display: flex
        padding: 18px 0
        border-1px(rgba(7, 17, 27, 0.1))
        .avatar
          flex: 0 0 28px
          width: 28px
          margin-right: 12px
          img
            border-radius: 50%
        .content
          position: relative
          flex: 1
          .name
            margin-bottom: 4px
            line-height: 12px
            font-size: 10px
            color: rgb(7, 17, 27)
          .star-wrapper
            margin-bottom: 6px
            font-size: 0
            .star
              display: inline-block
              margin-right: 6px
              vertical-align: top
            .star_24 {
              display: inline-block;
              width: 10px;
              height: 10px;
              background-repeat: no-repeat;
              background-size: 10px 10px;
              margin: 0 2px;
            }
            .delivery
              display: inline-block
              vertical-align: top
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
          .text
            margin-bottom: 8px
            line-height: 18px
            color: rgb(7, 17, 27)
            font-size: 12px
          .recommend
            line-height: 16px
            font-size: 0
            .icon-thumb_up,.icon-thumb_down,.item
              display: inline-block
              margin: 0 8px 4px 0
              font-size: 9px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon-thumb_down
              color: rgb(147, 153, 159)
            .item
              padding: 0 6px
              border: 1px solid rgba(7, 17, 27, 0.1)
              border-radius: 1px
              color: rgb(147, 153, 159)
              background: #fff
          .time
            position: absolute
            top: 0
            right: 0
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
</style>

