<template>
  <section
    class="callto spad set-bg"
    style="background:black"
    data-setbg="img/call-bg.jpg"
  >
    <div class="track_details_container">
      <section class="max-layout-width">
        <div class="track-details-header">
          <div class="track-details-artwork">
            <img
              src="https://main.v2.beatstars.com/fit-in/300x300/filters:format(.jpeg):quality(50):fill(000000)/users/prod/719419/image/1638945884/big-mood.png"
              alt=""
            />
          </div>
          <div class="track-details-info">
            <div
              class="track-details-title ng-isolate-scope"
              playlist-control="play"
              add-track="track"
            >
              <div class="btn-play primary-btn-color primary-btn-bg-color">
                <i
                  class="icon-play"
                  ng-class="{'hide': track.details.track_id == currentTrack.track_id &amp;&amp; playerRunning}"
                ></i>
                <i
                  class="icon-pause hide"
                  ng-class="{'hide': track.details.track_id !== currentTrack.track_id || !playerRunning}"
                ></i>
              </div>
              <span class="primary-text-color text-ellipsis ng-binding"
                >Big Mood</span
              >
            </div>
            <div class="track-details-musician primary-text-color">
              <span class="ng-binding">Ransom Beatz</span>
            </div>
            <div class="track-details-bpm-release-keynote">
              <!-- ngIf: track.details.bpm > 0 --><span
                class="track-details-bpm primary-text-color ng-scope"
               
                style=""
                ><i class="icon-bpm"></i>
                <span class="ng-binding">101</span> </span
              ><!-- end ngIf: track.details.bpm > 0 --><!-- ngIf: track.details.key_note !== 'NONE' --><span
                class="track-details-release primary-text-color"
                ><i class="icon-time"></i>
                <span class="ng-binding">December 8, 2021</span></span
              >
            </div>
            <!-- ngIf: ::track.details.description -->
            <div
              
              class="track-details-description primary-text-color ng-binding ng-scope"
          
              style=""
            >
              produced by Ransom Beatz x Marvey Muzique
            </div>
            <!-- end ngIf: ::track.details.description -->
            <div class="track-details-actions-tags">
              <div class="track-details-actions">
                <button
                  href=""
                  class="detail_btn"
                
                  
                  ><span class="inline hide-active"
                    ><i class="icon-add-cart"></i> </span
                  ><span class="inline hide-active ng-binding">$29.98 </span
                  ><span class="inline show-active"
                    ><span>IN CART</span>
                  </span></button
                ><button
                  href=""
                  class="detail_btn"
                 
                  ><i class="icon-download"></i> Download </button
                ><button
                  href=""
                  class="detail_btn hide"
                  
                  ><i class="icon-download"></i> Download </button
                >
              </div>
              <!-- <div class="track-details-tags static-color-tags">
                <span class="track-tags"
                  ><span
                    class="secondary-btn text-ellipsis ng-binding ng-scope"
                  
                    role="button"
                    tabindex="0"
                    style=""
                    >#wizkid type beat</span
                  ><span
                    class="secondary-btn text-ellipsis ng-binding ng-scope"
                   
                    role="button"
                    tabindex="0"
                    >#burna boy type beat</span
                  ><span
                    class="secondary-btn text-ellipsis ng-binding ng-scope"
                   
                    role="button"
                    tabindex="0"
                    >#afrobeat type beat</span
                  ></span
                >
              </div> -->
            </div>
          </div>
        </div>
      </section>
    </div>
    <Visualizer />
    <div class="container">
      <div class="row mb-4 justify-content-center">
        <div class="buy_quality">
          Search for related Beats
        </div>
      </div>
      <div
        class="row mb-4"
        style="max-width: 83%;
    margin: auto;"
      >
        <div class="col-md-12 position-relative">
          <button @click="$router.push('/beats')" class="btn_search">
            Search
          </button>
          <input
            type="text"
            name="search"
            placeholder="Search the track you are looking..."
          />
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <ul v-if="loading">
            <li>
              <Spinner title="Nodata  found this list" />
            </li>
          </ul>
          <ul v-else-if="filterSongs.length == 0">
            <li>
              <Nodata title="Nodata  found this list" />
            </li>
          </ul>
          <ul
            v-else
            class="list-group"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
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
                class="d-flex gap-6 justify-content-center align-items-center  hide"
              >
                <span class="text-light">Duration</span>
                <div class="d-flex  gap-2">
                  <span class="text-center text-light ">Genre</span>
                  <!-- <span class="text-center  text-muted tags">#sombody</span> -->
                </div>
              </div>
              <div
                class=" text-light d-flex justify-content-end align-items-center gap-1 right"
              >
                Actions
              </div>
            </li>
            <li
              v-for="(audio, i) in filterSongs.slice(0, 10)"
              :key="i"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex  gap-1 justify-content-start align-items-center left"
              >
                <img class="songImg" :src="audio.songImg" alt="Song image" />
                <span
                  type="button"
                  @click="$eventBus.$emit('chooseSong', i)"
                  style="font-size:1rem;"
                  class="text-light"
                  >{{ audio.songName ? audio.songName : "" }}</span
                >
              </div>

              <div
                class="d-flex gap-3 justify-content-center align-items-center  hide"
              >
                <span class="text-light"
                  >{{ audio.duration || "N/A"
                  }}{{
                    audio.songLive ? getDuration(audio.songLive) : ""
                  }}</span
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
            <label for="basic-url" class="form-label">Your URL</label>
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
      <div></div>
    </div>
    <AudioPlayer :playlist="auidioList" />
  </section>
</template>

<script>
import { signInGoogle, onAuthStateChanged, signOut, auth } from "@/firebase";

import CustomModal from "@/components/modal/modal.vue";
import { CopyIcon } from "vue-feather-icons";
import { mapState } from "vuex";
import AudioPlayer from "@/components/visualizer/audioplayer";
import Select from "@/components/select/select.vue";
import Visualizer from './visualizer'
import Fuse from "fuse.js";
import axios from "axios";
export default {
  components: {
    CopyIcon,
    CustomModal,
    AudioPlayer,
    Select,
    Visualizer
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
      searchTerm: "",
      currentPage: 1,
      postPerPage: 10,
      loading: false,
    };
  },
  created() {
    this.getAuthenticatedUser();
    this.current = this.auidioList[this.index];
    this.player.src = this.current ? this.current.src : null;
    this.getAllBeats();
    
  },
  computed: {
    ...mapState({
      auidioList: (state) => state.audios.audioList,
    }),
    filterSongs() {
      if (this.auidioList) {
        const fuse = new Fuse(this.auidioList, { keys: ["genre"] });

        const results = fuse.search(this.searchTerm).map(({ item }) => item);

        if (
          this.auidioList.length > 0 &&
          this.searchTerm.length > 3 &&
          results.length > 0
        ) {
          return results;
        } else {
          return this.auidioList;
        }
      }
    },
  },

  methods: {
    getAllBeats() {
      this.$store
        .dispatch("audios/getAllBeats")
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
        });
    },

    getDuration(audio) {},
    pagination() {},

    selectGenre(event) {
      const { value } = event.target;
      console.log(value);
      this.searchTerm = value;
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
.track_details_container {
  background: linear-gradient(rgba(75, 81, 179, 0.5), rgba(0, 0, 0, 0)),
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  margin-top: -50px;
  padding: 35px 34px 250px;
  margin-bottom: -26px;
  display: flex;
  flex-direction: row;
}

section.max-layout-width {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 1166px;
  padding: 0;
}
.track-details-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  text-align: center;
}
@media (min-width: 962px) {
  .track-details-header {
    flex-direction: row;
    text-align: left;
  }
}

@media (min-width: 962px) {
  .track-details-artwork img {
    width: 180px;
    height: 180px;
  }
}

@media (min-width: 962px) {
  .track-details-info {
    flex: 1;
    margin-left: 24px;
  }
}

.track-details-info {
  overflow: hidden;
  line-height: 1.7;
}
.track-details-artwork img {
  width: 160px;
  height: 160px;
  border-radius: 3px;
  cursor: pointer;
}

@media (min-width: 962px) {
  .track-details-info .track-details-title {
    justify-content: stretch;
  }
}

.track-details-info .track-details-title {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@media (min-width: 962px) {
  .track-details-info .track-details-title span {
    font-size: 28px;
  }
}
@media (min-width: 962px) {
  .track-details-info .track-details-title {
    justify-content: stretch;
  }
}

.track-details-info .track-details-title span {
  font-size: 21px;
  font-weight: 700;
}

.track-details-info .track-details-actions-tags .track-tags {
    flex-wrap: wrap;
    justify-content: center;
}

.track-tags {
    display: flex;
}
.track-tags>span {
    height: 40px;
    margin-left: 8px;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    border-radius: 20px;
}

@media (min-width: 962px){
.track-details-info .track-details-actions-tags {
    flex-direction: row;
}
}


.track-details-info .track-details-actions-tags {
        margin-top: 20px;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px; */
}

.detail_btn{
    background: #292929;
    display: 21px;
    height: 39px;
    border: none;
    margin-right: 12px;
    border-radius: 3px;
    padding: 12px 9px;
    font-size: 12px;
}



.track-tags>span:first-child {
    margin-left: 0;
}
.primary-text-color {
  color: #fff !important;
}

.buy_quality {
  font-size: 52px;
  font-weight: bold;
  color: white;
}

@media (max-width: 967px) {
  .buy_quality {
    font-size: 38px;
  }
}

@media (max-width: 860px) {
  .buy_quality {
    font-size: 30px;
  }
}
@media (max-width: 507px) {
  .buy_quality {
    font-size: 19px !important;
  }
}

.optgroup {
  background: "red";
}
input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  /* background-image: url('searchicon.png'); */
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;
  height: 77px;
}

input[type="text"]:focus {
  width: 100%;
}
input::placeholder {
  color: rgb(22, 21, 21);
  opacity: 1;
  font-size: 1rem;
  font-weight: 600;
  transition: padding 0.5s;
}

input::-webkit-input-placeholder {
  color: #cccccc;
  position: relative;
  padding-left: 0;
  -webkit-transition: padding 0.5s;
  /* For Safari 3.1 to 6.0 */
  transition: padding 0.5s;
}

input:-moz-placeholder {
  /* Firefox 18- */
  color: #cccccc;
  position: relative;
  padding-left: 0;
  -moz-transition: padding 0.5s;
  /* For Safari 3.1 to 6.0 */
  transition: padding 0.5s;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: #cccccc;
  position: relative;
  padding-left: 0;
  -moz-transition: padding 0.5s;
  /* For Safari 3.1 to 6.0 */
  transition: padding 0.5s;
}

input:-ms-input-placeholder {
  color: #cccccc;
  position: relative;
  padding-left: 0;
  -ms-transition: padding 0.5s;
  /* For Safari 3.1 to 6.0 */
  transition: padding 0.5s;
}

input:hover::-moz-placeholder,
input:focus::-moz-placeholder {
  /* Firefox 19+ */
  padding-left: 90px;
}

input:hover:-ms-input-placeholder,
input:focus:-ms-input-placeholder {
  padding-left: 90px;
}

input:hover:placeholder {
  padding-left: 90px;
}
.filter {
  /* width: 20%; */
  /* background: var(--gradient-primary) !important; */
  border: 1px solid var(--humber-golden) !important;
  /* color: var(--humber-black) !important; */
  height: 45px;
  border-radius: 13px;
}

@media (max-width: 600px) {
  /* .filter {
    width: 45%;
  } */
}
.songImg {
  max-width: 10%;
}
.pagination-btn {
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
  border-bottom: 1px solid #cba7758f;
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
  background: #212121;
  border: none;
  color: white;
  font-size: 1rem;
  height: 49px;
  font-weight: 600;
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
  padding: 0.75em 0.9em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.55rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

option {
  background-color: var(--humber-dark);
  border: "none";
}
option:hover {
  background-color: var(--humber-dark) !important;
}

@media (max-width: 576px) {
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.btn_search {
  position: absolute;
  z-index: 999;
  top: 13px;
  right: 24px;
  border: none;
  background: black;
  border-radius: 4px;
  height: 54px;
  padding: 6px 20px 7px 18px;
  font-size: 15px;
}
</style>
