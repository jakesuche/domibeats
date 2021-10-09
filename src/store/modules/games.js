
import { axiosInstance } from '../axios'

export default{
    namespaced:true,
    state:{
        games:[],
        gameState:true,
        players:[],
        playerState:true,
        game:{},
        megaGame:[],
        winners:[],
        tickets:[]
    },
    getters:{
        isGame:state=>gameId=>{
            const isGame = game => game.id == gameId
            const game = state.games.find(isGame)
            
            return game
      
        },
        isMegaDraw:state=>gameId=>{
            const isGameMega = game => game.id == gameId
            const game = state.megaGame.find(isGameMega)
            return game
        },
        Activegame:state=>{
            // const isActiveGames = game =>  new Date(game.draw_time) > new Date()
            const found = state.games.filter(obj => new Date(obj.draw_date) > new Date())
            return found
        }
        
        //return this.$store.getters["auth/isMeetupOwner"](this.meetupCreatorId);
    },
    actions:{
        updateGame({commit}, payload){
            return axiosInstance.post('update-monthly-game-draw', payload )
            .then(res=>{
                
            })
        },
        // updateMegaDraw({commit}, payload){
        //     return axiosInstance.post('update-mega-game-draw', payload)

        // },
        getGames({commit}){
            commit('setState', true)
            // return axiosInstance.get('get-all-monthly-games')
            return axiosInstance.get('get-all-games')
            .then((res)=>{
                //console.log(res)
        
                const games = res.data.data['games']
                const megadraw = res.data.data['megadraw']
                commit('setGames', games)
                commit('setMegaGames', megadraw)
                commit('setState', false)
            })
        },
        createRawGame({commit}, payload){
            return axiosInstance.post('create-monthly-game-draw', payload)
            
        },
        activateGame({commit, dispatch}, payload){
            
            return axiosInstance.post('activate-monthly-draw', payload)
            
            
        },
        deactivateGame({commit, dispatch}, payload){
            return axiosInstance.post('deactivate-monthly-draw', payload)
           
        },
        getGamePlayers({commit}, id){
            
            commit('setgamePlayers', [])
            commit('setGameState', true)
            
            return axiosInstance.get(`get-monthly-game-players?game_id=${id}`)
            .then((res)=>{
                const players = res.data.data.players
                commit('setgamePlayers', players)
                commit('setGameState', false)

            }).catch(()=>{
                commit('setGameState', false)
            })
        },
        getGameWinners({commit}, id){
           
            commit('setgamePlayers', [])
            commit('setGameState', true)
            return axiosInstance.get(`get-monthly-game-draw-winners?game_id=${id}`)
            .then((res)=>{
                
                const winners = res.data.data.winners
                commit('setGameWinner', winners)

            })
            .catch(()=>{
                commit('setGameState', false)
            })
        },
        updateDraw({commit}, payload) {
            return axiosInstance.post('update-monthly-game-draw-image', payload)
            .then((res)=>{
                // console.log(res)
            })
            .catch(()=>{

            })
        },
        megaRawGame({commit}, payload){
            return axiosInstance.post('create-mega-game-draw', payload)
            .then((res)=>{
                // console.log(res)
            })

        },
        updateMegaDraw({commit}, payload){
            return axiosInstance.post('update-mega-game-draw', payload)
            .then((res)=>{
                
            })
        },
        deactivate_mega({commit}, payload){
            return axiosInstance.post('deactivate-mega-draw', payload)
        },
        activate_game({commit}, payload){
            return axiosInstance.post('deactivate-mega-draw', payload)
        },
        triggerDraw({commit}, payload){
            
            return axiosInstance.post('play-monthly-game-draw',payload)
           
            
        },
        saveGameState({commit}, payload){
            
            commit('setGame', payload)
        },
        addGameDrawImage({commit, dispatch}, payload){
            return axiosInstance.post('update-monthly-game-draw-image', payload)
            .then((res)=>{
                dispatch('getGames')
              
            })
            .catch((err)=>{
              
            })
            
        },
        getUnqualified({commit}){
            return axiosInstance.post('get-unqualified-tickets')
            .then((res)=>{
                const unqualified = res.data.data.tickets
                commit('setUnqualified', unqualified)
            })
        }
        
    },
    mutations:{
        setGames(state, games){
            state.games = games
        },
        setState(state, value){
            state.gameState = value
        },
        setgamePlayers(state, players){
            state.players = players
        },
        setGameState(state, playerState){
            state.playerState = playerState
        },
        setGame(state, payload){
            state.game = payload
        },
        setMegaGames(state, payload){
            state.megaGame = payload
        },
        setGameWinner(state, payload){
            state.winners = payload
        },
        setUnqualified(state, payload){
            state.tickets = payload
        }
       
    }
    
}