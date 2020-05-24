<template>
  <div class="header"><slot></slot></div>
</template>

<script>
export default {
  name: 'HeaderTitle'
}
</script>

<style lang="stylus" scoped>
  .header
    position: fixed
    z-index:50
    left: 0
    top: 0
    width: 100%
    height: .87rem
    background-color: #fff
    border-bottom: solid 0.01rem #e8e5e5
    text-align: center
    line-height: .87rem
    font-size: .35rem
    letter-spacing: .07rem
    color: #2e2623
</style>
