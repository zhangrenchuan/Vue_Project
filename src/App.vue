<template>
  <div>
    <ele-header :seller="seller"></ele-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a v-link="{path: '/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      // 发送ajax请求  mock提供的接口
      this.$http.get('/api2/seller')
        .then(response => {
          console.log(response.body)
          // 获得返回结果
          const result = response.body
          if (result.code === 0) {
            this.seller = result.data
          }
        })
    },
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*1物理像素*/
  @import "common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    display flex
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex-grow 1
      text-align center
      font-size 14px
      color rgb(77,85,93)

      /*为a标签添加样式. 点击区域变大*/
      a
        display block
        &.v-link-active /*用来描述a  &符号引用上一级*/
          color: rgb(240,20,20)
</style>
