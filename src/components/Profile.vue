<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="user-details">
            <div class="user-image">
                <img class="image" src="@/assets/profile.png" alt="" width="200px" height="200px">
            </div>
            <div class="user-info">
                <h4 id="email">Email:- {{user.email}}</h4>
                <h4 id="points">User Points:- 1500</h4>
                <h4 id="level">Level:- Gold</h4>
                <h4>Interests:- Food, Technology, Travelling</h4>
            </div>
        </div>
        <button class="button-49" role="button" @click="becomeorg()">Become an organization</button>
        <div class="wrap">
   <div class="searchclass">
      <input type="text" class="searchTerm" placeholder="Search" size=50px id="jahnavi"/>
      <button type="submit" class="searchButton">
        <i @click="onSearchProfile()" class="fa fa-search"></i>
     </button>
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
        <hr>
            <h2 class="followers-text">Pending Request:-</h2>
            <div class="container text-center d-flex align-items-strech flex-wrap">
                <Pending v-for="pending in pendingList" :key="pending.id" :pending="pending"/>
            </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Pending from '@/components/Pending'
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {
    Navbar,
    Footer,
    Pending
  },
  data () {
    return {
      user: {
        email: ''
      }
    }
  },
  created () {
    this.user.email = localStorage.getItem('email')
  },
  computed: {
    ...mapGetters(['pendingList'])
  },
  methods: {
    becomeorg () {
      this.$router.push('/org')
      console.log(this.$router)
    },
    onSearchProfile () {
      let val = document.getElementById('jahnavi').value
      console.log('search', val)
      this.$store.dispatch('getSearchProfileDetails', {val})
      this.$router.push('/searchuser')
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
.fa{
  padding-right: 100px;
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
.button-49{
    margin-top: 50px;
}
.button-49,
.button-49:after {
  width: 250px;
  height: 76px;
  line-height: 78px;
  font-size: 20px;
  font-family: 'Bebas Neue', sans-serif;
  background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 500px;
}
.btn{
  display: flex;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  content: 'Lets do it';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}
.form-control{
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px;
}

.button-49:hover:after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 400px;
    height: 86px;
    line-height: 88px;
  }
}
.pending{
    margin-top: 50px;
}
.followers-text{
    text-align: center;
    font-family: fantasy;
    color: blue;
    font-weight: bold;
}
.searchbar{
  display:flex;
}
.searchclass{
  text-align: center;
  margin-top:20px;
}
.searchButton {
  width: 40px;
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
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}
</style>
