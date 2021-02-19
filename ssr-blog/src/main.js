// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import MainLayout from '~/layouts/Layout.vue'


// import util from './utils/util'
import util from './../utils/util'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
import 'vant/lib/index.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Vant)
  Vue.use(ElementUI)
  Vue.prototype.$util = util
  Vue.component('Layout', DefaultLayout)
  Vue.component('MainLayout', MainLayout)
}
