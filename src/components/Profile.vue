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
        <div class="follow-details">
            <div class="following">

            </div>
            <div class="followers">

            </div>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Profile',
  components: {
    Navbar,
    Footer
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
</style>
