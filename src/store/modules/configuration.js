
import { axiosInstance } from '../axios'

export default{
    namespaced:true,
    state:{
        subscriptions:{},
        configuration:{},
        isConfigResult:false
    },
    getters:{},
    actions:{
        createConfig({ commit, dispatch }, payload){
          return   axiosInstance.post('set-system-config', payload)
            .then((res)=>{
                const config = res.data.data.configuration
                commit('setConfig', config)
                dispatch('getSytemConfig')
            })

        },
        getSytemConfig({commit}, payload){
            
            return axiosInstance.get('get-system-config')
            .then((res)=>{
                
                const config = res.data.data.settings
                commit('setConfig', config)
            })
        }
        
    },
    mutations:{
        setConfig(state, config){
            state.configuration = config
        },
        
    }
    
}