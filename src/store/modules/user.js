import axios from 'axios'

const state = {
}

const getters = {
}

const actions = {
  // adding reaction to questions
  async registerUser ({commit}, {userEmail, password, appId, name}) {
    console.log('action started', userEmail, password, appId, name)
    axios.post('http://10.177.1.200:8000/authentication/authenticate/register', {
      userEmail: userEmail,
      password: password,
      appId: appId,
      name: name
    }).then((res) => {
      console.log('register added successfully')
    })
  },
  async loginuser ({commit}, {email, password, appId}) {
    console.log('action started', email, password, appId)
    axios.post('http://10.177.1.200:8000/authentication/authenticate/login', {
      userEmail: email,
      password: password,
      appId: appId
    }).then((res) => {
      console.log('logged in successfully', res.data)
      localStorage.setItem('jwt', res.data.jwt)
      localStorage.setItem('email', email)
    })
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
