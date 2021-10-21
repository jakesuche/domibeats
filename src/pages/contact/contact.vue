<template>
  <div>
    <Hero> 
      
         <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h2>Contact</h2>
                        <div class="breadcrumb__links">
                            <router-link to="/"><i class="fas fa-home"></i> Home </router-link>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Hero>
  

  <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact__widget__item">
                        <img src="img/icons/ci-1.png" alt="">
                        <h4>Address</h4>
                        <p>Baghbanpura Lahore,PK</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact__widget__item">
                        <img src="img/icons/ci-2.png" alt="">
                        <h4>Phone</h4>
                        <p>+92 3114340230 <span>+92 3114340230</span></p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact__widget__item">
                        <img src="img/icons/ci-3.png" alt="">
                        <h4>Working Hours</h4>
                        <p>Open: 10am to 6pm <span>( Sunday Close)</span></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form">
                        <h2>Leave Message</h2>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="Your name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <input type="text" placeholder="Your Email">
                                </div>
                                <div class="col-lg-12 text-center">
                                    <textarea placeholder="Your message"></textarea>
                                    <button type="submit" class="site-btn">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { episode_items } from "@/components/datas/card_data.js";
import Beats from '@/components/beats/beats'
import Hero from "@/components/hero/hero.vue";
import image from "@/assets/img/hero/hero-video1.png";
export default {
  components: { Hero, Beats },
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
  },
};
</script>

<style scoped>

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}


</style>
