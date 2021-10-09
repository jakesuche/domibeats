<template>
  <b-list-group class="listGroup thin-scroll">
    <b-list-group-item class="listGroupItem bg-primary-light" v-for="notification in notifications" :key="notification.id">
      <!-- <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a2.jpg"
          alt="..."
        />
        <i class="status status-bottom bg-success" />
      </span> -->
      <time class="text-link help float-right">{{formatDate(notification.created_at)}}</time>
      <h6 class="m-0 fw-bold mb-1">{{notification.title}}</h6>
      <p class="deemphasize text-ellipsis m-0">
        {{notification.body}}
        
      </p>
    </b-list-group-item>
  
  
  </b-list-group>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {

  props:['notifications'],
  name: "Messages",
  computed:{
    
  },
  methods:{
     formatDate(value, formatType = "LL") {
      if (!value) return "";
      return moment(value).format((formatType = "LL"));
    },
  }
};

</script>

<style src="./ListGroup.scss" lang="scss" />
