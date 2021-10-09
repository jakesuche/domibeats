import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";


export default {
    namespaced:true,
    state:{
        user:null,
        notifications:[],
        notificationDate:''
    },
    getters:{
        isAuthenticated:state=>{
            return !!state.user
        }
    },
    actions:{
        syncDate({commit},date){
            commit('set_date', date)
        },
        loginAdmin({commit}, form){
            return axiosInstance.post('/login-admin', form)
            .then(res=>{
                
                const accessToken = res.data.data.token.plainTextToken
                
               window.localStorage.setItem('AccessToken', accessToken);
                const user = res.data.data.user
                commit('setAuthUser', user)

            })

        },
        logOutUser({commit}){
            axiosInstance.defaults.headers.common['Authorization'] = '';
           return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve('Logged out successfully');
                }, 300);
            })
            .then((res)=>{
                // console.log(res)
                window.localStorage.clear()
                commit('setAuthUser', null)
            })

            

        }, 
        getnotification({commit}){
            return axiosInstance.get('user-notifications')
            .then((res)=>{
                const notifications = res.data.data.notifications
                commit('setUsernotification', notifications)
                
            })
        },
        getAuthProfile({commit}){
            return axiosInstance.get('get-user')
            .then((res)=>{
                const user = res.data.data.user
                
                commit('setAuthUser', user)
            })
        },

        updatePassword({commit},payload){
           
            return axiosInstance.post('update-password', payload)
        },
        updateProfile({commit, dispatch}, payload){
            return axiosInstance.post('update-profile', payload)
            .then(()=>{
                dispatch('getAuthProfile')
            })
        }
    },
    mutations:{
        setAuthUser(state, user){
            state.user = user
        },
        setUsernotification(state, notifications){
            state.notifications = notifications
        },
        set_date(state, date){
            state.notificationDate = date
        }
        

        

    }
}