import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/tabbar/Home.vue"
import Member from "../components/tabbar/Member.vue"
import Shop from "../components/tabbar/Shop.vue"
import Search from "../components/tabbar/Search.vue"
Vue.use(Router)

export default new Router({
  linkActiveClass:'activeLingk',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopcar',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
