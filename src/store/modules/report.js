import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    paymentReport: {},
    playerReport: {},
    gameReport: {},
    isAuthresolved: false,
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  actions: {
    getPaymentReports({ commit }, options = {}) {
      commit("setResolve", true);
      const URL = applyFilters("payment-report", options.filter);
      return axiosInstance
        .get(URL)
        .then((res) => {
          const data = res.data.data;
          commit("setResolve", false);

          commit("setData", data);
        })
        .catch(() => {
          commit("setResolve", false);
        });
    },
    getPlayerreport({ commit }, options = {}) {
      commit("setResolve", true);
      const URL = applyFilters("player-report", options.filter);
      return axiosInstance
        .get(URL)
        .then((res) => {
          const data = res.data.data;
          commit("setResolve", false);

          commit("setPyment", data);
        })
        .catch(() => {
          commit("setResolve", false);
          commit("setPyment", null);
        });
    },
    getGameReport({ commit }, options = {}) {
      commit("setResolve", true);
      const URL = applyFilters("game-reports", options.filter);
      return axiosInstance
        .get(URL)
        .then((res) => {
          const data = res.data.data;
          commit("setResolve", false);

          commit("setPyment", data);
        })
        .catch(() => {
          commit("setResolve", false);
          commit("setPyment", null);
        });
    },
  },
  mutations: {
    setData(state, source) {
      state.paymentReport = source;
    },
    setPyment(state, source) {
      state.playerReport = source;
    },
    setgameReport(state, source) {
      state.gameReport = source;
    },
    setResolve(state, resolve) {
      state.isAuthresolved = resolve;
    },
  },
};
