import axios from 'axios'
import swal from 'sweetalert'

const state = {
//   queCategory: []

}

const getters = {
//   queCategory: state => state.queCategory

}

const actions = {
  async submitComment ({commit}, {answerId, message, commentBy, parentComponent}) {
    console.log('action started', answerId, message, commentBy, parentComponent)
    axios.post('http://localhost:8081/qna/comment/add', {
      answerId: answerId,
      message: message,
      commentBy: commentBy,
      parentComponent: parentComponent
    }).then((res) => console.log('comment added successfully'))
    swal('', 'Comment Posted', 'success')
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
