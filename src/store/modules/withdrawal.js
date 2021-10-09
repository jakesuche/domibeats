import { axiosInstance } from "../axios";
import { applyFilters, resolveResponse } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    withdrawals: {},
    authResolved: true,
    failedwithdrawal: {},
    unapproved: [],
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  actions: {
    reprocess({commit, dispatch}, payload){
      return axiosInstance.post('reprocess-withdrawal', payload)
      
    },
    getUnApprovedWithdrawal({ commit }, options = {}) {
      const URL = applyFilters("unapprovedwithdrawals", options.filter);
      return axiosInstance
        .get(URL)
        .then((res) => {
          // console.log(res)
          const unapproved = res.data.data.withdrawals;
          console.log(unapproved);
          commit("setUnapproved", unapproved);

          // commit("setUnaproved", unapproved);
          // commit('setState',false)
        })
        .catch(() => {
          commit("setUnapproved", []);
          commit("setState", false);
        });
    },
    approveWithdrawal({ commit, dispatch }, payload) {
      return axiosInstance.post("approve-withdrawal", payload).then((res) => {
        // console.log(res)
        dispatch("getUnApprovedWithdrawal");
          resolveResponse(res)
       
      });
    },
    getWithdrawals({ commit }, options = {}) {
      const URL = applyFilters("withdrawals", options.filter);
      return axiosInstance.get(URL).then((res) => {
        commit("setState", false);
        const payload = res.data.data.withdrawals;
        // console.log(payload.data.map(obj=> ({ ...obj, withdrawal_status: obj.status == 1 && obj.approved == 1 ? 'Sucessfull' : 'Failed' })))
        commit("setgetWithdrawals", payload);
        // console.log()
        //console.log(res.data.data.withdrawals)
      });
    },
    getFailedWithdrawal({ commit }, options = {}) {
      const URL = applyFilters("failed-withdrawals", options.filter);
      return axiosInstance.get(URL).then((res) => {
        const payload = res.data.data.withdrawals;
        commit("getFailedWithdrawal", payload);
      });
    },
    unresolvedState({ commit }) {
      commit("setState", true);
    },
  },
  mutations: {
    setUnproved(state, unapproved) {
      state.withdrawals = unapproved;
    },
    setState(state, value) {
      state.authResolved = value;
    },
    setgetWithdrawals(state, payload) {
      state.withdrawals = payload;
    },
    getFailedWithdrawal(state, payload) {
      state.failedwithdrawal = payload;
    },
    setUnapproved(state, payload) {
      state.unapproved = payload;
    },

    // removeApproved(state, id) {
    //   const isId = (element) => element.id == id;
    //   const index = state.withdrawals.findIndex(isId);
    //   console.log(index);
    //   if (index > -1) {
    //     state.withdrawals.splice(index, 1);
    //   }
    // },
  },
};
