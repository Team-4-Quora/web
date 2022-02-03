import axios from 'axios'

const state = {
//   products: []

}

const getters = {
//   allProducts: state => state.products
}

const actions = {
  async addAnswer ({commit}, {questionId, message, answerBy}) {
    console.log('action started', questionId, message, answerBy)
    axios.post('http://localhost:8081/qna/answer/add', {
      questionId: questionId,
      message: message,
      answerBy: answerBy
    }).then((res) => console.log('added successfully'))
  }
  // },
  // async getByCategory ({commit}) {
  //   console.log('get by category')
  //   // const response = await axios.get(`http://10.177.1.70:8187/order/user/${userId}`)
  //   commit('setOrderHistory', response.data)
  // }

}
const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
