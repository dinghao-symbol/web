<template>
  <div class="bg">
    <img src="@/assets/log-bg.png" class="log-bg"/>
    <div class="title">请选择你的授权方式</div>
    <div class="icon-box">
      <img src="@/assets/zfb.png" class="icon-item"/>
      <img src="@/assets/wx.png" class="icon-item"/>
      <img src="@/assets/wb.png" class="icon-item"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.bg
  z-index:999
  position: absolute
  left: 0
  top: 0
  background: #f5f5f5
  height: 100%
  width: 100%
  .log-bg
    width:100%
  .title
    padding-top:3.5rem
    padding-bottom:.4rem
    font-size: .4rem
    text-align:center
    color: #2e2623
  .icon-box
    padding:1rem 1.4rem 0
    display: flex
    width: 100%
    align-items: center
    justify-content: space-between
    .icon-item
      height: 1rem
      width: 1rem
</style>
