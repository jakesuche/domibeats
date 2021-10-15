<template>
     <section class="hero spad set-bg" :style="{'background-image': 'url('+ require('@/assets/img/hero/hero-bg.jpg' ) + ')'}" >
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="hero__text">
                        <h5><span class="icon_calendar"></span> 10 Dec 2019</h5>
                        <h2>Ep 05: Astronomy Binoculars A Great</h2>
                        <a href="#" class="primary-btn">Subscribe with iTunes</a>
                        <a href="#" class="primary-btn white-btn">Subscribe with RSS</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero__pic set-bg" data-setbg="img/hero/hero-video.png" :style="{'background-image': 'url('+ require('@/assets/img/hero/hero-video.png' ) + ')'}">
                        <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249690664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" class="play-btn video-popup"><img src="img/hero/play-btn.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="single__track">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single__track__item">
                            <div class="single__track__item__pic">
                                <img src="img/hero/hero-track.jpg" alt="">
                            </div>
                            <div class="single__track__item__text">
                                <h5>Understanding Operating</h5>
                                <span>Kyle Hawkins</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="single__track__option">
                            <div class="jp-jplayer jplayer" data-ancestor=".jp_container" data-url="music-files/2.mp3">
                            </div>
                            <div class="jp-audio jp_container" role="application" aria-label="media player">
                                <div class="jp-gui jp-interface">
                                    <!-- Player Controls -->
                                    <div class="player_controls_box">
                                        <button class="jp-play player_button" tabindex="0"></button>
                                    </div>
                                    <!-- Progress Bar -->
                                    <div class="player_bars">
                                        <div class="jp-progress">
                                            <div class="jp-seek-bar">
                                                <div>
                                                    <div class="jp-play-bar">
                                                        <div class="jp-current-time" role="timer" aria-label="time">0:00
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jp-duration ml-auto" role="timer" aria-label="duration">00:00</div>
                                    </div>
                                    <!-- Volume Controls -->
                                    <div class="jp-volume-controls">
                                        <button class="jp-mute" tabindex="0"><span
                                            class="icon_volume-high"></span></button>
                                        <div class="jp-volume-bar">
                                            <div class="jp-volume-bar-value" style="width: 0%;"></div>
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
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>