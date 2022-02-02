<template>
  <div class="sidebar">
    <div class=main-div>
    <div>
      <h5>Categories:-</h5>
      <div id="checkboxes">
        <label> <input type="checkbox" value="Music" v-model="blog.categories"/>Music</label>
        <label ><input type="checkbox" value="Books" v-model="blog.categories"/>Books</label>
        <label><input type="checkbox" value="Movies" v-model="blog.categories"/>Movies</label>
        <label><input type="checkbox" value="Java" v-model="blog.categories"/>Java</label>
        <label><input type="checkbox" value="VueJs" v-model="blog.categories"/>VueJs</label>
      </div>
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
  display: flex;
  flex-direction: column;
  height:100%;
  width:130px;
}
#checkboxes{
    position: fixed;
}
#checkboxes input{
  margin-right:10px;
}
#checkboxes label{
  display:block;
}
.main-div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top:50px;
  padding-left:20px;
   position: -webkit-sticky;
}
</style>
