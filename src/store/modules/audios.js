import isScreen from "@/core/screenHelper";
import audio1 from "@/assets/audio/Kalimba.mp3";
import audio2 from "@/assets/audio/Sample-OGG-File.ogg";
export default {
  namespaced: true,
  state: {
    audioList: [
      { title: "My love", artist: "Domi", track: audio1 },
      { title: "My onyema", artist: "Domi", track: audio2 },
      { title: "haters", artist: "Domi", track: audio2 },
      { title: "Uwa oma", artist: "Domi", track: audio1 },
    ],
  },
};
