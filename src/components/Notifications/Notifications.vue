<template>
  <section class="notifications navbar-notifications">
    <header class="cardHeader card-header">
      <div class="text-center mb-sm">
        <strong>You have {{notifications.length}} notifications</strong>
      </div>
      <b-button-group id="notification-b-buttons">
        <!-- <b-button variant="default" @click="changeNotificationsTab(1)"
          >Notifications</b-button
        > -->
        <!-- <b-button variant="default" @click="changeNotificationsTab(2)"
          >Notifications</b-button
        > -->
        <!-- <b-button variant="default" @click="changeNotificationsTab(3)"
          >Progress</b-button
        > -->
      </b-button-group>
    </header>
    <Messages :notifications="notifications"  />
    <!-- <NewNotifictionsList :notifications="notifications" v-if="newNotifications" />
    <NotifictionsList :notifications="notifications" v-else-if="notificationsTabSelected === 1" />
    <Messages :notifications="notifications" v-else-if="notificationsTabSelected === 2" />
    <Progress :notifications="notifications" v-else-if="notificationsTabSelected === 3" />
    <NotifictionsList :notifications="notifications"  v-else /> -->
    
    <footer class="cardFooter text-sm card-footer">
      <span class="fs-mini">Synced at: {{ parseDate( date) || ''}} </span>
      <b-button
        variant="link"
        @click="loadNotifications"
        :class="{
          disabled: isLoad,
          'btnNotificationsReload btn-xs float-right py-0': true,
        }"
      >
        <span v-if="isLoad"
          ><i class="la la-refresh la-spin" /> Loading...</span
        >
        <i v-else class="la la-refresh" />
      </b-button>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
import {mapState } from 'vuex'

import NotifictionsList from "./NotificationsDemo/NotificationsList";
import NewNotifictionsList from "./NotificationsDemo/NewNotificationsList";
import Messages from "./NotificationsDemo/Messages";
import Progress from "./NotificationsDemo/Progress";
import moment from 'moment'

export default {
  
  name: "Notification",
  props:["notifications"],
  components: {
    NotifictionsList,
    NewNotifictionsList,
    Messages,
    Progress,
  },
  data() {
    return {
      notificationsTabSelected: 1,
      newNotifications: null,
      isLoad: false,
      syncDate:window.localStorage.getItem('syncDate')
      
      
    };
  },
  created(){
    setTimeout(()=>{
      
      this.syncDate = window.localStorage.getItem('syncDate')
    },1000)
  },
  computed:{
    ...mapState({
      date:state=>state.auth.notificationDate
    })
  },
  methods: {

    changeNotificationsTab(tab) {
      Vue.set(this, "notificationsTabSelected", tab);
      Vue.set(this, "newNotifications", null);
    },
    formatDate(value, formatType = "LL") {
      if (!value) return "";
      return moment(value).format((formatType = "LL"));
    },
    parseDate(date, formatType = "LL") {
      if (!date) return "";
      return moment(date).fromNow();
    },
    loadNotifications() {
      Vue.set(this, "isLoad", true);

      setTimeout(() => {
        Vue.set(this, "newNotifications", "new notifications component");
        Vue.set(this, "isLoad", false);
        this.changeNotificationsTab(1);
        this.$store.dispatch('auth/syncDate', new Date)
       
      }, 1500);
    },
  },
};
</script>

<style src="./Notifications.scss" lang="scss" />
