<template>
  <div id="app">
    <!-- 顶部 -->
    <mt-header fixed title="vueDemo"></mt-header>
    <!-- 中间 -->
    <router-view/>
    <!-- 底部 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item  id="tab1">
       首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
       消息
      </mt-tab-item>
      <mt-tab-item id="tab3">
        通讯
      </mt-tab-item>
      <mt-tab-item id="tab4">
        设置
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 40px;
  height: 100%;
  width: 100%;
  background: #eee;
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
</style>
