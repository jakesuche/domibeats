<template>
  <transition name="slide-fade">
    <div class="audio__playlist">
      <span>
        <span class="songNum"></span>
        <span class="songName"><b>SONG</b></span>
        <span class="songDuration">
          <i class="fa fa-clock-o"></i>
        </span>
      </span>

      <span v-for="(song, index) in playlist" :key="index">
        <span class="songNum" @click="$emit('chooseSong', index)">
          <span v-if="!song.isPlaying">{{ index + 1 }}</span>
          <span v-else><i class="fa fa-pause fa-xs"></i></span>
        </span>
        <span class="songName" @click="$emit('chooseSong', index)">{{
          song.songName
        }}</span>
        <span class="songDuration"> {{ getDuration(song.songLive) }}</span>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AudioPlaylist",
  props: ["playlist"],

  methods: {
    getDuration(src) {
      var audio = new Audio();
    let durationTime = "";
      audio.addEventListener("loadedmetadata", function(event) {
        const duration = audio.duration;
        const format = (val) => `0${Math.floor(val)}`.slice(-2);
        const hours = duration / 3600;
        const minutes = (duration % 3600) / 60;

        return [hours, minutes, duration % 60].map(format).join(":");
      });
      audio.src = src;
    },
  },
};
</script>

<style scoped>
.audio__playlist {
  position: fixed;
  top: 0;
  right: 0;
  height: calc(100% - var(--av-height));
  width: 350px;
  display: flex;
  flex-direction: column;
  background: #2f3136;
  color: #f6f6f7;
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  overflow: auto;
  z-index: 1000;
}
.audio__playlist > span {
  display: flex;
  height: 33px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
.audio__playlist > span .songNum {
  width: 33px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.audio__playlist > span .songName {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.audio__playlist > span .songDuration {
  width: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>
