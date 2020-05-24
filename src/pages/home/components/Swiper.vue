<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide
        v-for="item in list"
        :key="item.id"
        >
        <router-link :to="'/detail/' + item.id">
          <div class="sy_banner_top">
            <div class="sy_banner_top_img">
              <img src="@/assets/banner-icon.png" />
            </div>
            <div class="sy_banner_top_desc">
              <p class="sy_banner_desc1">{{item.news_title}}</p>
              <p class="sy_banner_desc2">{{item.created_at}}</p>
            </div>
            <div class="sy_banner_top_zan">
              <img src="@/assets/good.png"/>
              <p class="sy_zan_desc">{{item.likes_number}}</p>
            </div>
          </div>
          <div class="sy_banner_img">
            <img :src="item.news_photo_url_show" />
          </div>
          <div class="sy_banner_desc">
            <p>{{item.news_abstract}}</p>
          </div>
          </router-link>
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets
    position: absolute
    top: 4.5rem
.wrapper >>> .swiper-pagination-bullet
    margin:0 .05rem .55rem .05rem
    width:.12rem
    height:.12rem
.wrapper >>> .swiper-pagination-bullet-active
    background: black
    width:.24rem
    height:.12rem
    border-radius: .2rem
  .wrapper
    overflow: hidden
    height: 5.78rem
    margin: 0 .17rem 1rem .17rem
    border-radius: .2rem
    background: #fff
    position: relative
    .sy_banner_top
      box-sizing: border-box
      padding: .23rem .34rem 0 .41rem
      height: .96rem
      overflow: hidden
      .sy_banner_top_img
        float: left
        img
          height: .52rem
          width: .62rem
      .sy_banner_top_desc
        float: left
        min-width: 1rem
        margin-left: .12rem
        .sy_banner_desc1
          font-size: .26rem
          line-height .3rem
          letter-spacing: .04rem
          margin-bottom :0
          width: 4rem
          color: #231815
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .sy_banner_desc2
          font-size: .2rem
          margin:0
          padding: 0
          color: #9fa0a0;
      .sy_banner_top_zan
        margin: .1rem .01rem 0 0
        float: right
        display: flex
        img
          width: .37rem
          height: .36rem
          float: left
        .sy_zan_desc
          float: left
          color: #9fa0a0
          font-size: .2rem
          margin-top: .1rem
          margin-left: .03rem
    .sy_banner_img
      height: 3.34rem
      width: 100%
      background: #fff
      overflow: hidden
      img
        width: 100%
        height: 100%;
        object-fit: cover
    .sy_banner_desc
      font-size: .22rem
      line-height: .33rem
      letter-spacing: .03rem
      color: #2e2623
      padding: .5rem .42rem 0 .42rem
      margin-bottom :0 !important
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
      overflow: hidden
</style>
