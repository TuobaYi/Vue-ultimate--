<template>
    <div class="msite">
      <div class="hander_wrap">
        <div class="msite_header">
          <span class="logo"></span>
          <div class="search" @click="$router.push('/search')">
            <i class="search_i iconfont icon-sousuo"></i>
            <span class="search_s">搜索商品, 共19914款好物</span>
          </div>
          <div class="login" @click="$router.replace('/personage')">登录</div>
        </div>
        <div class="msite_nav">
          <div class="list_tab">
          <span class="tab_active" v-for="(nav,index) in msiteNav" :key="index" @click="checkedNav=index" :class="{active:index===checkedNav}"> <!--选项卡active active 选中-->
            <span>{{nav.name}}</span>
          </span>
          </div>
        </div>
        <span class="toggle">
          <span class="iconfont icon-denglu"></span>
        </span>
      </div>

      <div class="msite_content">
    <slide-image></slide-image>

    <div class="indexServicePolicy ">
      <div>
        <i class="iconfont icon-denglu"></i>
        <span class="indexServicePolicy_text">
                  网易自营品牌
              </span>
      </div>
      <div>
        <i class="iconfont icon-denglu"></i>
        <span class="indexServicePolicy_text">
                  网易自营品牌
              </span>
      </div>
      <div>
        <i class="iconfont icon-denglu"></i>
        <span class="indexServicePolicy_text">
                  网易自营品牌
              </span>
      </div>
    </div>
    <div class="shop_list">
      <div class="shop_item" v-for="(item,index) in kingKong" :key="index">
        <div><img :src="item.picUrl" alt=""></div>
        <span>{{item.text}}</span>
      </div>
    </div>
    <split/>
    <div class="freshmanModule ">
      <div class="text">- 新人专享礼 -</div>
      <div class="right_left_div">
        <div class="left_div top_de">
          <img src="http://yanxuan.nosdn.127.net/13ae17d083a2328d4a0016ebe232a57b.png" alt="">
          <p class="text_top">福利社</p>
          <p class="text_b">今日特价</p>
        </div>
        <div class="left_div">
          <img src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png" alt="">
          <div class="text_top">新人拼团</div>
          <div class="text_b">1元起包邮</div>
        </div>
      </div>
      <div class="right_div">
        <p>新人专礼</p>
        <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
      </div>
    </div>
    <split/>
    <div class="direct_supply">
      <div class="text_top">
        <span>品牌制造商直供</span>
        <i>更多 ></i>
      </div>
      <div class="top_wor">
        <div class="left_shop">
          <p class="top_p">海外制造商</p>
          <p class="next_p"> 9.9元起 <span>上新</span></p>
        </div>
        <div class="right_shop">
          <p class="top_p">海外制造商</p>
          <p class="next_p">9.9元起 <span>上新</span></p>
        </div>
      </div>
      <div class="top_wor">
        <div class="left_shop">
          <p class="top_p">海外制造商</p>
          <p class="next_p"> 9.9元起 <span>上新</span></p>
        </div>
        <div class="right_shop">
          <p class="top_p">海外制造商</p>
          <p class="next_p">9.9元起 <span>上新</span></p>
        </div>
      </div>
    </div>
    <split/>

    <div class=" singles_sales">
      <p>类目热销榜</p>
      <div class="shop_item_list">
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </div>
      <div class="shop_item_top">
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="shop_item">
          <p class="text">服装榜</p>
          <img src="http://yanxuan.nosdn.127.net/e7b3e95a03560f65fee9da6f8dd8ebde.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </div>
    </div>
  </div>

    </div>
</template>

<script>
  import SlideImage from '../../components/SlideImage/SlideImage'
  import Split from '../../components/Split/Split' //分隔 组件的组件
  import BScroll from 'better-scroll'

  export default {
    name: 'Msite',
    data(){
      return{
        checkedNav:0,//选中的导航
        shops:[1,2,3,4,5,
                1,1,1,1,1]
      }
    },
    computed:{
      msiteNav(){
        return this.$store.state.MsiteNav
      },
      kingKong(){
        return this.$store.state.kingKongList
      }
    },
    mounted(){
      this.$store.dispatch('getMsiteNav')//上面导航
      this.$store.dispatch('getKingkongList')//轮播图 下面 小商品
       this.$nextTick(() => {
         new BScroll('.msite_nav',{
           scrollX: true,
           click: true
         })
       })
    },
    components:{
      SlideImage,
      Split
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .msite  //首页
    width 100%
    padding-top 1.66rem
    .hander_wrap
      z-index 1000
      background-color: rgb(204, 204, 204)
      width: 100%
      position fixed
      top:0
      left:0
      .msite_header
        position: relative
        z-index: 500
        display: flex
        flex-flow: row nowrap
        adivgn-items: center
        background: #fff
        padding: .16rem .3rem
        .logo
          width: 1.38rem;
          height: .39984rem;
          background-image: url(./images/logo.png);
          display: indivne-block;
          margin-right: .2rem;
          margin-top: .1rem
          background-size: cover;
          background-position: center
        .search
          flex-grow: 1
          display: flex
          /*justify-content: center*/
          height: .56rem
          font-size: .27999rem
          background-color: #ededed
          border-radius: .10667rem
          padding-top .13rem
          padding-left .38rem
          box-sizing:border-box
          .search_i
            display: indivne-block
            vertical-adivgn: middle
            width: .27333rem
            height: .27333rem
            margin-right: .1rem
            box-sizing: border-bo
          .search_s
            color: #666
        .login
          width: .72667rem
          height: .3755rem
          text-align: center;
          color: #b4282d;
          border: 1px solid #b4282d;
          border-radius: .10667rem;
          margin-left: .16333rem
          box-sizing: border-box
          font-size: .24rem
          margin-top: .1rem
      .msite_nav
        width:6.3rem
        height .8rem
        overflow: hidden
        position: relative
        display: flex
        .list_tab
          flex-shrink: 0;
          padding: 0 .4rem;
          background: #fff
          .tab_active
            padding: 0 .21333rem;
            line-height: .8rem;
            font-size: .33333rem;
            color: #333;
            text-align: center
            position: relative
            &.active
              color: #b4282d
            &.active:after
              content: ' '
              position: absolute
              left  0
              right 0
              bottom: -.1rem
              margin 0 auto
              width: .87rem
              height: .03333rem
              background-color: #b4282d
      .toggle
        position: absolute
        right: .5rem
        top: 1.13rem
    .msite_content
      width 100%
      margin-bottom 50px
      .indexServicePolicy
        //display: flex
        background-color: #FFEDDB
        width: 100%
        height: .72rem
        box-sizing:border-box
        padding-top: .2rem
        padding-left: .5rem
          //align-items: center
        div
          font-size: .24rem
          float: left
          margin-right .3rem
          color: rgb(180, 40, 45)


      .shop_list
        clearFix()
        box-sizing:border-box
        width 100%
        padding-left 0.3rem
        padding-top: 0.3rem
        background-color: #FFEDDB
        .shop_item
          width 1.1rem
          height 1.56rem
          float: left
          text-align: center
          margin-right .3rem
          font-size .24rem
          img
            width: 100%
            height: 100%
      .freshmanModule
        width 100%
        box-sizing:border-box
        padding-left .2rem
        padding-right .2rem
        padding-bottom .4rem
        text-align: center
        background-color: #fff
        .text
          margin  .3rem 0
        .right_left_div
          float: right
          width 3.42984rem
          height 4.37969rem
          margin-right .2rem
          .left_div
            float: right
            width 3.12rem
            height 2.1rem
            margin-top .1rem
            background-color: rgb(249, 233, 207)
            .text_top
              margin-top .32rem
              font-size .32rem
            .text_b
              font-size .24rem
              background #CBB693
              width 1.2rem
              border-radius .2rem
            img
              width 2rem
              height 2rem
              float: right
            &.top_de
              padding-top .05rem
              margin-top 0
              .text_top
                margin-top .32rem
                font-size .32rem
              .text_b
                font-size .24rem
                background rgb(249, 233, 207)
        .right_div  //实际是左边
          width 3.42rem
          height 4.34rem
          background-color: rgb(249, 233, 207)
          padding-top .5rem
          text-align left
          padding-left .5rem
          box-sizing:border-box
          img
            margin-top .5rem
            margin-right .55rem
            float: right
            width 2.28rem
            height 2.2899rem

      .direct_supply
        clearFix()
        width 100%
        padding .3rem .3rem
        box-sizing:border-box
        .text_top
          width 100%
          margin-bottom .3rem
          box-sizing:border-box
          padding-left .2rem
          i
            float right
        .top_wor
          width 100%
        .below_wor
          width 100%
        .left_shop
          float left
          padding-top .2rem
          width 3.35rem
          height 2.3rem
          margin-bottom .2rem
          background-color rgb(244, 244, 244)
          background-image url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1)
          background-size: 100% 100%
          p
            text-align center
          .top_p
            font-size .27rem
            margin-bottom .1rem
          .next_p
            font-size .24rem
            color #7F7F7F
            span
              background-color: rgb(203, 182, 147)
              border-radius .1rem
        .right_shop
          padding-top .2rem
          float right
          width 3.335rem
          height 2.3rem
          margin-bottom .2rem
          background-color rgb(244, 244, 244)
          background-image url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1)
          background-size: 100% 100%
          p
            text-align center
          .top_p
            font-size .27rem
            margin-bottom .1rem
          .next_p
            font-size .24rem
            color #7F7F7F
      .singles_sales
        padding .2rem .2rem
        width 100%
        box-sizing: border-box
        .shop_item_list
          width 100%
          display flex
          justify-content space-between
          box-sizing:border-box
          .shop_item
            position relative
            display flex
            height 2rem
            margin: 0 .13333rem .13333rem 0
            border-radius: .05333rem
            box-sizing: border-box
            background: #F9F3E4
            .text
              align-items center
              line-height 1.8rem
              margin-left .1rem
              &.text::before
                content: ''
                position: absolute
                left: .25rem
                bottom: 0.8rem
                width: .64rem
                height: .05333rem
                background: #333
            img
              width 70%
        .shop_item_top
          width 100%
          display flex
          justify-content space-between
          box-sizing:border-box
          .shop_item
            position relative
            height 2rem
            margin: 0 .133rem .133rem 0
            border-radius: .053rem
            box-sizing: border-box
            background: #F9F3E4
            text-align center
            .text
              text-align center
            img
              width 70%


</style>
