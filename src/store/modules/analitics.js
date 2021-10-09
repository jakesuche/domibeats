import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    stats: {},
    transactionStats: [],
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  actions: {
    getStats({ commit }) {
      axiosInstance.get("analytics").then((res) => {
        const stats = res.data.data;

        commit("setStat", stats);
        // const transactions = res.data.data.payments;
        // commit("setTransactions", transactions);
      });
    },
    gameTransaction({ commit }) {
      axiosInstance.get("all-transactions").then((res) => {
        const stats = res.data.data.payments;
        commit("setStats", stats);
      });
    },
   
  },
  mutations: {
    setStat(state, stats) {
      state.stats = { ...state.stats, ...stats };
    },
    setData(state, payload) {
      state.transactionStats = payload;
    },
  },
};
