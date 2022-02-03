<template>
<div class="dashboard">
    <Navbar/>
    <div class="abc">
        <div><Sidebar/></div>
        <div class="feed-area">
        <div><Feed/></div>
        <div><Feed/></div>
        <div><Feed/></div>
        </div>
        <div class="emptyDiv">
            <Ads/>
        </div>
    </div>
     <div><Footer/></div>
    </div>
</template>
<script>
import Answers from '@/components/AnswerAccepted.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Feed from '@/components/Feed.vue'
import Sidebar from '@/components/Sidebar.vue'
import QuestionPage from '@/components/QuestionPage.vue'
import Ads from '@/components/Ads.vue'
export default {
  name: 'Home',
  components: {
    Answers,
    Navbar,
    Footer,
    Feed,
    Sidebar,
    QuestionPage,
    Ads
  }
}
</script>
<style scoped>
.feed{
    margin-left: 150px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 50%;
}
.feed-body{
    padding-top: 25px;
}
/* .dashboard {
display: grid;
grid-template-columns: 1fr 5fr;
height: 100vh;
width:130vw;

} */
.abc{
    display: flex;
    justify-content: space-between;
}
.emptyDiv{
    border: 1px solid black;
  width:700px;
  margin-top:50px;
  height: 100vh;
    overflow: scroll;
}
.feed-area{
    height: 100vh;
    overflow: scroll;
}
</style>
