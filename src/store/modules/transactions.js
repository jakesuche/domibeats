import { axiosInstance } from "../axios";
import { applyFilters } from "../filterhelper";
import moment from 'moment'


export default {
    namespaced:true,
    state:{
        transactions:[],
        gameTransaction:[],
        transactionpayload:{}
    },
    getters:{
        isAuthenticated:state=>{
            return !!state.user
        }
    },
    actions:{
     getTransactions({commit}){
      return  axiosInstance.get('all-transactions')
        .then((res)=>{
            console.log(res)
            const transactions = res.data.data.payments
            commit('setTransactions', transactions)

        })
     },
     gameTransaction({commit}){
         axiosInstance.get('all-transactions')
         .then(res=>{   
            
            const transactions = res.data.data.payments
            console.log(transactions)
            commit('setGameTransaction', transactions)
         })
     },
     getgameTransactions({commit}, options = {}){
        const URL = applyFilters('game-transactions', options.filter)
        // console.log(URL)
       return  axiosInstance.get(URL)
        .then(res=>{
            //  console.log(res)
             const transactions = res.data.data.transactions
             commit('setTransaction', transactions)
         })
         .catch((err)=>{
             const transaction = {
                 data:[],
                 total:2,

             }
            //  console.log(err.response)
             if(err.response.status == 404){
                commit('setTransaction', transaction) 
             }
         })
     },
     filterPaymentTransaction({commit, state}, data){
        //  console.log(data)
         const format = "YYYY-MM-D";
         const startDate =  moment(data[0]).format(format)
         const endDate =  moment(data[1]).format(format)
        
        var result = state.transactions.filter(a => {
            var date =  moment(a.created_at).format(format)
            
            return (date >= startDate && date <= endDate);
          });
        
          commit('setTransactions', result)

        
     }
    },
    mutations:{
        setTransactions(state, transactions){ 
           
            state.transactions = transactions
        },
        setGameTransaction(state, transactions){
            state.gameTransaction = transactions
        },
        setTransaction(state, payload){
            
            state.transactionpayload = payload
        }
    }
}