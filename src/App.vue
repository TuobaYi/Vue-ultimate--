<template>
<div id="app">
  <router-view></router-view>
  <footer-gitde></footer-gitde>
</div>
</template>

<script>
  //import './mock/mockjs';
  import { Button } from 'mint-ui';
  import Vue from 'vue'
  import FooterGitde from './components/FooterGitde/FooterGitde'
  Vue.component(Button.name, Button);
  export default {
    name: 'App',
    components:{
      FooterGitde
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
