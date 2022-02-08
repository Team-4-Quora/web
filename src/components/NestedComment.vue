<template>
  <div class="main-body">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>{{item.commentBy}}</b></h5>
        <p class="timestamp">{{item.postedOn}}</p>
      </div>
      <hr>
    </div>
    <textarea placeholder="Write your comment here!" id="comment" class="pb-cmnt-textarea"></textarea>
      <div class="btn">
        <!-- <button type="button" class="btn btn-success" @click="submitComment()">Submit</button> -->
        <button type="button" class="btn btn-success" @click="onSubmitNestedComment()">submit</button>
      </div>
  </div>
</template>
<script>

export default {
  name: 'NestedComment',
  props: ['item'],
  data () {
    return {
      email: ''
    }
  },
  created () {
  },
  methods: {
    onSubmitNestedComment () {
      this.email = localStorage.getItem('email')
      var comment = document.getElementById('comment').value
      console.log('nested comment', this.item.answerId, comment, this.email, this.item.id)
      this.$store.dispatch('nestedComment', {
        answerId: this.item.answerId,
        message: comment,
        commentBy: this.email,
        parentComment: this.item.id
      })
      this.$router.go(0)
    }
  }
}
</script>
<style scoped>
.main-body{
  border: 1px solid black;
  width:700px;
  padding-right: 20px;
  margin-left: 50px;
  background-color: rgb(152, 152, 221);
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
