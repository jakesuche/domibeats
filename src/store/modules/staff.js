import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
    staffs:[],
    staff:{},
    stateResolved:true, 
    role:''
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  actions: {
    createStaff({ commit }, payload) {
      
     return  axiosInstance.post("create-staff", payload).then((res) => {
        
        const staff = res.data.data.staff;
        
        commit('setStaffs', staff) 
        // const transactions = res.data.data.payments;
        // commit("setTransactions", transactions);
      });
    },
    getAllStaff({ commit }){
      return   axiosInstance.get('view-staffs')
        .then(res=>{
            const staffList = res.data.data.staffs
            commit('setStaffMembers', staffList)
        })
    },
    getStaffById({commit}, id){
     
        commit('setStaffState', true)
       
       return  axiosInstance.get(`get-user-profile?user_id=${id}`)
        .then(res=>{
         
            const staff = res.data.data.userinfo
            commit('setStaffState', false)
            commit('setStaff', staff)
        })
    },
    gameTransaction({ commit }) {
      axiosInstance.get("all-transactions").then((res) => {
        
        const stats = res.data.data.payments;
        commit("setStats", stats);
      });
    },
    callstate({commit}){
      commit('setStaffState', true)
    },

    updateRole({commit, dispatch}, payload){
      
      return axiosInstance.post('update-staff-role', payload)
      .then((res)=>{
      
        const id = payload.user_id
          dispatch('getStaffById', id)
      })
    }, 
    staffRoles({commit},id){
     
      return axiosInstance.get(`get-staff-roles?user_id=${id}`)
      .then((res)=>{
       
       const role = res.data.data.roles[0].name
       commit('setStaffRole', role)

      })
      .catch((err)=>{
        console.log(err.response)
      })
    },
    makeSuperAdmin({commit, dispatch}, payload){
      
      const id = payload.user_id
      return axiosInstance.post('make-super-admin', payload)
        .then(()=>{
          dispatch('getStaffById', id)
        })
      
    },

    removeSuperAdmin({commit, dispatch}, payload){
      
      const id = payload.user_id
      return axiosInstance.post('remove-super-admin', payload)
      .then(()=>{
        dispatch('getStaffById', id)
      })
    }
    
    
    
  },
  mutations: {
    setStaffs(state, staff) {
      state.staffs.unshift(staff)
    },
    setStaffMembers(state, staffs){
        state.staffs = staffs
    },
    setStaff(state, staff){
        state.staff = staff
    },
    setStaffState(state, staffState){
      console.log(staffState)
      state.stateResolved = staffState
    },
    setStaffRole(state, role){
      state.role = role
    }
   
  },
};
