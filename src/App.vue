<template>
  <div style="overflow-x: hidden">
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
      <div class="offcanvas__search">
        <form action="#">
          <input type="text" placeholder="Search and hit enter..." />
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div class="offcanvas__logo">
        <a href="./index.html"><img src="" alt=""/></a>
      </div>
      <div id="mobile-menu-wrap"></div>
      <div class="offcanvas__social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-pinterest"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-dribbble"></i></a>
      </div>
    </div>
    <Header v-if="$route.name !== 'admin'" />
    <router-view />
    <Footer v-if="$route.name !== 'admin'"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "@/components/footer/footer.vue"
import Header from "@/components/Header/Header.vue";
export default {
  components: {
    Header,
    Footer
},

  name: "App",
  created() {
  this.$store.dispatch('audios/getUsers')
   console.log(this.$route)
    const currentPath = this.$router.history.current.path;

    // if (window.localStorage.getItem("authenticated") === "false") {
    //   this.$router.push("/login");
    // }

    // if (currentPath === "/" || currentPath === "/app") {
    //   this.$router.push("/app/dashboard");
    // }
  },
  methods: {},
};
</script>

<style >
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
