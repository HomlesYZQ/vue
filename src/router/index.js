import Vue from 'vue'
import Router from 'vue-router'
import Shou from '@/components/Shou'
import News from '@/components/News'
import Car from '@/components/Car'
import Set from '@/components/Set'
import Xinwen from '@/components/Xinwen'
import Xinwenlist from '@/components/Xinwenlist'
import Imglist from '@/components/Imglist'
import Img from '@/components/Img'
import Shop from '@/components/Shop'
import Shoplist from '@/components/Shoplist'
import Desc from '@/components/Desc'
import Comment from '@/components/Comment'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/shou'
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
    },
    {
      path:'/shou/xinwen',
      name:'Xinwen',
      component:Xinwen
    },
    {
      path:'/shou/xinwen/:id',
      name:'Xinwenlist',
      component:Xinwenlist
    },
    {
      path:'/shou/imglist',
      name:'Imglist',
      component:Imglist
    },
    {
      path:'/shou/imglist/:id',
      name:'Img',
      component:Img
    },
    {
      path:'/shou/shop',
      name:'Shop',
      component:Shop
    },
    {
      path:'/shou/shop/:id',
      name:'Shoplist',
      component:Shoplist
    },
    {
      path:'/shou/desc/:id',
      name:'Desc',
      component:Desc
    },
    {
      path:'/shou/comment/:id',
      name:'Comment',
      component:Comment
    }
  ],
  linkActiveClass:'mui-active'
})
