<template>
    <div class="main-body">
        <div><Navbar/></div>
            <div class="container py-5">
                <div class="d-flex justify-content-center">
                    <div class="col-md-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <h3 class="text-center" id="signup">Sign Up</h3>
                                <form >
                                    <div class="form-group">
                                        <label id="detail">Full Name: </label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full name" required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email" required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password" required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Confirm Password:</label>
                                        <input type="password" class="form-control" placeholder="Re Enter Password" required>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="profile" class="profile">Choose a your profile:&nbsp;&nbsp;</label>
                                        <select id="profile">
                                            <option value="volvo">Public</option>
                                            <option value="saab">Private</option>
                                        </select>
                                    </div>
                                    <div class="form-group mt-3">
                                    </div>
                                    <div>
                                        <label for="category" id="detail">Choose your interested category: </label>
                                        <div class="cat">
                                        <input type="checkbox" id="category1" name="category1" value="Category1">
                                        <label>Sports</label><br>
                                        <input type="checkbox" id="category2" name="category2" value="category2">
                                        <label>Lifestyle</label><br>
                                        <input type="checkbox" id="category3" name="category3" value="category3">
                                        <label>Ecommerce</label><br>
                                         <input type="checkbox" id="category4" name="category4" value="category4">
                                        <label>Education</label><br>
                                         <input type="checkbox" id="category5" name="category5" value="category5">
                                        <label>Bollywood</label><br>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn mt-3" @click="onSubmit()">Submit</button>
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
import Navbar from './Navbar'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Signup',
  components: {
    Navbar,
    Footer
  },
  methods: {
    onSubmit () {
      let name = document.getElementById('name').value
      let email = document.getElementById('email').value
      let password = document.getElementById('password').value
      console.log(name, email, password)
      this.$store.dispatch('registerUser', {
        userEmail: email,
        password: 12345678,
        appId: 3,
        name: name
      })
    }
  }
}
</script>
<style scoped>
#signup{
  color: #9a1750;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.btn{
  background-color: #9a1750;
  color: #E3E2DF;

}
#detail{
  color: #ee4c7c;
}
.profile{
    color:#ee4c7c;
}
.cat{
    margin-inline-start: 150px;
}

</style>
