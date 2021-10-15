<template>
  <div
    class="episodes__item set-bg"
    :style="{
      'background-image':
        'url(' + require('@/assets/img/episodes/episodes-3.jpg') + ')',
    }"
  >
    <div class="tags"><span class="icon_tags_alt"></span> Music, Radio</div>
    <div class="time"><span class="icon_clock_alt"></span> 40 mins</div>
    <a
      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249690664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      class="play-btn video-popup"
      ><img src="img/play.png" alt=""
    /></a>
    <div class="episodes__text">
      <h4>Episode 04: Become A Travel Pro In One Easy</h4>
      <p><span class="icon_calendar"></span> 16 Feb 2019</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
