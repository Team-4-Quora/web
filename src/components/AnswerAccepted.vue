<template>
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
            <a href="#" class="bg-white text-black fa-1x"><i @click="incReactionAns(item1.id)" class="far fa-smile-wink"></i></a>
            <p class="likes-count"> {{ansLikeCount}} Upvotes</p>
          </div>
          <div class="dislikes">
            <a href="#" class="bg-white text-black fa-1x"><i @click="decReactionAns(item1.id)" class="far fa-angry"></i></a>
            <p class="dislike-count">{{ansDisLikeCount}} Downvotes</p>
          </div>
          <div class="comments">
            <a href="#" class="bg-white text-black  fa-1x"><i @click="addComment(item1.id)" class="fas fa-comment-dots"></i></a>
          </div>
        </div>
        <ListOfComments v-for="comment in commentsList" :key="comment.id" :comment="comment"/>
         <Comment v-if="showComment === true" :id="item1.id"/>
    </div>
</template>
<script>

export default {
  name: 'AnswerAccepted'
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
