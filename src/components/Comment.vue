<template>
  <div class="main-body">
    <div class="card-top">
      <img class="card-image" src="@/assets/user.png" alt="" height="50px" width="50px">
      <div class="name-section">
        <h5 class="card-username"><b>User 1</b></h5>
        <p class="timestamp">7:00 AM 1 Feb 2021</p>
      </div>
      <hr>
    </div>
    <textarea placeholder="Write your comment here!" class="pb-cmnt-textarea"></textarea>
    <a href="/comment" class="mx-3">Reply</a>
  </div>
</template>

<script>
export default {
  name: 'Comment'
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

</style>
