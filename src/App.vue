<template>
  <router-view />
</template>

<script>

import { mapActions} from 'vuex'
export default {
  
  name: "App",
  created() {
    this.$store.dispatch('game/getGames')
  this.$store.dispatch('analitics/getStats')
  
  this.$store.dispatch('staff/getAllStaff')
    const currentPath = this.$router.history.current.path;

    // if (window.localStorage.getItem("authenticated") === "false") {
    //   this.$router.push("/login");
    // }

    // if (currentPath === "/" || currentPath === "/app") {
    //   this.$router.push("/app/dashboard");
    // }
  },
  methods:{
   
  }
};
</script>


