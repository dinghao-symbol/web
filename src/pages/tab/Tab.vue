<template>
  <van-tabbar v-model="active" active-color="#000" style="z-index:999" v-show="hidshow">
    <van-tabbar-item to="/home" name="home">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.homeactive : icon.homenormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/donation" name="donation">
      <span>基金捐赠</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.donationactive : icon.donationnormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/tree" name="tree">
      <span>认养大树</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.treeactive : icon.treenormal"
      >
    </van-tabbar-item>
    <van-tabbar-item to="/me" name="me">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.meactive : icon.menormal"
      >
    </van-tabbar-item>
  </van-tabbar>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      active: 'home',
      icon: {
        homenormal: require('@/assets/f-shouye.png'),
        homeactive: require('@/assets/f-shouye-on.png'),
        donationnormal: require('@/assets/f-juanzeng.png'),
        donationactive: require('@/assets/f-juanzeng-on.png'),
        treenormal: require('@/assets/f-tree.png'),
        treeactive: require('@/assets/f-tree-on.jpg'),
        menormal: require('@/assets/f-me.png'),
        meactive: require('@/assets/f-me-on.png')
      },
      docmHeight: document.documentElement.clientHeight - 200, // 默认屏幕高度
      showHeight: document.documentElement.clientHeight, // 实时屏幕高度
      hidshow: true // 显示或者隐藏footer
    }
  },
  methods: {
    getActiveNav () {
      let currentUrl = window.location.href
      this.NavActive = currentUrl.split('#')[1].replace('/', '')
    },
    handleSelect (index) {
      this.NavActive = index
    }
  },
  beforeMount () {
    this.getActiveNav()
  },
  watch: {
    $route (index) {
      let path = index.path.substr(1)
      this.handleSelect(path)
      this.$data.active = this.NavActive
    },
    showHeight () {
      if (this.docmHeight > this.showHeight) {
        console.log(this.docmHeight)
        this.hidshow = false
      } else {
        this.hidshow = true
      }
    }
  },
  mounted () {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight
      })()
    }
  }
}
</script>

<style lang="stylus">
</style>
