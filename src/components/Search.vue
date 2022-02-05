<template>
     <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Your Search Results</h3>
            </div>
        </div>
        <div class="row">
            <div v-for="question of searchResults" :key="question.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <QuestionPage :question="question"/>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import QuestionPage from '@/components/QuestionPage'
export default{
  components: {QuestionPage},
  props: ['baseURL'],
  setup () {

  },
  data () {
    return {
      searchQuery: null,
      searchResults: []
    }
  },
  watch: {
    '$route' () {
      this.searchQuery = this.$route.query.searchQueryKey
      this.fetchData()
    }
  },
  methods: {
    async fetchData () {
      await axios
        .get(this.baseURL + 'ques/searchques/' + `${this.searchQuery}`)
        .then((res) => {
          this.searchResults = res.data
        })
        .catch((err) => console.log('Category err', err))
    }},
  mounted () {
    this.searchQuery = this.$route.query.searchQueryKey
    this.fetchData()
  }
}
</script>
<style scoped>

</style>
