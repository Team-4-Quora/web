// import axios from 'axios'

const state = {
  questions: []
}

const getters = {
  allQuestions: state => state.questions
}

const actions = {
}
const mutations = {
  setQuestions: (state, questions) => (state.questions = questions)
}

export default {
  state,
  getters,
  actions,
  mutations
}
