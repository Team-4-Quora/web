<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view v-if="questions" -->
    <router-view
     style="min-height: 60vh"
    :baseURL="baseURL"
    :questions="questions"
    @fetchData="fetchData"
    />
    <font-awesome-icon icon="fa-solid fa-user-secret" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      baseURL: 'http://localhost:9000/',
      questions: null
    }
  },
  methods: {
    async fetchData () {
      await axios
        .get(this.baseURL + 'ques/all')
        .then((res) => {
          this.questions = res.data
        })
        .catch((err) => console.log('Question err', err))

      // await axios
      //   .get(this.baseURL + 'product/all')
      //   .then((res) => {
      //     this.products = res.data
      //   })
      //   .catch((err) => console.log('Product err', err))

      // await axios
      //   .get(this.baseURL + 'product/recommended')
      //   .then((res) => {
      //     this.rproducts = res.data
      //   })
      //   .catch((err) => console.log('Product R err', err))

      // if (localStorage.getItem('userId')) {
      //   await axios
      //     .get(this.baseURL + `order/user/${localStorage.getItem('userId')}`)
      //     .then((res) => {
      //       this.oproducts = res.data
      //     })
      //     .catch((err) => console.log('err', err))
      // }
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style>

</style>
