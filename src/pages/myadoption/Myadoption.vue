<template>
  <div>
    <return-header>我的认养</return-header>
    <my-card :list="adoptlist" :total="total"></my-card>
    <pop-header v-if="LoginShow"></pop-header>
  </div>
</template>

<script>
import PopHeader from 'common/PopHeader'
import {onzhifubao} from '@/api/banner'
import ReturnHeader from 'common/ReturnHeader'
import MyCard from './components/Card'
import axios from 'axios'
export default {
  components: {
    ReturnHeader,
    MyCard,
    PopHeader
  },
  data () {
    return {
      adoptlist: [],
      LoginShow: false
    }
  },
  methods: {
    onzhifubao,
    getAdoptInfo () {
      axios.get('/api/member/adopt-list-by-member')
        .then((res) => {
          if (res.data.code === -999) {
            console.log(111)
            this.LoginShow = true
          } else {
            this.getAdoptInfoSucc(res)
          }
        })
    },
    getAdoptInfoSucc (res) {
      res = res.data
      const data = res.data
      this.adoptlist = data.data
      this.total = data.count
      console.log(res)
    }
  },
  mounted () {
    this.getAdoptInfo()
    this.onzhifubao()
  }
}
</script>

<style lang="stylus" scoped>
</style>
