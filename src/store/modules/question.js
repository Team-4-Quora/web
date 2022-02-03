import axios from 'axios'

const state = {
//   products: []

}

const getters = {
//   allProducts: state => state.products
}

const actions = {
  async addQuestion ({commit}, {questionBy, text, category}) {
    console.log('action started', questionBy, text, category)
    axios.post('http://localhost:8081/qna/question/add', {
      questionBy: questionBy,
      text: text,
      category: category
    }).then((res) => console.log('added successfully'))
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
