<template>
  <div class="main-body">
    <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>{{question.questionBy}}</b></h5>
        <p class="timestamp">{{question.postedOn}}</p>
      </div>
      <button type="button" class="btn btn-link">Follow</button>
    </div>
    <div class="card-question">
      <p class="card-question-title"><b>Question:-</b></p>
      <p class="card-question-asked"><b>{{question.text}}</b></p>
    </div>
    <div class="card-bottom">
      <div class="likes">
        <a href="#" class="bg-white text-black fa-1x"><i class="far fa-smile-wink"></i></a>
        <p class="likes-count">{{likeCount}} Upvotes</p>
        <p></p>
      </div>
      <div class="dislikes">
        <a href="#" class="bg-white text-black fa-1x"><i class="far fa-angry"></i></a>
        <p class="dislike-count">{{totalCount}} Downvotes</p>
      </div>
      <div class="share">
        <a href="#" class="bg-white text-black  fa-1x"><i class="fas fa-share"></i></a>
      </div>
    </div>
    <hr>
    <div class="add-answer">
      <textarea name="askquestion" id="ask" cols="60" rows="5" placeholder="Add your answer here...."></textarea>
      <button class="button-56" role="button" @click="addAnswer(question.id)">Submit</button>
    </div>
    <hr>
    <Answers v-for="item in allAnswerslist" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import Answers from '@/components/Answers.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'QuestionPage',
  props: ['question'],
  components: {
    Answers
  },
  data () {
    return {
      questionId: this.question.id,
      likeCount: 0,
      totalCount: 0
    }
  },
  watch: {
    'question' () {
      this.$store.dispatch('getAnswerslist', {questionId: this.question.id})
    }
  },
  created () {
    console.log('created question id', this.questionId)
    let questionId = this.questionId
    this.$store.dispatch('getAnswerslist', {questionId})
    console.log(questionId, 'questionid')
    this.axios.get(`http://localhost:8081/qna/answer/fetch/${questionId}`).then((res) => {
      this.answersList = res.data
      console.log(res.data)
    }).catch(err => console.log(err))
    this.axios.get(`http://localhost:8081/qna/reaction/fetch/question/${questionId}`).then((res) => {
      this.queReactionsList = res.data
      console.log(res.data)
      this.totalCount = this.queReactionsList.length
      this.likeCount = this.queReactionsList.filter(x => x.like === true).length
    }).catch(err => console.log(err))
  },
  methods: {
    addAnswer (questionId) {
      var answer = document.getElementById('ask').value
      console.log('answer', answer)
      console.log(questionId, 'questionid')
      this.$store.dispatch('addAnswer', {
        questionId: questionId,
        message: answer,
        answerBy: localStorage.getItem('email')
      })
      // window.location.reload()
      // this.$router.go(0)
    }
  },
  computed: {
    ...mapGetters(['allAnswerslist'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-body{
  width:610px;
  padding-left: 15px;
  overflow-x:hidden;
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
#ask{
  margin-left: 40px;
}
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 220px;
}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>
