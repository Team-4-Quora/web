import axios from 'axios'

const state = {
}

const getters = {
}

const actions = {
  // adding reaction to questions
  async registerUser ({commit}, {userEmail, password, appId, name}) {
    console.log('action started', userEmail, password, appId, name)
    axios.post('http://localhost:8082/user/register', {
      userEmail: userEmail,
      password: password,
      appId: appId,
      name: name
    }).then((res) => console.log('register added successfully'))
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
