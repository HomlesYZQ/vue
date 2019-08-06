import Vue from 'vue'
import App from './App'
import router from './router'
import { Header,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


Vue.config.productionTip = false
import '@/assets/mui/css/mui.min.css'
import '@/assets/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
