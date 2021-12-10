<template>
  <footer
      class="footer set-bg"
      :style="{
        'background-image':
          'url(' + require('@/assets/img/footer-bg1.png') + ')',
      }"
    >
      <div class="container" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div class="footer__subscriber">
          <div class="row">
            <div class="col-lg-5">
              <div class="footer__subscriber__text">
                <h3>Sign up for our newsletter!</h3>
                <p>Comming soon !!</p>
                <!-- <p>Subscribe to receive info on our latest news and episodes</p> -->
              </div>
            </div>
            <div class="col-lg-5 offset-lg-2">
              <form action="#" class="footer__subscriber__form">
                <input disabled type="text" placeholder="Your email address" />
                <button disabled type="submit" class="site-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 col-md-9">
            <div class="footer__widget">
              <div class="footer__logo">
                <a href="#"><img class="footer__logo" src="img/logo2.png" alt=""/></a>
              </div>
              <p class="footer__copyright__text">
                Copyright © {{ new Date().getFullYear() }} All rights reserved
                Intellectual property
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="footer__social">
              <a href="#"><i class="fas fas-facebook"></i></a>
              <a href="#"><i class="fas fas-twitter"></i></a>
              <a href="#"><i class="fas fas-pinterest"></i></a>
              <a href="#"><i class="fas fas-instagram"></i></a>
              <a href="#"><i class="fas fas-youtube-play"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  img.footer__logo{
    margin-top: -21px;
    image-rendering: pixelated;
  }
</style>