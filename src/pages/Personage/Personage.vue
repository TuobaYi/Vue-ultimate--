<template>
    <div class="login_wrap">
      <div class="hender_title">
        <div class="header_wrap">
          <div class="left_home">
            <span class="iconfont icon-navhomeicon" @click="$router.replace('/msite')"></span>
          </div>
          <div class="centre_text">
          </div>
          <div class="right_skip">
            <span class="iconfont iconfont icon-sousuo" style="marginRight:.25rem"></span>
            <span class="iconfont icon-qicheqianlian-1-copy" @click="$router.replace('/shop-cart')"></span>
          </div>
        </div>
      </div>
      <div class="content_d" :class="{isSelect:loginType!==1 }">
        <div class="one_d"></div>
        <div class="tor_d">
          <div class="data_input" v-if="loginType!==1">
            <div class="top_data">
              <input v-model="dataTop" type="text" :placeholder="loginType==2?'请输入手机号':'请输入账号'">
            </div>
            <div class="xia_data">
              <input v-model="dataX" :type="loginType===3?'password':'text'" :placeholder="loginType==2?'请输入验证码':'请输入密码'">
            </div>
            <div class="auth_code">
              <button :disabled="computeTime>0 || loginType !== 2" class="get_verification" :class="{right_phone_number:loginType===2}"
                      @click.prevent="handleVerification"
              >{{computeTime?`已发送${computeTime}`:"获取验证码"}}</button>
            </div>
          </div>
          <div class="top_btn" :class="{isSelect:loginType!==1 }" @click="handleShow(2)">
            <span></span>
            <span>{{loginType ===1 ?'手 机 号 码 登 录':'登 录'}}</span>
          </div>
          <div v-if="loginType===1" class="xia_btn" @click="handleShow(3)">
            <span></span>
            <span>{{loginType ===1 ? '邮 箱 账 号 登 录': "其 他 登 录 方 式"}}</span>
          </div>
          <div v-if="loginType===3||loginType===2" class="xia_btn" @click="handleShow(1)">
            <span></span>
            <span>{{loginType ===1 ? '邮 箱 账 号 登 录': "其 他 登 录 方 式"}}</span>
          </div>
          <div>手机号快捷注册></div>
        </div>
        <div v-if="loginType===1" class="tre_d">
          <span>微信</span> |
          <span>QQ</span> |
          <span>微博</span> |
        </div>
        <div></div>
      </div>
    </div>
</template>

<script>
  import { Toast,MessageBox } from 'mint-ui';
  export default {
    name: 'Personage',
    data(){
      return {
        loginType:1, //当  1 代表其它登录, 2 短信 , 3 账号
        dataTop: '', // 手机号 || 用户名
        dataX: '', // 短信验证码 || 密码
        computeTime:0,//定义一个倒计时
      }
    },
    methods:{
      handleShow(type){
        console.log(type)
        this.loginType=type
      },//处理登录

      async handleVerification(){
        this.computeTime=5;
        let timeId = setInterval(()=>{
          this.computeTime--;
          if (!this.computeTime)clearInterval(timeId)
        },1000)
        if (this.isRightPhone){
          const result = await reqSmsCode(this.phone);
          if (result.code != 0) {
            Toast('获取验证码失败!!');
          }
        }
      },//手机 获取验证码 的处理
    },
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/minixs.styl'
  .login_wrap
    width 100%
    overflow hidden
    .content_d
      width 100%
      height 12.3rem
      background-color rgb(242, 245, 244)
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      &.isSelect
        background-color rgb(255, 255, 255)
      .one_d
        margin-top 1.6rem
        width 2.6666rem
        height .9rem
        background-image url("//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
        background-size 100% 100%
      .tor_d
        width 6.66rem
        height 2.85rem
        text-align center
        div
          width 100%
          height .88rem
          font-size .26rem
        .top_btn
          background-color rgb(180, 40, 45)
          line-height .88rem
          margin-bottom .3rem
          color rgb(255, 255, 255)
          &.isSelect
            color #f2f5f4
        .xia_btn
          line-height .88rem
          margin-bottom .3rem
          color rgb(180, 40, 45)
          border 1px solid rgb(180, 40, 45)
      .tre_d
        width 60%
        height .399999rem
        text-align center
        color rgb(127, 127, 127)
        display flex
        justify-content space-around
      .data_input
        width 100%
        margin-bottom .95rem
        position relative
        top -50%
        div
          height auto
          bottom-border-1px(#7f7f7f)
        input
          width 100%
          height .9rem
          outline none
          border none
          font-size .5rem
        .auth_code
          position relative
          top -50%
          left 30%
          .get_verification
            transform translateY(-50%)
            border 0
            color #ccc
            font-size 14px
            background transparent
            &.right_phone_number
              color: #000
        .auth_code::after
          height 0
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
      .centre_text
        width 1.65rem
        height .5rem
        background-image: url(./images/logo.png)
        background-size 100% 100%
      .actives
        color: #b4282d
        font-size .4rem
        font-weight bold
      .iconfont
        font-size 25px


</style>
