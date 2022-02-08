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
        <a href="#" class="bg-white text-black fa-1x"><i @click="incReaction(question.id)" class="far fa-smile-wink"></i></a>
        <p class="likes-count">{{likeCount}} Upvotes</p>
        <p></p>
      </div>
      <div class="dislikes">
        <a href="#" class="bg-white text-black fa-1x"><i @click="decReaction(question.id)" class="far fa-angry"></i></a>
        <p class="dislike-count">{{disLikeCount}} Downvotes</p>
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
    <Answers v-for="item in allAnswerslist" :key="item.id" :item="item" :questionBy = "question.questionBy"/> -->
  </div>
</template>
<script>

import Comment from '@/components/Comment.vue'
import ListOfComments from '@/components/ListOfComments.vue'
export default {
  name: 'AnswerAccepted',
  props: ['queItemId'],
  data () {
    return {
      commentsList: [],
      queReactionsList: [],
      ansReactionsList: [],
      showComment: null,
      likeCount: 0,
      disLikeCount: 0,
      totalCount: 0,
      ansTotalCount: 0,
      ansLikeCount: 0,
      ansDisLikeCount: 0,
      email: '',
      question: ''
    }
  },
  components: {
    Comment, ListOfComments
  },
  created () {
    this.question = this.$route.params.queItemId
    console.log(' qyestion search list question id', this.question)
    let answerId = this.item1.id
    this.email = localStorage.getItem('email')
    console.log('answerid', answerId)
    this.axios.get(`http://10.177.1.115:8081/qna/reaction/fetch/answer/${answerId}`).then((res) => {
      this.ansReactionsList = res.data
      console.log(res.data)
      this.ansTotalCount = this.ansReactionsList.length
      this.ansLikeCount = this.ansReactionsList.filter(x => x.like === true).length
      this.ansDisLikeCount = this.ansTotalCount - this.ansLikeCount
    }).catch(err => console.log(err))
  },
  methods: {
    incReactionAns (answerId) {
      console.log('inc')
      this.ansId = answerId
      this.$store.dispatch('addReactionAns', {
        answerId: answerId,
        reactionBy: localStorage.getItem('email'),
        like: true
      })
      this.$router.go(0)
    },
    decReactionAns (answerId) {
      console.log('dec')
      this.$store.dispatch('addReactionAns', {
        answerId: answerId,
        reactionBy: localStorage.getItem('email'),
        like: false
      })
      this.$router.go(0)
    },
    addComment (answerId) {
      this.showComment = true
      console.log('comment clicked', answerId)
      this.axios.get(`http://10.177.1.115:8081/qna/comment/fetch/${answerId}`).then((res) => {
        this.commentsList = res.data; console.log(res.data)
      }).catch(err => console.log(err))
    },
    clickFollow (answerBy) {
      console.log('requestor email', this.email)
      console.log('email', answerBy)
      this.$store.dispatch('addFollower', {
        requesterId: this.email,
        email: answerBy,
        status: 0
      })
    }
  }
}
</script>
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
