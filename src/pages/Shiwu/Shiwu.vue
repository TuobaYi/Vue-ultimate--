<template>
    <div class="shiwu_wrap">
      <div class="hender_title">
        <div class="header_wrap">
          <div class="left_home">
            <span class="iconfont icon-navhomeicon" @click="$router.replace('/msite')"></span>
          </div>
          <div class="centre_text">
            <span :class="{actives:true}">发现</span>
            <span>甄选家</span>
          </div>
          <div class="right_skip">
            <span class="iconfont iconfont icon-sousuo" style="marginRight:.25rem"></span>
            <span class="iconfont icon-qicheqianlian-1-copy" @click="$router.replace('/shop-cart')"></span>
          </div>
        </div>
        <div class="nav_top">
          <div >
            <span class="active">推荐</span>
          </div>
          <div>
            <span>达人</span>
          </div>
          <div>
            <span>上新</span>
          </div>
          <div>
            <span>晒单</span>
          </div>
          <div>
            <span>HOME</span>
          </div>

        </div>
      </div>
      <Split/>
      <div class="shop_logo">
        <img src="./image1.jpg" alt="">
      </div>
      <Split/>
      <div class="right_wrap">
        <div class="item_wrap">
          <div class="item_content">
            <div class="one_text">
              <span class="ava">
                <img src="./image1.jpg" alt="">
              </span>
              <span></span>
            </div>
            <div class="two_text"></div>
            <div class="three_text"></div>
            <div class="four_text"></div>
          </div>
          <div class="right_img">
            <img src="./image1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Split from '../../components/Split/Split'
  export default {
    name: 'Shiwu',
    components:{
      Split
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .shiwu_wrap
    width 100%
    padding-top 1.71rem
    .hender_title
      width 100%
      position fixed
      top 0
      .header_wrap
        bottom-border-1px(#7F7F7F)
        height 1rem
        width 100%
        background-color rgb(250, 250, 250)
        display flex
        justify-content space-between
        align-items center
        padding 0 .24rem
        box-sizing border-box
        color  #7F7F7F
        .actives
          color: #b4282d
          font-size .4rem
          font-weight bold
        .iconfont
          font-size 25px
      .nav_top
        bottom-border-1px(#7F7F7F)
        width 100%
        height .72rem
        display flex
        align-items center
        justify-content space-around
        color rgb(127, 127, 127)
        font-size .28rem
        background-color #fafafa
        div
          position relative
        &.active
          position relative
          color #b4282d
        &.active:after
          content: ' '
          position: absolute
          left  0
          right 0
          bottom: -.3rem
          margin 0 auto
          width: .555rem
          height: .03333rem
          background-color: #b4282d
    .shop_logo
      width 100%
      background: #fff
      height 4rem
      box-sizing: border-box
      padding .3rem .36rem
      img
        width 6.85rem

    .right_wrap
      width 100%
      background: #fff
      padding .32rem .3rem
      box-sizing border-box
      .item_wrap
        width 100%
        height 2.72rem
        background-color pink
        display flex
        justify-content space-between
        .item_content
          width 3.8rem
          height 2.7rem
          background-color #4cd96f
          .one_text
            height .56rem
            .ava
              width .6rem
              height .6rem
              display inline-block
              border-radius 50%
              overflow hidden
              img
                width 100%
                height 100%
        .right_img
          width 2.7rem
          height 2.7rem
          img
            width 100%
            height 100%
</style>
