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
                  <button
                    v-if="showType !== 'create_sample' && showType !== 'users'"
                    @click="showType = 'create_sample'"
                    class="btn creat_tract"
                  >
                    Create sample track
                  </button>
                  <button
                    v-if="showType == 'create_sample'"
                    @click="showType = 'sample'"
                    class="btn creat_tract"
                  >
                    Show sample list
                  </button>
                </div>

                <List v-if="showType == 'sample'" />
                <Create v-if="showType == 'create_sample'" />
                <UserList :users="users" v-if="showType == 'users'" />
              </div>
            </b-tab>
            <b-tab title="Users">
              <div class="container">
                <UserList :users="users" />
              </div>
            </b-tab>
            <b-tab title="Beats">
              <div class="container">
                <div class="d-flex justify-content-end mt-4">
                  <button
                    v-if="showType !== 'create_sample' && showType !== 'users'"
                    @click="showType = 'create_sample'"
                    class="btn creat_tract"
                  >
                    Create Beats
                  </button>
                  <button
                    v-if="showType == 'create_sample'"
                    @click="showType = 'sample'"
                    class="btn creat_tract"
                  >
                    Show List
                  </button>
                </div>
                <UserList :users="users" />
              </div>
            </b-tab>
            <b-tab title="Post">
              <div class=" d-flex justify-content-end mt-4">
                <button
                  data-toggle="modal"
                  data-target="#createpost"
                  class="btn creat_tract"
                >
                  Create Post
                </button>
              </div>
              <PostList :users="users" />
            </b-tab>
            <Modal :bgColor="'#fff'" title="Create a post" target="createpost">
            
              <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input
                  
                v-model="postForm.title"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="@title"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Overview</label>

                <quill-editor
                  ref="myQuillEditor"
                  v-model="postForm.description"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  @change="onEditorChange($event)"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Duration</label>
                <input
                  v-model="postForm.duration"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="@example 9 months , 3 weeks, 12 days"
                />
              </div>
                <div class=" d-flex justify-content-end mt-4">
                <button
                  @click="createPost()"
                  class="btn creat_tract Add Post"
                >
                {{loading ? 'Adding...' :'Add Post'}}
                  
                </button>
              </div>
            </Modal>
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
import Header from "../../components/Header/Admin_header.vue";
import PostList from "@/components/post/list_post.vue";
import Modal from "@/components/modal/modal";
import { PostRef } from '@/firebase'

import { mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      showType: "sample",
      loading:false,
      form: {
        songName: "",
        artistName: "",
        songImg: "",
        songLive: "",
      },
      postForm:{
        title:'',
        description:'',
        duration:'',
        createAt:''
      }
    };
  },
  created() {
    this.$store.dispatch("audios/getUsers");
    this.$store.dispatch("audios/getAllBeats");
  },
  computed: {
    ...mapState({
      users: (state) => state.audios.users,
    }),
  },
  methods: {
    emittedEvent(event) {
      console.log(event);
      this.showType = event;
    },
    createPost(){
      console.log(this.postForm)

      this.loading  = true
      this.postForm.createAt = Date.now()
       PostRef({...this.postForm})
        .then((res) => {
          console.log(res);
          this.loading = false;
          this.$toasted.error('Creating successfully', {duration:4000})
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
          
          this.$toasted.error('An error occurred while creating ', {duration:4000})
          
        });
    },
    onEditorBlur($event) {},
    onEditorFocus($event) {},
    onEditorReady($event) {},
    onEditorChange({ quill, html, text }) {
     
      this.postForm.description = html
    },
  },
  components: {
    Hero,
    List,
    Create,
    Header,
    UserList,
    PostList,
    Modal,
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

.Add{
  background: var(--humber-dark);
  color: var(--humber-light);
}

.container {
  flex: 1;
  flex-direction: column;
  margin: auto;
}






</style>
