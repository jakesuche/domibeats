import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    testimonials:{},
    loaderState:true
  },
  getters: {
    getTestimonial: (state) => (testimonialId) => {
        
        const istestimonial = testimonial => testimonial.id == testimonialId
            const testimonial = state.testimonials.data.find(istestimonial)
            
            return testimonial
    },
  },
  actions: {
    deleteTestimonial({commit}, payload){
      return axiosInstance.post('delete-testimonial',payload)
     
    },
    addTestimonials({ commit }, payload) {
      
      return axiosInstance.post("add-testimonial",payload).then((res) => {
       
        const testimonial = res.data.data.testimonial;
        
        commit("setTestimonial", testimonial);
        
      });
    },

    getTestimonials({ commit } ,options = {}) {
      commit('setLoadingState', true)
      const URL = applyFilters('view-all-testimonials', options.filter)
     
      return axiosInstance.get(URL).then((res) => {
        const testimonials  = res.data.data.testimonials;
        commit("setTestimonials", testimonials);
        commit('setLoadingState', false)
      });
    },
    updateTestimonials({ commit }, payload) {
      return axiosInstance.post("update-testimonial", payload)
    },
    enableTestimonials({commit}, payload){
        return axiosInstance.post('enable-testimonial', payload)
    },
    disableTestimonials({commit}, payload){
        return axiosInstance.post('disable-testimonial', payload)
    },
    callState({commit}){
      commit('setLoadingState', true)
    }
  },
  mutations: {
    setTestimonial(state, testimonial) {
      state.testimonials.data.unshift(testimonial);
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    updateTestimonial(state, payload) {
      const Index = state.testimonials.data.findIndex(
        (testimonial) => testimonial.id === payload.id
      );
      
      Vue.set(state.testimonials.data[Index], payload);
    },
    setLoadingState(state, loading){
      state.loaderState = loading
    }
  },
};
