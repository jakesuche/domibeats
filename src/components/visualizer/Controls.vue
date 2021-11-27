<template>
  <div class="ss">
    <div class="wrapper">
        <div class="audio__controls__controls" @click="alert('jjsjdjdjd')">
            ssss
        <!-- <i @click="$emit('toggleShuffle')" class="fa fa-random"></i>
        <i @click="$emit('prevSong')" class="fa fa-step-backward"></i>
        <span v-if="songControls.songPaused" @click="$emit('evalSong')" class="fa fa-play-circle fa-2x"></span>
        <span v-else @click="$emit('evalSong')" class="fa fa-pause-circle fa-2x"></span>
        <i @click="$emit('nextSong')" class="fa fa-step-forward"></i>
        <i @click="$emit('toggleRepeat')" class="fa fa-repeat"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
</style>
