import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import Profile from '@/components/Profile'
import Answers from '@/components/Answers'
import QuestionPage from '@/components/QuestionPage'
import Home from '@/components/Home'
import AskQuestion from '@/components/AskQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
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
    }
  ]
})
