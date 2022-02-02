<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="feed">
            <div class="dashboard">
                <Sidebar/>
            </div>
            <div class="feed-body">
                <Feed/>
            </div>
            <div class="questions-page">
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

export default {
  name: 'Home',
  components: {
    Answers,
    Navbar,
    Footer,
    Feed,
    Sidebar,
    QuestionPage
  }
}
</script>
<style scoped>
.feed{
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
}
.feed-body{
    padding-top: 25px;
    width: 500vw;
}
.dashboard {
display: grid;
grid-template-columns: 1fr 5fr;
height: 100vh;
width:130vw;
}

</style>
