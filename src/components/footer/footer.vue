<template>
<div class="container-fluid justify-content-center px-0 ">
    
    <footer>
        <div class="row justify-content-around mb-0 pt-5 mx-4">
            <div class=" column col-xl-2 col-md-4 order-xl-1 order-4 mr-xl-0 my-auto">
                <ul class="list-unstyled mt-md-3 mt-5">
                    <li>Social Media</li>
                    <li class="social"> <span> <i class="fa fa-facebook" aria-hidden="true"></i></span> <span> <i class="fa fa-instagram" aria-hidden="true"></i> </span> <span> <i class="fa fa-twitter" aria-hidden="true"></i> </span> </li>
                </ul>
                <ul class="list-unstyled my-xl-4 my-md-3">
                    <li>Copyright</li>
                    <li>&#9400; Intellectual property {{ new Date().getFullYear() }} </li>
                </ul>
            </div>
            <div class=" column col-xs-6 col-sm-6 col-xl-2 col-md-3 pt-4 order-1">
                <ul class="list-unstyled">
                    <li class="mt-md-0 mt-4">Home</li>
                    <li>Buy Beats </li>
                    <li>Exclusive Beats</li>
                    <li>Drum kits</li>
                   
                </ul>
            </div>
            <div class=" column col-xs-6 col-sm-6 col-xl-2 col-md-3 pt-4 order-2">
                <ul class="list-unstyled">
                    <!-- <li class="mt-md-0 mt-4">Your needs</li> -->
                    <li>FAQS & Services</li>
                    <li>Contact us</li>
                    
                </ul>
            </div>
            <div class=" column col-xl-auto col-md-3 pt-4 my-sm-0 order-md-3 order-sm-1 ">
                <ul class="list-unstyled">
                    <li class="mt-md-0 mt-4">Licence info</li>
                    <li>Term of use </li>
                    <li>Private policies</li>
                   
                </ul>
            </div>
           
        </div>
        <div class="row justify-content-center px-3 py-3 pt-5">
            <!-- <div class="col text-center">
                <p class="mb-0">*These statement have not evaluated by the Food and Drug Addministrations.</p>
                <p>This product is not intented to diagonse,treat,cure, or prevent any disease.</p>
            </div> -->
        </div>
    </footer>
</div>
  <!-- <footer
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
    </footer> -->
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

   @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

 body {
     font-family: 'Muli', sans-serif;
     height: 100% !important;
     background-color: #fff !important;
     padding-bottom: 0 !important;
     margin-bottom: 0 !important;
     overflow-x: hidden
 }

 .card {
     color: #383431 !important;
     background-color: #FFFFFF !important
 }

 h5 {
     font-size: calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important
 }

 .fa {
     cursor: pointer;
     font-size: 21px;
     margin: 5px 10px 5px 10px !important
 }

 button {
     font-size: calc(13px + (16 - 13) * ((100vw - 360px) / (1600 - 320))) !important;
     border-radius: 0 !important;
     padding-left: calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important;
     padding-right: calc(20px + (28 - 20) * ((100vw - 360px) / (1600 - 360))) !important;
     padding-top: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important;
     padding-bottom: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important;
     background-color: #383431 !important;
     border: none !important
 }

 button:focus {
     -moz-box-shadow: none !important;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     outline-width: 0
 }

 li {
     margin-top: 8px;
     margin-bottom: 8px
 }

 input::-webkit-input-placeholder {
     padding-left: 5px !important;
     transform: translate3d(0, -2px, 0)
 }

 input::placeholder {
     vertical-align: middle !important;
     color: rgb(196, 193, 193) !important;
     font-size: calc(12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))) !important
 }

 input {
     border-radius: 2px !important;
     background: transparent !important;
     color: #FFFFFF !important
 }

 input:focus {
     -moz-box-shadow: none !important;
     -webkit-box-shadow: none !important;
     box-shadow: none !important;
     outline-width: 0;
     border-color: #FFFFFF !important
 }

 img {
     vertical-align: middle !important;
     width: 100%;
     width: calc(30px + 6 * ((100vw - 320px) / 680)) !important
 }

 li:first-child {
     font-size: 18px !important;
     font-weight: bold
 }

 footer {
     background-color: #000 !important;
     color: #FFFFFF !important
 }

 small {
     font-size: calc(12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))) !important
 }

 p {
     font-size: calc(12px + (14 - 12) * ((100vw - 360px) / (1600 - 360))) !important;
     color: rgb(196, 193, 193) !important
 }

 .social {
     position: relative;
     left: -10px
 }

 .Subscribe {
     background-color: #FFFFFF !important;
     color: #383431 !important;
     font-weight: bold
 }

 li:not(:first-child) {
     color: rgb(196, 193, 193) !important
 }

 @media (max-width:731px){
   .column{
     width:50%
   }
 }
</style>