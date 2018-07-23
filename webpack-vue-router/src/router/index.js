import Vue from "vue"
//1.导入vue-router
import VueRouter from "vue-router"
//2.安装vue-router
Vue.use(VueRouter);
//3.创建路由对象,导入组件
import account from "../main/Account.vue"
import goodList from "../main/GoodsList.vue"
import login from "../child/login.vue"
let router = new VueRouter({
    routes : [{
      path: '/account',
      component: account,
      children:[
        {
          path:'login',
          component:login

        }
      ]
    },
    {
      path: '/goodList',
      component: goodList
    }
  ]
})
export default router