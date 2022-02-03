<template>
<div>
    <div><Navbar/></div>
    <div class="abc">
        <div><Sidebar/></div>
        <div class="feed-area">
            <div><Feed/></div>
            <div><Feed/></div>
            <div><Feed/></div>
        </div>
        <div class="emptyDiv">
            <Ads/>
            <QuestionPage/>
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

.abc{
    display: flex;
    justify-content: space-between;
}
.emptyDiv{
  border: 1px solid black;
  width:700px;
  margin-top:30px;
  height: 100vh;
  overflow: scroll;
}
.feed-area{
    height: 100vh;
    width: 800px;
    overflow: scroll;
}
</style>
