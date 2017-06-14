import Vue from 'vue'
import app from './components/app'
import store from './store'

import './base.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(app)
})
