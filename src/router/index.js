import Vue from 'vue'
import Router from 'vue-router'
import Shou from '@/components/Shou'
import News from '@/components/News'
import Car from '@/components/Car'
import Set from '@/components/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shou',
      component: Shou
    },
    {
      path: '/shou',
      name: 'Shou',
      component: Shou
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/set',
      name: 'Set',
      component: Set
    }
  ],
  linkActiveClass:'mui-active'
})
