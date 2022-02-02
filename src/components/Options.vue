<template>
<div class="card-bottom">
      <div class="likes">
        <a href="/" class="bg-white text-black fa-2x"><i class="far fa-smile-wink"></i></a>
        <p class="likes-count">2500 upvotes</p>
        <p></p>
      </div>
      <div class="dislikes">
        <a href="/" class="bg-white text-black fa-2x"><i class="far fa-angry"></i></a>
        <p class="dislike-count">1000 downvotes</p>
      </div>
      <div class="comments">
        <a href="/" class="bg-white text-black  fa-2x"><i class="fas fa-comment-dots"></i></a>
      </div>
      <div class="share">
        <a href="/" class="bg-white text-black  fa-2x"><i class="fas fa-share"></i></a>
      </div>
    </div>
</template>
<script>
</script>
<style scoped>
.card-bottom{
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
}
.likes{
  text-align: center;
}
.likes-count{
  font-size: 10px;
}
.dislikes{
  text-align: center;
}
.dislike-count{
  font-size: 10px;
}
</style>
