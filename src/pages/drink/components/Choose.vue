<template>
  <div>
    <div class="drink_choose" v-for="item in drinklist" :key="item.id">
      <div class="drink_choose_item">
        <input v-model="id" type="radio" :id="item.id" name="drink" :value="item.id"/>
        <label :for="item.id">{{item.drink}}</label>
        <div class="drink_choose_img">
          <img :src="item.image_url_show" />
        </div>
      </div>
    </div>
    <div class="drink_button">
      <div class="drink_button_item" @click="OnDrinkClick">确定</div>
      <div class="drink_button_item" @click="NotRequire">不需要</div>
    </div>
    <div class="drink_ps">
      <p> 校友之家是公益性场馆<br>
        感谢您向学校教育基金会捐赠资金支持学校建设发展<br>
        校友之家的志愿者为您准备了小食或茶饮请您选择</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Dialog } from 'vant'

export default {
  data () {
    return {
      id: '',
      drinklist: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/member/feedback-list')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      const data = res.data
      this.drinklist = data
      console.log(res)
    },
    OnDrinkClick () {
      console.log(this.$route.query)
      this.$http.post('/api/member/feedback-select',
        {
          id: this.id,
          donate_id: parseInt(this.$route.query.donate_id)
        }
      )
        .then((response) => {
          // alert('okok')
          Dialog.alert({
            title: '成功提交',
            message: '您已成功提交',
            width: '5.38rem',
            confirmButtonColor: '#231815'
          }).then(() => {
            this.$router.replace('/me/mydonation')
          })
        },
        (response) => {
          // alert('nono')
        }
        )
    },
    NotRequire () {
      this.$router.replace('/home')
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.drink_choose
  .drink_choose_item
    height: 1.18rem
    line-height: 1.18rem
    background: #fff
    border-radius: .3rem
    padding-left: .78rem
    margin: .2rem
    font-size: .37rem
    letter-spacing: .05rem
    overflow: hidden
    .drink_choose_img
      height: 1.18rem
      width: 1.18rem
      float: right
      display: flex
      justify-content: center
      align-items: center
      overflow: hidden
      img
        height: 1.18rem
        width: 1.18rem
        object-fit: cover
    input[type="radio"]+label::before
      content: "\a0"
      /*不换行空格*/
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
      position: absolute
      clip: rect(0, 0, 0, 0)
.drink_button
  display: flex
  justify-content: space-between
  margin: .4rem .97rem .7rem .97rem
  .drink_button_item
    width: 2.3rem
    height: .85rem
    font-size: .4rem
    letter-spacing: .07rem
    line-height: .85rem
    text-align: center
    border-radius: .6rem
    background: #fff
    border: .02rem solid #dbdbdd
.drink_ps
  font-size: .18rem
  line-height: .27rem
  letter-spacing: .03rem
  color: #7d7d7d
  margin: .5rem .1.31rem
  text-align: center
</style>
