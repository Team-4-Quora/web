<template>
  <div class="main-body">
    <div class="card">
        <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>Modi boi</b></h5>
        <p class="timestamp">7:00 AM 1 Feb 2021</p>
      </div>
      <button type="button" class="btn btn-link">Follow</button>
    </div>
    <hr>
    <div class="card-question">
      <p class="card-question-title"><b>Question:-</b></p>
      <p class="card-question-asked"><b>What is your salary? Are you happy with it?</b></p>
    </div>
    <hr>
    <div class="answers">
        <Answers/>
        <hr>
        <Answers/>
        <hr>
        <Answers/>
    </div>
    <hr>
    <div class="card-bottom">
      <div class="likes">
        <a href="/" class="bg-white text-black fa-2x"><i class="far fa-smile-wink"></i></a>
        <p class="likes-count">2500 likes</p>
        <p></p>
      </div>
      <div class="dislikes">
        <a href="/" class="bg-white text-black fa-2x"><i class="far fa-angry"></i></a>
        <p class="dislike-count">1000 dislikes</p>
      </div>
      <div class="comments">
        <a href="/" class="bg-white text-black  fa-2x"><i class="fas fa-comment-dots"></i></a>
      </div>
      <div class="share">
        <a href="/" class="bg-white text-black  fa-2x"><i class="fas fa-share"></i></a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Answers from '@/components/AnswerAccepted.vue'
export default {
  name: 'QuestionPage',
  components: {
    Answers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-top{
  display: flex;
  justify-content: space-between;
}
.card-image{
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
}
.card-username{
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-top: 10px;
  padding-right: 450px;
}
.btn{
  height: 40px;
}
.card-question{
  display: flex;
  padding-top: 10px;
}
.card-question-title{
  color: blueviolet;
  padding-top: 5px;
  padding-left: 15px;
}
.card-question-asked{
  padding-top: 5px;
  padding-left: 10px;
}
.card-answer{
  display: flex;
  padding-top: 5px;
}
.card-answer-title{
  color: cadetblue;
  padding-top: 5px;
  padding-left: 15px;
}
.card-answered{
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 15px;
}
.card-bottom{
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
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
.timestamp{
  font-size: 12px;
}
.card{
    margin-left: 40%;
    margin-right: 100px;
    border:2px solid black;
    margin-top:150px;
}
.main-body{
    margin-bottom:100px;
}
</style>
