<template>
    <div class="comment-box">
      <div class="comment-layer-first">
        <textarea name="comment-level-first" id="comment" cols="45" rows="5" placeholder="Add your answer here...."></textarea>
        <div class="comment-buttons">
          <button class="submit-comment-button" role="button" @click="addComment()" >Submit</button>
          <button class="reply-comment-button" role="button">Reply</button>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'CommentComponent',
  props: ['item1'],
  methods: {
  }
}
</script>

<style scoped>
.comment-layer-first{
  display: flex;
}
.submit-comment-button{
  height: 30px;
  background-color: green;
  color: white;
  margin-left: 25px;
  border-radius: 5px;
}
.reply-comment-button{
  height: 30px;
  background-color: blue;
  color: white;
  margin-left: 10px;
  border-radius: 5px;
}
.comment-box{
  margin-left: 20px;
}
</style>
