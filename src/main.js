// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from "mint-ui"
import axios from 'axios'


Vue.use(MintUI)

Vue.prototype.$http = axios;

/*引入CSS*/
import "./assets/css/animate.css"
import "./assets/css/base.css"
import "./assets/css/master.css"
import "./assets/css/caipiao.scss"
import "mint-ui/lib/style.css"



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
