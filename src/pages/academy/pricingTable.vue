<template>
  <section class="pricing py-5">
  <div class="container-fluid">
    <div class="row">
      <!-- Free Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-light text-uppercase text-center">BASIC</h5>
            
            <hr>
         
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span> Analog & Digital Audio</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Introduction to FL Studio</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Working with MIDI & Samples</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Production Analysis</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Drum Samples & Programming</li>
             
            </ul>
            <a @click="signup('basic')" role="button" class="btn btn-block btn-primary text-uppercase">Sign up</a>
          </div>
        </div>
      </div>
      <!-- Plus Tier -->
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-light text-uppercase text-center">Professional</h5>
            
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span><strong>Music Theory</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Programming Basslines</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Working with Synths & Instruments</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Structure & Arrangement</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Programming Melody Lines</li>
             
             
            </ul>
            <a @click="signup('professionals')" role="button"  class="btn btn-block btn-primary text-uppercase">Sign up</a>
          </div>
        </div>


      </div>
      <!-- Pro Tier -->
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-light text-uppercase text-center">Experts</h5>
         
            <hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fa fa-check"></i></span><strong>Working with the Mixer</strong></li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Effects, Equalization & Dynamics</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Mixing Techniques</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Introduction to Mastering</li>
              <li><span class="fa-li"><i class="fa fa-check"></i></span>Final Project</li>
            
            </ul>
            <a @click="signup('experts')" role="button"  class="btn btn-block btn-primary text-uppercase">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {

    methods: {
        signup(title){
            this.$router.push(`/academy/signup/${title}`)
        }
    }

}
</script>

<style scoped>
    section.pricing {
  /* background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF); */
}

.pricing .card {
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  background:#212121;
}
li{
    color:white
}
.pricing hr {
  margin: 1.5rem 0;
}

.pricing .card-title {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: .1rem;
  font-weight: bold;
}

.pricing .card-price {
  font-size: 3rem;
  margin: 0;
}

.pricing .card-price .period {
  font-size: 0.8rem;
}

.pricing ul li {
  margin-bottom: 1rem;
}

.pricing .text-muted {
  opacity: 0.7;
}

.pricing .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
  background:#000;
  border:none;
  color:white
}

/* Hover Effects on Card */

@media (min-width: 992px) {
  .pricing .card:hover {
    margin-top: -.25rem;
    margin-bottom: .25rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
  }
  .pricing .card:hover .btn {
    opacity: 1;
  }
}
</style>