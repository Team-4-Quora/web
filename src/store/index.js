import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import answer from './modules/answer'
import reaction from './modules/reaction'
import comment from './modules/comment'
import organization from './modules/organization'
import followers from './modules/followers'
import user from './modules/user'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    answer,
    reaction,
    comment,
    organization,
    followers,
    user,
    search
  }
})
