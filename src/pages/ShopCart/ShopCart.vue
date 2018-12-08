<template>
  <div class="shop">
    <div class="top">
      <span class="cart sp">购物车</span>
      <span class="dec sp">领券</span>
    </div>
    <div class="support">
      <span class="s-one">30天无忧退款</span>
      <span class="s-two">48小时快速退款</span>
      <span class="s-three">满88元免邮费</span>
    </div>
    <div class="goto">
      <div class="nihao"></div>
      <span>去添点什么吧</span>
    </div>

    <div class="login" @click="$router.replace('/profile')">
      登录
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopCart'
  }
</script>

<style scoped lang="stylus">
  .shop
    width 100%
    height 100%
    position relative
    .top
      width 100%
      height .9rem
      background-color white
      position relative
      .cart
        width 2rem
        height .9rem
        display inline-block
        position absolute
        left 0
        right 0
        margin auto
        text-align center
        line-height .9rem
      .dec
        width 2rem
        height .9rem
        display inline-block
        position absolute
        right 0
        text-align center
        line-height .9rem
        color rgb(180, 40, 45)
        font-size .30rem
    .support
      width 100%
      height .8rem
      display flex
      justify-content space-between
      .s-one
        width 2rem
        height .8rem
        display inline-block
        font-size .24rem
        text-align center
        line-height .8rem
        color rgb(51,51,51)

      .s-two
        width 2rem
        height .8rem
        display inline-block
        font-size .24rem
        text-align center
        line-height .8rem
        color rgb(51,51,51)

      .s-three
        width 2rem
        height .8rem
        display inline-block
        font-size .24rem
        text-align center
        line-height .8rem
        color rgb(51,51,51)

    .goto
      width 100%
      height 3rem
      position absolute
      top 4.5rem
      left 0
      right 0
      margin 0 auto
      .nihao
        width 2.48rem
        height 2.48rem
        margin auto
        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
        background-size 100% 100%
      span
        width 3rem
        height .7rem
        display inline-block
        position absolute
        bottom 0
        left 0
        right 0
        margin 0 auto
        text-align center
        line-height .7rem
        font-size .28rem
        color rgb(127,127,127)

    .login
      width 70%
      height .9rem
      background-color rgb(180, 40, 45)
      color white
      text-align center
      line-height .9rem
      position absolute
      top 8rem
      right 0
      left 0
      margin 0 auto



</style>
