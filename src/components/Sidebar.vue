<template>
  <div class="sidebar">
    <div class=main-div>
      <div>
         <h2>Categories</h2>
    <div id="checkboxes">
      <label>Music</label>
      <input type="checkbox" value="Music" v-model="blog.categories"/>
      <label >Books</label>
      <input type="checkbox" value="Books" v-model="blog.categories"/>
      <label>Movies</label>
      <input type="checkbox" value="Movies" v-model="blog.categories"/>
      <label>Java</label>
      <input type="checkbox" value="Java" v-model="blog.categories"/>
      <label>VueJs</label>
      <input type="checkbox" value="VueJs" v-model="blog.categories"/>
    </div>
      </div>
    <div class="clist">
      <h4>Categories Selected: </h4>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{category}}</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        categories: []
      }
    }
  }
}
</script>

<style scoped>
.sidebar{
  background-color: #E3E2DF;
}
#checkboxes input{
  display:inline-block;
  margin-right:10px;
}
#checkboxes label{
  display:inline-block;
}
.main-div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top:50px;
  padding-left:20px;
}
.clist{
  margin-top:100px;
}
h2{
  color:#5D001E;
}
h4{
  color:#5D001E;
}
</style>
