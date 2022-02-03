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
        <div>
            <!-- <div class="emptyDiv">
                <Ads/>
            </div> -->
            <div v-if="singh" class="emptyDiv">
             <QuestionPage/>
            </div>
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
  data () {
    return {
      singh: null
    }
  },
  components: {
    Answers,
    Navbar,
    Footer,
    Feed,
    Sidebar,
    QuestionPage,
    Ads
  },
  created () {
    this.$root.$on('shuklajirocks', data => { this.singh = data })
  },
  methods: {
    apoorvarocks ($event) {
    }
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
