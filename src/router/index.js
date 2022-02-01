import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }
  ]
})
