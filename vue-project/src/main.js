
import Vue from 'vue'
/* 导入路由的包 */
import Router from 'vue-router'
/* 安装路由 */
Vue.use(Router)

/* 导入自己的router.js路由模块 */
/* import './router/router.js' */
import  router from './router/router.js'
/* 导入mint-UI组件 */
import Mui from 'mint-ui'
/* 注册组件 */
Vue.use(Mui)
/* 引入mui样式文件 */
import 'mint-ui/lib/style.css'
/* 引入mui样式文件 */
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

/* 导入vue-resource */
import VueResource from 'vue-resource'
/* 安装vue-resource */
Vue.use(VueResource)
/* 全局设置vue-resource请求的根路径 */
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/'
/* 全局设置post提交表单数据格式 */
Vue.http.options.emulateJSON = true
/* 导入moment */
import moment from 'moment'
/* 定义全局过滤器 */
Vue.filter('dateFormate',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

/* 导入App根组件 */

import App from './App.vue'

var vm = new Vue({
  el: '#app',
  router,/* 挂载路由 */
  render:c => c(App)
})
