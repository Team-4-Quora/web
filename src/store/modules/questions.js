import axios from 'axios'

const state = {
  questions: []
}

const getters = {
  allQuestions: state => state.questions
}

const actions = {
  async getProducts ({commit}, category) {
    const response = await axios.get(`http://10.177.1.70:8184/product/findlist/${category}`)
    commit('setProducts', response.data)
  },
  async getProductDescription ({commit}, id) {
    const response = await axios.get(`http://10.177.1.70:8184/product/${id}`)
    commit('setProductDescription', response.data)
  },
  async getRecommendations ({commit}) {
    const response = await axios.get('http://10.177.1.70:8184/product/recommend')
    commit('setRecommendations', response.data)
  },
  async getOrderHistory ({commit}, userId) {
    console.log('userid action', userId)
    const response = await axios.get(`http://10.177.1.70:8187/order/user/${userId}`)
    commit('setOrderHistory', response.data)
  },
  async getProductHistory ({commit}, orderId) {
    console.log('orderid action', orderId)
    const response = await axios.get(`http://10.177.1.70:8187/orderedproducts/${orderId}`)
    commit('setProductHistory', response.data)
  },
  async getMerchantList ({commit}, productId) {
    console.log('merchant action', productId)
    const response = await axios.get(`http://10.177.1.70:8184/product/productdetaillist/${productId}`)
    commit('setMerchantList', response.data)
  }

}
const mutations = {
  setQuestions: (state, questions) => (state.questions = questions)
}

export default {
  state,
  getters,
  actions,
  mutations
}
