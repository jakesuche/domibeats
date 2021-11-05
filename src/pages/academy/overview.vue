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
      <div class="container position-relative">
        <button
          class="btn enroll_btn"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          ENROLL NOW!
        </button>
        <div class="d-flex justify-content-start">
          <h2 style="color:var(--humber-light)">COURSE OVERVIEW</h2>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col-md-12">
            <p style="color:#ffffffb8">
              This course is an intensive and practical approach help you
              develop your skills as both a vocalist/performer and music
              producer. Designed for those who want to produce their own music,
              this specialist course will help prepare you for a successful
              career in music and is suitable for all types of performers,
              including singers, rappers, emcees and more. This programme is
              developed and taught by industry professionals who’ve worked with
              huge stars like Pharrell Williams, Beyonce, Gwen Stefani and
              Rihanna. You’ll graduate with the skills and knowledge to help you
              make it as a successful artist/performer:
            </p>
            <div class="container mb-4 mt-4">
              <ul class="container" style="color:#ffffffb8">
                <li>
                  Learn how to write, produce and perform your vocals
                  professionally, in the studio and on stage
                </li>
                <li>
                  Join a global alumni community with the likes of Izzy Bizu,
                  Aluna Francis, Leona Lewis and more
                </li>
                <li>
                  Learn how to write, produce and perform your vocals
                  professionally, in the studio and on stage
                </li>
                <li>
                  Join a global alumni community with the likes of Izzy Bizu,
                  Aluna Francis, Leona Lewis and more
                </li>
                <li>
                  Learn how to write, produce and perform your vocals
                  professionally, in the studio and on stage
                </li>
                <li>
                  Join a global alumni community with the likes of Izzy Bizu,
                  Aluna Francis, Leona Lewis and more
                </li>
                <li>
                  Learn how to write, produce and perform your vocals
                  professionally, in the studio and on stage
                </li>
                <li>
                  Join a global alumni community with the likes of Izzy Bizu,
                  Aluna Francis, Leona Lewis and more
                </li>
              </ul>
            </div>
            <p style="color:#ffffffb8">
              This course is an intensive and practical approach help you
              develop your skills as both a vocalist/performer and music
              producer. Designed for those who want to produce their own music,
              this specialist course will help prepare you for a successful
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <!-- <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div> -->
      </div>
    </div>
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

.enroll_btn {
  background: var(--gradient-primary);
  border: none;
  position: fixed;
  right: 40px;
  z-index: 99;
}
</style>
