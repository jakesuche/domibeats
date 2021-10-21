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
              v-for="num in 8"
              :key="num"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                class="d-flex  gap-1 justify-content-start align-items-center"
              >
                <span style="font-size:22px;" class="text-light">sombody</span>
              </div>
              <div
                class="d-flex gap-3 justify-content-center align-items-center  hide"
              >
                <span class="text-light">10.:30</span>
                <div class="d-flex  gap-1">
                  <span class="text-center text-muted tags">#sombody</span
                  ><span class="text-center  text-muted tags">#sombody</span>
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
     <div class="tract_selected bg-light">
         
    
    <div class="single__track bg-danger"> ">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="single__track__item">
              <div class="single__track__item__pic">
                <img src="img/hero/hero-track.jpg" alt="" />
              </div>
              <div class="single__track__item__text">
                <h5>Understanding Operating</h5>
                <span>Kyle Hawkins</span>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="single__track__option">
              <div
                class="jp-jplayer jplayer"
                data-ancestor=".jp_container"
                data-url="music-files/2.mp3"
              ></div>
              <div
                class="jp-audio jp_container"
                role="application"
                aria-label="media player"
              >
                <div class="jp-gui jp-interface">
                
                  <div class="player_controls_box">
                    <button class="jp-play player_button" tabindex="0">
                      <i class="fas fa-play"></i>
                    </button>
                  </div>
                  
                  <div class="player_bars">
                    <div class="jp-progress">
                      <div class="jp-seek-bar">
                        <div>
                          <div class="jp-play-bar">
                            <div
                              class="jp-current-time"
                              role="timer"
                              aria-label="time"
                            >
                              0:00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="jp-duration ml-auto"
                      role="timer"
                      aria-label="duration"
                    >
                      00:00
                    </div>
                  </div>
                 
                  <div class="jp-volume-controls">
                    <button class="jp-mute" tabindex="0">
                      <span class="icon_volume-high"></span>
                    </button>
                    <div class="jp-volume-bar">
                      <div class="jp-volume-bar-value" style="width: 0%;"></div>
                    </div>
                  </div>
                </div>
                <!-- <div class="jp-btns">
                  <a href="#"><i class="fas fa-share-alt"></i> Share</a>
                  <a><i class="fas fa-download"></i> Download</a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
  </section>
</template>

<script>
import CustomModal from "@/components/modal/modal.vue";
import { CopyIcon } from "vue-feather-icons";
export default {
  components: {
    CopyIcon,
    CustomModal,
  },
  methods: {
      play(){
          
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

.tract_selected{
    position: fixed;
    width: 100%;
    bottom: 0px;
    z-index: 9999999;
    background:white!important
}
</style>
