<template>
  <b-navbar class="header d-print-none app-header">
    <b-nav>
      <b-nav-item>
        <a class="d-md-down-none px-2" href="#" @click="toggleSidebarMethod" id="barsTooltip">
          <i class='fi flaticon-menu' />
        </a>
       
           <header class="logo ml-5 hide-mobile">
        <router-link to="/app/dashboard"
          >
          <img style="height: 40px;" :src="logo" alt="">
          <!-- <span class="primary-word">Give </span>
          <span class="secondary-word"> Dashbaord</span> -->
          </router-link
        >
      </header>
        <a class="fs-lg d-lg-none" href="#" @click="switchSidebarMethod">
          <i class='fi flaticon-menu' />
        </a>
      </b-nav-item>
      <!-- <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class='fi flaticon-flip' />
        </a>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <a href="#" class="px-2">
          <i class='fi flaticon-close' />
        </a>
      </b-nav-item> -->
    </b-nav>
    <b-nav>
      <!-- <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class='fi flaticon-search-2'/></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search Dashboard" />
          </b-input-group>
        </b-form-group>
      </b-form> -->
    </b-nav>
    <a class="navbarBrand d-md-none">
      <img style="height: 40px;" :src="logo" alt="">
    
      <!-- <i class="fa fa-circle text-danger" />
      &nbsp;
      sing
      &nbsp;
      <i class="fa fa-circle text-primary" /> -->
    </a>
    <b-nav class="ml-auto">
      <div class="d-md-none mt-3 " type="button" @click="this.$router.push('/app/account/me')">
         <b-avatar :src="user.image"  >
              <div v-if="!user.image" class="avatar-text position-absolute">
                  {{user.name.split(' ')[0].charAt(0)}}
                  <!-- <b-spinner /> -->
              </div>
          </b-avatar>
      </div>
      <!-- <b-form class="d-sm-down-none ml-5" inline>
        <b-form-group>
          <b-input-group class="input-group-no-border">
            <template v-slot:prepend>
              <b-input-group-text><i class='fi flaticon-search-2'/></b-input-group-text>
            </template>
            <b-form-input id="search-input" placeholder="Search " />
          </b-input-group>
        </b-form-group>
      </b-form> -->
      <b-nav-item-dropdown
        class="notificationsMenu d-sm-down-none mr-2"
        menu-class="notificationsWrapper py-0 animate__animated animate__animated-fast animate__fadeIn"
        right>
        <template slot="button-content">
          <div class="notification-group mr-4">
            <i style="font-size:20px;color:#0000007a;" class="fas fa-bell"></i>
            <span class="ml-1 mr-2 circle text-white fw-bold avatar-badge">{{notifications.length}}</span>
          </div>
           
           
          <span class="px-2">{{user.name}}</span>
          <!-- profile image -->
          <b-avatar :src="user.image"  >
              <div v-if="!user.image" class="avatar-text position-absolute">
                  {{user.name.split(' ')[0].charAt(0)}}
                  <!-- <b-spinner /> -->
              </div>
          </b-avatar>
          
          <!-- <i class='fi flaticon-arrow-down px-2' /> -->
        </template>
        <Notifications :notifications="notifications" />
      </b-nav-item-dropdown>
      <b-nav-item-dropdown id="v-step-2" class="settingsDropdown d-sm-down-none" no-caret right>
        <template slot="button-content">
          <i class='fi flaticon-settings-10 px-2' />
        </template>
        <b-dropdown-item @click="$router.push({name:'profile'})"><i  class='fi flaticon-person px-3 mr-3' /> Account</b-dropdown-item>
        <!-- <b-dropdown-divider /> -->
        <!-- <b-dropdown-item><i class='fi flaticon-calendar-9 px-3 mr-3' />Calendar</b-dropdown-item> -->
        <!-- <b-dropdown-item><i class='fi flaticon-email px-3 mr-3' />
          Inbox &nbsp;&nbsp;<b-badge variant="inverse" pill class="animate__animated animate__bounceIn" style="padding: 6px 9px;">9</b-badge>
        </b-dropdown-item> -->
        <b-dropdown-divider />
        <b-dropdown-item-button @click="logout">
          <i class="fi flaticon-power-1 px-3 mr-3" /> Log Out 
        </b-dropdown-item-button>
      </b-nav-item-dropdown>
    </b-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Notifications from '@/components/Notifications/Notifications';
import logo from '@/assets/images/applogo.png'

export default {
  name: 'Header',
  data(){
    return {
      logo
    }
  },
  components: { Notifications },
  computed: {
    ...mapState('layout', ['sidebarClose', 'sidebarStatic']),
    ...mapState({
      user:state=>state.auth.user,
      notifications:state=>state.auth.notifications
    })
  },
  methods: {
    ...mapActions('layout', ['toggleSidebar', 'switchSidebar', 'changeSidebarActive']),
    ...mapActions('auth', ['logOutUser']),
    switchSidebarMethod() {
      if (!this.sidebarClose) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      } else {
        this.switchSidebar(false);
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    toggleSidebarMethod() {
      if (this.sidebarStatic) {
        this.toggleSidebar();
        this.changeSidebarActive(null);
      } else {
        this.toggleSidebar();
        const paths = this.$route.fullPath.split('/');
        paths.pop();
        this.changeSidebarActive(paths.join('/'));
      }
    },
    logout() {
      // window.localStorage.setItem('authenticated', false);
      // 
      this.logOutUser()
      .then(res=>{
        this.$router.push('/login')
      })
    },
  }
};
</script>

<style src="./Header.scss" lang="scss"></style>
<style scoped>
.notification-group{
  position: relative;
}
.app-header.navbar .avatar-badge {
    background-color: #fda700;
    position: absolute;
    font-size: 11px;
    top: -8px;
    right: -16px;
}
</style>
