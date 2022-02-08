<template>
         <div>
             <div class="wrap">
   <div class="searchclass">
      <input type="text" class="searchTerm" placeholder="Search" size=50px id="searchorg"/>
      <button type="submit" class="searchButton" @click="onSearchOrganization()">
       Submit
     </button>
   </div>
</div>
  <h2 class="text-center p-5">Organizations List</h2>
<div v-for="item in allOrgList" :key="item.id">
  <!-- {{item}}
  {{item.id}} -->
                 <div class="card shadow h-100 my-3">
                    <div class="card-body">
                        <div class="card-title py-3" >
                            <h4 class="px-5">Owner :{{item.owner}} </h4>
                            <p class="px-5">Name :{{item.name}}}</p>
                            <p class="px-5">Description: {{item.description}}</p>
                        </div>
                        <!-- <router-link :to="{name: 'OrganizationProfile', params: {hello: item.id}}" class="stretched-link"></router-link> -->
                    </div>
                </div>
</div>
        </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
  name: 'OrganizationsList',
  created () {
    console.log('organizations list created')
    this.$store.dispatch('getOrganizationsList')
  },
  computed: {
    ...mapGetters(['allOrgList'])
  },
  methods: {
    onSearchOrganization () {
      let val = document.getElementById('searchorg').value
      console.log('search', val)
      this.$store.dispatch('getSearchOrgDetails', {val})
      this.$router.push('/searchorg')
    }
  }
}
</script>
<style scoped>

p{
    font-family: fantasy;
    font-size: 20px;
}
h4{
    font-family: cursive;
}
.card-body{
    background-color:#edc7b7;
}
.card{
    margin-left: 300px;
    margin-right: 300px;
}
.searchbar{
  display:flex;
}
.searchclass{
  text-align: center;
  margin-top:20px;
}
.searchButton {
  width: 80px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.searchTerm {
  border: 3px solid #00B4CC;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}
</style>
