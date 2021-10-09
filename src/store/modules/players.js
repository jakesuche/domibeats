
import { axiosInstance } from '../axios'

export default{
    namespaced:true,
    state:{
        players:[],
        player:{},
        isUserResolved:true,
        role:null,
        referrals:[],
        commisions:[],
        usersWhoPlayed:null
    },
    getters:{
        isApprovedBy:state=>userId=>{
            
            const isUser = user => user.id == userId
            const user = state.players.find(isUser)
            
            return user
      
        },
        //return this.$store.getters["auth/isMeetupOwner"](this.meetupCreatorId);
    },
    actions:{
        commision({commit}, id){
            commit('setCommisions', []) 
            return axiosInstance.get(`user-referral-commisions?user_id=${id}`)
            .then((res)=>{
                const referrals = res.data.data.commissions
                commit('setCommisions', referrals) 
                
            })
            
        },
        referrals({commit}, id){
            commit('setReferals', []) 
            return axiosInstance.get(`user-referrals?user_id=${id}`)
            .then((res)=>{
                
                const referrals = res.data.data.referrals
                commit('setReferals', referrals) 
                
                  
            })
        },
        signups({commit}, id){
            return axiosInstance.get(`user-signups-that-played?user_id=${id}`)
            .then(res=>{
                const total = res.data.data.signups_that_played
                // console.log(res, 'signups')
                commit('setusersWhoPlayed',total)
            })
        },
        filterPlayer({commit}, players){
            
            //commit(setPlayers', players)
        },
        getPlayers({commit}, payload){
            return axiosInstance.get('getallusers', )
            .then(res=>{
                //
                const players = res.data.data.users
                const returnedPlayers =  players.map((item) => {
                    const obj = Object.assign({}, item);
                    obj["blocked"] == 0
                      ? (obj["blocked"] = "Active")
                      : (obj["blocked"] = "Inactive");
                    return obj;
                  });
                commit('setPlayers', returnedPlayers)
            })
        },
        getPlayerbyId({commit, state}, id){
        //    commit('resolveState', ) 
            state.players = {}
            return axiosInstance.get(`get-user-profile?user_id=${id}`)
            .then((res)=>{
                
                const player = res.data.data.userinfo
                commit('setPlayer', player)
            })
            .catch(()=>{
                commit('setPlayer', {})
            })
        },
        lockUser({commit}, id){
            
            return axiosInstance.post('lock-user-account', id )
           
        },
        unlockUser({commit}, id){
            return axiosInstance.post('unlock-user-account',id )
        },
        blockUser({commit}, id){
            
            return axiosInstance.post('block-user-account', id )
           
        },
        unblockUser({commit}, id){
            return axiosInstance.post('unblock-user-account',id )
        },

        creditUsergameBalance({commit, dispatch}, payload){
            
            return axiosInstance.post('credit-user-game-balance', payload)
            .then((res)=>{
                dispatch('getPlayerbyId', payload.user_id)
            })
        },
        debitUsergameBalance({commit, dispatch}, payload){
            console.log(payload)
            return axiosInstance.post('debit-user-game-balance', payload)
            .then((res)=>{
                
                dispatch('getPlayerbyId', payload.user_id)
            })
        },
        creditUserwithdrawalBalance({commit, dispatch}, payload){
            return axiosInstance.post('credit-user-withdrawal-balance', payload)
            .then((res)=>{
                dispatch('getPlayerbyId', payload.user_id)
            }) 
        },
        debitUserwithdrawalBalance({commit, dispatch}, payload){
            return axiosInstance.post('debit-user-withdrawal-balance', payload)
            .then((res)=>{
                dispatch('getPlayerbyId', payload.user_id)
            })
        },
        getUserRole({commit, dispatch}, payload){
            commit('setUserRole', '')
            
            return axiosInstance.get(`get-user-roles?user_id=${payload.user_id}`)
            .then(res=>{
                
                const roles = res.data.data.roles
                let hasSuper = roles.some( vendor => vendor['name'] === 'super-admin' )
                if(roles.length > 0){
                    
                    // let hasSuper = res.data.data.roles.some( vendor => vendor['name'] === 'super-admin' )
              
                    commit('setUserRole', hasSuper)
                    
                   
                }
                if(roles.length == 0){
                    commit('setUserRole', false)
                    
                  
                }
                
                
                
            })
        }
        
        // resolveState({commit}){

        // }
        
        
        
    },
    mutations:{
        setPlayers(state, players){
            state.players = players
        },
        setPlayer(state, payload){
            state.player = payload
        },
        filterPlayer(state, payload){
            
        },
        resolveState(state, status){
            state.isUserResolved = status
        },
        setUserRole(state, role){
            state.role = role
        },
        setReferals(state, players){
            state.referrals = players
        },
        setCommisions(state, players){
            state.commisions = players
        },
        setusersWhoPlayed(state, total){
            state.usersWhoPlayed = total
        }
       
    }
    
}