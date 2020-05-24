<template>
  <div class="imgbox" >
    <div v-for="item in bannerlist" :key="item.id">
       <a :href="item.link_jump_url.length ? item.link_jump_url: '#' ">
        <img :src="item.photo_url_show" />
        <!-- <p class="desc">{{item.title}}</p>
        <p class="littledesc">{{item.abstract}}</p> -->
       </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeImg',
  props: {
    list: Array
  },
  computed: {
    bannerlist () {
      return this.list.filter(list => list.photo_position === 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .imgbox
    width: 100%
    height: 3.59rem
    border-bottom: .02rem solid #dbdbdd
    overflow: hidden
    position: relative
    img
      width: 100%
      height: 100%
      object-fit: cover
    .desc
      position: absolute
      text-align: right
      font-size: .33rem
      line-height: .45rem
      letter-spacing: .08rem
      color: #3e3a39
      width: 2.47rem
      right:.5rem
      top:.43rem
    .littledesc
      position: absolute
      font-size: .07rem
      line-height: .43rem
      letter-spacing: .01rem
      color: #3e3a39
      top:1.34rem
      right:.5rem
</style>
