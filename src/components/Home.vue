<template>
<div>
    <div><Navbar/></div>
    <div class="abc">
        <div><Sidebar/></div>
        <div class="feed-area">
          <div v-for="item in queCategory" :key="item.id">
            <Feed :item="item" @questionClicked="questionClicked"/>
          </div>
            <!-- <Feed v-for="item in queCategory" :key="item.id" :item="item" @questionClicked="questionClicked"/> -->
        </div>
        <div class="emptyDiv">
            <Ads v-if="!question"/>
            <QuestionPage v-if="question" :question="question"/>
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
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      question: null
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
  computed: {
    ...mapGetters(['queCategory'])
  },
  methods: {
    questionClicked (item) {
      this.question = item
    }
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
    margin-top: 30px;
}
/* .main-body[data-v-6ab2da64] {
    border: 1px solid black;
    width: 700px;
    margin-top: 30px;
    height: 100vh;
} */
</style>
