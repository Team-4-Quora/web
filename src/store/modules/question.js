import axios from 'axios'

const state = {
  queCategory: []

}

const getters = {
  queCategory: state => state.queCategory

}

const actions = {
  async addQuestion ({commit}, {questionBy, text, category}) {
    console.log('action started', questionBy, text, category)
    axios.post('http://localhost:8081/qna/question/add', {
      questionBy: questionBy,
      text: text,
      category: category
    }).then((res) => console.log('added successfully'))
  },
  async getByCategory ({commit}, {categ}) {
    console.log('fetch by category action', categ)
    const response = await axios.get(`http://localhost:8081/qna/question/fetch/category/${categ}`)
    commit('setByCategory', response.data)
  }
}
const mutations = {
  setByCategory: (state, queCategory) => (state.queCategory = queCategory)
}

export default {
  state,
  getters,
  actions,
  mutations
}
