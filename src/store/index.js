import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import answer from './modules/answer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    answer
  }
})
