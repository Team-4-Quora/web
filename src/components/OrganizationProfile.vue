<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div class="heading">
            <h1 class="profile-heading">Organization Profile</h1>
            <div class="profile-details">
                <img class="profile-image" src="@/assets/logo.png" alt="" width="200px" height="200px">
                <div class="details">
                    <!-- {{fetchOrg}} -->
                    <h3>Name:-{{fetchOrg.name}}</h3>
                    <h3>Description:-{{fetchOrg.description}}</h3>
                </div>
            </div>
            <!-- <b-nav-item class="nav-item nav-link text-dark h6 my-auto" ><button type="button" class="btn btn-primary" @click="clickFollow(allorgDetails.id)">Follow</button></b-nav-item> -->
            <!-- <div class="moderator-card"><ModeratorCard/></div> -->
            <hr>
              <h2 class="followers-text">Followers:-</h2>
            <div class="container text-center d-flex align-items-strech flex-wrap">
                <OrgFollowers v-for="orgfollower in orgfollowersList" :key="orgfollower.id" :orgfollower="orgfollower"/>
            </div>
            <hr>
            <h2 class="followers-text">Pending Request:-</h2>
            <div class="container text-center d-flex align-items-strech flex-wrap">
                <Pending v-for="pending in pendingList" :key="pending.id" :pending="pending"/>
            </div>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ModeratorCard from '@/components/ModeratorCard.vue'
import OrgFollowers from '@/components/OrgFollowers.vue'
import Pending from '@/components/Pending.vue'
import { mapGetters } from 'vuex'
export default{
  name: 'OrganizationProfile',
  props: ['item', 'item1', 'hello'],
  data () {
    return {
      email: '',
      fetchOrg: []
    }
  },
  components: {
    Navbar,
    Footer,
    ModeratorCard,
    OrgFollowers,
    Pending
  },
  computed: {
    ...mapGetters(['allorgDetails']),
    ...mapGetters(['pendingList']),
    ...mapGetters(['orgfollowersList'])
  },
  created () {
    let id = this.$route.params.hello
    console.log('orgid', id)
    this.$store.dispatch('getOrgDetails', {
      orgId: id
    })
    this.$store.dispatch('addPendingRequest', {
      mail: localStorage.getItem('email')
    })
    this.$store.dispatch('getFollowersDetails', {
      mail: localStorage.getItem('email')
    })
    this.$store.dispatch('getOrgFollowersDetails', {
      id: '61fe573b23294108e3dcc3e2'
    })
    this.email = localStorage.getItem('email')
    console.log('email org fetching', this.email)
    this.axios.get(`http://10.177.1.115:8082/organizations/email/${this.email}`).then((res) => {
      this.fetchOrg = res.data
      console.log('fetch org responce', res.data)
    }).catch(err => console.log(err))
  },
  methods: {
    clickFollow (orgId) {
      console.log('email')
      this.$store.dispatch('addFollowerOrg', {
        requesterId: localStorage.getItem('email'),
        email: this.allorgDetails.orgId.mail,
        orgId: orgId,
        status: 0
      })
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
