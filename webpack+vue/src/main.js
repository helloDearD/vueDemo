import Vue from "vue"
import login from "./login.vue"
 let vm = new Vue({
     el:"#app",
     data:{
         msg:'vue'
     },
     components:{
        login
     },
     render:c=>c(login)
 })
 //怎末在runtime模式下运行呢