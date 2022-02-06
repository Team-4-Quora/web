<template>
    <div class="main-body">
        <div><Navbar/></div>
        <h1 class="title">Ask Your Question Here</h1>
        <br>
        <div class="category">
          <div>
              <label for="category" id="detail">Choose your interested category: </label>
              <select id="categories">
                <option value="sports">Sports</option>
                <option value="lifestyle">LifeStyle</option>
                <option value="ecommerce">E-commerce</option>
                <option value="education">Education</option>
                <option value="bollywood">Bollywood</option>
              </select>
          </div>
        </div>
        <div class="ask-quesiton-body">
            <textarea id="ask" cols="100" rows="5"></textarea>
            <br>
            <!-- <button class="button button1" @click="addQuestion()">Ask</button> -->
            <div class="wrap">
              <button class="button" @click="addQuestion()">Ask</button>
            </div>
        </div>
        <div class="foot"><Footer/></div>
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
  },
  methods: {
    addQuestion () {
      var val = document.getElementById('categories')
      var cat = val.options[val.selectedIndex].value
      console.log('category', cat)
      var que = document.getElementById('ask').value
      console.log('que', que)
      this.$store.dispatch('addQuestion', {
        questionBy: 'abc@gmail.com',
        text: que,
        category: cat
      })
      window.location.reload('http://localhost:8084/')
    }
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
    color: #950740;
    text-align: center;
    padding-top: 30px;
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
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 100px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}
.foot{
  margin-top: 130px;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>
