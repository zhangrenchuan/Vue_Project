import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

// 引入mock
import './mock/mockServer'

import './common/stylus/fonts.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({

})

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(App, '#app')

router.go('/goods')

