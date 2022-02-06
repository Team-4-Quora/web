import axios from 'axios'

const state = {
  pending: [],
  followers: [],
  orgfollowers: []
}

const getters = {
  pendingList: state => state.pending,
  followersList: state => state.followers,
  orgfollowersList: state => state.orgfollowers
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
  },
  async addPendingRequest ({commit}, {mail}) {
    console.log('fetch pending request', mail)
    const response = await axios.get(`http://localhost:8082/follower/fetch/pending/${mail}`)
    commit('setPendingRequest', response.data)
  },
  async getFollowersDetails ({commit}, {mail}) {
    console.log('fetch followers details', mail)
    const response = await axios.get(`http://localhost:8082/follower/fetch/followers/${mail}`)
    commit('setFollowersDetails', response.data)
  },
  async getOrgFollowersDetails ({commit}, {id}) {
    console.log('fetch followers details', id)
    const response = await axios.get(`http://localhost:8082/follower/fetch/org/followers/${id}`)
    commit('setOrgFollowersDetails', response.data)
  }
}
const mutations = {
  setPendingRequest: (state, pending) => (state.pending = pending),
  setFollowersDetails: (state, followers) => (state.followers = followers),
  setOrgFollowersDetails: (state, orgfollowers) => (state.orgfollowers = orgfollowers)

}

export default {
  state,
  getters,
  actions,
  mutations
}
