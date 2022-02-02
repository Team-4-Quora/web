<template>
    <div class="main-body">
        <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
        <div class="card-top">
            <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
            <div class="name-section">
            <h5 class="card-username"><b>Amit Shah</b></h5>
            <p class="timestamp">7:00 AM 1 Feb 2021</p>
            </div>
        </div>
        <div class="card-answer">
            <p class="card-answer-title"><b>Answer:-</b></p>
            <p class="card-answered"><b>When I passed out 12th with average marks (75%), took admission in college. My father already told me just after passing 12th that we can not afford your study expenses to study much further but we’ll somehow manage your College & Coaching Centre Fee for only graduation period and after that you’ll have to work as an apprentice at any kind shop (In other words, you have to earn on your own). That hit me as hard as a over speed truck. I can not tell you what was going in my mind at that time. I totally understood their situation and compulsion as well that they have done what they everything could do for me and now it’s my turn. I wasn’t much mature then, was somewhere around 19 yrs old. So I made a firm decision that I would work hard day and night. I still remember the day when I had to submit admission fee of college and I asked my mother to give me fee (It was somewhere around 6,700) but she did not have that much money at that particular point of time but she she said you don’t worry. I would go to Zamindar to have the due money, where she worked as labour such as cutting wheat crop etc.</b></p>
        </div>
        <div class="accept-button"><button class="button-7" role="button">Accept</button></div>
    </div>
</template>
<script>
export default {
  name: 'Answers'
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
.accept-button{
  padding-left: 270px;
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

.button-7:active {
  background-color: #0064bd;
  box-shadow: none;
}
</style>
