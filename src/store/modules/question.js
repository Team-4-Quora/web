import axios from 'axios'
import swal from 'sweetalert'

const state = {
  queCategory: [],
  org: [],
  queMail: []
}

const getters = {
  queCategory: state => state.queCategory,
  org: state => state.org,
  queMail: state => state.queMail
}

const actions = {
  // adding a question
  async addQuestion ({commit}, {questionBy, text, category}) {
    console.log('action started', questionBy, text, category)
    axios.post('http://localhost:8081/qna/question/add', {
      questionBy: questionBy,
      text: text,
      category: category
    }).then((res) => console.log('added successfully'))
    swal('', 'Question added', 'success')
  },
  // fetching all questions based on category
  async getByCategory ({commit}, {categ}) {
    console.log('fetch by category action', categ)
    const response = await axios.get(`http://localhost:8081/qna/question/fetch/category/${categ}`)
    commit('setByCategory', response.data)
  },
  // fetching all questions that belong to a particular organization
  async getByOrgId ({commit}, {orgid}) {
    console.log('fetch by organization action', orgid)
    const response = await axios.get(`http://localhost:8081/qna/question/fetch/orgId/${orgid}`)
    commit('setByOrgId', response.data)
  },
  // fetching all question that belong to a particular person/user
  async getByMail ({commit}, {mail}) {
    console.log('fetch by email action', mail)
    const response = await axios.get(`http://localhost:8081/qna/question/fetch/questionBy/${mail}`)
    commit('setByMail', response.data)
  }
}

const mutations = {
  setByCategory: (state, queCategory) => (state.queCategory = queCategory),
  setByOrgId: (state, org) => (state.org = org),
  setByMail: (state, queMail) => (state.queMail = queMail)
}

export default {
  state,
  getters,
  actions,
  mutations
}
