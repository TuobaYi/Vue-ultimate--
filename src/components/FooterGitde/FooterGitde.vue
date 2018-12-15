<template>
  <footer v-if="isShow" class="footer_guide border-1px">
    <!--:class="{on:$route.path==='/msite'}" @click="handleSkip('/msite')"-->
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/msite'}"@click="handleSkip('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-navhomeicon"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/category'}"@click="handleSkip('/category')">
      <span class="item_icon">
        <i class="iconfont icon-icon2"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shiwu'}"@click="handleSkip('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-navhomeicon" ></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shop-cart'}"@click="handleSkip('/shop-cart')">
      <span class="item_icon">
        <i class="iconfont icon-qicheqianlian-1-copy"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/personage'}"@click="handleSkip('/personage')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin-xuanzhong"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    name: 'FooterGitde',
    computed:{
      isShow(){
        const {path} =this.$route
        return (path!=='/login'&& path!=='/personage')
      }
    },
    methods:{
      handleSkip(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/minixs.styl'
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #ff2325
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

