<template>
  <div class="av__audio__playback">
    <div class="audio__controls">
      <div class="audio__controls__controls">
        <i @click="$emit('toggleShuffle')" class="fa fa-random"></i>
        <i @click="$emit('prevSong')" class="fa fa-step-backward"></i>
        <span v-if="songControls.songPaused" @click="$emit('evalSong')" class="fa fa-play-circle fa-2x"></span>
        <span v-else @click="$emit('evalSong')" class="fa fa-pause-circle fa-2x"></span>
        <i @click="$emit('nextSong')" class="fa fa-step-forward"></i>
        <i @click="$emit('toggleRepeat')" class="fa fa-repeat"></i>
      </div>
      <div class="audio__controls__progress ">
        <div class="audio__controls__progress__currentTime">{{songControls.songTime}}</div>
        <div class="audio__controls__progress__bar">
          <div class="audio__controls__progress__bar__percent" ref="progressBar"></div>
        </div>
        <div class="audio__controls__progress__songDuration">{{songControls.songDuration}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioControls',
  props: [ 'isShuffling', 'repeatVal', 'songControls' ],
  watch: {
    'songControls.songPercent': {
      handler: function (after, before) {
        this.$refs.progressBar.style.width = (after * 100).toString() + '%'
      }
    }
  }
}
</script>

<style scoped>
    .audio__controls {
	 height: 70%;
	 width: 100%;
	 display: flex;
	 flex-direction: column;
}

@media (max-width:544px){
	.audio__controls{
		height: 67%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55px;
    background: #282828;
	}
}
 .audio__controls__controls {
	 align-self: center;
	 color: rgba(255, 255, 255, .6);
	 width: 260px;
	 flex-grow: 1;
	 display: flex;
	 justify-content: space-evenly;
	 align-items: center;
	
}
 .audio__controls__progress {
	 height: 20px;
	 display: flex;
	 justify-content: space-between;
}
 .audio__controls__progress__currentTime, .audio__controls__progress__songDuration {
	 width: 3em;
	 font-size: 12px;
	 font-family: Helvetica, sans-serif;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .audio__controls__progress__bar {
	 flex-grow: 1;
	 align-self: center;
	 border-radius: 5px;
	 background: #404040;
	 height: 5px;
	 position: relative;
}
 .audio__controls__progress__bar__percent {
	 position: absolute;
	 height: inherit;
	 border-radius: 5px;
	 content: "";
	 background: white;
	 z-index: 0;
}
 
</style>