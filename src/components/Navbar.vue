<template>
    <div class="main-navbar">
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
          <div class="home-logo">
            <div class="navbar-brand text-dark font-weight-bold" @click="gohome()"><img id="image-logo" src="@/assets/logo.png" alt="" height="50px" width="50px"></div>
            <div class="text-black fa-2x mx-5" @click="gohome()" id="home"><i class="fas fa-home"></i></div>
             </div>
                <div class="navbar-nav ml-5">
                  <div>
                  <input class="form-control amber-border" type="text" size="50" placeholder="Search Quora" name="search"/>
                  </div>
                  <!-- <input class="form-control amber-border" type="text" size="50" placeholder="Search Quora" name="search" @click="search ()"/> -->
                  <button type="submit" class="btn btn-secondary" style="height:50px; margin-top:10px;" @click="search ()"><i class="fa fa-search"></i></button>
                  <b-nav-item class="nav-item nav-link text-dark h6 my-auto" @click="goaddques()"><button type="button" class="btn btn-danger">Add&nbsp;Question</button></b-nav-item>
                  <b-nav-item class="nav-item nav-link text-dark h6 my-auto text-black fa-2x" @click="goprofile()"><i class="fas fa-user-circle"></i></b-nav-item>
              </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    gohome () {
      this.$router.push('/')
      console.log(this.$router)
    },
    goaddques () {
      this.$router.push('/ask')
      console.log(this.$router)
    },
    goprofile () {
      this.$router.push('/profile')
      console.log(this.$router)
    },
    search () {
      console.log('search started')
      console.log()
      if (this.$router.currentRoute._rawValue.text === 'search') {
        this.$router.replace({
          name: 'search',
          query: {
            searchQueryKey: this.searchQuery
          }
        })
      } else {
        this.$router.replace({
          name: 'search',
          query: {
            searchQueryKey: this.searchQuery
          }
        })
      }
      console.log(this.$router.currentRoute)
      // this.$router.go();
    }
  }
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.main-navbar{
    margin-bottom: 50px;
}
.cart{
  cursor: pointer;
}
#home{
  cursor: pointer;
}
.navbar{
  height: 70px;
}
input{
  height:50px;
  margin-top:10px;
}
.home-logo{
  display: flex;
}
#image-logo{
  cursor: pointer;
}
</style>
