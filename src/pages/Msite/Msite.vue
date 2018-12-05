<template>
    <div class="msite">
      <div class="hander_wrap">
        <div class="msite_header">
          <span class="logo"></span>
          <div class="search">
            <i class="search_i iconfont icon-sousuo"></i>
            <span class="search_s">搜索商品, 共19914款好物</span>
          </div>
          <div class="login">登录</div>
        </div>
        <div class="msite_nav">
          <div class="list_tab">
          <span class="tab_active"> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active active"> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
          </span>
            <span class="tab_active "> <!--选项卡 active 选中-->
            <span>推荐</span>
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
          <div class="shop_item" v-for="(item,index) in shops" :key="index">
            <div><img src="http://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt=""></div>
            <span>居家</span>
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
        shops:[1,2,3,4,5,
                1,1,1,1,1]
      }
    },
    mounted(){
      let scroll = new BScroll('.msite_nav',{
        scrollX: true,
        click: true
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
      background-color: rgb(204, 204, 204)
      width: 100%
      position fixed
      top:0
      left:0
      .msite_header
        position: relative
        z-index: 2
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
              left  .08rem
              bottom: 0
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
          img
            width: 100%
            height: 100%



      .freshmanModule
        width 100%
        box-sizing:border-box
        padding-left .2rem
        padding-right .2rem
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




</style>
