import axios from 'axios'

const state = {
//   orgDetails: []
}

const getters = {
//   allorgDetails: state => state.orgDetails
}

const actions = {
  // creating an organization
  async addFollower ({commit}, {requesterId, email, status}) {
    console.log('action started', requesterId, email, status)
    axios.post('http://localhost:8082/follower/add', {
      requesterId: requesterId,
      email: email,
      status: status
    }).then((res) => console.log('follwer added successfully'))
  }
}
const mutations = {
//   setByOrgDetails: (state, orgDetails) => (state.orgDetails = orgDetails)
}

export default {
  state,
  getters,
  actions,
  mutations
}
