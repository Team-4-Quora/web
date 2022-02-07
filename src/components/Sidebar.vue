<template>
  <div class="sidebar">
    <div class=main-div>
    <div>
      <h5>Categories:</h5>
      <div id="radios">
        <input class="opt" type="radio" id="Sports" name="fav_category" value="sports">  Sports<br>
        <input class="opt" type="radio" id="Lifestyle" name="fav_category" value="lifestyle">  LifeStyle<br>
        <input class="opt" type="radio" id="E-commerce" name="fav_category" value="ecommerce">  Ecommerce<br>
        <input class="opt" type="radio" id="Education" name="fav_category" value="education">  Education<br>
        <input class="opt" type="radio" id="Bollywood" name="fav_category" value="bollywood">  Bollywood<br>
      </div>
      <button type="button" class="btn btn-secondary mt-2" @click="onSubmitCategory()">Submit</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    onSubmitCategory () {
      var radios = document.getElementsByName('fav_category')
      for (var radio of radios) {
        if (radio.checked) {
          // console.log('hiiii', radio.value)
          var categ = radio.value
        }
      }
      console.log(categ, 'hi')
      this.$store.dispatch('getByCategory', {categ})
    }
  }

}
</script>

<style scoped>
h5{
  color: black;
}
.opt{
  background-color:  #8e8d8a;
}
.sidebar{
  background-color: #d8c3a5;
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
