<template>
<div class="dashboard">
    <Sidebar/>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="feed">
            <div class="feed-body">
                <Feed/>
            </div>
            <div class="feed-body">
                <Feed/>
            </div>
            <div class="feed-body">
                <Feed/>
            </div>
        </div>
        <div><Footer/></div>
    </div>
    </div>
</template>
<script>
import Answers from '@/components/AnswerAccepted.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Feed from '@/components/Feed.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Answers,
    Navbar,
    Footer,
    Feed,
    Sidebar
  }
}
</script>
<style scoped>
.feed{
    margin-left: 40%;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 50%;
}
.feed-body{
    padding-top: 25px;
}
.dashboard {
display: grid;
grid-template-columns: 1fr 5fr;
height: 100vh;
width:130vw;

}
</style>
