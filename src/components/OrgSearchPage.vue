<template>
    <div class="main-body">
      <h1 class="text-center p-5">Search Results</h1>
        <OrgSearchCard v-for="item in searchOrgDetails" :key="item.id" :item="item"/>
    </div>
</template>
<script>
import OrgSearchCard from '@/components/OrgSearchCard.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'OrgSearchPage',
  components: {
    OrgSearchCard
  },
  computed: {...mapGetters(['searchOrgDetails'])}
}
</script>
<style>

</style>
