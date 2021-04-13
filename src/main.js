import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import { message } from './components/common/i18n'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/common.css'
import '@/assets/scss/color-dark.css'
import '@/assets/scss/icon.css'

Vue.use(ElementUI,{
  size: 'small'
})
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  message
})

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | vue-manage-system`
  const role = localStorage.getItem('ms_username')
  console.log(role)
  if(!role && to.path !== '/login') {
    next('/login')
  }else if(to.meta.permission) {
    role === 'admin' ? next():next('/403')
  }else {
    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看','浏览器不兼容通知', {
        confirmButtonText: '确定'
      })
    }else{
      next()
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
