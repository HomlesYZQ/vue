import Vue from 'vue'
import App from './App'
import router from './router'
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name,Header)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
