<template>
  <div>
    

    <section class="episodes spad">
      <div class="container mt-5 mb-5">
           <div class="row d-flex justify-content-start">
        <div class="col-md-10">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="images p-3">
                            <div class="text-center p-4"> <img id="main-image" :src="postDetails.image" /> </div>
                           
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">  <span class="ml-1 text-light"></span> </div>
                            </div>
                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand text-light"></span>
                                <h4  style="width: 1300px;
    font-weight: 600;
    margin-bottom: 5px;" class="text-uppercase text-light">{{postDetails.title}}</h4>
                                <div class="price d-flex flex-row align-items-center"> <span class="act-price text-light">Sound kit by intellectual property</span>
                                    <div class="ml-2"> <small class="dis-price text-light">#{{postDetails.amount | formatMoney}}</small> <span class="text-light"></span> </div>
                                </div>
                            </div>
                            <p style="color:white" v-html="postDetails.description" class="about"></p>
                           
                            <div class="cart mt-4 align-items-center"> <button class="btn btn-danger text-uppercase mr-2 px-4">Request a demo</button></div>
                        </div>
                    </div>
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
import Beats from "@/components/beats/beats";
import Hero from "@/components/hero/hero.vue";
import image from "@/assets/img/hero/hero-video1.png";

import { mapState } from "vuex";
export default {
  components: { Hero, Beats },
  data() {
    return {
      loading: true,
      episode_items,
      image,
      myAudio: new Audio(),
      duration: "",
      postDetails:''
    };
  },
    created() {
        this.populatedDetails()
    },
  methods:{
      populatedDetails() {
      this.postDetails = {
        ...this.postDetails,
        ...this.$store.getters["audios/isdrumkit"](this.$route.params.id),
      };
     
    },
  }
 
};
</script>

<style scoped>
    .card {
    border: none;
    background:none;
}

.product {
    /* background-color: #eee */
}

.brand {
    font-size: 13px
}

.act-price {
    color: red;
    font-weight: 700
}

.dis-price {
    text-decoration: line-through
}

.about {
    font-size: 14px
}

.color {
    margin-bottom: 10px
}

label.radio {
    cursor: pointer
}

label.radio input {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none
}

label.radio span {
    padding: 2px 9px;
    border: 2px solid #ff0000;
    display: inline-block;
    color: #ff0000;
    border-radius: 3px;
    text-transform: uppercase
}

label.radio input:checked+span {
    border-color: #ff0000;
    background-color: #ff0000;
    color: #fff
}

.btn-danger {
   background-color: #323232 !important;
    border-color: #323232 !important;
}

.btn-danger:hover {
    /* background-color: #da0606 !important;
    border-color: #da0606 !important */
}

.btn-danger:focus {
    box-shadow: none
}

.cart i {
    margin-right: 10px
}

/* .hero{
        background-image: url('../assets/img/hero/hero-bg')
    } */
</style>
