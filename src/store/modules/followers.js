import axios from 'axios'

const state = {
}

const getters = {
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
  },
  async addFollowerOrg ({commit}, {requesterId, email, orgId, status}) {
    console.log('action started', requesterId, email, orgId, status)
    axios.post('http://localhost:8082/follower/add', {
      requesterId: requesterId,
      email: email,
      orgId: orgId,
      status: status
    }).then((res) => console.log('follwer added successfully'))
  },
  async acceptRequestUser ({commit}, {email, requesterId}) {
    console.log('action started', email, requesterId)
    axios.post(`http://localhost:8082/follower/accept/${email}/${requesterId}`, {
      requesterId: requesterId,
      email: email
    }).then((res) => console.log('follwer added successfully'))
  }
}
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
