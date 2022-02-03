import axios from 'axios'

const state = {
//   products: []

}

const getters = {
//   allProducts: state => state.products
}

const actions = {
  async addQuestion ({commit}, {questionBy, text, category}) {
    console.log('action started', questionBy, text, category)
    axios.post('http://localhost:8081/qna/question/add', {
      questionBy: questionBy,
      text: text,
      category: category
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
