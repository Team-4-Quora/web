import axios from 'axios'
import swal from 'sweetalert'
const state = {
  status: []
}

const getters = {
  status: state => state.status
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
      axios.post('http://10.177.1.115:8082/user/add', {
        email: userEmail,
        name: name
      })
      console.log('register added successfully')
      swal('', 'Registered successfully', 'success')
    })
      .catch((err) => {
        console.log(err.message)
        return swal('', 'Email already registered', 'error')
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
      swal('', 'Logged in successfully', 'success')
      localStorage.setItem('jwt', res.data.jwt)
      localStorage.setItem('email', email)
    })
      .catch((err) => {
        console.log(err.message)
        return swal('', 'Invalid Email/Password', 'error')
      })
  },
  async getStatus ({commit}, {mail}) {
    console.log(' ::: getStatus action start', mail)
    const response = await axios.get(`http://10.177.1.115:8082/user/stats/${mail}`)
    commit('setStatus', response.data)
    console.log('Action end', response.data)
  }
}
const mutations = {
  setStatus: (state, status) => (state.status = status)
}

export default {
  state,
  getters,
  actions,
  mutations
}
