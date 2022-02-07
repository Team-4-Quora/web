import axios from 'axios'
import swal from 'sweetalert'

const state = {
  answerslist: []
}

const getters = {
  allAnswerslist: state => state.answerslist
}

const actions = {
  // adding a answer
  async addAnswer ({commit}, {questionId, message, answerBy}) {
    console.log('action started', questionId, message, answerBy)
    axios.post('http://10.177.1.115:8081/qna/answer/add', {
      questionId: questionId,
      message: message,
      answerBy: answerBy
    }).then((res) => console.log(' answer added successfully'))
    swal('', 'Answer added', 'success')
  },
  // getting the list of all answers belonging to a particular question
  async getAnswerslist ({commit}, {questionId}) {
    console.log(questionId, ' ::: action start')
    const response = await axios.get(`http://10.177.1.115:8081/qna/answer/fetch/${questionId}`)
    commit('setAnswerslist', response.data.sort((x, y) => y.postedOn - x.postedOn))
    console.log('Action end', response.data)
  },
  // accepting an answer
  async acceptans ({commit}, {ansId}) {
    console.log('accepted started', ansId)
    axios.post(`http://10.177.1.115:8081/qna/answer/accepted/${ansId}`, {
    }).then((res) => console.log('accepted successfully'))
    this.$router.go('/')
    swal('', 'Answer accepted', 'success')
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
