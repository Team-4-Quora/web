<template>
    <div>
<div><Navbar/></div>
    <div class="container py-5">
        <div class="row pb-5" style="background-color: white;">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                 <img src="@/assets/profile.png" class="rounded-circle" width="200px" height="240px">
            </div>
            <div class = "col-md-2 head-info">
                <p>Name : </p>
                <p>Email : </p>
                <p>User Points - </p>
                <p>Level - </p>
                <p>Interests - </p>
            </div>
            <div class="col-md-2"></div>
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
.body-info{
    border: red dotted 2px;
    border-radius: 10%;
    font-family: fantasy;
    font-family: cursive;
    font-size: 25px;
}
.head-info{
    font-family: fantasy;
    font-family: cursive;
    font-size: 25px;
}
</style>
