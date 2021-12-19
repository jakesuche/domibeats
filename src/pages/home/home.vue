<template>
  <div>
    <Hero> 
      <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero__text">
            <h5 class="animate__animated animate__slideInLeft">
              
            
            </h5>
          
          </div>
        </div>
      
      </div>
    </div>

    </Hero>

        <Beatlist />
        <div class="text-center  mt-3 ">
            <h2 style="color:white">Course Curriculum</h2>
        </div>
        <div class="container">
          <PricingTable />
        </div>

       <Drumkitlist style=" margin-top: -100px;" />
      
    <Contact style=" margin-top: -231px;" :show="false" />
   

    

   
 
  </div>
</template>

<script>
import { episode_items } from "@/components/datas/card_data.js";
import Beats from '@/components/beats/beats'
import Hero from "@/components/hero/hero.vue";
import image from "@/assets/img/hero/hero-video1.png";
import Contact from '../contact/contact.vue'
import Drumkit from '../drumkit/drumkit.vue'
import { mapState } from 'vuex'
import Beatlist from './components/beatlist.vue';
import Drumkitlist from './components/Drumkitlist.vue'
import PricingTable from '../../pages/academy/pricingTable.vue'
export default {
  components: { Hero, Beats, Contact, Drumkit, Beatlist,  Drumkitlist,  PricingTable },
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
    },
    getAllBeats(){
         this.$store.dispatch("audios/getAllBeats")
         .then(()=>{
            this.loading = false
         }).catch(err=>{
            this.loading = false
         })
  },
  },
  mounted(){
    this.getDuration()
  },  
  created() {
    this.getAllBeats()
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
