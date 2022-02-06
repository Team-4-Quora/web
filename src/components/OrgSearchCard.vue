<template>
         <div>
                 <div class="card shadow h-100 my-3">
                    <div class="card-body">
                        <div class="card-title py-3" >
                            <h4 class="px-5">Owner :{{item.owner}} </h4>
                            <p class="px-5">Name : {{item.name}}</p>
                            <p class="px-5">Name : {{item.description}}</p>

                        </div>
                    </div>
                </div>
        </div>
</template>
<script>
export default{
  name: 'QuestionSearchCard',
  props: ['item']
}
</script>
<style scoped>

p{
    font-family: fantasy;
    font-size: 20px;
}
h4{
    font-family: cursive;
}
.card-body{
    background-color:#edc7b7;
}
.card{
    margin-left: 300px;
    margin-right: 300px;
}
</style>
