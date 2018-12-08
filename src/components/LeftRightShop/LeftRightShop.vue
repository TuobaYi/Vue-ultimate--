<template>
  <div class="right_wrap">
    <div class="item_wrap">
      <div class="item_content">
        <div class="one_text">
              <span class="ava">
                <img :src="item.avatar" alt="">
              </span>
          <span>{{item.nickname}}</span>
        </div>
        <div class="two_text">{{item.title}}</div>
        <div class="three_text">{{item.subTitle}}</div>
        <div class="four_text">
          <i></i>
          <span>{{item.readCount}}k人看过</span>
        </div>
      </div>
      <div class="right_img">
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftRightShop',
    props:{
      item:Object
    }
  }
</script>

<style scoped lang="stylus">

  .right_wrap
    width 100%
    background: #fff
    padding .32rem .3rem
    box-sizing border-box
    .item_wrap
      width 100%
      height 2.72rem
      display flex
      justify-content space-between
      .item_content
        width 3.8rem
        height 2.7rem
        .one_text
          height .56rem
          display flex
          align-items center
          font-size .28rem
          color rgb(51, 51, 51)
          .ava
            width .6rem
            height .6rem
            display inline-block
            border-radius 50%
            overflow hidden
            margin-right .15rem
            img
              width 100%
              height 100%
        .two_text
          width: 100%
          font-size: .38rem
          color: #333
          line-height: .39rem
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          padding-top: .32rem
          font-family: PingFangSC-Regular
        .three_text
          width: 100%
          height .3rem
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          font-size: .22rem
          line-height: .22rem
          padding-top: .08rem
          color: #7f7f7f
          margin-top .1rem
        .four_text
          width 100%
          font-size: .22rem;
          color: #999;
          line-height: .32rem
          margin-top .2rem
      .right_img
        width 2.7rem
        height 2.7rem
        img
          width 100%
          height 100%

</style>
