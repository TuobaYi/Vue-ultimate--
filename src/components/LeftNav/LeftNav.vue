<template>
    <div class="left_nav_wrap">
      <ul class="nav_list">
        <li class="nav_item"
            v-for="(category,index) in categoryList" :key="index"
            :class="{active:isSelect===index}" @click="handleIsSelect(index)"
        >
          <span>{{category.name}}</span>
        </li>
      </ul>
      <div class="right_border"></div>
    </div>
</template>
<script>

  import BScroll from 'better-scroll'
  export default {
    name: 'LeftNav',
    props:{
      isSelect:Number
    },
   /* data(){
      return {
        isSelect:0,//哪一个被选中
      }
    },*/
    computed:{
      categoryList(){
        return this.$store.state.categoryList
      },//总数据
    },
    methods:{
      handleIsSelect(index){
        this.$emit('handleIsSelect',index)
      }
    },
    watch:{
      categoryList(){
        new BScroll('.left_nav_wrap',{
          click:true
        })
      }
    },
    mounted(){
      this.$store.dispatch('getCategoryList')
    },

  }
</script>

<style scoped lang="stylus">
    .left_nav_wrap
      position relative
      width 1.62rem
      height 11.45rem
      background-color lightpink
      overflow hidden
      .nav_list
        width 100%
        padding-top .1rem
        .nav_item
          position relative
          width 100%
          height .5rem
          margin-top: .5rem
          font-size .27999rem
          text-align center
          line-height .5rem
          &.active
            color: #b4282d
          &.active::after
            content: ' '
            position: absolute
            top 0
            left .03rem
            margin  auto 0
            width: .05rem
            height:100%
            background-color: #b4282d
      .right_border //一像素 右边框
        position absolute
        top 0
        right 0
        height 100%
        width 1px
        background-color #b9c1bd
        transform scaleX(0.5)





</style>
