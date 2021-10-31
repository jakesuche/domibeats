<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <div class="d-flex justify-content-end mt-4">
        <button v-if="show == true" @click="show = false" class="btn creat_tract">
          Create sample track
        </button>
        <button v-if="show !== true" @click="show = true"  class="btn creat_tract">
          Show sample list
        </button>
      </div>
      <List v-if="show" />
        <Create v-else />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/hero/hero";
import List from "@/components/crud/list";
import Create from "@/components/crud/create";
import Header from '../../components/Header/Admin_header.vue';
export default {
  data() {
    return {
        show: false,
      form: {
        songName: "",
        artistName: "",
        songImg:'',
        songLive: '',
      }
       
    };
  },
  components: {
    Hero,
    List,
    Create,
    Header,
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
