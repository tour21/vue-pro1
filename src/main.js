// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import {MintUI, Swipe, SwipeItem} from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'

import { Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'
import './assets/global.css'

Vue.use(Lazyload);
Vue.use(VuePreview)

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(MintUI)
Vue.http.options.root = 'http://027xin.com:8899'
Vue.http.options.emulateJSON = true

Vue.filter('dateFormat', function (dateStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
