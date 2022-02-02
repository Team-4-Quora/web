<template>
    <div class="main-navbar">
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
            <div class="navbar-brand text-dark font-weight-bold"><img src="#" alt="" height="50px" width="50px">
            <a class="text-black fa-2x mx-5" href="#"><i class="fas fa-home"></i></a>
            <!-- <a class="bg-white text-black fa-2x" href="#"><i class="fas fa-list-ul"></i></a> -->

             </div>
                <div class="navbar-nav ml-5">
                  <input class="form-control amber-border" type="text" size="50" placeholder="Search Quora" name="search">
                  <button type="submit" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                  <b-nav-item class="nav-item nav-link text-dark h6 my-auto"><button type="button" class="btn btn-danger">Add&nbsp;Question</button></b-nav-item>
                  <b-nav-item class="nav-item nav-link text-dark h6 my-auto text-black fa-2x"><a href="#"><i class="fas fa-user-circle"></i></a></b-nav-item>
              </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goabout () {
      this.$router.push('/about')
      console.log(this.$router)
    },
    goprofile () {
      this.$router.push('/profile')
      console.log(this.$router)
    },
    gologin () {
      this.$router.push('/login')
      console.log(this.$router)
    },
    gohome () {
      this.$router.push('/')
      console.log(this.$router)
    },
    gocart () {
      this.$router.push('/cart')
      console.log(this.$router)
    }
  }
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.main-navbar{
    margin-bottom: 100px;
}
.cart{
  cursor: pointer;
}
#home{
  cursor: pointer;
}
</style>
