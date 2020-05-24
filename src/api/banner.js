import axios from 'axios'
export function getBannerList () {
  return axios.get('/api/member/banner-list-index')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getBannerContent () {
  return axios.get('/api/member/banner-list-content')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 判断是不是在支付宝
export function onzhifubao () {
  var ua = navigator.userAgent.toLowerCase()
  // console.log(`${encodeURIComponent(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)}`)
  if (ua.match(/AlipayClient/i) == 'alipayclient') {
    // alert('在支付宝里')
    // alert(`${encodeURIComponent(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)}`)
    // alert(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)
    // window.location.href = `${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`
  } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    // alert('在微信里')
    this.$router.replace('/weixin')
  } else {
    // alert('不在支付宝')
    var time = new Date().getTime()
    // alert(`${encodeURIComponent(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)}`)
    // alert(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)
    // console.log(`${this.GLOBAL.zhiUrl}&url=${encodeURIComponent(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}`)}`)
    window.location.href = `${this.GLOBAL.zhiUrl}&url=${encodeURIComponent(`${this.GLOBAL.serverSrc}/api/oauth/alipay/?returnUrl=/member/#${this.$route.path}?timestamp=${time}`)}`
  }
}
