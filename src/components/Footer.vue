<template>
  <div>
    <footer>
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
      <div class="container-fluid text-center" style="background-color: black">
          <div class="row pt-5" style="background-color: black;">
                <div class="col-12 col-md-4 pb-5">
                    <p class="text-white font-weight-bold pb-3 h5 d-block">QUORA</p>
                    <p class="text-white font-weight-bold pb-3 d-block"> It helps to ask questions, get useful answers, and share what you know with the world</p>
                </div>
                <div class="col-12 col-md-4 pb-5">
                    <!-- <p class="text-white font-weight-bold pb-3 h5 d-block">USEFUL LINKS</p>
                    <a href="https://www.w3schools.com/css/" class="text-white font-weight-bold pb-3 d-block">Refer CSS Here</a>
                    <a href="https://getbootstrap.com/" class="text-white font-weight-bold pb-3 d-block"> Refer BootStrap Here</a>
                    <a href="https://vuejs.org/" class="text-white font-weight-bold pb-3 d-block">Refer VueJs Here</a> -->
                </div>
                <div class="col-12 col-md-4 pb-5">
                  <p class="text-white font-weight-bold pb-3 h5 d-block">SOURCE CODE</p>
                  <a class="bg-white text-black fa-2x" href="https://github.com/Team-4-Quora/web"><i class="fab fa-github"></i></a>
                </div>
            </div>
        <div class="text-white font-weight-bold py-1">
                <p>Copyright © Quora 2022</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
p{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
