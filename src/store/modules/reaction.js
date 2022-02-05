import axios from 'axios'

const state = {
//   answerslist: []

}

const getters = {
//   allAnswerslist: state => state.answerslist
}

const actions = {
  async addReaction ({commit}, {questionId, reactionBy, isLike}) {
    console.log('action started', questionId, reactionBy, isLike)
    axios.post('http://localhost:8081/qna/reaction/add', {
      questionId: questionId,
      reactionBy: reactionBy,
      isLike: isLike
    }).then((res) => console.log('added successfully'))
  },
  async addReactionAns ({commit}, {answerId, reactionBy, isLike}) {
    console.log('action started', answerId, reactionBy, isLike)
    axios.post('http://localhost:8081/qna/reaction/add', {
      answerId: answerId,
      reactionBy: reactionBy,
      isLike: isLike
    }).then((res) => console.log('added successfully'))
  }
}
const mutations = {
//   setAnswerslist: (state, answerslist) => (state.answerslist = answerslist)
}

export default {
  state,
  getters,
  actions,
  mutations
}
