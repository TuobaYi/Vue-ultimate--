<template>
<div id="app">
  <router-view></router-view>
  <footer-gitde></footer-gitde>
</div>
</template>

<script>
  //import './mock/mockjs';
  import FooterGitde from './components/FooterGitde/FooterGitde'
  export default {
    name: 'App',
    components:{
      FooterGitde
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
