import isScreen from "@/core/screenHelper";
import audio1 from "@/assets/audio/Kalimba.mp3";
import audio2 from "@/assets/audio/somebody_9130811.mp3";
export default {
  namespaced: true,
  state: {
    audioList: [
      {
        songName: 'Agnes',
        songLive: audio1,
        artistName: 'Glass Animals',
        songImg: 'https://pbs.twimg.com/profile_images/765322021060354048/0ppD4P6Y_400x400.jpg',
        songDuration: '3:45'
      },
      {
        songName: 'TaKillya (Baby Driver Soundtrack)',
        songLive: audio2,
        artistName: 'Vinnie Maniscalco',
        songImg: 'https://adamology.net/wp-content/uploads/2017/07/Baby-Driver.jpg',
        songDuration: '3:46'
      },
      {
        songName: 'Kipod',
        songLive: audio2 ,
        artistName: 'Infected Mushrrom',
        songImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
        songDuration: '5:48'
      },
      {
        songName: 'Spitfire',
        songLive: audio1,
        artistName: 'Infected Mushrrom',
        songImg: 'https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg',
        songDuration: '7:15'
      }
    ],
  },
};


