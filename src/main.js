import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/mui/css/preview.css'
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css';
// 缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false
import '@/assets/mui/css/mui.min.css'
import '@/assets/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
