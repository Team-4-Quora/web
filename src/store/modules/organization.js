import axios from 'axios'

const state = {
  orgDetails: [],
  orgFollower: [],
  orgList: []
}

const getters = {
  allorgDetails: state => state.orgDetails,
  allorgFollower: state => state.orgFollower,
  allOrgList: state => state.orgList
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
  },
  async getOrganizationsList ({commit}) {
    console.log(' ::: action start')
    const response = await axios.get('http://10.177.1.115:9000/org/all')
    commit('setOrganizationsList', response.data)
    console.log('Action end', response.data)
  }
}
const mutations = {
  setByOrgDetails: (state, orgDetails) => (state.orgDetails = orgDetails),
  setByOrgFollower: (state, orgFollower) => (state.orgFollower = orgFollower),
  setOrganizationsList: (state, orgList) => (state.orgList = orgList)

}

export default {
  state,
  getters,
  actions,
  mutations
}