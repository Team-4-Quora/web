import axios from 'axios'
import swal from 'sweetalert'

const state = {
  queReactions: [], // all reactions on question
  ansReactions: [] // all reactions on answers
}

const getters = {
  allqueReactions: state => state.queReactions
}

const actions = {
  // adding reaction to questions
  async addReaction ({commit}, {questionId, reactionBy, like}) {
    console.log('action started', questionId, reactionBy, like)
<<<<<<< HEAD
    axios.post('http://10.177.1.74:8081/qna/reaction/add', {
=======
    axios.post('http://10.177.1.115:8081/qna/reaction/add', {
>>>>>>> 98fbab17923ad3438a9d70659c995ab8ed554aff
      questionId: questionId,
      reactionBy: reactionBy,
      like: like
    }).then((res) => console.log(like, 'added successfully'))
    if (like === true) {
      swal('', 'Liked', 'success')
    } else {
      swal('', 'Disiked', 'error')
    }
  },
  // adding reaction to answers
  async addReactionAns ({commit}, {answerId, reactionBy, like}) {
    console.log('action started', answerId, reactionBy, like)
<<<<<<< HEAD
    axios.post('http://10.177.1.74:8081/qna/reaction/add', {
=======
    axios.post('http://10.177.1.115:8081/qna/reaction/add', {
>>>>>>> 98fbab17923ad3438a9d70659c995ab8ed554aff
      answerId: answerId,
      reactionBy: reactionBy,
      like: like
    }).then((res) => console.log('added successfully'))
    if (like === true) {
      swal('', 'Liked', 'success')
    } else {
      swal('', 'Disiked', 'error')
    }
  },
  // fetching all reactions on a question
  async getByQueReactions ({commit}, {id}) {
    console.log('fetch by email action', id)
<<<<<<< HEAD
    const response = await axios.get(`http://10.177.1.74:8081/qna/reaction/fetch/question/${id}`)
=======
    const response = await axios.get(`http://10.177.1.115:8081/qna/reaction/fetch/question/${id}`)
>>>>>>> 98fbab17923ad3438a9d70659c995ab8ed554aff
    commit('setByQueReactions', response.data)
  }

}
const mutations = {
  setByQueReactions: (state, queReactions) => (state.queReactions = queReactions)
}

export default {
  state,
  getters,
  actions,
  mutations
}
