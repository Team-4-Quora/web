import axios from 'axios'

const state = {
  orgDetails: [],
  orgFollower: []
}

const getters = {
  allorgDetails: state => state.orgDetails,
  allorgFollower: state => state.orgFollower
}

const actions = {
  // creating an organization
  async addOrganization ({commit}, {owner, name, description}) {
    console.log('action started', owner, name, description)
    axios.post('http://localhost:8082/organizations/add', {
      owner: owner,
      name: name,
      description: description
    }).then((res) => console.log('added successfully'))
  },
  async getOrgDetails ({commit}, {orgId}) {
    console.log(orgId, ' ::: action start')
    const response = await axios.get(`http://localhost:8082/organizations/${orgId}`)
    commit('setByOrgDetails', response.data)
    console.log('Action end', response.data)
  }
}
const mutations = {
  setByOrgDetails: (state, orgDetails) => (state.orgDetails = orgDetails),
  setByOrgFollower: (state, orgFollower) => (state.orgFollower = orgFollower)
}

export default {
  state,
  getters,
  actions,
  mutations
}
