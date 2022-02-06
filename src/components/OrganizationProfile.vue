<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="heading">
            <h1 class="profile-heading">Organization Profile</h1>
            <div class="profile-details">
                <img class="profile-image" src="@/assets/logo.png" alt="" width="200px" height="200px">
                <div class="details">
                    <h3>Name:-{{allorgDetails.name}} </h3>
                    <h3>Description:- {{allorgDetails.description}}</h3>
                </div>
            </div>
            <b-nav-item class="nav-item nav-link text-dark h6 my-auto" ><button type="button" class="btn btn-primary" @click="clickFollow(allorgDetails.id)">Follow</button></b-nav-item>
            <div class="moderator-card"><ModeratorCard/></div>
            <hr>
              <h2 class="followers-text">Followers:-</h2>
            <div class="container text-center d-flex align-items-strech flex-wrap">
                <Followers v-for="follower in followersList" :key="follower.id" :follower="follower"/>
            </div>
            <hr>
            <h2 class="followers-text">Pending Request:-</h2>
            <div class="container text-center d-flex align-items-strech flex-wrap">
                <Pending v-for="pending in pendingList" :key="pending.id" :pending="pending"/>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ModeratorCard from '@/components/ModeratorCard.vue'
import Followers from '@/components/Followers.vue'
import Pending from '@/components/Pending.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'OrganizationProfile',
  props: ['item', 'item1'],
  components: {
    Navbar,
    Footer,
    ModeratorCard,
    Followers,
    Pending
  },
  computed: {
    ...mapGetters(['allorgDetails']),
    ...mapGetters(['pendingList']),
    ...mapGetters(['followersList'])
  },
  created () {
    this.$store.dispatch('getOrgDetails', {
      orgId: '61fede80895b3f403ca3fa6f'
    })
    this.$store.dispatch('addPendingRequest', {
      mail: 'xyz@gmail.com'
    })
    this.$store.dispatch('getFollowersDetails', {
      mail: 'xyz@gmail.com'
    })
  },
  methods: {
    clickFollow (orgId) {
      console.log('email')
      this.$store.dispatch('addFollowerOrg', {
        requesterId: 'abc@gmail.com',
        email: 'anush@gmail.com',
        orgId: orgId,
        status: 0
      })
      // this.$store.dispatch('addFollower', {
      //   requesterId: 'abc@gmail.com',
      //   email: questionBy,
      //   status: 0
      // })
    }
  }
}
</script>
<style scoped>
.profile-heading{
    text-align: center;
    font-family: cursive;
    color: blue;
    font-weight: bold;
}
.heading{
    margin-top:90px;
}
.profile-image{
    margin-left: 350px;
    margin-top: 50px;
    border-radius: 50%;
}
.profile-details{
    display: flex;
}
h3{
    margin-left: 150px;
    margin-top: 70px;
}
.moderator-card{
    margin-top: 100px;
}
.btn{
    margin-top: 50px;
    margin-left: 380px;
}
.followers-text{
    text-align: center;
    font-family: fantasy;
    color: blue;
    font-weight: bold;
}
</style>
