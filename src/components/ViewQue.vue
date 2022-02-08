<template>
    <div class="main-body">
        <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
        <div v-for="item in queMail" :key="item.id">
        <div class="card-top">
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>{{item.questionBy}}</b></h5>
            <p class="timestamp">postedOn - {{item.postedOn}}</p>
            </div>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Question:-</b></p>
            <p class="card-answered"><b>{{item.text}}</b></p>
        </div>
        </div>
    </div>
</template>
<script>
import Comment from '@/components/Comment.vue'
import ListOfComments from '@/components/ListOfComments.vue'
import { mapGetters } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
  name: 'ViewQue',
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
  computed: {
    ...mapGetters(['queMail'])
  }

}
</script>
<style scoped>
.main-body{
    border: 1px solid black;
    width: 100%;
}
.card-top{
  display: flex;
  /* justify-content: space-between; */
  padding-left: 513px;
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
  padding-left: 500px;
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
