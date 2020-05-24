<template>
  <div>
    <van-dialog
      v-model="show"
      :show-confirm-button="false"
      show-cancel-button
    >
    <div class="title">请选择你的授权方式</div>
      <div class="icon-box">
        <div class="icon-item" @click="this.onZhi">支付宝授权登陆</div>
        <!-- <img src="@/assets/wx.png" class="icon-item"/>
        <img src="@/assets/wb.png" class="icon-item"/> -->
      </div>
      <slot></slot>
    </van-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
// import '@/api/alipayjsapi.inc.min.js'
// import '../../static/utils/alipayjsapi.inc.min.js'
export default {
  name: 'PopHeader',
  data () {
    return {
      show: true
    }
  },
  methods: {
    onZhi () {
      window.location.href = `${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    padding-top:1rem
    padding-bottom:0rem
    font-size: .4rem
    text-align:center
    color: #2e2623
  .icon-box
    padding:.6rem 1rem .3rem
    display: flex
    width: 100%
    flex-direction: column
    align-items: center
    justify-content: center
    .icon-item
      width: 4rem
      margin: 0 .32rem .2rem
      height: .7rem
      line-height: .7rem
      font-size: .34rem
      text-align: center
      border-radius: .05rem
      background: #00abec
      color: #ffffff
</style>
