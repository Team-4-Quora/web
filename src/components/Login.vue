<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="container py-5">
        <div class="d-flex justify-content-center">
          <div class="col-md-5">
            <div class="card rounded-0 shadow">
              <div class="card-body">
                <h3 class="h3class">Log in</h3>
                <form  method="post" @submit.prevent="myMethod">
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label>Email address:</label></div>
                    <input type="email" class="form-control" id='email' placeholder="Enter email" required/>
                  </div>
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label>Password: </label></div>
                    <input type="password" class="form-control" id="password" placeholder="Enter Password" required />
                  </div>
                  <div class="submit-button">
                    <button type="submit" class="btn btn-secondary" id="button" @click="loginpost()">Log in</button>
                  </div>
                  <hr />
                  <div style="text-align:center">or</div>
                  <hr/>
                  <div class="submit-button">
                    <button class="btn btn-secondary" id="button">
                      <img src="@/assets/google.png" />&nbsp;&nbsp;Login with Google
                    </button>
                  </div>
                  <div>
                    <hr />
                    <div style="text-align:center">
                      <span class="text">New to KTP</span>
                    </div>
                    <a @click="gosignup()" class="nav-item nav-link text-dark h6 mx-3 my-auto text-center" id="register-button" ><i class="fas fa-hand-point-right"></i> Create A New Kuch Toh Pooch Account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import swal from 'sweetalert'
export default {
  name: 'Login',
  components: {
    Navbar,
    Footer
  },
  methods: {
    gosignup () {
      this.$router.push('/signup')
      console.log(this.$router)
    },
    loginpost () {
      var email = document.getElementById('email').value
      var password = document.getElementById('password').value
      console.log(email, password)
      this.$store.dispatch('loginuser', {
        email: email,
        password: password,
        appId: '3'
      })
      swal('', 'Logged in', 'success')
      this.$router.push('/')
      console.log(this.$router)
    }
  },
  types: ['vue-sweetalert2']
}
</script>
<style scoped>
.main-body{
  background-color: #EAE7DC;
}
.submit-button {
  margin-top: 10px;
  text-align: center;
}
.h3class {
  text-align: center;
  color: #9a1750;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.form-group {
  margin-bottom: 20px;
}
a{
  margin-left: 200px;
}
#data{
  color: #ee4c7c;
}
#button{
  background-color: #9a1750;
  color: #E3E2DF;
}
hr{
  color: #ee4c7c;
}
.text{
  color: #ee4c7c;
}
a{
  font-weight: bold;
  font-style: italic;
}
#register-button{
  cursor: pointer;
}
</style>
