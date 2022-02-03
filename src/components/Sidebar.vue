<template>
  <div class="sidebar">
    <div class=main-div>
    <div>
      <h5>Categories:-</h5>
      <div id="radios">
        <!-- <label> <input type="checkbox" value="sports" v-model="blog.categories"/>Sports</label>
        <label ><input type="checkbox" value="lifestyle" v-model="blog.categories"/>Lifestyle</label>
        <label><input type="checkbox" value="E-commerce" v-model="blog.categories"/>E-commerce</label>
        <label><input type="checkbox" value="Education" v-model="blog.categories"/>Education</label>
        <label><input type="checkbox" value="Bollywood" v-model="blog.categories"/>Bollywood</label> -->
        <input type="radio" id="html" name="fav_language" value="HTML"><label for="html">HTML</label><br><input type="radio" id="css" name="fav_language" value="CSS"><label for="css">CSS</label><br>  <input type="radio" id="javascript" name="fav_language" value="JavaScript"> <label for="javascript">JavaScript</label>
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
