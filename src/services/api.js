import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-app-backend.herokuapp.com'
})

export default api