import axios from 'axios'

const state = {
  answerslist: []
}

const getters = {
  allAnswerslist: state => state.answerslist
}

const actions = {
  async addAnswer ({commit}, {questionId, message, answerBy}) {
    console.log('action started', questionId, message, answerBy)
    axios.post('http://localhost:8081/qna/answer/add', {
      questionId: questionId,
      message: message,
      answerBy: answerBy
    }).then((res) => console.log(' answer added successfully'))
  },
  async getAnswerslist ({commit}, {questionId}) {
    console.log(questionId, 'action start')
    const response = await axios.get(`http://localhost:8081/qna/answer/fetch/${questionId}`)
    commit('setAnswerslist', response.data)
    console.log('Action end', response.data)
  },
  async acceptans ({commit}, {questionId, id}) {
    console.log('accepted started', questionId, id)
    axios.post(`http://localhost:8081/qna/question/accepted/${questionId}/${id}`, {
    }).then((res) => console.log('accepted successfully'))
  }
}
const mutations = {
  setAnswerslist: (state, answerslist) => (state.answerslist = answerslist)
}

export default {
  state,
  getters,
  actions,
  mutations
}
