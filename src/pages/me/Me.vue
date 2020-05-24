<template>
  <div>
    <header-title>个人中心</header-title>
    <router-link tag="div" class="me_box" to="/me/myinfomation">
      <div class="me_icon_box">
        <img src="@/assets/ziliao-icon.png" />
      </div>
      <div class="me_desc">
        <p>我的资料</p>
        <div class="me_arrow">
          <img src="@/assets/arrow-right.png" />
        </div>
      </div>
    </router-link>
    <router-link tag="div" class="me_box" to="/me/mydonation">
      <div class="me_icon_box">
        <img src="@/assets/juanzeng-icon.png" />
      </div>
      <div class="me_desc">
        <p>我的捐赠</p>
        <div class="me_arrow">
          <img src="@/assets/arrow-right.png" />
        </div>
      </div>
    </router-link>
    <router-link tag="div" to="/me/myadoption" class="me_box">
      <div class="me_icon_box" >
        <img src="@/assets/renyang-icon.png" />
      </div>
      <div class="me_desc">
        <p>我的认养</p>
        <div class="me_arrow">
          <img src="@/assets/arrow-right.png" />
        </div>
      </div>
    </router-link>
    <router-link tag="div" to="/me/myhome" class="me_box" style="border-bottom: .02rem solid #d5d6d7">
      <div class="me_icon_box" >
        <img src="@/assets/ziliao-icon.png" />
      </div>
      <div class="me_desc" style="border:none">
        <p>回家报道</p>
        <div class="me_arrow">
          <img src="@/assets/arrow-right.png" />
        </div>
      </div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import HeaderTitle from 'common/Header'
export default {
  components: {
    HeaderTitle
  }

}
</script>

<style lang="stylus" scoped>
.me_box
  height: .98rem
  background: #fff
  display: flex
  justify-content: space-between
  .me_icon_box
    display: flex
    align-items: center
    margin-left: .4rem
    img
      height: .31rem
      width: .31rem
  .me_desc
    width: 6.55rem
    height: .98rem
    line-height: .98rem
    border-bottom: .02rem solid #d5d6d7
    p
      float: left
      font-size: .3rem
      letter-spacing: .04rem
    .me_arrow
      float: right
      margin-right: .44rem
      img
        height: .26rem
        width: .14rem

</style>
