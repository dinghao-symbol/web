<template>
  <div class="button">
    <router-link tag="div" class="button_item" to="/donation">基金捐赠</router-link>
    <router-link tag="div"  class="button_item" to="/tree">认养“浙科大树”</router-link>
    <router-link tag="div"  class="button_item" to="/me/myhome">回“家”报到</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeButton'
}
</script>

<style lang="stylus" scoped>
  .button
    display: flex
    justify-content: space-between
    margin: .3rem .17rem .3rem .17rem
    .button_item
      background: #fff
      font-size: .26rem
      letter-spacing: .04rem
      border: .01rem solid #dbdbdb
      color: #231815
      width: 2.29rem
      height: .84rem
      border-radius: .7rem
      text-align: center
      line-height: .83rem
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
</style>
