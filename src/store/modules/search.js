import axios from 'axios'
const state = {
  searchDetails: [],
  searchProfileDetails: [],
  searchOrgDetails: []
}

const getters = {
  searchDetails: state => state.searchDetails,
  searchProfileDetails: state => state.searchProfileDetails,
  searchOrgDetails: state => state.searchOrgDetails

}

const actions = {
  async getSearchDetails ({commit}, {val}) {
    console.log('search value', val)
    const response = await axios.get(`http://10.177.1.115:9000/ques/searchques/${val}`)
    commit('setSearchDetails', response.data)
  },
  async getSearchProfileDetails ({commit}, {val}) {
    console.log('search value', val)
    const response = await axios.get(`http://10.177.1.115:9000/user/searchuser/${val}`)
    commit('setSearchProfileDetails', response.data)
  },
  async getSearchOrgDetails ({commit}, {val}) {
    console.log('search value', val)
    const response = await axios.get(`http://10.177.1.115:9000/org/searchorg/${val}`)
    commit('setSearchOrgDetails', response.data)
  }
}

const mutations = {
  setSearchDetails: (state, searchDetails) => (state.searchDetails = searchDetails),
  setSearchProfileDetails: (state, searchProfileDetails) => (state.searchProfileDetails = searchProfileDetails),
  setSearchOrgDetails: (state, searchOrgDetails) => (state.searchOrgDetails = searchOrgDetails)

}

export default {
  state,
  getters,
  actions,
  mutations
}
