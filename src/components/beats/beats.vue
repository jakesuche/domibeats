<template>
  <section
    class="callto spad set-bg"
    style="background:black"
    data-setbg="img/call-bg.jpg"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="list-group">
            <li
              v-for="(audio, i) in auidioList"
              :key="i"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex  gap-1 justify-content-start align-items-center"
              > 
                <span
                  type="button"
                  @click="play(audio)"
                  style="font-size:22px;"
                  class="text-light"
                  >{{ audio.songName }}</span
                >
              </div>
              <div
                class="d-flex gap-3 justify-content-center align-items-center  hide"
              >
                <span @click="pause()" class="text-light">{{audio.songDuration}}</span>
                <div class="d-flex  gap-1">
                  <span @click="next()" class="text-center text-muted tags"
                    >#sombody</span
                  ><span @click="prev()" class="text-center  text-muted tags"
                    >#sombody</span
                  >
                </div>
              </div>
              <div class="d-flex justify-content-end align-items-center gap-1">
                <div
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
                  data-target="#ShareModal"
                  class="beat_actions"
                >
                  <i class="fas fa-share-alt"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CustomModal title="free down load" target="exampleModalCenter">
      <div class="center">
        <button type="button" class="btn ">Download</button>
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
    <AudioPlayer :playlist="auidioList">
      
      
    </AudioPlayer>

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

import CustomModal from "@/components/modal/modal.vue";
import { CopyIcon } from "vue-feather-icons";
import { mapState } from "vuex";
import AudioPlayer from '@/components/visualizer/audioplayer'
export default {
  components: {
    CopyIcon,
    CustomModal,
    AudioPlayer
   
  },
  data() {
    return {
      current: {},
      index: 0,
      player: new Audio(),
      isPlaying: false,
    };
  },
  created() {
    this.current = this.auidioList[this.index];
    this.player.src = this.current.src;
  },
  computed: {
    ...mapState({
      auidioList: (state) => state.audios.audioList,
    }),
  },

  methods: {
    play(song) {
      console.log(song );
      console.log(this.player)
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
  border-bottom: 1px solid var(--primary-color);
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
  width: 117px;
  color: var(--humber-black);
}
.form-label {
  color: var(--humber-light);
}

.form-control {
  background: none;
  border: 1px solid var(--humber-golden);
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
</style>
