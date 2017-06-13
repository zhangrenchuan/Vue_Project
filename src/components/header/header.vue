<template>
  <div class="header">

    <!--TODO 头部内容主体区域-->
    <div class="content-wrapper">
      <!--商家logo-->
      <div class="avatar">
        <img :src="seller.avatar">
      </div>

      <!--商家主体内容-->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <!--seller.supports有值才显示下面的-->
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>

      <!--商家描述详情按钮-->
      <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
        <span class="count">{{seller.supports.length}}</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <!--TODO 头部公告区域-->
    <div class="bulletin-wrapper" @click="showDetail(true)">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <!-- 右→箭头 -->
      <span class="icon-keyboard_arrow_right"></span>
    </div>

    <!--TODO 头部商家底层背景图-->
    <div class="background">
      <img :src="seller.avatar">
    </div>

    <!--TODO 浮层-->
    <div class="detail" v-show="detailShow">
      <!--浮层主体内容-->
      <div class="detail-wrapper">
        <div class="detail-main">
          <!--内容主体名-->
          <div class="name">{{seller.name}}</div>

          <!--星星区域-->
          <div class="star-wrapper">
            <star :score="seller.score" :size="48"></star>
          </div>

          <!--浮层优惠信息标题-->
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>

          <!--浮层满减描述-->
          <ul class="supports" v-if="seller.supports">
            <li class="support" v-for="support in seller.supports">
              <span class="icon" :class="classMap[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>

          <!--浮层商家公告标题-->
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>

          <!--浮层商家内容-->
          <div class="content">
            <p>{{seller.bulletin}}</p>
          </div>
        </div>
      </div>

      <!--浮层 x 图标-->
      <div class="detail-close" @click="showDetail(false)">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入 星星组件
  import star from '../star/star.vue'
  export default {
    // 接收app中data里的seller数据
    props: ['seller'],
    data () {
      return {
        // 定义浮层初始化时不显示
        detailShow: false
      }
    },
    created () {
      // 动态获得小图标  data里type值对应样式名
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      // 定义浮层显示隐藏的方法
      showDetail (show) {
        this.detailShow = show
      }
    },
    components: { // 注册组件标签
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  /*头部总样式*/
  .header
    position relative
    background rgba(7,17,27,.5)
    color aliceblue
    overflow hidden
    /*TODO 头部内容包裹区*/
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      /*商家LOGO图*/
      .avatar
        display inline-block
        width 64px
        height 64px
        &>img
          width 100%
      /*商家内容主体样式*/
      .content
        display inline-block
        margin-left 16px
        /*商家标题样式*/
        .title
          margin-top 2px
          /*品牌图标样式 mixins引入*/
          .brand
            display inline-block
            width 30px
            height 18px
            background-repeat no-repeat
            background-size 30px 18px
            vertical-align middle
            bg-image(brand)
          /*商家名*/
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        /*描述样式*/
        .description
          margin-top 8px
          margin-bottom 10px
          font-size 12px
          font-weight 200
          line-height 12px
        /*满减支持样式*/
        .support
          margin-bottom 2px
          /*满减图标样式*/
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align middle
          /*mixins引入*/
          .discount
            bg-image(discount_1)
          .decrease
            bg-image(decrease_1)
          .guarantee
            bg-image(guarantee_1)
          .invoice
            bg-image(invoice_1)
          .special
            bg-image(special_1)
          /*满减文本样式*/
          .text
            margin-left 4px
            font-size 10px
            font-weight 200
            line-height 12px
       /*满减详情数量样式*/
      .supports_count
        position absolute
        right 10px
        bottom 10px
        height 24px
        background rgba(0,0,0,.2)
        padding 7px 8px
        border-radius 7px
        box-sizing border-box
        /*详情'按钮'样式*/
        .count
          margin-right 2px
          font-size 10px
          font-weight 200
          line-height 12px
          vertical-align top
    /*TODO 公告包裹区样式*/
    .bulletin-wrapper
      position relative
      background rgba(7,17,27,0.2)
      padding 0 20px 0 12px
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
      height 28px
      line-height 28px
      /*公告区域标题样式*/
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        background-repeat no-repeat
        background-size 22px 12px
        vertical-align middle
        bg-image(bulletin)
      /*公告区域文本样式*/
      .bulletin-text
        font-size 10px
        font-weight 200
        margin 0 4px
      /*右箭头样式*/
      .icon-keyboard_arrow_right
        position absolute
        top 8px
        right 0
    /*TODO 头部底层背景样式*/
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      &>img /*& 表示从父级拿取*/
        width 100%
        height 100%
        filter blur(10px)
    /*TODO 浮层样式*/
    .detail
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      background  rgba(7,17,27,.8)
      z-index 100
      .detail-wrapper
        min-height 100%
        /*浮层主内容样式*/
        .detail-main
          padding-bottom 32px
          padding-top 64px
          /*名字*/
          .name
            text-align center
            font-size 16px
            font-weight 700
            line-height 16px
            margin-bottom 16px
           /*星星区域*/
          .star-wrapper
            height 24px
            line-height 24px
            text-align center
           /*浮层标题样式 【公用】*/
          .title
            padding 28px 36px 24px
            text-align center
            display flex
            .line
              flex 1
              width 112px
              height 2px
              background rgba(255,255,255,.2)
              margin-top 8px
            .text
              margin 0 12px
           /*满减描述样式*/
          .supports
            padding 0 48px
            .support
              height 16px
              margin-bottom 12px
              /*小logo样式*/
              .icon
                display inline-block
                width 16px
                height 16px
                background-size 16px 16px
                background-repeat no-repeat
                vertical-align middle
              .discount
                bg-image(discount_2)
              .decrease
                bg-image(decrease_2)
              .guarantee
                bg-image(guarantee_2)
              .invoice
                bg-image(invoice_2)
              .special
                bg-image(special_2)
              /*满减描述文本样式*/
              .text
                margin-left 6px
                font-size 12px
                font-weight 200
                line-height 12px
          /*浮层商家公告样式*/
          .content
            padding 0 48px
            font-size 12px
            font-weight 200
            line-height 24px
       /*浮层关闭样式*/
      .detail-close
        margin-top -64px
        font-size 32px
        width 100%
        height 32px
        text-align center
        color #666
</style>
