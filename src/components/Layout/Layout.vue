<template>
<div :class="[{root: true, sidebarClose, sidebarStatic}, 'sing-dashboard']">
  <Header />
  <Sidebar />
  <!-- <Helper /> -->
  <div class="wrap">
    <!-- <Header /> -->
    <v-touch  class="content" @swipe="handleSwipe" :swipe-options="{direction: 'horizontal'}">
      <!-- <breadcrumb-history></breadcrumb-history> -->
      <transition name="router-animation">
        <router-view />
      </transition>
      <!-- <footer class="contentFooter">
        Sing App Vue Dashboard Free Template - Made by <a href="https://flatlogic.com" rel="nofollow noopener noreferrer" target="_blank">Flatlogic</a>
      </footer> -->
    </v-touch>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('layout');

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Helper from '@/components/Helper/Helper';
import BreadcrumbHistory from '@/components/BreadcrumbHistory/BreadcrumbHistory';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Helper, BreadcrumbHistory },
  methods: {
    ...mapActions(['switchSidebar', 'handleSwipe', 'changeSidebarActive', 'toggleSidebar'],
    

    ),
    
    handleWindowResize() {
      const width = window.innerWidth;

      if (width <= 768 && this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      }
    },
  },
  computed: {
    ...mapState(["sidebarClose", "sidebarStatic"]),

   
  },
  created() {
    this.$store.dispatch('transaction/getTransactions')
    this.$store.dispatch('transaction/gameTransaction')
    this.$store.dispatch('auth/getnotification')
    this.$store.dispatch('players/getPlayers')
    this.$store.dispatch('analitics/getStats')
    this.$store.dispatch('transaction/getgameTransactions')
    .catch((err)=>{
      if(err instanceof Error){
        if(err.message == "Network Error"){
          this.$toasted.error('Network problem, Please check your network and try again', {
            duration:'5000'
          })
        }
      }else if (err.response.status === 401){
        this.$toasted.error('You are not Authorized to perform this action', {
          duration:4000
        })
      }else {
        this.$toasted.error('Unknown error occured, please try again', {
          duration:4000
        })
      }
    })
    
    // this.getTransactions()
    const staticSidebar = JSON.parse(localStorage.getItem('sidebarStatic'));

    if (staticSidebar) {
      this.$store.state.layout.sidebarStatic = true;
    } else if (!this.sidebarClose) {
      setTimeout(() => {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }, 2500);
    }

    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
