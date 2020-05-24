<template>
  <div class="bg">
    <header-title></header-title>
    <drink-img :list="bannerlist"></drink-img>
     <div class="wrapper" ref="wrapper">
       <div>
         <drink-choose></drink-choose>
      </div>
     </div>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
import DrinkImg from './components/Img'
import DrinkChoose from './components/Choose'
import {getBannerContent} from '@/api/banner'
import Bscroll from 'better-scroll'

export default {
  created () {
    this._getBannerContent()
  },
  data () {
    return {
      bannerlist: []
    }
  },
  name: 'Drink',
  components: {
    HeaderTitle,
    DrinkImg,
    DrinkChoose
  },
  methods: {
    _getBannerContent () {
      getBannerContent().then((res) => {
        res = res.data
        this.bannerlist = res
      })
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  }
}
</script>

<style lang="stylus" scoped>
.bg
  position: fixed
  padding-top: .88rem
  padding-bottom: 1rem
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: #f3f3f4
  .wrapper
    margin-top:.2rem
    height: 9rem
    overflow: hidden
</style>
