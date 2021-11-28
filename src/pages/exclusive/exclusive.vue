<template>
  <div>
    <Hero> 
      <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero__text">
            
          </div>
        </div>
       
      </div>
    </div>
   
    </Hero>
  
 
  
     <section class="episodes spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Exclusive Beats</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-up"
     data-aos-duration="3000"
            class="col-lg-4 col-md-6"
            v-for="(item, i) in audios.slice(0,4)"
            :key="i + 'uchech'"
          >
            <div 
              class="episodes__item set-bg"
              :style="{ backgroundImage: `${item.songImg ? `url(${item.songImg })` : 'var(--humber-black)'}` }"
            >
              <div class="tags">
                <i class="fas fa-hashtag"></i> {{item.genre}}
              </div>
              <div class="time">
                <i class="fas fa-clock"></i> 40 mins
              </div>
              <a
                :href="item.link"
                class="play-btn video-popup"
                ><img src="img/play.png" alt=""
              /></a>
              <div class="episodes__text">
                <h4>{{item.songName}}</h4>
                <p><span class="icon_calendar"></span> 16 Feb 2019</p>
              </div>
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
import { mapState } from 'vuex'
export default {
  components: { Hero, Beats },
  data() {
    return {
      loading: true,
      episode_items,
      image,
      myAudio:new Audio(),
      duration:''
    };
  },
  computed:{
    ...mapState({
      audios:state=>state.audios.audioList
    })
  },
  methods: {
    getDuration(song){
      //
      this.myAudio.src = this.audios[0].songLive
       console.log('caled')
      
      this.myAudio.addEventListener('loadedmetadata', function(){
        
        const time = (this.myAudio.duration / 60);
        
        this.duration =  time.toFixed(2)
      }.bind(this))
    }
  },
  mounted(){
    this.getDuration()
  },  
  created() {
    this.$store.dispatch('audios/getAllBeats')
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style>
.podcast_item_text {
  border: 1px solid #ebebeb;
  padding: 10px 32px 10px 54px;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  position: relative;
  margin: auto;
}
.episodes {
  background-color: var(--humber-black);
  margin-top: -1px;
}
@media (min-width: 1027px) {
  .podcast_item_text {
    width: 100%;
    max-width: 909px;
  }
}

.beat_img {
  width: 12%;
  height: 12%;
}

.tags{
  background: #ffffff1f;
    padding: 2px;
    height: 33px;
    width: 86px;
    font-size: 16px;
    border-radius: 28px;
}
.beat_actions{
    padding: 12px;
    background: #6c757d;
    border-radius: 11px;
    font-size: 13px;
    height: 42px;
    width: 42px;
    text-align: center;
}
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    border-bottom: 1px solid var(--primary-color);
    background:none!important
    /* background-color: #fff; */
    /* border: 1px solid rgba(0,0,0,.125); */
}

@media (max-width:768px){
  .hide{
    display: none!important;
}
}



/* .hero{
        background-image: url('../assets/img/hero/hero-bg')
    } */
</style>
