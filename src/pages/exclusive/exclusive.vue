<template>
  <div>
   
  
 
  
     <section class="episodes spad mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div style="text-align:left" class="section-title">
              <h2 style="font-size: 35px;">Exclusive beats</h2>
            </div>
          </div>
        </div>
       <Spinner v-if="loading" />
      
        <Nodata title="Data not found gadgets" v-else-if="audios.length === 0" >
             
        </Nodata>
        <div class="row justify-content-left" v-else>
          <!-- audios.slice(0,4) -->
          <div 
            class="col-lg-3 col-md-6 sound"
            v-for="(item, i) in audios.slice(0,1)"
            :key="i + 'uchech'"
          >
          {{item}}
            <div  style="height: 273px;width: 273px;border-radius: 100%;
            background-size: cover;
    background-position: center;
"
              class="episodes__item set-bg"
              :style="{ backgroundImage: `${item.image ? `url(${item.image })` : 'var(--humber-black)'}` }"
            >
              <!-- <div class="tags">
                <i class="fas fa-hashtag"></i> {{item.amount}}
              </div> -->
              <!-- <div class="time">
                total:{{item.qty}}
              </div> -->
              <!-- <a
                type="button" @click="addTocart(item)"
                class="play-btn video-popup"
                ><i class="fas fa-cart-plus" style="font-size: 60px;color:white"></i></a> -->
              <!-- <div class="episodes__text">
                <h4>{{item.productTitle}}</h4>
                <p><span class="icon_calendar"></span> 16 Feb 2019</p>
              </div> -->
            </div>
            <div style="margin-top:-10px" class="d-flex justify-content-center details_wrapper">
              <h4 class="product_title">
               Exclusive Beats Only
              </h4>
              <div class="product_price">
               November 24, 2021 
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
  props:["show"],
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
      audios:state=>state.audios.drumkit
    })
  },
  methods: {
    addTocart(item){
      console.log(item)
     this.$store.dispatch('audios/addTocart', item)
      this.$toasted.show(`Item added to cart`, {duration:3000})
      
    },
    getDrunkit(){
      this.loading = true
       this.$store.dispatch('audios/getDrunkit')
       .then(()=>{
         this.loading = false
       })
       .catch((err)=>{
          this.loading = false
       })
    },
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
   this.getDrunkit()
    // setTimeout(() => {
    //   this.loading = false;
    // }, 2000);
  },
};
</script>

<style scoped>
.add_item{
  background: #212121;
    border: none;
    height: 63px;
    line-height: 40px;
    margin: 0;
    padding: 0 16px;
    min-height: auto!important;
    min-width: auto!important;
    text-shadow: none;
    font-weight: 600!important;
    border-radius: 3px;
    overflow: hidden;
    color: white;
    margin-top: 11px;
}
.details_wrapper{
  flex-direction: column;
  align-items: center;
}
.product_title{
    color: white;
    color: white;
    width: 207px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
}
.product_price{
  color:white
}
.play-btn{
  background: #596571f0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 150px;
    margin-right: 160px;
    padding: 17px;
    border-radius: 89px;
    cursor: pointer;
}
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


  @media (max-width:768px){
    .sound{
      
    padding: 0px 59px;
    margin-bottom: 27px;

    }
  }




/* .hero{
        background-image: url('../assets/img/hero/hero-bg')
    } */
</style>
