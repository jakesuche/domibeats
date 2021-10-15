<template>
  <div>
    <Hero />
    <section
      class="callto spad set-bg"
      style="background:black"
      data-setbg="img/call-bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12" v-for="num in 8" :key="num">
            <div class="col-lg-12 mix entrepreneurship">
              <div class="mb-1">
                <div class="podcast_item_text">
                  <div class="track__option">
                    <div
                      class="jp-jplayer jplayer"
                      data-ancestor=".jp_container-1"
                      data-url="music-files/3.mp3"
                    ></div>
                    <div
                      class="jp-audio jp_container-1"
                      role="application"
                      aria-label="media player"
                    >
                      <div class="jp-gui jp-interface">
                        <!-- Player Controls -->
                        <div class="player_controls_box">
                          <button
                            class="jp-play player_button"
                            tabindex="0"
                          ></button>
                        </div>
                        <!-- Progress Bar -->
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
                        <!-- Volume Controls -->
                        <div class="jp-volume-controls">
                          <button class="jp-mute" tabindex="0">
                            <span class="icon_volume-high"></span>
                          </button>
                          <div class="jp-volume-bar">
                            <div
                              class="jp-volume-bar-value"
                              style="width: 0%;"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="jp-btns">
                        <a href="#"><i class="social_share"></i> Share</a>
                        <a href="#"><i class="fa fa-download"></i> Download</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="podcast spad">
      <div class="container">
        <div class="podcast__top">
          <div class="row">
            <div class="col-lg-5 col-md-5">
              <h2>Live & Upcoming</h2>
            </div>
            <div class="col-lg-7 col-md-7">
              <ul class="filter__controls">
                <li class="active" data-filter="*">All</li>
                <li data-filter=".entrepreneurship">Entrepreneurship</li>
                <li data-filter=".media">Media</li>
                <li data-filter=".tech">Tech</li>
                <li data-filter=".tutorials">Tutorials</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row podcast-filter">
          <div class="col-lg-12 mix entrepreneurship">
            <div class="podcast__item">
              <div class="podcast__item__pic">
                <img src="@/assets/img/podcast/podcast-1.jpg" alt="" />
              </div>
              <div class="podcast__item__text">
                <a href="#" class="heart-icon"><i class="fa fa-heart"></i></a>
                <ul>
                  <li><span class="icon_calendar"></span> 7 Jun 2019</li>
                  <li><span class="icon_profile"></span> by John Smith</li>
                  <li>
                    <span class="icon_tags_alt"></span> Radio, Musican, Camp
                  </li>
                </ul>
                <h4>
                  Episode 01: 6 Powerful Tips To Creating Testimonials That Sell
                  Your
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div class="track__option">
                  <div
                    class="jp-jplayer jplayer"
                    data-ancestor=".jp_container-1"
                    data-url="music-files/3.mp3"
                  ></div>
                  <div
                    class="jp-audio jp_container-1"
                    role="application"
                    aria-label="media player"
                  >
                    <div class="jp-gui jp-interface">
                      <!-- Player Controls -->
                      <div class="player_controls_box">
                        <button
                          class="jp-play player_button"
                          tabindex="0"
                        ></button>
                      </div>
                      <!-- Progress Bar -->
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
                      <!-- Volume Controls -->
                      <div class="jp-volume-controls">
                        <button class="jp-mute" tabindex="0">
                          <span class="icon_volume-high"></span>
                        </button>
                        <div class="jp-volume-bar">
                          <div
                            class="jp-volume-bar-value"
                            style="width: 0%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="jp-btns">
                      <a href="#"><i class="social_share"></i> Share</a>
                      <a href="#"><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mix media">
            <div class="podcast__item">
              <div class="podcast__item__pic">
                <img src="@/assets/img/podcast/podcast-2.jpg" alt="" />
              </div>
              <div class="podcast__item__text">
                <a href="#" class="heart-icon"><i class="fa fa-heart"></i></a>
                <ul>
                  <li><span class="icon_calendar"></span> 7 Jun 2019</li>
                  <li><span class="icon_profile"></span> by John Smith</li>
                  <li>
                    <span class="icon_tags_alt"></span> Radio, Musican, Camp
                  </li>
                </ul>
                <h4>
                  Episode 01: 6 Powerful Tips To Creating Testimonials That Sell
                  Your
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div class="track__option">
                  <div
                    class="jp-jplayer jplayer"
                    data-ancestor=".jp_container-2"
                    data-url="music-files/4.mp3"
                  ></div>
                  <div
                    class="jp-audio jp_container-2"
                    role="application"
                    aria-label="media player"
                  >
                    <div class="jp-gui jp-interface">
                      <!-- Player Controls -->
                      <div class="player_controls_box">
                        <button
                          class="jp-play player_button"
                          tabindex="0"
                        ></button>
                      </div>
                      <!-- Progress Bar -->
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
                      <!-- Volume Controls -->
                      <div class="jp-volume-controls">
                        <button class="jp-mute" tabindex="0">
                          <span class="icon_volume-high"></span>
                        </button>
                        <div class="jp-volume-bar">
                          <div
                            class="jp-volume-bar-value"
                            style="width: 0%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="jp-btns">
                      <a href="#"><i class="social_share"></i> Share</a>
                      <a href="#"><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mix tech">
            <div class="podcast__item ">
              <div class="podcast__item__pic">
                <img src="@/assets/img/podcast/podcast-3.jpg" alt="" />
              </div>
              <div class="podcast__item__text">
                <a href="#" class="heart-icon"><i class="fa fa-heart"></i></a>
                <ul>
                  <li><span class="icon_calendar"></span> 7 Jun 2019</li>
                  <li><span class="icon_profile"></span> by John Smith</li>
                  <li>
                    <span class="icon_tags_alt"></span> Radio, Musican, Camp
                  </li>
                </ul>
                <h4>
                  Episode 01: 6 Powerful Tips To Creating Testimonials That Sell
                  Your
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div class="track__option">
                  <div
                    class="jp-jplayer jplayer"
                    data-ancestor=".jp_container-3"
                    data-url="music-files/5.mp3"
                  ></div>
                  <div
                    class="jp-audio jp_container-3"
                    role="application"
                    aria-label="media player"
                  >
                    <div class="jp-gui jp-interface">
                      <!-- Player Controls -->
                      <div class="player_controls_box">
                        <button
                          class="jp-play player_button"
                          tabindex="0"
                        ></button>
                      </div>
                      <!-- Progress Bar -->
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
                      <!-- Volume Controls -->
                      <div class="jp-volume-controls">
                        <button class="jp-mute" tabindex="0">
                          <span class="icon_volume-high"></span>
                        </button>
                        <div class="jp-volume-bar">
                          <div
                            class="jp-volume-bar-value"
                            style="width: 0%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="jp-btns">
                      <a href="#"><i class="social_share"></i> Share</a>
                      <a href="#"><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mix tutorials">
            <div class="podcast__item">
              <div class="podcast__item__pic">
                <img src="@/assets/img/podcast/podcast-4.jpg" alt="" />
              </div>
              <div class="podcast__item__text">
                <a href="#" class="heart-icon"><i class="fa fa-heart"></i></a>
                <ul>
                  <li><span class="icon_calendar"></span> 7 Jun 2019</li>
                  <li><span class="icon_profile"></span> by John Smith</li>
                  <li>
                    <span class="icon_tags_alt"></span> Radio, Musican, Camp
                  </li>
                </ul>
                <h4>
                  Episode 01: 6 Powerful Tips To Creating Testimonials That Sell
                  Your
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <div class="track__option">
                  <div
                    class="jp-jplayer jplayer"
                    data-ancestor=".jp_container-4"
                    data-url="music-files/6.mp3"
                  ></div>
                  <div
                    class="jp-audio jp_container-4"
                    role="application"
                    aria-label="media player"
                  >
                    <div class="jp-gui jp-interface">
                      <!-- Player Controls -->
                      <div class="player_controls_box">
                        <button
                          class="jp-play player_button"
                          tabindex="0"
                        ></button>
                      </div>
                      <!-- Progress Bar -->
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
                      <!-- Volume Controls -->
                      <div class="jp-volume-controls">
                        <button class="jp-mute" tabindex="0">
                          <span class="icon_volume-high"></span>
                        </button>
                        <div class="jp-volume-bar">
                          <div
                            class="jp-volume-bar-value"
                            style="width: 0%;"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="jp-btns">
                      <a href="#"><i class="social_share"></i> Share</a>
                      <a href="#"><i class="fa fa-download"></i> Download</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call To Action Section Begin -->
    <section
      class="callto spad set-bg"
      :style="{
        'background-image': 'url(' + require('@/assets/img/call-bg.jpg') + ')',
      }"
      data-setbg="img/call-bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="callto__text">
              <h2>Support The Show</h2>
              <p>Enjoy listening to our podcast? Consider making a donation!</p>
              <a href="#" class="primary-btn">Make a Donation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call To Action Section End -->
    <!-- Episodes Section Begin -->
    <section class="episodes spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Latest Episodes</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="(item, i) in episode_items"
            :key="i + 'uchech'"
          >
            <div
              class="episodes__item set-bg"
              :style="{
                'background-image':
                  'url(' +
                  require(`@/assets/img/episodes/episodes-${i + 1}.jpg`) +
                  ')',
              }"
            >
              <div class="tags">
                <span class="icon_tags_alt"></span> Music, Radio
              </div>
              <div class="time">
                <span class="icon_clock_alt"></span> 40 mins
              </div>
              <a
                href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249690664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                class="play-btn video-popup"
                ><img src="img/play.png" alt=""
              /></a>
              <div class="episodes__text">
                <h4>Episode 02: Dealing With Technical Support 10</h4>
                <p><span class="icon_calendar"></span> 16 Feb 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Episodes Section End -->

    <!-- Footer Section Begin -->
    
    <!-- Footer Section End -->
  </div>
</template>

<script>
import { episode_items } from "@/components/datas/card_data.js";
import Hero from "@/components/hero/hero.vue";
export default {
  components: { Hero },
  data() {
    return {
      loading: true,
      episode_items,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<style>
.podcast_item_text {
  border: 1px solid #ebebeb;
  padding: 10px 32px 10px 54px;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  position: relative;
  margin: auto;
}
@media (min-width: 1027px) {
  .podcast_item_text {
    width: 100%;
    max-width: 909px;
  }
}
/* .hero{
        background-image: url('../assets/img/hero/hero-bg')
    } */
</style>
