<template>
    <div class="main-body">
        <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
        <div class="card-top">
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>{{item.answerBy}}</b></h5>
            <p class="timestamp">{{item.postedOn}}</p>
            </div>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Answer:-</b></p>
            <p class="card-answered"><b>{{item.message}}</b></p>
        </div>
        <div class="buttons">
          <div class="accept-button"><button class="button-7" role="button" @click="acceptans()">Accept</button></div>
          <div class="likes">
            <a href="#" class="bg-white text-black fa-1x"><i @click="incReactionAns(item.id)" class="far fa-smile-wink"></i></a>
            <p class="likes-count"> {{ansLikeCount}} Upvotes</p>
          </div>
          <div class="dislikes">
            <a href="#" class="bg-white text-black fa-1x"><i @click="decReactionAns(item.id)" class="far fa-angry"></i></a>
            <p class="dislike-count">{{ansDisLikeCount}} Downvotes</p>
          </div>
          <div class="accept-button1"><button class="button-7" role="button" @click="addComment()">Comment</button></div>
        </div>
         <ListOfComments v-for="comment in commentsList" :key="comment.id" :comment="comment"/>
         <Comment v-if="showComment === true" :id="item.id"/>
    </div>
</template>
<script>
import Comment from '@/components/Comment.vue'
import ListOfComments from '@/components/ListOfComments.vue'
import swal from 'sweetalert'
// import { mapGetters } from 'vuex'
export default {
  name: 'Answers',
  props: ['item', 'questionBy'],
  data () {
    return {
      email: '',
      commentsList: [],
      showComment: null,
      ansTotalCount: 0,
      ansLikeCount: 0,
      ansDisLikeCount: 0,
      ansReactionsList: []
    }
  },
  components: {
    Comment, ListOfComments
  },
  methods: {
    acceptans () {
      if (this.questionBy === localStorage.getItem('email')) {
        console.log('answerid', this.item.id)
        console.log('questionid', this.item.questionId)
        this.$store.dispatch('acceptans', {
          ansId: this.item.id
        })
        console.log(this.item.answerBy, 'email')
        this.axios.post('http://10.177.1.115:8082/user/points', {
          email: this.item.answerBy,
          amount: 5,
          inc: 'true'
        }).then((res) => {
          console.log('Incremented status successfully', res.data)
        })
      } else {
        swal('', 'You cannot accept', 'error')
      }
      // this.$router.go(0)
    },
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
    addComment () {
      console.log('question page comment clicked')
      this.showComment = true
      console.log(this.showComment)
    }
  },
  created () {
    this.email = localStorage.getItem('email')
    console.log(this.email)
    console.log('comment list in question page', this.item.id)
    this.axios.get(`http://10.177.1.115:8081/qna/comment/fetch/${this.item.id}`).then((res) => {
      this.commentsList = res.data; console.log(res.data)
    }).catch(err => console.log(err))

    let answerId = this.item.id
    this.email = localStorage.getItem('email')
    console.log('answerid', answerId)
    this.axios.get(`http://10.177.1.115:8081/qna/reaction/fetch/answer/${answerId}`).then((res) => {
      this.ansReactionsList = res.data
      console.log(res.data)
      this.ansTotalCount = this.ansReactionsList.length
      this.ansLikeCount = this.ansReactionsList.filter(x => x.like === true).length
      this.ansDisLikeCount = this.ansTotalCount - this.ansLikeCount
    }).catch(err => console.log(err))
  }

}
</script>
<style scoped>
.main-body{
    border: 1px solid black;
    margin-right: 10%;
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
  color: #8e8d8a;
}
.timestamp{
    font-size: 12px;
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

/* CSS */
.button-7 {
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-7:hover,
.button-7:focus {
  background-color: #07c;
}

.button-7:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-8:active {
  background-color: #bd0000;
  box-shadow: none;
}
.button-8 {
  background-color: #bd0000;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
  background-color: #bd0000;
}

.button-8:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-8:active {
  background-color: #bd0000;
  box-shadow: none;
}
.buttons{
  display: flex;
  justify-content: space-between;
}
.accept-button{
  margin-left: 120px;
}
.accept-button1{
  margin-right: 120px;
}
</style>
