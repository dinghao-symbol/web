// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
/* eslint-disable */
import { Button } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { NavBar } from 'vant'
import { Field } from 'vant'
import { Dialog } from 'vant'
import { Cell, CellGroup } from 'vant'
import animate from 'animate.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from "vee-validate"
import VueI18n from "vue-i18n"
import zh_CN from "vee-validate/dist/locale/zh_CN"
import { Validator } from "vee-validate"
import global_ from 'common/Global'
Vue.prototype.GLOBAL = global_
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: "zh_CN"
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: "validation",
  dictionary: {
    zh_CN
  }
})
const Dictionary = {
  zh_CN: {
    messages: {
      required: field => "请输入" + field,
      email: '邮箱啊'
    },
    attributes: {
      name: "账号"
    }
  }
}
Validator.extend('phone', {
  getMessage: field => field + '必须是11位手机号码',
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
import { Area } from 'vant'
import { Popup } from 'vant'
import { DatetimePicker } from 'vant'

Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.use(Area)
Validator.localize(Dictionary)
Vue.use(VueAxios, axios)
Vue.use(Dialog)
Vue.use(Cell).use(CellGroup)
Vue.use(Field)
Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Antd)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
