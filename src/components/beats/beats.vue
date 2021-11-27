<template>
  <section
    class="callto spad set-bg"
    style="background:black"
    data-setbg="img/call-bg.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 ">
          <div class="d-flex mb-5 justify-content-between">
            <select @change="selectGenre($event)" class="form-control filter">
             
               <option selected disabled>Filter  genre</option>
          <option value="afrobeat">Afrobeat</option>
          <option value="dance hall">Dance hall</option>
           <option value="hip hop">Hip hop</option>
            <option value="gospel">Gospel</option>
            <option value="R and B">R and B</option>
            </select>
           
          </div>
        </div>
        <div class="col-lg-12">
          <ul class="list-group" data-aos="fade-up"
              data-aos-duration="3000">
            <li
             
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex  gap-1 justify-content-start align-items-center left"
              >
                <span type="button" style="font-size:1rem;" class="text-light"
                  >Song Name</span
                >
              </div>

              <div
                class="d-flex gap-3 justify-content-center align-items-center  hide"
              >
                <span class="text-light">Duration</span>
                <div class="d-flex  gap-1">
                  <span class="text-center text-muted ">genre</span>
                  <!-- <span class="text-center  text-muted tags">#sombody</span> -->
                </div>
              </div>
              <div
                class="d-flex justify-content-end align-items-center gap-1 right"
              >
                Actions
              </div>
            </li>
            <li
              
              v-for="(audio, i) in filterSongs"
              :key="i"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex  gap-1 justify-content-start align-items-center left"
              >
                <img class="songImg" :src="audio.songImg" alt="Song image">
                <span
                  type="button"
                  @click="$eventBus.$emit('chooseSong', i)"
                  style="font-size:1rem;"
                  class="text-light"
                  >{{ audio.songName }}</span
                >
              </div>

              <div
                class="d-flex gap-3 justify-content-center align-items-center  hide"
              >
                <span class="text-light"
                  >{{ audio.songDuration
                  }}{{ getDuration(audio.songLive) }}</span
                >
                <div class="d-flex  gap-1">
                  <span class="text-center badge badge-secondary"
                    >#{{ audio.genre }}</span
                  >
                  <!-- <span class="text-center  text-muted tags">#sombody</span> -->
                </div>
              </div>
              <div
                class="d-flex justify-content-end align-items-center gap-1 right"
              >
                <div
                  @click="selected = audio"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  class="beat_actions"
                >
                  <i class="fas fa-download"></i>
                </div>
                <div
                  type="button"
                  data-toggle="modal"
                  data-target="#1ShareModal"
                  class="beat_actions"
                >
                  <i class="fas fa-share-alt"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <div class="col-md-12 mt-5 ">
          <div class="d-flex mb-5 justify-content-center gap-3">
           <button class="btn pagination-btn">
             Previouse
           </button>
           <button class="btn pagination-btn">
             Next
           </button>
          </div>
        </div> -->
      </div>
    </div>
    <CustomModal
      :bgImg="selected.songImg"
      :title="` free download: ${selected.songName}`"
      target="exampleModalCenter"
    >
      <div>
        <div class="center" v-if="user">
          <!-- {{selected}} -->
          <button
            @click.prevent="downloadsample(selected.songLive)"
            type="button"
            class="btn "
          >
            Download
          </button>
        </div>
        <div class="container" v-else>
          <div class="form-group d-flex justify-content-center mt-5 mb-5">
            <!-- <button class="btn auth_btn">Login</button> -->
            <button @click="signInGoogle()" class="btn  auth_btn_google">
              <i class="fab fa-google"></i> Sign up with google to continue
            </button>
          </div>
        </div>
      </div>
    </CustomModal>
    <CustomModal title="free down load" target="ShareModal">
      <b-tabs content-class="mt-3">
        <b-tab title="Share Url" active>
          <div class="container">
            <label for="basic-url" class="form-label">Your vanity URL</label>
            <div class="input-group mb-3">
              <input
                id="myInput"
                value="this is a value not a value"
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                type="button"
                @click="copyLink()"
                class="input-group-text"
                id="basic-addon2"
                ><CopyIcon size="18"
              /></span>
            </div>
            <label for="basic-url" class="form-label">Your shot URL</label>
            <div class="input-group mb-3">
              <input
                id="myInput"
                value="this is a value not a value"
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                type="button"
                @click="copyLink()"
                class="input-group-text"
                id="basic-addon2"
                ><CopyIcon size="18"
              /></span>
            </div>
          </div>
        </b-tab>
        <b-tab title="Embed"><p>Embed</p></b-tab>
      </b-tabs>
    </CustomModal>
    <div>
      <div>

      </div>
    </div>
    <AudioPlayer :playlist="auidioList" />

    <!-- <div class="tract_selected bg-light">
      <div class="container">
        <p class="track">Erlandsson <span>Memories (Radio Edit)</span></p>
        <button data-am-button="small" id="btn-mute">
          <i class="fa fa-volume-off"></i>
        </button>
        <button data-am-button="large" id="btn-play-pause">
          <i class="fa fa-play"></i>
        </button>
        <button data-am-button="small" id="btn-stop">
          <i class="fa fa-stop"></i>
        </button>
        <div id="progress-bar"><span id="progress"></span></div>
      </div>

      <footer>
        &#169; Music by Erlandsson (aka
        <a href="https://soundcloud.com/tr1ll1on" target="_blank">Trillion</a>)
        avaible on
        <a
          href="https://itunes.apple.com/se/album/memories-single/id648712939?l=en"
          target="_blank"
          >iTunes</a
        >,
        <a
          href="https://open.spotify.com/track/7qnVbMFkP2yCkiQ2XJCDOp"
          target="_blank"
          >Spotify</a
        >
        &
        <a
          href="https://www.beatport.com/ensisrecordsofficial1/tracks/kg8s2rgsrunc/memories-original-mix"
          target="_blank"
          >BeatPort</a
        >
      </footer>
    </div> -->
  </section>
</template>

<script>
import { signInGoogle, onAuthStateChanged, signOut, auth } from "@/firebase";
import CustomModal from "@/components/modal/modal.vue";
import { CopyIcon } from "vue-feather-icons";
import { mapState } from "vuex";
import AudioPlayer from "@/components/visualizer/audioplayer";
import Fuse from 'fuse.js'
import axios from "axios";
export default {
  components: {
    CopyIcon,
    CustomModal,
    AudioPlayer,
  },

  // const indexOfLastPost2 = currentPage * postPerPage;
  // const indexOfFirstPost2 = indexOfLastPost2 - postPerPage2;
  // const currentPosts2 = coinsHistory?.slice(indexOfFirstPost2, indexOfLastPost2);
  
  data() {
    return {
      current: {},
      index: 0,
      player: new Audio(),
      isPlaying: false,
      user: null,
      selected: {},
      searchTerm:'',
      currentPage:1,
      postPerPage:10,

    };
  },
  created() {
    this.getAuthenticatedUser();
    this.current = this.auidioList[this.index];
    this.player.src = this.current.src;
    this.$store.dispatch("audios/getAllBeats");
  },
  computed: {
    ...mapState({
      auidioList: (state) => state.audios.audioList,
    }),
    filterSongs(){
       if(this.auidioList){
  
        const fuse = new Fuse(this.auidioList, {keys: ['genre'],
      })
      
      const results = fuse.search(this.searchTerm).map(({item})=>item);
  
      if(this.auidioList.length > 0 && this.searchTerm.length > 3 && results.length > 0){
        return results
        }else{
          return this.auidioList
        }
      }
    },
  },

  methods: {
    getDuration(audio) {},
    pagination(){

    },

    selectGenre(event){
        const {value} = event.target
        console.log(value)
        this.searchTerm = value
    },
    downloadsample(url) {
    window.location.href = url;
    },
    getAuthenticatedUser() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.user = user;
        } else {
          console.log("no user");
        }
      });
    },
    signInGoogle() {
      this.$store.dispatch("audios/signInGoogle");
      // signInGoogle()
      //   .then((res) => {
      //     console.log(res);
      //     this.$toasted.success("Successfully sign in with Google");
      //     this.getAuthenticatedUser();
      //   })
      //   .catch((err) => {
      //     this.$toasted.error("An error occurred while sigining the Google");
      //   });
    },
    play(song) {
      console.log(song);
      console.log(this.player);
      if (song.songLive != "underfined") {
        this.current = song;
        this.player.src = this.current.songLive;
      }

      this.player.play();
      this.player.addEventListener(
        "ended",
        function() {
          this.index++;
          if (this.index > this.auidioList.length - 1) {
            this.index = 0;
          }
          this.current = this.auidioList[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.auidioList.length - 1) {
        this.index = 0;
      }
      this.current = this.auidioList[this.index];
      this.play(this.current);
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.auidioList.length - 1;
      }
      this.current = this.auidioList[this.index];
      this.play(this.current);
    },

    copyLink() {
      var copyText = document.getElementById("myInput");

      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      navigator.clipboard.writeText(copyText.value);
    },
  },
};
</script>

<style scoped>
.filter {
  width: 20%;
  /* background: var(--gradient-primary) !important; */
  border: 1px solid var(--humber-golden) !important;
  /* color: var(--humber-black) !important; */
  height: 45px;
  border-radius: 13px;
}

@media (max-width:600px){
  .filter{
    width: 45%;
  }
}
.songImg{
  max-width: 10%;
}
.pagination-btn{
  min-width: 100px;
}

.option {
  background: var(--gradient-primary);
}

.podcast_item_text {
  border: 1px solid #ebebeb;
  padding: 10px 32px 10px 54px;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  position: relative;
  margin: auto;
}
.episodes {
  background-color: var(--humber-black);
  margin-top: -1px;
}
@media (min-width: 1027px) {
  .podcast_item_text {
    width: 100%;
    max-width: 909px;
  }
}

.beat_img {
  width: 12%;
  height: 12%;
}

.tags {
  background: #ffffff1f;
  padding: 2px;
  height: 33px;
  width: 86px;
  font-size: 16px;
  border-radius: 28px;
}
.beat_actions {
  padding: 12px;
  background: #6c757d;
  border-radius: 11px;
  font-size: 13px;
  height: 42px;
  width: 42px;
  text-align: center;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px  solid #cba7758f;
  background: none !important;
  /* background-color: #fff; */
  /* border: 1px solid rgba(0,0,0,.125); */
}

@media (max-width: 768px) {
  .hide {
    display: none !important;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.btn {
  background: var(--gradient-primary);
  /* width: 117px; */
  color: var(--humber-black);
}
.form-label {
  color: var(--humber-light);
}

.form-control {
  background: none;
  border: 1px solid var(--humber-golden);
  color: var(--humber-light);
}

.input-group-text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--humber-black);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #ced4da;
  background: var(--gradient-primary);
  border-radius: 0.25rem;
}

.tract_selected {
  position: fixed;
  width: 100%;
  bottom: 0px;
  z-index: 9999999;
  background: white !important;
}

/* .container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
} */
p.track {
  text-transform: uppercase;
  color: #fff;
}
p.track span {
  color: #999;
}
button {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #fff;

  color: #fff;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.2s ease 0;
}
button[data-am-button^="large"] {
  width: 60px;
  height: 60px;
  margin: 0 5px;
}
button[data-am-button^="large"] i {
  font-size: 25px;
}
button[data-am-button^="small"] {
  width: 40px;
  height: 40px;
}
button[data-am-button^="small"] i {
  font-size: 14px;
}
button:hover {
  color: #999;
  border-color: #999;
}
button:focus {
  outline: none;
}
#progress-bar {
  width: 100%;
  background-color: #000;
  height: 5px;
  position: relative;
  margin: 1em 0;
}
#progress-bar #progress {
  background-color: #999;
  height: 5px;
  position: absolute;
  left: 0;
  transition: width 2.5s linear 0;
}
footer {
  position: fixed;
  width: 100%;
  bottom: 15px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
footer a {
  color: inherit;
  text-decoration: none;
}
footer a:hover {
  color: #fff;
}

.left,
.right {
  flex-grow: 1;
  flex-basis: 0;
}

.label {
  color: var(--humber-light);
}

.auth_btn_google,
.auth_btn {
  width: 65%;
}

.auth_btn_google {
  background: var(--humber-light) !important;
  color: var(--humber-link);
}


.badge {
    display: inline-block;
    padding: 0.75em  0.9em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.55rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

option{
  background-color:var(--humber-dark)
}
option:hover{
    background-color:var(--humber-dark)!important;
}
</style>
