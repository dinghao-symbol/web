<template>
  <div class="bg" ref="wrapper">
    <ul>
    <div class="jz_wrapper">
      <div class="jz_total">
        <p class="jz_desc">成功认养次数</p>
        <p class="jz_total_number">{{total}}</p>
      </div>
     </div>
     <div class="ry_wrapper">
      <div class="ry_card" v-for="item in list" :key="item.id">
        <div class="ry_card_intro">
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">姓名</p>
            <p class="ry_intro_right">{{item.adopter_name}}</p>
          </div>
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">类型</p>
            <p class="ry_intro_right">{{item.adopt_type}}</p>
          </div>
          <div class="ry_card_intro_item">
            <p class="ry_intro_left">状态</p>
            <p class="ry_intro_right">{{item.a_state_show}}</p>
          </div>
          <div class="giveup" v-show='item.a_state == 0 ? true : false' @click='giveupTree(item.id)'>
            放弃认养
          </div>
          </div>
          <div class="ry_more">
            <p class="ry_more_title">你于{{item.created_at}}申请领养浙江科技学院的某树，正在审核中，感谢你对母校的支持。</p>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    list: Array,
    total: String
  },
  methods: {
    giveupTree (res) {
      console.log(res)
      this.$http.post('/api/member/adopt-give-up',
        {
          id: res
        }
      )
        .then((res) => {
          // alert('okok')
          location.reload()
        },
        (res) => {
          // alert('nono')
        }
        )
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
  margin: .88rem 0 1rem 0
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background: #f3f3f4
  .jz_wrapper
    overflow: hidden
    .jz_total
      margin: .17rem
      padding: 0 .35rem
      background: #fff
      border-radius: .2rem
      height: 1.11rem
      line-height: 1.11rem
      display: flex
      justify-content: space-between
      .jz_desc
        font-size: .32rem
        letter-spacing: .04rem
        color: #2e2623
      .jz_total_number
        letter-spacing: .06rem
        font-size: .35rem
        color: #231815
  .ry_wrapper
    overflow: hidden
    .ry_card
      background: #fff
      margin: .17rem
      border-radius: .2rem
      .ry_card_intro
        display: flex
        flex-direction: column
        padding-top: .39rem
        .giveup
          margin: 0 .32rem .2rem
          height: .7rem
          line-height: .7rem
          font-size: .34rem
          text-align: center
          border-radius: .05rem
          background: #fff
          color: #00abec
          border: .02rem solid #00abec
        .ry_card_intro_item
          height: .45rem
          font-size: .25rem
          letter-spacing: .02rem
          display: flex
          margin: 0 0 .25rem .38rem
          .ry_intro_left
            margin-right: .6rem
            color: #717071
          .ry_intro_right
            color: #2e2623
      .ry_more
        display: flex
        justify-content: space-between
        line-height: .41rem
        padding: 0 .4rem
        .ry_more_title
          border-top: .02rem solid #d5d6d7
          padding: .28rem 0 .41rem 0
          font-size: .25rem
          letter-spacing: .02rem
          color: #2e2623
</style>
