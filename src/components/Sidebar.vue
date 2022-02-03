<template>
  <div class="sidebar">
    <div class=main-div>
    <div>
      <h5>Categories:</h5>
      <div id="radios">
        <input type="radio" id="sports" name="fav_category" value="sports">  Sports<br>
        <input type="radio" id="lifestyle" name="fav_category" value="lifestyle">  LifeStyle<br>
        <input type="radio" id="ecommerce" name="fav_category" value="ecommerce">  Ecommerce<br>
        <input type="radio" id="education" name="fav_category" value="education">  Education<br>
        <input type="radio" id="bollywood" name="fav_category" value="bollywood">  Bollywood<br>
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
