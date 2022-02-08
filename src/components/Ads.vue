<template>
    <div class="main-body">
        <img class="ad-image" src="@/assets/logo.png" alt="" height="400px" width="80%">
        <!-- <img class="ad-image" src="@/assets/sportsads.jpeg" alt="" height="400px" width="80%">
        <img class="ad-image" src="@/assets/lifestyleads.png" alt="" height="400px" width="80%">
        <img class="ad-image" src="@/assets/ecommerceads.jpeg" alt="" height="400px" width="80%">
        <img class="ad-image" src="@/assets/educationads.gif" alt="" height="400px" width="80%">
        <img class="ad-image" src="@/assets/bollywoodads.jpeg" alt="" height="400px" width="80%"> -->
        <p class="ad-image" v-if="selectedImage"><img height="400px" width="80%" :src="selectedImage" alt=""></p>
    </div>
</template>
<script>
export default {
  name: 'Ads',
  data () {
    return {
      images: [
        'https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/07/08/1600/800/bf4f428e9b387dffac193664bb12716a.jpg?mod=v1_d2b792d9ac6ecaf961b458f45fafd7ab ',
        'https://i.pinimg.com/originals/3b/90/06/3b9006d155623130aacc33e72b5c4ed1.png ',
        'https://akm-img-a-in.tosshub.com/businesstoday/images/story/201610/amazon_sale-660_450_101716112018.jpg',
        'https://qph.fs.quoracdn.net/main-qimg-e762959759a0137b3d5ca3a487cd2e65',
        ' https://www.koimoi.com/wp-content/new-galleries/2020/08/kgf-chapter-2-new-release-date-announced-002.jpg',
        'https://www.bollywoodhungama.com/wp-content/uploads/2021/10/Akshay-Kumar-to-play-war-hero-Major-General-Ian-Cardozo-in-Gorkha-first-look-unveiled-1.jpg',
        'https://i.pinimg.com/originals/03/e1/06/03e106bf7ee5ddb48b7f58624a4caf52.jpg',
        'https://images.moneycontrol.com/static-mcnews/2021/09/Flipkart.jpg',
        'https://gumlet.assettype.com/afaqs%2Fimport%2Fall%2Fadvertising%2Fcreative_showcase%2Fimages%2Fprint%2F2016%2F58124_529x529.jpg?format=webp&w=400&dpr=2.6',
        'https://www.designyourway.net/blog/wp-content/uploads/2017/12/adidas_ad_3_by_mdr9inchnail.jpg ',
        'https://www.bestfreewebresources.com/wp-content/uploads/2013/03/sport-print-ads-38.jpg',
        ' https://www.businessinsider.in/photo/84205571/thums-up-wants-to-celebrate-the-resilience-of-ordinary-and-extraordinary-heroes-alike-arnab-roy-coca-cola-india.jpg?imgsize=1501210',
        'https://i.pinimg.com/736x/c0/1a/d7/c01ad7e42f9150aab4a836f3d7d2ac75.jpg '
      ],
      selectedImage: null
    }
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random() * items.length)]
    }
  },
  created () {
    this.selectedImage = this.randomItem(this.images)
  }
}
</script>
<style scoped>
.ad-image{
    margin-top: 50px;
    margin-left: 10%;
}
.main-body{
    overflow-x:hidden;
}
</style>
