<template>
  <div class="main-body">
    <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>{{item.questionBy}}</b></h5>
        <p class="timestamp" style="display:inline"></p>
        <span><button type="button" class="btn btn-link" style="margin-right:0">Follow</button></span>

      </div>
    </div>
    <div class="card-question">
      <p class="card-question-title"><b>Question:-</b></p>
      <div><p class="card-question-asked" @click="questionClicked()"><b>{{item.text}}</b></p></div>
    </div>
    <div class="card-bottom">
      <div class="likes">
        <a href="#" class="bg-white text-black fa-1x"><i @click="incReaction()" class="far fa-smile-wink"></i></a>
        <p class="likes-count">2500 upvotes</p>
        <p></p>
      </div>
      <div class="dislikes">
        <a href="#" class="bg-white text-black fa-1x"><i @click="decReaction()" class="far fa-angry"></i></a>
        <p class="dislike-count">1000 downvotes</p>
      </div>
      <!-- <div class="comments">
        <a href="#" class="bg-white text-black  fa-1x"><i class="fas fa-comment-dots"></i></a>
      </div> -->
      <div class="share">
        <a href="#" class="bg-white text-black  fa-1x"><i class="fas fa-share"></i></a>
      </div>
    </div>
    <!-- <AnswerAccepted/> -->
    <div v-for="item1 in answersList" :key="item1.id">
      <div v-if="item1.accepted === true">
            <div class="main-body">
        <div class="card-top">
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>{{item1.answerBy}}</b></h5>
            <p class="timestamp">{{item1.postedOn}}</p>
            </div>
            <button type="button" class="btn btn-link">Follow</button>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Answer:-</b></p>
            <p class="card-answered"><b>{{item1.message}}</b></p>
        </div>
        <div class="bottom">
          <div class="likes">
            <a href="#" class="bg-white text-black fa-1x"><i @click="incReactionAns()" class="far fa-smile-wink"></i></a>
            <p class="likes-count">2500 upvotes</p>
          </div>
          <div class="dislikes">
            <a href="#" class="bg-white text-black fa-1x"><i @click="decReactionAns()" class="far fa-angry"></i></a>
            <p class="dislike-count">1000 downvotes</p>
          </div>
          <div class="comments">
            <a href="#" class="bg-white text-black  fa-1x"><i class="fas fa-comment-dots"></i></a>
          </div>
        </div>
    </div>
      </div>
      <div><CommentComponent/></div>
    </div>
  </div>
</template>

<script>
import AnswerAccepted from '@/components/AnswerAccepted.vue'
import CommentComponent from '@/components/CommentComponent.vue'
// import {mapGetters} from 'vuex'
import axios from 'axios'
var moment = require('moment')
export default {
  name: 'Feed',
  props: ['item', 'item1'],
  data () {
    return {
      answersList: [],
      moment: moment
    }
  },
  components: {
    AnswerAccepted,
    CommentComponent
  },
  // computed: {
  //   ...mapGetters(['allAnswerslist'])
  // },
  // watch: {
  //   'item' () {
  //     console.log('watch', this.item.id)
  //     this.$store.dispatch('getAnswerslist', {questionId: this.item.id})
  //   }
  // },
  created () {
    let questionId = this.item.id
    axios.get(`http://localhost:8081/qna/answer/fetch/${questionId}`).then((res) => { this.answersList = res.data; console.log(res.data) }).catch(err => console.log(err))
  },
  methods: {
    incReaction () {
      this.$store.dispatch('addReaction', {
        questionId: this.item.id,
        reactionBy: 'bag@gmail.com',
        isLike: true
      })
    },
    decReaction () {
      this.$store.dispatch('addReaction', {
        questionId: this.item.id,
        reactionBy: 'bag@gmail.com',
        isLike: false
      })
    },
    incReactionAns () {
      console.log('inc')
      // this.$store.dispatch('addReactionAns', {
      //   answerId: this.item1.id,
      //   reactionBy: 'bag@gmail.com',
      //   isLike: true
      // })
    },
    decReactionAns () {
      console.log('dec', this.item1)
      // this.$store.dispatch('addReactionAns', {
      //   answerId: this.item1.id,
      //   reactionBy: 'bag@gmail.com',
      //   isLike: false
      // })
    },
    questionClicked () {
      this.$emit('questionClicked', this.item)
    }
  }
}
</script>
<style scoped>
.main-body{
  border: 1px solid black;
  width:700px;
  overflow-x:hidden;
}
h5{
  color: #4f4a41;
}
.card-top{
  display: flex;
  justify-content: space-between;
}
.card-image{
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
  border: black 1px solid;
}
.card-username{
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-top: 10px;
  padding-right: 450px;
  color: #e85a4f;
}
.btn{
  height: 40px;
}
.card-question{
  display: flex;
  padding-top: 10px;
}
.card-question-title{
  color: #e85a4f;
  padding-top: 5px;
  padding-left: 15px;
}
.card-question-asked{
  padding-top: 5px;
  padding-left: 10px;
  color: black;
  cursor: pointer;
}
.card-answer{
  display: flex;
  padding-top: 5px;
  color: #8e8d8a;
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
  padding-right: 400px
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
.timestamp{
    font-size: 12px;
}
.bottom{
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
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
.accept{
  background: green;
  color: white;
  border-radius: 10%;
  height: 10%;
}
</style>
