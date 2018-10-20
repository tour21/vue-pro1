import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeCon from '@/components/HomeCon'
import MemberCon from '@/components/MemberCon'
import ShopcarCon from '@/components/ShopcarCon'
import SearchCon from '@/components/SearchCon'
import NewList from '@/components/news/NewsList'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/home', component:HomeCon},
    { path: '/member', component:MemberCon},
    { path: '/shopcar', component:ShopcarCon},
    { path: '/search', component:SearchCon},
    { path: '/home/newslist', component:NewList}
  ]
})
