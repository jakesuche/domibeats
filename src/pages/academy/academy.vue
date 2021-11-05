<template>
  <div>
    <Hero>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__text">
              <h2>Academy</h2>
              <div class="breadcrumb__links">
                <router-link to="/"
                  ><i class="fas fa-home"></i> Home
                </router-link>
                <span>Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>

    <section class="about spad">
      <div class="container">
        <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light)">PROFESSIONAL COURSES</h2>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-6 academy-box mb-5 ">
            <div class="card" style="width: 80%">
              <div class="card-body">
                <div class="academy">
                  <h5>Music Production & Vocal performance</h5>
                  <p>9 Months</p>
                </div>
              </div>
            </div>
          </div>
           <div class="col-md-6 academy-box mb-5 ">
            <div class="card" style="width: 80%">
              <div class="card-body">
                <div class="academy">
                  <h5>Music Production & Vocal performance</h5>
                  <p>9 Months</p>
                </div>
              </div>
            </div>
          </div>
           <div class="col-md-6 academy-box mb-5 ">
            <div class="card" style="width: 80%">
              <div class="card-body">
                <div class="academy">
                  <h5>Music Production & Vocal performance</h5>
                  <p>9 Months</p>
                </div>
              </div>
            </div>
          </div>
           <div class="col-md-6 academy-box mb-5 ">
            <div class="card" style="width: 80%">
              <div class="card-body">
                <div class="academy">
                  <h5>Music Production & Vocal performance</h5>
                  <p>9 Months</p>
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

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}

.academy-box {
  border-left: 2px solid var(--humber-golden);
}

.academy {
  flex-direction: column;
  display: flex;

  h5{
      color:var(--humber-light);
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
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem

;
}
</style>
