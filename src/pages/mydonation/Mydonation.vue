<template>
  <div>
    <return-header>我的捐赠</return-header>
    <my-card :list="newslist" :total="total"></my-card>
    <pop-header v-if="LoginShow"></pop-header>
  </div>
</template>

<script>
import PopHeader from 'common/PopHeader'
import {onzhifubao} from '@/api/banner'
import axios from 'axios'
import ReturnHeader from 'common/ReturnHeader'
import MyCard from './components/Card'
export default {
  components: {
    ReturnHeader,
    MyCard,
    PopHeader
  },
  data () {
    return {
      newslist: [],
      LoginShow: false,
      total: ''
    }
  },
  methods: {
    onzhifubao,
    getDonationInfo () {
      axios.get('/api/member/donate-list-by-member')
        .then((res) => {
          console.log(res)
          if (res.data.code === -999) {
            this.LoginShow = true
          } else {
            this.getDonationInfoSucc(res)
          }
        })
    },
    getDonationInfoSucc (res) {
      console.log(res.data.data)
      res = res.data
      const data = res.data
      this.newslist = data.donates
      this.total = data.sum
    }
  },
  mounted () {
    this.getDonationInfo()
    this.onzhifubao()
  }
}
</script>

<style lang="stylus" scoped>
</style>
