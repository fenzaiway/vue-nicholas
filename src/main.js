import Vue from 'vue'
import App from './App'

import router from './routers'
import NiBlog from './components'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

/***
参考网站：http://www.golaravel.com/
***/

Vue.use(ElementUI)
Vue.use(NiBlog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
