// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import crypto from 'crypto'
import md5 from 'js-md5'
import CustomTool from './components/CustomTool'
import { Button } from 'vant'
import { Loading } from 'vant'
import { Toast } from 'vant'
import { Overlay } from 'vant'

Vue.use(Toast)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Overlay)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$crypto = crypto
Vue.prototype.$md5 = md5
Vue.prototype.$customTool = CustomTool

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
