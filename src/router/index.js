import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeCon from '@/components/HomeCon'
import MemberCon from '@/components/MemberCon'
import ShopcarCon from '@/components/ShopcarCon'
import SearchCon from '@/components/SearchCon'
import NewList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import photoList from '@/components/photos/photoList'
import photoInfo from '@/components/photos/photoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/home', component:HomeCon},
    { path: '/member', component:MemberCon},
    { path: '/shopcar', component:ShopcarCon},
    { path: '/search', component:SearchCon},
    { path: '/home/newslist', component:NewList},
    { path: '/home/newsinfo/:id', component:NewsInfo},
    { path: '/home/photolist', component:photoList},
    { path: '/home/photoinfo/:id', component:photoInfo},
    { path: '/home/goodslist', component:GoodsList},
    { path: '/home/goodsinfo/:id', component:GoodsInfo}

  ]
})
