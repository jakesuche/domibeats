import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";

export default {
  namespaced: true,
  state: {
   roles:[],
   permissions:[]
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user;
    },
  },
  actions: {
    createSaff({ commit }) {
      axiosInstance.post("create-staff").then((res) => {
        
        const staff = res.data.data.staff;
       
        commit('setStaffs', staff) 
        // const transactions = res.data.data.payments;
        // commit("setTransactions", transactions);
      });
    },
    getAllRole({ commit }){
       return axiosInstance.get('roles')
        .then(res=>{
            const roles = res.data.data.roles
            commit('setRoles', roles)
        })
    },
    createRole({commit}, payload){
      
       return  axiosInstance.post('create-role', payload)
        .then((res)=>{
            const role = res.data.data.role
            commit('setRole', role)
        })
    },
    getAllpermission({commit}){
        return axiosInstance.get('permissions')
        .then((res)=>{
          
            const permissions = res.data.data.permissions
            commit('setPermissons', permissions)
        })
    } ,
    makeSupperAdmin({commit}){
        return axiosInstance.post('make-super-admin')
    }
    
  },
  mutations: {
    setRoles(state, roles) {
      state.roles = roles
    },
    setRole(state, role){
        state.roles.unshift(role)
    },
    setPermissons(state, permissions){
        state.permissions = permissions
    }
   
   
  },
};
