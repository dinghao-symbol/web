<template>
  <div class="header">
    <router-link to="/me">
    <img class="return" src="@/assets/return.png" />
    </router-link>
    <p class="desc"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'ReturnHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    position: fixed
    z-index:999
    left: 0
    top: 0
    right:0
    bottom:0
    height: .87rem
    background-color: #fff
    border-bottom: solid 0.01rem #e8e5e5
    text-align: center
    line-height: .87rem
    font-size: .35rem
    letter-spacing: .07rem
    color: #2e2623
    .desc
      float: left
      margin-left: 2.1rem
    .return
      float: left
      width: .34rem
      height: .35rem
      margin: .26rem 0 0 .49rem
</style>
