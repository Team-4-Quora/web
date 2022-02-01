import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sidebar from '@/components/Sidebar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    }
  ]
})
