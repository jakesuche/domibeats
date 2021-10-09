import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://backend.uatgiveraffle.xyz/api/v1',
    headers:{
        Authorization:`Bearer ${window.localStorage.getItem('AccessToken') || ''}`
    }
})