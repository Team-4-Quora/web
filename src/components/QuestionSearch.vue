<template>
    <div class="main-body">
        <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous">
        <div class="user-card">
            <div class="user-image">
                <img src="@/assets/profile.png" alt="" height="100px" width="100px">
            </div>
            <div class="card-details">
                <h5>Email:- User@gmail.com</h5>
                <button>Follow</button>
            </div>
        </div>
            <div class="question-card">
                <h3>Question: - </h3>
            </div>
            <div class="card-bottom">
                <div class="likes">
                    <a href="#" class="bg-white text-black fa-1x"><i class="far fa-smile-wink"></i></a>
                    <p class="likes-count">123</p>
                    <p></p>
                </div>
                <div class="dislikes">
                    <a href="#" class="bg-white text-black fa-1x"><i class="far fa-angry"></i></a>
                    <p class="dislike-count">123</p>
                </div>
        </div>
        <div class="user-card">
            <div class="user-image">
                <img src="@/assets/profile.png" alt="" height="100px" width="100px">
            </div>
            <div class="card-details">
                <h5>Email:- User@gmail.com</h5>
                <button>Follow</button>
            </div>
        </div>
            <div class="question-card">
                <h3>Answer: - </h3>
            </div>
            <div class="card-bottom">
                <div class="likes">
                    <a href="#" class="bg-white text-black fa-1x"><i class="far fa-smile-wink"></i></a>
                    <p class="likes-count">123</p>
                    <p></p>
                </div>
                <div class="dislikes">
                    <a href="#" class="bg-white text-black fa-1x"><i class="far fa-angry"></i></a>
                    <p class="dislike-count">123</p>
                </div>
                <div class="comments">
                <a href="#" class="bg-white text-black  fa-1x"><i @click="addComment(item1.id)" class="fas fa-comment-dots"></i></a>
                </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default{
  name: 'QuestionSearch',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
.user-card{
    display: flex;
    justify-content: space-between;
    width: 500px;
    margin-top: 100px;
    margin-left: 450px;
    border: 1px solid black;
}
img{
    border-radius: 50%;
}
.question-card{
    width: 500px;
    margin-top: 100px;
    margin-left: 450px;
}
.card-bottom{
  display: flex;
  justify-content: space-between;
  width: 500px;
    margin-top: 100px;
    margin-left: 450px;
}
.likes{
  text-align: center;
}
.likes-count{
  font-size: 10px;
}
.dislikes{
  text-align: center;
}
.dislike-count{
  font-size: 10px;
}
</style>
