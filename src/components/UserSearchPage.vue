<template>
    <div class="main-body">
      <h1 class="text-center p-5">Search Results</h1>
        <UserSearchCard v-for="item in searchProfileDetails" :key="item.id" :item="item"/>
    </div>
</template>
<script>
import UserSearchCard from '@/components/UserSearchCard.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'UserSearchPage',
  components: {
    UserSearchCard
  },
  computed: {...mapGetters(['searchProfileDetails'])}
}
</script>
<style>

</style>
