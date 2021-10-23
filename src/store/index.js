import Vue from "vue";
import Vuex from "vuex";

import layout from "./layout";
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
import audios from './modules/audios'

var ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "give-raffle",
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
      paths: [
        
        "audios"
        
      ],
    }),
  ],
  modules: {
    
    layout,
    audios
   
  },
});
