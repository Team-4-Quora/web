<template>
    <div class="main-body">
      <h1 class="text-center p-5">Search Results</h1>
        <QuestionSearchCard v-for="item in searchDetails" :key="item.id" :item="item"/>
    </div>
</template>
<script>
import QuestionSearchCard from '@/components/QuestionSearchCard.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'QuestionSearchPage',
  components: {
    QuestionSearchCard
  },
  computed: {...mapGetters(['searchDetails'])}
}
</script>
<style>

</style>
