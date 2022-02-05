import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Answers from '@/components/Answers'
import AskQuestion from '@/components/AskQuestion'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Profile from '@/components/Profile'
import Comment from '@/components/Comment'
import QuestionPage from '@/components/QuestionPage'
import Organization from '@/components/Organization'
import OrganizationProfile from '@/components/OrganizationProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
      path: '/answers',
      name: 'Answers',
      component: Answers
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
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/questionpage',
      name: 'Question Page',
      component: QuestionPage
    },
    {
      path: '/org',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/orgprofile',
      name: 'OrganizationProfile',
      component: OrganizationProfile
    }

  ]
})
