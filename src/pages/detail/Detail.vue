<template>
  <div>
    <home-return></home-return>
    <div class="page1">
      <div class="top1">
        <div class="top_img1">
          <img src="@/assets/banner-icon.png" />
        </div>
        <div class="top_desc1">
          <p class="desc11">{{bannerlist.news_title}}</p>
          <p class="desc21">{{bannerlist.created_at}}</p>
        </div>
        <div class="top_zan1"  @click="getHomeZan">
          <img src="@/assets/goodgood.png" />
          <p class="zan_desc1">{{bannerlist.likes_number}}</p>
        </div>
      </div>
      <div class="banner_img1">
        <img :src="bannerlist.news_photo_url_show"/>
      </div>
      <div class="banner_desc1">
        <div v-html="bannerlist.news_content">{{bannerlist.news_content}}</div>
      </div>
    </div>
    <pop-header v-if="LoginShow"></pop-header>
  </div>
</template>

<script>
import HomeReturn from 'common/HomeReturn'
// import {onzhifubao} from '@/api/banner'
import PopHeader from 'common/PopHeader'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerlist: {},
      LoginShow: false
    }
  },
  components: {
    HomeReturn,
    PopHeader
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/member/news-view', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      const data = res.data
      this.bannerlist = data
      console.log(this.$route.params.id)
    },
    getHomeZan () {
      this.$http.post('/api/member/news-zan',
        {
          id: this.$route.params.id
        }
      )
        .then((res) => {
          console.log(res)
          // alert('okok')
          this.getDetailInfo()
          if (res.data.code === -999) {
            console.log(-999)
            this.LoginShow = true
          } else {
            console.log(0)
          }
        }
        )
    }
  },
  mounted () {
    this.getDetailInfo()
    // this.onzhifubao()
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus">
.page1
  width: 100%
  margin-bottom: 1rem
  .top1
      box-sizing: border-box
      padding: .23rem .34rem 0 .41rem
      height: .96rem
      overflow: hidden
      .top_img1
        float: left
        img
          height: .52rem
          width: .62rem
      .top_desc1
        float: left
        min-width: 1rem
        margin-left: .12rem
        .desc11
          font-size: .26rem
          line-height .3rem
          letter-spacing: .04rem
          margin-bottom :0
          width: 4rem
          color: #231815
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .desc21
          font-size: .2rem
          margin:0
          padding: 0
          color: #9fa0a0;
      .top_zan1
        margin: .1rem .01rem 0 0
        float: right
        display: flex
        img
          width: .37rem
          height: .36rem
          float: left
        .zan_desc1
          float: left
          color: #9fa0a0
          font-size: .2rem
          margin-top: .1rem
          margin-left: .03rem
    .banner_img1
      height: 3.34rem
      width: 100%
      background: #fff
      overflow: hidden
      img
        width: 100%
        height: 100%
        object-fit: cover
    .banner_desc1
      font-size: .22rem
      line-height: .33rem
      letter-spacing: .03rem
      color: #2e2623
      padding: .5rem .3rem 0 .3rem
      margin-bottom :1.2rem!important
      img
        width: 100%!important
</style>
