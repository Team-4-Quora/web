<template>
    <div class="main-body">
        <div class="card-top">
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>User 2</b></h5>
            <p class="timestamp">7:00 AM 1 Feb 2021</p>
            </div>
            <button type="button" class="btn btn-link">Follow</button>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Answer:-</b></p>
            <p class="card-answered"><b>When I passed out 12th with average marks (75%), took admission in college. My father already told me just after passing 12th that we can not afford your study expenses to study much further but we’ll somehow manage your College & Coaching Centre Fee for only graduation period and after that you’ll have to work as an apprentice at any kind shop (In other words, you have to earn on your own). That hit me as hard as a over speed truck. I can not tell you what was going in my mind at that time. I totally understood their situation and compulsion as well that they have done what they everything could do for me and now it’s my turn. I wasn’t much mature then, was somewhere around 19 yrs old. So I made a firm decision that I would work hard day and night. I still remember the day when I had to submit admission fee of college and I asked my mother to give me fee (It was somewhere around 6,700) but she did not have that much money at that particular point of time but she she said you don’t worry. I would go to Zamindar to have the due money, where she worked as labour such as cutting wheat crop etc.</b></p>
        </div>
        <div class="bottom">
          <div class="likes">
            <a href="#" class="bg-white text-black fa-2x"><i class="far fa-smile-wink"></i></a>
            <p class="likes-count">2500 upvotes</p>
          </div>
          <div class="dislikes">
            <a href="#" class="bg-white text-black fa-2x"><i class="far fa-angry"></i></a>
            <p class="dislike-count">1000 downvotes</p>
          </div>
          <div class="comments">
            <a href="#" class="bg-white text-black  fa-2x"><i class="fas fa-comment-dots"></i></a>
          </div>
        </div>
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
