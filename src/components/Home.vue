<template>
<div class="main-body">
    <div><Navbar/></div>
    <div class="abc">
        <div class="sidebar"><Sidebar @onSubmitCategory="onSubmitCategory"/></div>
        <!-- <div><h2>Welcome to Quora</h2></div> -->
        <!-- <div v-if="!title">{{queMail}}</div> -->
        <div class="feed-area">
          <div v-for="item in queCategory" :key="item.id">
            <Feed v-if="radioSelect" :item="item" @questionClicked="questionClicked"/>
          </div>
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
      question: null,
      title: null,
      email: '',
      radioSelect: ''
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
    ...mapGetters(['queCategory']),
    ...mapGetters(['queMail'])
  },
  methods: {
    questionClicked (item) {
      this.question = item
    },
    onSubmitCategory (categ) {
      this.radioSelect = categ
    }
  },
  created () {
    this.email = localStorage.getItem('email')
    console.log('email', this.email)
    this.$store.dispatch('getByMail', {mail: this.email})
  }
}
</script>
<style scoped>
.main-body{
  background-color: #EAE7DC;
}
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
.sidebar{
  margin-top: 15px;
}
p{
  font-family: fantasy;
  text-align: center;
  padding-top: 220px;
  font-size: 95px;
  color: rgb(236, 40, 72);
}
</style>
