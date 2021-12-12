<template>
  <div>
    <Hero> 
      
         <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h2>About</h2>
                        <div class="breadcrumb__links">
                            <router-link to="/"><i class="fas fa-home"></i> Home </router-link>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Hero>
  

  <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="about__text">
                        <!-- <span>I am intellectual property</span> -->
                        <h2>About Me</h2>
                        <!-- <p>Enjoy listening to my amaxing beats? Hire me today!</p> -->
                        <!-- <a href="https://soundbetter.com/profiles/449673-intellectualproperty" class="primary-btn">Hire me</a> -->
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="about__item">
                        
                        <p><span style="font-size:1.4rem">Okafor Chukwunweike Dominion</span>  (Born December 13th, 1995) Professionally known as Dominionbeats or Intellectual Proparty is a Nigerian Record Producer, Song writer, Youtuber, Electrical Engineer & Entrepreneur from Anambra state, Nigeria. He is popularly known for his 
Dominion influenced producer tag “Intellectual Proparty’.

He diversifies in various genres ranging from mainly afrobeats, trap & dancehall music, R&B. Growing up into a music inclined family in a small Eastern city of Onitsha, Dominion began a music career in early secondary school days before making the big step of relocating to Awka for his degree program and later on to Lagos.

He is also known for making alot of both popular and some unreleased songs example, "ABOY" ft PHYNO AND DJ JMASTA , Mr Real and many others. Dominion will soon be Ranked at a top spot in new wave of afrobeat marketing and digital production mastery.    JOIN ME ON THIS JOURNEY AND WATCH OUT</p>
                    </div>
                </div>
                <!-- <div class="col-lg-4">
                    <div class="about__item">
                        <h6>This article is floated online with an aim to help you find the best dvd printing solution.
                        </h6>
                        <p>Your DVDs usually come coated with directly printable lacquer films with ability to absorb ink, and the process of directly printing the lacquer films on your DVDs is technically known as dvd printing. Your dvd printing solution
                            lies in – inkjet dvd printing, thermal transfer dvd printing, screen dvd printing, and offset dvd printing – which you may choose according to need and requirement.</p>
                    </div>
                </div> -->
            </div>
            <!-- <div class="row">
                <div class="col-lg-12">
                    <div class="about__pic">
                        <img src="img/about-pic.jpg" alt="">
                    </div>
                </div>
            </div> -->
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

.about{
    background: var(--humber-dark);
}


</style>
