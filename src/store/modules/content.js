import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    subscriptions: {},
    subResolved: true,
    faqs: {},
    faqsById: {},
    contacts: {},
    isContactResolved:false
  },
  getters: {
    getFaq: (state) => (FaqId) => {
     
      const isFaq = (faq) => faq.id == FaqId;
      const faq = state.faqs.data.find(isFaq);
      console.log(faq);
      return faq;
    },
  },

  actions: {
    getSub({ commit }) {
      
      commit("reolvedState", true);
      return axiosInstance.get("subscriptions").then((res) => {
        const subs = res.data.data.subscriptions;
        commit("setSubs", subs);
        commit("reolvedState", false);
      });
    },
    deleteSub({ commit, dispatch }, payload) {
      return axiosInstance.post("delete-subscription", payload).then(() => {
        dispatch("getSub");
      });
    },
    unresolve({ commit }) {
      commit("reolvedState", true);
    },

    // frequently asked questions
    creatFaq({ commit, dispatch }, payload) {
      return axiosInstance.post("add-faq", payload).then((res) => {
        dispatch("getAllFaq");
      });
    },
    getAllFaq({ commit }, options = {}) {
      commit("reolvedState", true);
      const URL = applyFilters("view-all-faqs", options.filter);
      return axiosInstance
        .get(URL)
        .then((res) => {
          commit("reolvedState", false);
          const faqs = res.data.data.faqs;
          commit("setFaqs", faqs);
        })
        .catch(() => {
          commit("reolvedState", false);
        });
    },
    deleteFaq({ commit, dispatch }, payload) {
      return axiosInstance.post("delete-faq", payload).then(() => {
        dispatch("getAllFaq");
      });
    },
    updateFaq({ commit, dispatch }, payload) {
      
      return axiosInstance.post("update-faq", payload).then((res) => {
        dispatch("getAllFaq");
      });
    },
    enableFaq({ commit, dispatch }, payload) {
      return axiosInstance.post("enable-faq", payload).then((res) => {
        dispatch("getAllFaq");
      });
    },
    disableFaq({ commit, dispatch }, payload) {
      return axiosInstance.post("disable-faq", payload).then((res) => {
        dispatch("getAllFaq");
      });
    },
    getAllContacts({commit}, options = {}) {
      const URL = applyFilters("get-contact-messages", options.filter);
      return axiosInstance.get(URL).then((res) => {
        
        const contacts = res.data.data.messages
        commit("storeContacts", contacts)
       
      });
      
    },
    deleteContact({commit, dispatch}, payload){
      
      return axiosInstance.post('delete-contact-message', payload)
      .then(()=>{
        
          dispatch('getAllContacts')
      })
    }
  },
  mutations: {
    setSubs(state, subs) {
      state.subscriptions = subs;
    },
    reolvedState(state, resolve) {
      state.subResolved = resolve;
    },
    setFaqs(state, faqs) {
      state.faqs = faqs;
    },
    storeContacts(state, payload) {
      state.contacts = payload;
    },
  },
};
