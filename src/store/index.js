import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import answer from './modules/answer'
import reaction from './modules/reaction'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    answer,
    reaction
  }
})
