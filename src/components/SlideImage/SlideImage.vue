<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:">
          <div class="food_container">
            <img  src="./images/image1.jpg">
          </div>
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'SlideImage',
    mounted(){
      // new BScroll('.slide_wrap',{
      //
      // })
    }
  }
</script>

<style scoped lang="stylus">
    .swiper-container
      width 100%
      height:4rem
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              width 100%
              height 100%

</style>
