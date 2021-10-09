
import { axiosInstance } from '../axios'

export default{
    namespaced:true,
    state:{
        categories:[]
    },
    getters:{},
    actions:{
        getcategories({commit}, payload){
            return axiosInstance.get('/api/v1/categories')
            .then(res=>{
               
                commit('setcategories', res.data)
            })
            .catch(err=>{
                console.log(err.response)
            })
        }
    },
    mutations:{
        setcategories(state, categories){
            state.categories = categories
        }
    }
    
}