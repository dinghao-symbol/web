<template>
  <div class="bg">
    <img src="@/assets/aarrow.png" class="arrow"/>
    <p class="weixin">|&#32;请在菜单中选择在浏览器中打开</p>
  </div>
</template>

<script>
export default {
  name: 'Weixin'
}
</script>

<style lang="stylus" scoped>
  html, body, div
    margin:0
    z-index: 10000
    height:100%
  .bg
    display: flex
    flex-direction: column
    align-items: flex-end
    .arrow
      margin-right: .5rem
      width: .55rem
      height: 1.02rem
    .weixin
      margin-right: .5rem
      position: relative
      z-index: 10000
      height: 100%
      font-size: .35rem
      background: #f3f3f4
</style>
