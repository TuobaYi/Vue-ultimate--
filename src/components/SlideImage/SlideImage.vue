<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
        <a href="javascript:">
          <div class="food_container">
            <img  :src="focus.picUrl">
          </div>
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: 'SlideImage',
    computed:{
      focusList(){
       return this.$store.state.focusList
      }
    },
    watch:{
      focusList(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{ //滑动效果 img
            loop: true, // 循环模式选项
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    mounted(){
     this.$store.dispatch('getfocusList') //拿数据 img地址
    }
  }
</script>

<style scoped lang="stylus">
    .swiper-container
      width 100%
      height:4rem
      overflow hidden
      .swiper-wrapper
        width 100%
        height 100%
        display flex
        flex-flow row nowrap
        .swiper-slide
          flex-shrink 0
          width 7.5rem
          height 3.7rem
          img
            width 100%
</style>
