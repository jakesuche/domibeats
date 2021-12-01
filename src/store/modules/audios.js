import isScreen from "@/core/screenHelper";
import audio1 from "@/assets/audio/Kalimba.mp3";
import audio2 from "@/assets/audio/somebody_9130811.mp3";
import audio3 from "@/assets/audio/Egedege-ft.-Theresa-Onuorah-Flavour-Phyno.mp3";
import {
  // firebaseApp,
  // docRef,
  // ref,
  // storage,
  // uploadBytesResumable,
  // getDownloadURL,
  getDocs,
  db,
  UserRef,
  collection,
  auth,
  signInGoogle,
  // onAuthStateChanged,
  // signOut,
  // PostRef,
  // doc,
} from "@/firebase.js";

export default {
  namespaced: true,
  getters: { 
    isPost:state=>postId=>{
      const isGame = post => post.id == postId
      const post = state.posts.find(isGame)
      console.log(post)
      
      return post

  },
  totalMoney(state) {
    return state.cart.reduce(function(acc, obj) {
      return acc + obj.price * obj.qty;
    }, 0); 
   
  },
  getAddedItem:(state)=>(id)=>{
    for(var i =0; i < state.cart.length; i++){
      if(state.cart[i]._id == id){
        console.log(id)
        return state.cart[i].qty
      }
    }

  }
     },
  state: {
    user: [],
    beatsList: [],
    posts: [],
    audioList: [],
    products:[],
    cart:[],
    falbackList: [
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
    removeItem({commit}, id){
      commit('removeItem', id)
      console.log(id)
    },
    addTocart({ commit, state }, payload) {
      payload = { ...payload, qty: 1 };
      console.log(payload);
      commit("setItemTcart", payload);
    },
    decreaseQuatity({commit}, {id}){
      console.log(id)
      commit('decreaseQty', {id})
    },
    increaseQuatity({commit}, {id}){
      console.log(id) 
       commit('setQuatity',  {id})
    },
    clearCart({commit}){
      commit('clearCart')
    },
    async getAllBeats({ commit, state }) {
      const array = [];
      const querySnapshot = await getDocs(collection(db, "beat_samples"));

      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        array.push(data);
      });
      // commit("StoreBeats", array);
      if (array.length > 0) {
        commit("StoreBeats", array);
      } else {
        console.log(state.falbackList);
        commit("StoreBeats", state.falbackList);
      }
    },
    async getAllGadgets({ commit, state }) {
      const array = [];
      const querySnapshot = await getDocs(collection(db, "product"));

      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        array.push(data);
      });
      // commit("StoreBeats", array);
      if (array.length > 0) {
        commit("storeProducts", array);
      }else {
        
        commit("storeProducts", []);
      }
      
    },
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

    getUsers({ commit }) {
      getDocs(collection(db, "users"))
        .then((docs) => {
          let usersArray = [];

          docs.forEach((doc) => {
            usersArray.push(doc.data());
          });

          commit("StoreUser", usersArray);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getPost({ state, commit }) {
      const array = [];
      // const document = doc()
      const querySnapshot = await getDocs(collection(db, "post"));

      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        array.push(data);
      });
      commit("storePost", array);
    },
  },
  mutations: {
    StoreUser(state, users) {
      state.users = users;
    },
    StoreBeats(state, beats) {
      state.beatsList = beats;
      state.audioList = beats;
    },
    storePost(state, posts) {
      state.posts = posts;
    },
    storeProducts(state, posts) {
      state.products = posts;
    },
    setItemTcart(state, payload) {
      
      const index = state.cart.findIndex(
        (product) => product.id === payload.id
      );
        console.log(index)
     

      console.log(index)
      if (index == -1) {
        state.cart.push(payload);
      } else {
        state.cart[index].qty += 1;
      }
    },

    decreaseQty(state, { id}){
      const isLargeNumber = (element) => element._id == id;
      const index = state.cart.findIndex(isLargeNumber)
      
    if(index > -1){
        console.log(index)
        
        state.cart[index].qty -=  1

        if(state.cart[index].qty <= 0 ){
          state.cart[index].qty +=  1
        }else{
          state.cart[index].qty -= 1
        }
    }
    },
    setQuatity(state,{id}){
        
        const isLargeNumber = (element) => element._id == id;
        const index = state.cart.findIndex(isLargeNumber)
        
      if(index > -1){
          console.log(index)
         
          state.cart[index].qty +=  1
          // if(qty <= 0 ){
          //   state.cart[index].qty +=  1
          // }else{
          //   state.cart[index].qty += Number(qty)
          // }
      }
      
      
      
    },
    clearCart(state){
      console.log('cleared')
      // state.cart = []
      for(var i = 0; i < state.cart.length; i++){
        state.cart.splice(i,1)
      }
    },
    removeItem(state, id){
      console.log(id)
      // arr.splice(i, 1); 
      for(var i =0; i < state.cart.length; i++){
        if(state.cart[i]._id == id){
          console.log(id)
          state.cart.splice(i,1)
        }
      }
    }
  },
};
