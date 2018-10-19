import Vue from 'vue'
import Router from 'vue-router'

// 导入Router路由
Vue.use(Router)

// 路由配置函数
function route (path, file, name, children) {
  return {
    exact: true,
    path: '/' + path,
    name,
    children,
    component: () => import('../pages/' + file)
  }
}

export default new Router({
  routes: [
    route('login', 'Login', 'Login'), // /login路径，路由到登录组件
    {
      path: '/', // 根路径，路由到 Layout组件
      component: () => import('../pages/Layout'),
      // redirect: '/index/dashboard',
      children: [ // 其它所有组件都是 Layout的子组件

      ]
    }
  ]
})
