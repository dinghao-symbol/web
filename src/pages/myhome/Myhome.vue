<template>
  <div class="bg">
    <return-header>回家报道</return-header>
    <div class="bg" ref="wrapper">
      <div>
        <form @submit.prevent="OnSendClick" >
        <div class="zi_xinxi">
          <p class="zi_p">校友信息</p>
          <div class="zi_box">
            <p class="zi_star"></p>
            <div class="zi_desc">
              <p>学院</p>
              <input v-model="newslist.mm_college" type="text" class="zi_input" />
            </div>
          </div>
          <div class="zi_box">
            <p class="zi_star"></p>
            <div class="zi_desc">
              <p>专业班级</p>
              <input v-model="newslist.mm_class" type="text" class="zi_input" />
            </div>
          </div>
          <div class="zi_box">
            <p class="zi_star"></p>
            <div class="zi_desc1">
              <p>入学时间</p>
              <van-field  readonly="readonly" @click="showPopuptime"  name="mm_city" type="text" class="zi_input_1" v-model="newslist.mm_entrance_date"/>
            <van-popup v-model="showtime" position="bottom">
              <van-datetime-picker
              :min-date="minDate"
              :max-date="maxDate"
              v-model="currentDate"
              type="date"
              @change="changeFn()"
              @confirm="confirmFn()"
              @cancel="cancelFn()"
            />
            </van-popup>
            </div>
          </div>
        </div>
        <pop-header v-if="LoginShow"></pop-header>
        <div class="zi_button" @click="OnSendClick">提交</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {onzhifubao} from '@/api/banner'
import Bscroll from 'better-scroll'
import PopHeader from 'common/PopHeader'
import ReturnHeader from 'common/ReturnHeader'
import { Dialog } from 'vant'
import AddressInfo from 'common/areaList.js'
import axios from 'axios'
export default {
  components: {
    ReturnHeader,
    PopHeader
  },
  data () {
    return {
      minDate: new Date(1975),
      maxDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      // id: 2,
      // member_id: 2,
      mm_name: '',
      mm_phone_number: '',
      mm_email: '',
      mm_company: '',
      mm_college: '',
      mm_class: '',
      mm_entrance_date: '',
      showtime: false,
      areaList: AddressInfo,
      mm_province: '',
      mm_city: '',
      newslist: {},
      LoginShow: false
    }
  },
  methods: {
    changeFn () { // 值变化是触发
      this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
    },
    onzhifubao,
    getDonationInfo () {
      axios.get('/api/member/memberfile-view')
        .then((res) => {
          if (res.data.code === -999) {
            this.LoginShow = true
          } else {
            this.getDonationInfoSucc(res)
          }
        })
    },
    getDonationInfoSucc (res) {
      res = res.data
      const data = res.data
      this.newslist = data
      console.log(data)
    },
    onSelAddr () {
      this.show = true
    },
    confirmFn () {
      this.showtime = false
      // console.log(e)
      this.newslist.mm_entrance_date = this.timeFormat(this.currentDate)
    },
    onAddrCancel () {
      this.show = false
    },
    cancelFn () {
      this.showtime = false
    },
    timeFormat (time) { // 时间格式化 2019-09-08
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      return year + '年' + month + '月' + day + '日'
    },
    showPopuptime () {
      this.showtime = true
    },
    OnSendClick () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.OnDataClick()
        } else {
          Dialog.alert({
            title: '提交失败',
            message: '请输入必填项\n以及输入正确格式',
            width: '5.38rem',
            confirmButtonColor: '#231815'
          })
        }
      })
    },
    OnDataClick () {
      this.$http.post('/api/member/memberfile-edit',
        this.newslist
      )
        .then((response) => {
          // alert('okok')
        },
        (response) => {
          // alert('nono')
        }
        )
    },
    handlePhone (e) {
      this.mm_phone_number = e.target.value.replace(/[^\d]/g, '')
    }
  },
  mounted () {
    this.timeFormat(new Date())
    this.getDonationInfo()
    this.onzhifubao()
    this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  }
}
</script>
<style lang="stylus">
.van-field__control
  text-align: right!important
</style>
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
  .zi_xinxi
    border-bottom: .02rem solid #d5d6d7
    .zi_p
      font-size: .25rem
      line-height: .43rem
      letter-spacing: .02rem
      color: #717071
      padding: .15rem .5rem
      border-bottom: .02rem solid #d5d6d7
    .zi_wrapper
      border-bottom: .02rem solid #d5d6d7
    .zi_box
      height: .98rem
      background: #fff
      line-height: .98rem
      display: flex
      justify-content: space-between
      .zi_star
        color: #d8281c
        margin: 0 0 0 .24rem
        font-size: .32rem
      .zi_desc
        width: 7rem
        border-bottom: .02rem solid #d5d6d7
        p
          float: left
          font-size: .3rem
          letter-spacing: .04rem
        .zi_input
          height: .98rem
          line-height: .98rem
          width: 5rem
          margin-right: .4rem
          background-color: transparent
          float: right
          text-align: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
        .zi_input_1
          display: inline-block
          width: 5rem
          height: .98rem
          line-height: .58rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
      .zi_desc1
        width: 7rem
        p
          float: left
          font-size: .3rem
          letter-spacing: .04rem
        .zi_input
          height: .98rem
          line-height: .98rem
          width: 5rem
          margin-right: .4rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
        .zi_input_1
          display: inline-block
          width: 5rem
          height: .98rem
          line-height: .58rem
          background-color: transparent
          direction: rtl
          float: right
          letter-spacing: .03rem
          color: #2e2623
          font-size: .32rem
  .zi_button
    width: 2.3rem
    height: .85rem
    font-size: .32rem
    letter-spacing: .05rem
    margin: .2rem auto 1rem
    line-height: .85rem
    text-align: center
    border-radius: .6rem
    background: #fff
    border: .02rem solid #dbdbdd
</style>
