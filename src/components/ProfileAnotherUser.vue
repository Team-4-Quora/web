<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="user-details">
            <div class="user-image">
                <img class="image" src="@/assets/profile.png" alt="" width="200px" height="200px">
            </div>
            <div class="user-info">
                <h4>Name:- User</h4>
                <h4>Email:- User@gmail.com</h4>
                <h4>User Points:- 1500</h4>
                <h4>Level:- Gold</h4>
                <h4>Interests:- Food, Technology, Travelling</h4>
            </div>
        </div>
        <hr>
        <h2 class="followers-text">Followers:-</h2>
        <div class="container pt-4 text-center d-flex flex-nowrap overflow-auto scrollbar">
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name</h4></div>
                    </div>
                </div>
            </div>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'ProfileAnotherUser',
  components: {
    Navbar,
    Footer
  },
  methods: {
    becomeorg () {
      this.$router.push('/org')
      console.log(this.$router)
    }
  }
}
</script>
<style scoped>
.user-details{
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
}
.user-image{
    padding-left: 350px;
}
.image{
    border-radius: 50%;
}
.user-info{
    padding-right: 350px;
}
h4{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 120px;
  margin-left: 50px;
  margin-right: 50px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.card-image{
    padding-left: 10px;
}
.card-text{
    text-align: center;
    font-family: cursive;
    color: red;
}
.followers-text{
    text-align: center;
    font-family: fantasy;
    color: blue;
    font-weight: bold;
}
.follow-details{
    display: flex;
    justify-content: space-between;
}
.scrollbar::-webkit-scrollbar
{
    display: none;
}
#card-whole{
    cursor: pointer;
}
</style>
