import axios from 'axios'
import swal from 'sweetalert'

const state = {
//   queCategory: []
  nestedComments: []

}

const getters = {
  nestedComments: state => state.nestedComments

}

const actions = {
  async submitComment ({commit}, {answerId, message, commentBy, parentComponent}) {
    console.log('action started', answerId, message, commentBy, parentComponent)
    axios.post('http://10.177.1.115:8081/qna/comment/add', {
      answerId: answerId,
      message: message,
      commentBy: commentBy,
      parentComponent: parentComponent
    }).then((res) => console.log('comment added successfully'))
    swal('', 'Comment Posted', 'success')
  },
  async nestedComment ({commit}, {answerId, message, commentBy, parentComment}) {
    console.log('action started', answerId, message, commentBy, parentComment)
    axios.post('http://localhost:8081/qna/comment/add', {
      answerId: answerId,
      message: message,
      commentBy: commentBy,
      parentComment: parentComment
    }).then((res) => console.log(' nested comment added successfully'))
    swal('', 'Nested Comment Posted', 'success')
  },
  async getNestedComments ({commit}, {ansId, parent}) {
    console.log(ansId, parent, ' ::: action start')
    const response = await axios.get(`http://localhost:8081/qna/comment/fetch/${ansId}/${parent}`)
    commit('setNestedComments', response.data)
    console.log('Action end', response.data)
  }
}
const mutations = {
  setNestedComments: (state, nestedComments) => (state.nestedComments = nestedComments)
}

export default {
  state,
  getters,
  actions,
  mutations
}
