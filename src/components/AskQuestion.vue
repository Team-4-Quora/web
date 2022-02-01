<template>
    <div class="main-body">
        <div><Navbar/></div>
        <h1 class="title">Ask Your Question Here</h1>
        <div class="category">
            <div class="dropdown">
                <button class="dropbtn">Category</button>
                <div class="dropdown-content">
                    <a href="#">Java</a>
                    <a href="#">Technology</a>
                    <a href="#">Food</a>
                </div>
            </div>
        </div>
        <div class="ask-quesiton-body">
            <textarea name="askquestion" id="ask" cols="100" rows="5"></textarea>
            <br>
            <button class="button button1">Ask</button>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>
#ask{
    margin-top: 50px;
    margin-left: 20%;
}
.title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: blue;
    text-align: center;
    padding-top: 30px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-left: 74%;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
  border-radius: 20%;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: blue;}

.category{
    margin-left: 20%;
}
</style>
