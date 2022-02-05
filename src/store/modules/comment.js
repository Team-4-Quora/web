import axios from 'axios'

const state = {
//   queCategory: []

}

const getters = {
//   queCategory: state => state.queCategory

}

const actions = {
  async addComment ({commit}, {answerId, message, commentBy}) {
    console.log('action started', answerId, message, commentBy)
    axios.post('http://localhost:8081/qna/comment/add', {
      answerId: answerId,
      message: message,
      commentBy: commentBy
    }).then((res) => console.log('added successfully'))
  }
}
const mutations = {
//   setByCategory: (state, queCategory) => (state.queCategory = queCategory)
}

export default {
  state,
  getters,
  actions,
  mutations
}
