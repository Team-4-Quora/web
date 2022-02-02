import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
<<<<<<< HEAD
import Answers from '@/components/Answers'
import QuestionPage from '@/components/QuestionPage'
import AskQuestion from '@/components/AskQuestion'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
=======
import Profile from '@/components/Profile'
>>>>>>> 7b164ebd78c322691e6a3ca8cb50716f0e749dce

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
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
<<<<<<< HEAD
      path: '/answers',
      name: 'Answers',
      component: Answers
    },
    {
      path: '/questionpage',
      name: 'QuestionPage',
      component: QuestionPage
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ask',
      name: 'AskQuestion',
      component: AskQuestion
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
=======
      path: '/profile',
      name: 'Profile',
      component: Profile
>>>>>>> 7b164ebd78c322691e6a3ca8cb50716f0e749dce
    }
  ]
})
