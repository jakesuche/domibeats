<template>
  <div>
    <Hero class="position-relative" :style="{'background-image': 'url(' +
require('@/assets/img/hero/bg_image.jpg') + ')'}">
    <div class="position-absolute overlay"/>

    
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__text">
              <h2>Register now for  2022</h2>
              <div class="breadcrumb__links">
                <!-- <router-link to="/"
                  ><i class="fas fa-home"></i> Home
                </router-link> -->
                <span
                  >Our goal in intellectual property academy is to teach our
                  student how to explore the world of sound and help transform
                  their passion for music and audio into a dream career</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>

    <section class="about spad" style="margin-left: 12px;">
      <div class="container">
        <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light); font-size:20px">
            Producer Academy
          </h2>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-md-12 text-light" :style="{ fontWeight: '300' }">
            If your goal is to be a pro audio engineer, master the recording
            process as an artist or producer, Intellectual proparty Academy
            provides the knowledge and experience to make it a reality. Our
            objective is to teach our students how to explore the world of sound
            and transform their passion for music and audio into a dream career
            while in the process, create music producers & sound engineers who
            are well prepared for the competitive industry challenges that lie
            ahead. IP(intellecual proparty) has a fully functional recording
            studio and this gives us an edge in being able to expose students to
            real-world view of production and engineering session life
            Validation starts at Producer Academy. The Intellectual proparty
            Producer Academy series focuses on the skills and knowledge every
            producer needs to develop their musical skill, to maximize their
            potential and start generating revenue for themselves.
          </div>
          <!-- <div v-for="post in posts" :key="post.id" class="col-md-6  mb-5 ">
            <router-link :to="`/academy/overview/${post.id}`" class="card" style="width: 80%">
              <div class="card-body academy-box">
                <div class="academy">
                  <h5>{{post.title}}</h5>
                  <p>{{post.duration}}</p>
                </div>
              </div>
            </router-link>
          </div> -->
        </div>
        <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light); font-size:17px">
            WHAT WE OFFER
          </h2>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-md-12 text-light" :style="{ fontWeight: '300' }">
            <span :style="{ fontWeight: '400' }">
              Digital music production ( sound designing, sample making,
              Arrangements):</span
            ><br />

            This course is intensive practical and theoretical to prepare
            students to become working success stories in the commercial sound
            industry. Students taking this course have the opportunity to learn
            both the technical and creative components of Music Production.
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            <span :style="{ fontWeight: '400' }"> Recording:</span><br />

            The students will learn how to properly direct and record themselves
            or a third party
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            <span :style="{ fontWeight: '400' }"> Sound engineering:</span
            ><br />

            This course is focused on mixing and Mastering of vocals
          </div>
        </div>

        <div class="d-flex justify-content-center mt-3 mb-3">
          <h2 style="color:white">Course Curriculum</h2>
        </div>
        <div class="d-flex justify-content-center">
          
              <PricingTable/>
            
        </div>
         <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light); font-size:17px">
            WHAT IS INCLUDED
          </h2>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-md-12 text-light" :style="{ fontWeight: '300' }">
            

            Intellectual proparty training system gets the producers on track to validation through:
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            

           Virtual workshops
          </div>
           <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            

          1 : 1 video and simulation coaching
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
           

            Proven techniques to beat making
          </div>
           <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
           

            Support for continued development
          </div>
        </div>
         <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light); font-size:17px">
            WHAT YOU WILL ACHIEVE
          </h2>
        </div>
        <div class="row mt-3 mb-5">
          <div class="col-md-12 text-light" :style="{ fontWeight: '300' }">
            

            After the training, the students will be able to 
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            

           Understand music theory
          </div>
           <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
            

          
Make basic/Advance beats( Afrobeats, Amapiano, Trap etc)
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
           

            Design sounds
          </div>
           <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }">
           

           Mix and master
          </div>
          <div class="col-md-12 text-light mt-3" :style="{ fontWeight: '300' }"> 
            How to  create and build unique melodies &

How to manipulate loops
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { episode_items } from "@/components/datas/card_data.js";
import Beats from "@/components/beats/beats";
import Hero from "@/components/hero/hero.vue";
import image from "@/assets/img/hero/hero-video1.png";
import PricingTable from './pricingTable.vue'
import { mapState } from "vuex";
export default {
  components: { Hero, Beats, PricingTable },
  data() {
    return {
      loading: true,
      episode_items,
      image,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.$store.dispatch("audios/getPost");
  },
  computed: {
    ...mapState({
      posts: (state) => state.audios.posts,
    }),
  },
  methods: {
    getAllPost() {},
  },
};
</script>

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}

.overlay{
    background: #251f1fbf;
  
    /* display: block; */
    height: 100%;
    /* flex: 1; */
    width: 100%;
    top: 0;
}

.breadcrumb__links span {
  font-size: 18px;
  color: #f8f9fa;
  display: inline-block;
  width: 89%;
}
@media only screen and (max-width: 767px) {
  .hero .container {
    padding: 0 15px;
    margin-top: -73px;
    margin-bottom: 22px;
  }
}

.academy-box {
  border-left: 2px solid var(--humber-golden);
}

.academy {
  flex-direction: column;
  display: flex;

  h5 {
    color: var(--humber-light);
  }
}

.about {
  background: var(--humber-dark);
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff42;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

@media (max-width: 749px) {
  .card {
    width: 100% !important;
    // margin-left: 12px;
  }
}
</style>
