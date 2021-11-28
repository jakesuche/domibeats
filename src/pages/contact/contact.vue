<template>
  <div>
    <Hero>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__text">
              <h2>Contact</h2>
              <div class="breadcrumb__links">
                <router-link to="/"
                  ><i class="fas fa-home"></i> Home
                </router-link>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>

    <section class="contact spad">
      <div class="container">
        <!-- <div class="row">
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
            </div> -->
        <div class="row">
          <div class="col-lg-12">
            <div class="contact__form">
              <h2>Leave Message </h2>
              <form >
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <input v-model="form.name" type="text" placeholder="Your name" />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <input v-model="form.email" type="email" placeholder="Your Email" />
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12">
                    <input v-model="form.number" type="text" placeholder="Your Number" />
                  </div>
                  <div class="col-lg-12 text-center">
                    <textarea v-model="form.message" placeholder="Your message"></textarea>
                    <button  @click="sendMessage()" type="button" class="site-btn">{{loading ? 'Sending..' : 'Send Message'}}</button>
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
import Beats from "@/components/beats/beats";
import Hero from "@/components/hero/hero.vue";
import image from "@/assets/img/hero/hero-video1.png";
import { Contact } from "@/firebase";
export default {
  components: { Hero, Beats },
  data() {
    return {
      loading: false,
      episode_items,
      image,
      form: {
        name: "",
        email: "",
        message: "",
        number:'',
        date:''
      },
    };
  },
  created() {
      
  },

  methods: {
    sendMessage() {

         this.loading = true;
      const { name, email, message, number } = this.form;
      if (!name|| !email || !message, !number ) {
        this.$toasted.error("You need to complete this fields", {
          duration: 4000,
        });
        this.loading = false;
        return;
      }

      this.form.date = Date.now()
      Contact({ ...this.form })
        .then((res) => {
          console.log(res);
          this.loading = false;
          
          this.$toasted.success("Message sent ", { duration: 4000 });
          setTimeout(() =>{
              this.form = {}
          },2000)
        })
        .catch((err) => {
          console.log(err);
          this.$toasted.error("An error occurred while creating ", {
            duration: 4000,
          });
          this.loading = false;
        });
    },
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
