import Vue from "vue";
import Vuex from "vuex";

import layout from "./layout";

import transaction from "./modules/transactions";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import game from "./modules/games";
import players from "./modules/players";
import SecureLS from "secure-ls";
import analitics from "./modules/analitics";
import roles from "./modules/roles";
import staff from "./modules/staff";
import testimonial from "./modules/testimonials";
import withdrawal from "./modules/withdrawal";
import content from './modules/content'
import configuration from './modules/configuration'
import report from './modules/report'

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
        "transaction",
        "auth",
        "layout",
        "game",
        "players",
        "analitics",
        "roles",
        "staff",
        "testimonial",
        "withdrawal",
        "content",
        "configuration",
        "report"
      ],
    }),
  ],
  modules: {
    transaction,
    auth,
    layout,
    game,
    players,
    analitics,
    roles,
    staff,
    testimonial,
    withdrawal,
    content,
    configuration,
    report
  },
});
