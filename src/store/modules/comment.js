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
<<<<<<< HEAD
    axios.post('http://10.177.1.74:8081/qna/comment/add', {
=======
    axios.post('http://10.177.1.115:8081/qna/comment/add', {
>>>>>>> 98fbab17923ad3438a9d70659c995ab8ed554aff
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
