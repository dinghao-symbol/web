<template>
  <div>
    <header-title>认养大树</header-title>
    <tree-img :list="bannerlist"></tree-img>
    <form>
    <!-- <div class="do_money">
      <p>捐赠金额</p>
      <div class="do_money_total">
        <div class="do_money_box" >
          <div class="do_money_box_item" @click="OnMoneyClick">
            <p class="zi_star">*</p>
            <input v-validate="'required'" v-model="donate_number" type="radio" id="five" name="money" value="5"/>
            <label for="five">1000元</label>
          </div>
          <div class="do_money_box_item" @click="OnMoneyClick">
            <input  v-validate="'required'" v-model="donate_number" type="radio" id="ten" name="money" value="10"/>
            <label for="ten">2000元</label>
          </div>
          <div class="do_money_box_item" @click="OnMoneyClick">
            <input v-validate="'required'" v-model="donate_number" type="radio" id="twenty" name="money" value="20"/>
            <label for="twenty">3000元</label>
          </div>
          <div class="do_money_box_item" @touchend="OnOtherClick">
            <input v-validate="'required'" type="radio" id="other" name="money" />
            <label for="other">其他</label>
          </div>
        </div>
          <div class="do_money_other" v-show="other">
            <p class="do_money_desc">输入金额</p>
            <input v-model="donate_number" class="do_money_input" @input="handlenumber"/>
          </div>
      </div>
    </div> -->
      <div class="tree_option_box">
        <div class="tree_option_box_item">
          <p class="zi_star">*</p>
          <p class="tree_option_desc">认养类型</p>
          <div class="tree_choose">
            <div class="tree_box_item">
              <input v-validate="'required'" v-model="adopt_type" type="radio" id="1" value="1" />
              <label for="1">个人</label>
            </div>
            <div class="tree_box_item">
              <input  v-validate="'required'" v-model="adopt_type" type="radio" id="2"  value="2"/>
              <label for="2">集体</label>
            </div>
          </div>
        </div>
        <div class="tree_option_box_item">
          <p class="zi_star">*</p>
          <p class="tree_option_desc">姓名</p>
          <input v-validate="'required'" v-model="adopter_name" class="tree_option_input" type="text"/>
        </div>
        <div class="tree_option_box_item">
          <p class="zi_star">*</p>
          <p class="tree_option_desc">手机</p>
          <input v-validate="'required|phone'" v-model="a_phone_number" class="tree_option_input" @input="handlePhone"/>
        </div>
        <div class="tree_option_box_item">
          <p class="tree_option_desc1">邮箱</p>
          <input v-validate="'email'" v-model="a_email" class="tree_option_input" type="text" />
        </div>
        <div class="tree_option_box_item1">
          <p class="tree_option_desc1">认养单位</p>
          <input v-model="a_company" class="tree_option_input" type="text" />
        </div>
      </div>
      <div class="tree_explain">
        <textarea v-model="adopt_ask_reason" class="tree_sendword" placeholder="申请说明" rows="3"></textarea>
      </div>
      <button class="tree_send_button" @click="OnSendClick">
        提交申请
      </button>
    </form>
    <pop-header v-if="LoginShow"></pop-header>
  </div>
</template>

<script>
import PopHeader from 'common/PopHeader'
import HeaderTitle from 'common/Header'
import TreeImg from './components/Img'
import {getBannerContent, onzhifubao} from '@/api/banner'
import { Dialog } from 'vant'
export default {
  created () {
    this._getBannerContent()
  },
  components: {
    HeaderTitle,
    TreeImg,
    PopHeader
  },
  data () {
    return {
      adopt_type: '',
      adopter_name: '',
      a_phone_number: '',
      a_email: '',
      a_company: '',
      adopt_ask_reason: '',
      bannerlist: [],
      LoginShow: false
    }
  },
  methods: {
    onzhifubao,
    OnSendClick () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.OnTreeClick()
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
    OnTreeClick () {
      this.$http.post('/api/member/adopt-add',
        {
          // member_id: 2,
          adopter_name: this.adopter_name,
          a_phone_number: this.a_phone_number,
          a_email: this.a_email,
          a_company: this.a_company,
          adopt_type: this.adopt_type,
          adopt_ask_reason: this.adopt_ask_reason
        }
      )
        .then((res) => {
          console.log(res.data)
          if (res.data.code === -999) {
            this.LoginShow = true
          } else {
            this.$router.replace('/me/myadoption')
          }
        },
        (res) => {
          // alert('nono')
        }
        )
    },
    handlePhone (e) {
      this.a_phone_number = e.target.value.replace(/[^\d]/g, '')
    },
    _getBannerContent () {
      getBannerContent().then((res) => {
        res = res.data
        this.bannerlist = res
      })
    }
  },
  mounted () {
    this.onzhifubao()
  }
}
</script>

<style lang="stylus" scoped>
.do_money
  margin: .19rem .17rem 0 .17rem
  p
    padding: 0 0 .16rem .3rem
    font-size: .3rem
    letter-spacing: .06rem
    color: #2e2623
  .do_money_total
    background: #fff
    border-radius: .2rem
    padding: 0 .44rem 0 0
    .do_money_box
      line-height: .77rem
      font-size: .32rem
      display: flex
      justify-content: space-between
      .do_money_box_item
        .zi_star
          color: #d8281c
          font-size: .32rem
          padding-top: .05rem
          float: left
        input[type="radio"]+label::before
          content: "\a0"
          /*不换行空格*/
          display: inline-block
          vertical-align: middle
          width: .32rem
          height: .32rem
          margin: .1rem .25rem .1rem 0
          border-radius: 50%
          box-shadow: 0 0 .05rem #dcdcdc
          padding: .04rem
          background-color: #dcdcdc
          background-clip: content-box
        input[type="radio"]:checked+label::before
          background-color: #4c4949
          background-clip: content-box
        input[type="radio"]
          position: absolute
          clip: rect(0, 0, 0, 0)
    .do_money_other
      border-top: .02rem solid #dbdbdd
      height: .79rem
      line-height: .79rem
      // display: none
      .do_money_desc
        float: left
        padding-right: .2rem
        letter-spacing: .04rem
        margin-left: 0
.tree_option_box
  margin: .17rem
  height: 4.61rem
  padding: 0 .38rem 0 .33rem
  background: #fff
  border-radius: .2rem
  font-size: .32rem
  .tree_option_box_item
    border-bottom: .02rem solid #d5d6d7
    height: .9rem
    line-height: .9rem
    display: flex
    justify-content: space-between
    .zi_star
      color: #d8281c
      font-size: .32rem
      padding-top: .05rem
      float: left
    .tree_choose
      margin-right: .4rem
      .tree_box_item
        float: left
        margin-left: .3rem
        input[type="radio"]+label::before
          content: "\a0"
          display: inline-block
          vertical-align: middle
          width: .32rem
          height: .32rem
          margin: .1rem .25rem
          border-radius: 50%
          box-shadow: 0 0 .05rem #dcdcdc
          padding: .04rem
          background-color: #dcdcdc
          background-clip: content-box
        input[type="radio"]:checked+label::before
          background-color: #4c4949
          background-clip: content-box
        input[type="radio"]
          position: absolute;
          clip: rect(0, 0, 0, 0)
    .tree_option_desc
      padding-right: .6rem
    .tree_option_desc1
      margin-left: .4rem
    .tree_option_input
      min-width: 4.5rem
      background-color: transparent
  .tree_option_box_item1
    height: .9rem
    line-height: .9rem
    display: flex
    justify-content: space-between
    .tree_option_desc
      padding-right: .2rem
    .tree_option_desc1
      margin-left: .4rem
    .tree_option_input
      min-width: 4.5rem
      background-color: transparent
.tree_explain
  margin: .19rem .17rem 0 .17rem
  height: 1.96rem
  padding: .24rem .35rem
  background: #fff
  border-radius: .2rem
  .tree_sendword
    font-size: .3rem
    line-height: .43rem
    letter-spacing: .04rem
    width: 100%
.tree_send_button
  width: 2.3rem
  height: .85rem
  font-size: .32rem
  letter-spacing: .05rem
  margin: .2rem 0 0 2.6rem
  line-height: .85rem
  text-align: center
  border-radius: .6rem
  background: #fff
  border: .02rem solid #dbdbdd
  margin-bottom: 1.2rem
</style>
