<template>
  <div class="content_d">
    <div class="one_d"></div>
    <div class="tor_d">
      <div class="top_btn" @click="handleType(2)">
        <span></span>
        <span>手机号码登录</span>
      </div>
      <div class="xia_btn" @click="handleType(3)">
        <span></span>
        <span>邮箱账号登录</span>
      </div>
      <div>手机号快捷注册></div>
    </div>
    <div class="tre_d">
      <span>微信</span> |
      <span>QQ</span> |
      <span>微博</span> |
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'QiTa',
    methods:{
      handleType(type){
        this.$emit('handleShow',type)
      }
    }
  }
</script>

<style scoped lang="stylus">


</style>
