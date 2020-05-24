<template>
  <div>
    <header-title>校友之家</header-title>
    <home-img :list="bannerlist"></home-img>
    <home-button></home-button>
    <home-swiper :list="newslist"></home-swiper>
  </div>
</template>
<script>
import {getBannerList} from '@/api/banner'
import HeaderTitle from 'common/Header'
import HomeImg from './components/Img'
import HomeButton from './components/Button'
import HomeSwiper from './components/Swiper'
import axios from 'axios'
export default {
  name: 'Home',
  created () {
    this._getBannerList()
  },
  data () {
    return {
      newslist: [],
      bannerlist: []
    }
  },
  components: {
    HeaderTitle,
    HomeImg,
    HomeButton,
    HomeSwiper
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/member/news-list')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res.data.data)
      res = res.data
      const data = res.data
      this.newslist = data
    },
    _getBannerList () {
      getBannerList().then((res) => {
        res = res.data
        this.bannerlist = res
      })
    }
  },
  activated () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  html
    background: red
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
    align-items: center
    justify-content: space-between
    .icon-item
      height: 1rem
      width: 1rem
</style>
