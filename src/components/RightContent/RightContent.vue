<template>
  <div class="wrap" v-if="selectItem">
    <div class="right_content">
      <div class="top_title":style="{backgroundImage:`url(${selectItem.bannerUrl})`}"></div>
      <ul v-if="true" class="down_content">
        <li class="content_item" v-for="(item,index) in selectItem.subCateList" :key="index">
          <div class="img_shop">
            <img :src="item.bannerUrl" alt="">
          </div>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <ul v-else class="down_content">
        <li class="content_item" v-for="(item,index) in selectItem.subCateList" :key="index">
          <div class="img_shop">
            <img :src="item.bannerUrl" alt="">
          </div>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'RightContent',
    props:{
      isSelect:Number
    },
    computed:{
      ...mapState(['categoryList']),
      selectItem(){
        return this.categoryList[this.isSelect]
      }
    },
    watch:{
      categoryList(){
      /*  this.bscroll = new BScroll('.wrap',{
          click:true
        })
        this.bscroll.refresh()*/
      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .wrap
    width 5.83333rem
    height 11.45rem
    float right
    overflow: auto
    box-sizing border-box
  .right_content
    width 5.83333rem
    padding .28rem
    box-sizing border-box
    .top_title
      width 5.28rem
      height 1.92rem
      background-color #02a774
      margin-bottom .32rem
      background-image url("http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75")
      background-size 100% 100%
    .down_content
      clearFix()
      width 5.28rem
      .content_item
        float left
        margin-right: .22333rem
        width: 1.44rem
        height 2.16rem
        vertical-align: top
        text-align center
        .img_shop
          width 100%
          height 1.44rem
          img
            width 100%
            height 100%
        span
          font-size .24rem
          color rgb(51, 51, 51)



</style>
