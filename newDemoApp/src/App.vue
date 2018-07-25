<template>
  <div id="app">
    <!-- 顶部 -->
    <mt-header fixed title="vueDemo"></mt-header>
    <!-- 中间 -->
    <transition>
      <router-view style="height:calc(100% - 25px);"/>
    </transition>
    <!-- 底部 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item  id="tab1">
       <router-link to="/home">首页</router-link> 
      </mt-tab-item>
      <mt-tab-item id="tab2">
       <router-link to="/member">会员</router-link> 
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <router-link to="/shopcar">购物车</router-link> 
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <router-link to="/search">搜索</router-link>  
      </mt-tab-item>
   </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: 1
    };
  }
};
</script>

<style>
.activeLingk {
  color: red;
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 40px;
  height: 100%;
  width: 100%;
  background: #eee;
  overflow-x: hidden;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
* {
  box-sizing: border-box;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
  /* position: absolute; */
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease
 } 
</style>
