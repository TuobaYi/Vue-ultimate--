<template>
  <div class="wrap">
    <header class="header-wrap">
      <div class="header-content">
        <div class="inp">
          <i class="icon"></i>
          <input type="text" :placeholder="searchVal"
                 v-model="searchText" @focus="isShow=true" @blur="handleB">
        </div>
        <div class="cancel">
          <span class="text" @click="$router.back()">取消</span>
        </div>
      </div>
    </header>
    <div class="content" v-show="isShow && searchResult.length>0">
      <ul class="list">
        <li class="item" v-for="(search,index) in searchResult" :key="index">
          {{search}}</li>
      </ul>
    </div>
    <div class="initList" v-if="searchInitList.hotKeywordVOList">
      <span>热门搜索</span>
      <ul>
        <li :class="{highlight :item.highlight}"
            v-for="(item,index) in searchInitList.hotKeywordVOList" :key="index">
          <a href="#">{{item.keyword}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Search',
    data(){
      return {
        searchText:'',  //收集数据
       isShow:false, //焦点
      }
    },
    mounted(){
      this.$store.dispatch('getSearchInit')
    },
    computed:{
      ...mapState(['searchInitList','searchResult']),
      searchVal(){
        if (this.searchInitList.defaultKeyword){
          return this.searchInitList.defaultKeyword.keyword
        }
      }
    },
    methods:{
      handleB(){
        this.isShow=false
        this.$store.dispatch('resetSearchResult') //失去焦点 清空数据
      }
    },
    watch:{
      searchText(){
        const {searchText} = this
        this.$store.dispatch('getSearchResult', {keywordPrefix:searchText}) //异步action 时时搜索
      }
    }
  }
</script>

<style scoped lang="stylus">

  @import "../../common/stylus/minixs.styl"
  .wrap
    width: 100%
    font-size .32rem
    .header-wrap
      bottom-border-1px(#d9d9d9)
      height 0.87rem
      .header-content
        z-index: 1;
        width: 6.9rem
        margin: auto;
        overflow: hidden;
        position: relative;
        padding: 0 0.3rem
        height: 0.87rem
        display: flex;
        align-items: center;
        justify-content: space-between;
        .inp
          padding-top 0
          padding-left .2rem
          padding-bottom 0
          border 0
          background-color #f4f4f4
          height .56rem
          border-radius 2px
          display flex
          align-items center
          justify-content space-between
          flex 1
          .icon
            width .27rem
            height .27rem
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-size 100% 100%
          input
            padding-left 0.2rem
            flex 1
            outline none
            background-color transparent
        .cancel
          margin-left .3rem
          font-size .28rem
    .content
      width: 100%
      position absolute
      top: .9rem
      z-index 9
      padding 0 .3rem
      .list
        display block
        padding-left .3rem
        background-color #fff
        .item
          bottom-border-1px(#d9d9d9)
          height 0.9rem
          line-height 0.9rem
    .initList
      padding: 0.3rem 0.3rem;
      background-color: #fff;
      overflow: hidden;
      ul
        margin-top .3rem
        margin-right: -0.3rem;
        margin-bottom: -0.32rem;
        width 100%
        display flex
        justify-content flex-start
        flex-wrap wrap
        font-size 0.24rem
        li
          padding: 0 0.1rem;
          flex-shrink 0
          margin-right: 0.32rem;
          margin-bottom: 0.32rem;
          line-height: 0.46rem;
          border: 0.01rem solid #999;
          border-radius: 0.04rem;
          color: #333;
          &.highlight
            border-color: #b4282d;
            color: #b4282d !important;

</style>
