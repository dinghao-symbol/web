<template>
  <div class="bg" ref="wrapper">
    <div>
     <div class="jz_wrapper">
      <div class="jz_total">
        <p class="jz_desc">捐赠总金额</p>
        <p class="jz_total_number">￥{{total}}</p>
      </div>
    </div>
    <ul v-for="(item, index) in list" :key="index">
      <li class="jz_card">
        <p :class="[item.p_state == 0  ? 'jz_card_title1':'jz_card_title' ]">{{item.p_state == 0 ? '拟捐赠金额': '捐赠金额'}}</p>
        <p class="jz_card_number">￥{{item.donate_number}}</p>
        <div class="jz_card_intro">
          <div class="jz_again" v-show='item.p_state == 0  ? true : false' @click="onAgainpay(item.id)">
           继续支付 \ 刷新状态
          </div>
          <div class="jz_again_no" v-show='item.p_state == 0  ? true : false' @click="onGiveDonate(item.id)">
           放弃捐赠
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">姓名</p>
            <p class="jz_intro_right">{{item.donor_name}}</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">对象</p>
            <p class="jz_intro_right">{{item.to_donate_people}}</p>
          </div>
          <div class="jz_card_intro_item">
            <p class="jz_intro_left">日期</p>
            <p class="jz_intro_right">{{item.created_at}}</p>
          </div>
        </div>
        <div class="jz_more" @click='OnMoreClick(index)'>
          <div class="jz_more_title">
            <p>查看寄语</p>
          </div>
          <div class="jz_arrow">
            <img src="@/assets/arrow-right.png"
            :class="[ arr.includes(index) ? 'jz_arrow_on' : 'jz_arrow']"
            />
          </div>
        </div>
        <div class="jz_more_content" v-show="arr.includes(index)">
          <p>{{item.d_remark}}</p>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      arr: []
    }
  },
  props: {
    list: Array,
    total: String
  },
  methods: {
    OnMoreClick (index) {
      let isHas = this.arr.findIndex(i => i === index)
      isHas > -1 ? this.arr.splice(isHas, 1) : this.arr.push(index)
    },
    onAgainpay (res) {
      console.log(res)
      this.$http.post('/api/member/pay-again',
        {
          donateId: res
        }
      )
        .then((res) => {
          // alert('okok')
          const div = document.createElement('div')
          div.innerHTML = res.data
          document.body.appendChild(div)
          document.forms['alipay_submit'].submit()
        },
        (res) => {
          // alert('nono')
        }
        )
    },
    onGiveDonate (res) {
      console.log(res)
      this.$http.post('/api/member/donate-give-up',
        {
          donate_id: res
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
  // computed: {
  //   total () {
  //     let total = 0
  //     this.list.map((item) => { total += item.donate_number })
  //     return total
  //   }
  // },
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
  .jz_card
    display: flex
    flex-direction: column
    background: #fff
    margin: .17rem
    border-radius: .2rem
    .jz_card_title
      text-align: center
      letter-spacing: .03rem
      color: #717071
      font-size: .25rem
      padding: .36rem 0 0 .1rem
    .jz_card_title1
      text-align: center
      letter-spacing: .03rem
      color: red
      font-size: .25rem
      padding: .36rem 0 0 .1rem
    .jz_card_number
      text-align: center
      letter-spacing: .04rem
      font-size: .5rem
      color: #231815
      padding-bottom: .3rem
    .jz_card_intro
      display: flex
      flex-direction: column
      border-bottom: .02rem solid #d5d6d7
      .jz_again
        margin: 0 .32rem .2rem
        height: .7rem
        line-height: .7rem
        font-size: .34rem
        text-align: center
        border-radius: .05rem
        background: #00abec
        color: #ffffff
      .jz_again_no
        margin: 0 .32rem .2rem
        height: .7rem
        line-height: .7rem
        font-size: .34rem
        text-align: center
        border-radius: .05rem
        background: #fff
        color: #00abec
        border: .02rem solid #00abec
      .jz_card_intro_item
        height: .45rem
        font-size: .25rem
        letter-spacing: .02rem
        display: flex
        margin: 0 0 .22rem .38rem
        .jz_intro_left
          margin-right: .6rem
          color: #717071
        .jz_intro_right
          color: #2e2623
    .jz_more
      display: flex
      justify-content: space-between
      height: .8rem
      line-height: .8rem
      padding: 0 .4rem
      .jz_more_title
        font-size: .25rem
        letter-spacing: .02rem
        color: #2e2623
      .jz_arrow
        img
          height: .26rem
          width: auto
      .jz_arrow_on
         transform: rotate(90deg)
    .jz_more_content
      padding: 0 .4rem .49rem
      font-size: .22rem
      line-height: .37rem
      letter-spacing: .02rem
      color: #717071
</style>
