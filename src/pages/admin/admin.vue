<template>
  <div class="wrapper">
    <Header
      @sample="emittedEvent('sample')"
      @beats="emittedEvent('beats')"
      @users="emittedEvent('users')"
    
     />
<b-row>
  <b-col lg="12">
    <div class="container">
      <b-tabs>
      <b-tab title="Sample Beats">
        <div class="container">
      <div class="d-flex justify-content-end mt-4">
        <button v-if="showType !== 'create_sample' && showType !== 'users'" @click="showType = 'create_sample'" class="btn creat_tract">
          Create sample track 
        </button>
        <button v-if="showType == 'create_sample'" @click="showType = 'sample'"  class="btn creat_tract">
          Show sample list
        </button>
      </div>
      
      <List v-if="showType == 'sample'" />
      <Create v-if="showType == 'create_sample'"/>
      <UserList  :users="users" v-if="showType == 'users'" />
    </div>
      </b-tab>
      <b-tab title="Users">
       <div class="container">
          <UserList  :users="users" />
       </div>
      </b-tab>
       <b-tab title="Beats">
       <div class="container">
         <div class="d-flex justify-content-end mt-4">
        <button v-if="showType !== 'create_sample' && showType !== 'users'" @click="showType = 'create_sample'" class="btn creat_tract">
          Create Beats
        </button>
        <button v-if="showType == 'create_sample'" @click="showType = 'sample'"  class="btn creat_tract">
          Show List
        </button>
      </div>
        <UserList  :users="users" />
       </div>
      </b-tab>
    </b-tabs>
    </div>
  </b-col>
</b-row>
     
    
  </div>
</template>

<script>
import Hero from "@/components/hero/hero";
import List from "@/components/crud/list";
import Create from "@/components/crud/create";
import UserList from "@/components/crud/UserList.vue";
import Header from '../../components/Header/Admin_header.vue';

import {mapState} from 'vuex'
export default {
  data() {
    return {
        show: false,
        showType:'sample',
      form: {
        songName: "",
        artistName: "",
        songImg:'',
        songLive: '',
        
      }
       
    };
  },
  created(){
    this.$store.dispatch('audios/getUsers')
    this.$store.dispatch('audios/getAllBeats')
  },
  computed:{
    ...mapState({
      users:state=>state.audios.users
    })
  },
  methods: {
    emittedEvent(event){
      console.log(event)
      this.showType = event

    }
  },
  components: {
    Hero,
    List,
    Create,
    Header,
    UserList
  },
};
</script>

<style scoped>
.wrapper {
  padding: 100px 0px 100px 0px;
  background: var(--black-color);
}

.creat_tract {
  background: var(--gradient-primary);
  color: var(--humber-black);
}

.container{
  flex:1;
  flex-direction: column;
  margin:auto;
  
}
</style>
