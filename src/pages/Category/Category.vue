<template>
    <div class="category">
      <div class="header_top">
        <div class="div_input">
            <span class="iconfont iconfont icon-sousuo"></span>
            <span>搜索商品, 共19864款好物</span>
        </div>
      </div>
      <div class="content">
        <right-content :isSelect="isSelect"></right-content>
        <left-nav :isSelect="isSelect" @handleIsSelect="handleIsSelect"></left-nav>
      </div>
    </div>
</template>

<script>
  import LeftNav from '../../components/LeftNav/LeftNav'
  import RightContent from '../../components/RightContent/RightContent'
  export default {
    name: 'Category',
    data(){
      return {
        isSelect:0,//哪一个被选中
      }
    },
    methods:{
      handleIsSelect(index){
        this.isSelect=index
      }
    },
    components:{
      LeftNav,
      RightContent
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .category
    width: 100%
    padding-top 0.9rem
    .header_top
      bottom-border-1px(#b9c1bd)
      width 100%
      padding 0 .32rem
      display: flex
      align-items: center
      height: 0.9rem
      background-color: #fff
      position: fixed
      top 0
      box-sizing:border-box
      .div_input
        width: 100%
        display: flex
        flex-flow: row nowrap
        align-items: center
        justify-content: center
        height: .58rem
        font-size: .19rem
        background-color: #ededed
        box-sizing:border-box
        color #666
        .iconfont
          margin-right .1rem



    .content
      width 100%
      height 11.45rem
      overflow hidden

</style>
