<template>
  <div class="main-body">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>{{user.email}}</b></h5>
        <p class="timestamp">7:00 AM 1 Feb 2021</p>
      </div>
      <hr>
    </div>
    <textarea placeholder="Write your comment here!" id="comment" class="pb-cmnt-textarea"></textarea>
      <div class="btn">
        <button type="button" class="btn btn-success" @click="submitComment()">Submit</button>
        <!-- <button type="button" class="btn btn-secondary">Reply</button> -->
      </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Comment',
  props: ['id'],
  data () {
    return {
      user: {
        email: ''
      }
    }
  },
  created () {
    this.user.email = localStorage.getItem('email')
  },
  methods: {
    replyClicked () {
      console.log('Reply clicked')
      this.$emit('replyClicked')
    },
    submitComment () {
      if (localStorage.getItem('email')) {
        console.log('submited the comment')
        var comment = document.getElementById('comment').value
        console.log('comment', comment)
        console.log('id', this.id)
        this.$store.dispatch('submitComment', {
          answerId: this.id,
          message: comment,
          commentBy: localStorage.getItem('email'),
          parentComponent: null })
        window.location.reload()
      } else {
        swal('', 'Log in first', 'error')
      }
    }
  }
}
</script>

<style scoped>
.main-body{
  border: 1px solid black;
  width:700px;
  padding-right: 20px;
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
textarea {
        resize: none;
        padding: 20px;
        height: 130px;
        width: 100%;
        border: 1px solid #F2F2F2;
}
.btn{
  margin-left: 150px;
}

</style>
