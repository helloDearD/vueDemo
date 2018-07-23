import Vue from "vue"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import app from "./app.vue"
import router from "./router/index.js"


let vm = new Vue({
  el: "#app",
  data: {
 
  },
  router,
  render: c => c(app)
})
//怎末在runtime模式下运行呢
