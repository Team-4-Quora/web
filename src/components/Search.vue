<template>
<div>
    <div>
        <NavBar/>
    </div>
    <div class="top">
        <SearchCard v-for='searchResult in searchResults' :key="searchResult.id" v-bind:searchResult="searchResult"/>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import NavBar from '@/components/Home/NavBar.vue'
import SearchCard from '@/components/Search/SearchCard'
export default{
  name: 'SearchHome',
  components: {
    NavBar,
    SearchCard
  },
  data () {
    return {
      searchQueryLocal: '',
      searchResults: []
    }
  },
  watch: {
    '$route' () {
      this.searchQueryLocal = this.$route.query.searchQuery
      console.log(this.searchQueryLocal)
    }
  },
  mounted () {
    this.searchQueryLocal = this.$route.query.searchQuery
    console.log(this.searchQueryLocal)
    this.fetchSearch()
  },
  methods:
        {
          async fetchSearch () {
            await axios.get(`http://10.177.1.207:9000/user/search/${this.searchQueryLocal}`).then((res) => { this.searchResults = res.data }).catch(err => console.log(err))
          }
        }
}
</script>

<style scoped>
.top{
    margin-top: 100px;
}
</style>
