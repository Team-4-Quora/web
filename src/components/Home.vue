<template>
    <div class="dashboard">
        <Sidebar/>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;
    width:130vw;
}

</style>
