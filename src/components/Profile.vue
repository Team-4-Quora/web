<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Feed',
  components: {
    Navbar,
    Footer
  }
}
</script>
