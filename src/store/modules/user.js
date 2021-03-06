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
  },
  // async getStatus ({commit}, {mail}) {
  //   console.log(' ::: getStatus action start', mail)
  //   const response = await axios.get(`http://10.177.1.115:8082/user/stats/${mail}`)
  //   commit('setStatus', response.data)
  //   console.log('Action end', response.data)
  // },
  // async saveUser ({commit}, {email, points, level}) {
  //   console.log('action started', email, points, level)
  //   axios.post('http://10.177.1.115:8082/user/add', {
  //     email: email,
  //     points: points,
  //     level: level
  //   }).then((res) => {
  //     console.log('saved successfully', res.data)
  //     // localStorage.setItem('jwt', res.data.jwt)
  //     // localStorage.setItem('email', email)
  //   })
  // },
  async incStatus ({commit}, {email, amount, inc}) {
    console.log('action started', email, amount, inc)
    axios.post('http://10.177.1.115:8082/user/add', {
      email: email,
      amount: amount,
      inc: inc
    }).then((res) => {
      console.log('Incremented status successfully', res.data)
      // localStorage.setItem('jwt', res.data.jwt)
      // localStorage.setItem('email', email)
    })
  },
  async logout ({commit}, {email, appId}) {
    console.log('action started', email, appId)
    axios.post('http://10.177.1.200:8000/authentication/authenticate/logout', {
      userEmail: email,
      appId: appId
    }).then((res) => {
      console.log('logged out successfully', res.data)
      swal('', 'Logged out successfully', 'error')
      localStorage.removeItem('jwt')
      localStorage.removeItem('email')
      this.$router.push('/login')
      // localStorage.setItem('jwt', res.data.jwt)
      // localStorage.setItem('email', email)
    })
      .catch((err) => {
        console.log(err.message)
      })
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
