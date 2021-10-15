<template>
  <footer
      class="footer set-bg"
      :style="{
        'background-image':
          'url(' + require('@/assets/img/footer-bg.jpg') + ')',
      }"
    >
      <div class="container">
        <div class="footer__subscriber">
          <div class="row">
            <div class="col-lg-5">
              <div class="footer__subscriber__text">
                <h3>Sign up for our newsletter!</h3>
                <p>Subscribe to receive info on our latest news and episodes</p>
              </div>
            </div>
            <div class="col-lg-5 offset-lg-2">
              <form action="#" class="footer__subscriber__form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" class="site-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 col-md-9">
            <div class="footer__widget">
              <div class="footer__logo">
                <a href="#"><img src="@/assets/img/logo.png" alt=""/></a>
              </div>
              <p class="footer__copyright__text">
                Copyright © {{ new Date().getFullYear() }} All rights reserved
                Niconet <i class="fa fa-heart-o" aria-hidden="true"></i> by
                <a href="" target="_blank"></a>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3">
            <div class="footer__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-pinterest"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-youtube-play"></i></a>
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

<style>

</style>