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
    axios.post('http://localhost:8081/qna/reaction/add', {
      questionId: questionId,
      reactionBy: reactionBy,
      like: like
    }).then((res) => console.log(like, 'added successfully'))
  },
  // adding reaction to answers
  async addReactionAns ({commit}, {answerId, reactionBy, like}) {
    console.log('action started', answerId, reactionBy, like)
    axios.post('http://localhost:8081/qna/reaction/add', {
      answerId: answerId,
      reactionBy: reactionBy,
      like: like
    }).then((res) => console.log('added successfully'))
    if (this.like === true) {
      swal('', 'Liked', 'success')
    } else {
      swal('', 'Disiked', 'success')
    }
  },
  // fetching all reactions on a question
  async getByQueReactions ({commit}, {id}) {
    console.log('fetch by email action', id)
    const response = await axios.get(`http://localhost:8081/qna/reaction/fetch/question/${id}`)
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
