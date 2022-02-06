import axios from 'axios'
const state = {
  searchDetails: []
}

const getters = {
  searchDetails: state => state.searchDetails
}

const actions = {
  async getSearchDetails ({commit}, {val}) {
    console.log('search value', val)
    const response = await axios.get(`http://10.177.1.115:9000/ques/searchques/${val}`)
    commit('setSearchDetails', response.data)
  }
}

const mutations = {
  setSearchDetails: (state, searchDetails) => (state.searchDetails = searchDetails)
}

export default {
  state,
  getters,
  actions,
  mutations
}
