<template>
    <div class="main-body">
        <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
        <div class="card-top">
          {{comment}}
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>{{comment.commentBy}}</b></h5>
            <p class="timestamp">{{comment.postedOn}}</p>
            </div>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Comment:-</b></p>
            <p class="card-answered"><b>{{comment.message}}</b></p>
        </div>
        <div class="btn">
              <button type="button" class="btn btn-secondary" @click="replyClick()">Reply</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ListOfComments',
  props: ['comment']
}
</script>
<style scoped>
.main-body{
    border: 1px solid black;
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
.btn{
  margin-left: 150px;
}

</style>
