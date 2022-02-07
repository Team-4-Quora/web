import axios from 'axios'

const state = {
}

const getters = {
}

const actions = {
  // adding reaction to questions
  async Points ({commit}, {email, amount, inc}) {
    console.log('action started', email, amount, inc)
    axios.post('http://localhost:8082/user/points', {
      email: email,
      amount: amount,
      inc: inc
    }).then((res) => console.log('points added successfully'))
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
