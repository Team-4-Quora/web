import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import answer from './modules/answer'
import reaction from './modules/reaction'
import comment from './modules/comment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    answer,
    reaction,
    comment
  }
})
