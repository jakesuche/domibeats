import isScreen from "@/core/screenHelper";
import audio1 from "@/assets/audio/Kalimba.mp3";
import audio2 from "@/assets/audio/somebody_9130811.mp3";
import audio3 from "@/assets/audio/Egedege-ft.-Theresa-Onuorah-Flavour-Phyno.mp3";
import {
  firebaseApp,
  docRef,
  ref,
  storage,
  uploadBytesResumable,
  getDownloadURL,
  getDocs,
  db,
  UserRef,
  collection,
  auth,
  signInGoogle,
  onAuthStateChanged,
  signOut,
} from "@/firebase.js";

export default {
  namespaced: true,

  state: {
    user: [],
    audioList: [
      {
        songName: "Agnes",
        songLive: audio1,
        artistName: "Glass Animals",
        songImg:
          "https://pbs.twimg.com/profile_images/765322021060354048/0ppD4P6Y_400x400.jpg",
        songDuration: "3:45",
      },
      {
        songName: "TaKillya",
        songLive: audio2,
        artistName: "Vinnie Maniscalco",
        songImg:
          "https://adamology.net/wp-content/uploads/2017/07/Baby-Driver.jpg",
        songDuration: "3:46",
      },
      {
        songName: "Kipod",
        songLive: audio2,
        artistName: "Infected Mushrrom",
        songImg:
          "https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg",
        songDuration: "5:48",
      },
      {
        songName: "Spitfire",
        songLive: audio1,
        artistName: "Infected Mushrrom",
        songImg:
          "https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg",
        songDuration: "7:15",
      },
      {
        songName: "larry gagga (ijele)",
        songLive: audio3,
        artistName: "Infected Mushrrom",
        songImg:
          "https://is4-ssl.mzstatic.com/image/thumb/Music/45/71/ff/mzi.mtqdovgf.jpg/1200x630bb.jpg",
        songDuration: "7:15",
      },
    ],
  },

  actions: {
    async signInGoogle() {
      signInGoogle()
        .then((res) => {
          const payload = {
            email: res.user.email,
            displayName: res.user.displayName,
            photoURL: res.user.photoURL,
            uid: res.user.uid,
            phoneNumber: res.user.phoneNumber,
          };

          getDocs(collection(db, "users")).then((docs) => {
            let usersArray = [];
            console.log(docs);

            docs.forEach((doc) => {
              console.log(doc.data());
              usersArray.push(doc.data());
            });
            
            const ifUser = usersArray.find((user) => user.uid == res.user.uid);
            if (ifUser) {
              return;
            } else {
              UserRef(payload)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console(err.response);
                });
            }
            
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    StoreUser(state, user) {},
  },
};
