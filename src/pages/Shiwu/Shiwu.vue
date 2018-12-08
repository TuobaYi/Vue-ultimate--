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
          <div v-for="(item) in shiwuNav" :key="item.tabId" @click="handleNav(item.tabId)">
            <span :class="{activesss:item.tabId === isTabId}">{{item.tabName}}</span>
          </div>

        </div>
      </div>

      <div v-for="(item,index) in shiwu" :key="index">
        <div v-if="item.ad">
          {{}}
          <div  class="shop_logo">
            <img :src="item.ad.picUrl" alt="">
          </div>
          <Split/>
        </div>
        <div v-if="item.type===2 || item.type===1">  <!--//左右 结构-->
          <left-right-shop :item="item"></left-right-shop>
          <Split/>
        </div>
        <div v-if="item.type===0"> <!--//上下 结构-->
        <up-and-shop :item="item"></up-and-shop>
        <Split/>
      </div>
      </div>
    </div>
</template>

<script>
  import Split from '../../components/Split/Split'
  import upAndShop from '../../components/upAndShop/upAndShop'
  import LeftRightShop from '../../components/LeftRightShop/LeftRightShop'
  import {mapState} from 'vuex'
  export default {
    name: 'Shiwu',
    data(){
      return {
        isTabId:null
      }
    },
    computed:{
      ...mapState(['shiwu','shiwuNav']),
    },
    methods:{
      handleNav(tabId){
        if(tabId === 4){
          this.$store.dispatch('getDaRen') //达人
        }
        if (tabId === 9){
          this.$store.dispatch('getRecommend') //推荐
        }
        this.isTabId=tabId
      }
    },
    mounted(){
      //this.$store.dispatch('getDaRen') //达人
      this.$store.dispatch('getRecommend') //推荐
      this.$store.dispatch('getShiwuNav') //导航
    },
    watch:{
      shiwuNav(){
        this.isTabId = this.shiwuNav[0].tabId  //默认 显示选中 第一个 的标识
      }
    },
    components:{
      Split,
      upAndShop,
      LeftRightShop
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .shiwu_wrap
    width 100%
    height auto
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
          .activesss
            color #b4282d
          .activesss:after
            content: ' '
            position: absolute
            left  0
            right 0
            bottom -.18rem
            margin 0 auto
            width: 110%
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
        height 100%

</style>
