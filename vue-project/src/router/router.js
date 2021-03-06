import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* 导入对应的路由组件 */
import homeComponent from '../pages/home/'
import newsListComponent from '../pages/newsList'
import newsInfoComponent from '../pages/newsInfo'
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import goodsListComponent from '../pages/goodsList'

export default new Router({
  routes: [
    
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent},
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    { path: '/home/newsList', component: newsListComponent },
    { path: '/home/newsInfo:id', component: newsInfoComponent },
    { path: '/home/goodsList', component: goodsListComponent }
    
  ],
  linkActiveClass:'mui-active'
})
