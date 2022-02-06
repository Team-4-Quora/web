<template>
<div>
    <div class="container">
            <div id="card-whole" class="col-12 col-md-2 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" src="@/assets/profile.png">
                    <div class="card-body">
                        <div class="card-title" ><h4>{{pending.requesterId}}</h4></div>
                    </div>
                    <button class="accept-button" @click="acceptFollowRequest(pending.email,pending.requesterId)">Accept</button>
                </div>
            </div>
</div>
</div>
</template>
<script>

export default{
  name: 'Pending',
  props: ['pending'],
  methods: {
    acceptFollowRequest (email, requesterId) {
      this.$store.dispatch('acceptRequestUser', {
        email: email,
        requesterId: requesterId
      })
    }
  }
}
</script>
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 120px;
  margin-left: 50px;
  margin-right: 50px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.card-image{
    padding-left: 10px;
}
.card-text{
    text-align: center;
    font-family: cursive;
    color: red;
}
.followers-text{
    text-align: center;
    font-family: fantasy;
    color: blue;
    font-weight: bold;
}
.follow-details{
    display: flex;
    justify-content: space-between;
}
.scrollbar::-webkit-scrollbar
{
    display: none;
}
#card-whole{
    cursor: pointer;
}
.accept-button{
    background-color: blue;
    color: white;
}
</style>
